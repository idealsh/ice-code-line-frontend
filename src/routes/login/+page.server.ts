import { error, redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { oAuthClient } from "$lib/server/oauth";
import { oauth2 } from "@googleapis/oauth2";
import jwt from "jsonwebtoken";
import { API_ORIGIN, REDIRECT_URI } from "$lib/constants";
import { JWT_SECRET } from "$env/static/private";
import { dev } from "$app/environment";

export const load: PageServerLoad = async ({ cookies, fetch, url, getClientAddress }) => {
  const query = url.searchParams;
  const code = query.get("code");

  if (code === null) {
    error(400, "code is not provided in the params");
  }

  const { tokens } = await oAuthClient.getToken({
    code,
    redirect_uri: REDIRECT_URI
  });

  if (tokens.access_token === null) {
    error(500, "Access token not found");
  }

  const userInfo = await oauth2("v2").userinfo.get({ oauth_token: tokens.access_token });
  const email = userInfo.data.email;
  if (email === null || email === undefined) {
    error(500, { message: "Could not access the user's email" });
  }

  if (!email.endsWith("@student.chula.ac.th")) {
    error(403, { message: "Email is not in student.chula.ac.th domain" });
  }

  const id = email.replace(/@student\.chula\.ac\.th$/, "");

  const loginToken = jwt.sign(
    {
      ip: getClientAddress()
    },
    Buffer.from(JWT_SECRET),
    {
      subject: id,
      audience: "login",
      expiresIn: "1h",
      jwtid: crypto.randomUUID()
    }
  );

  const result = await fetch(`${API_ORIGIN}/api/login`, {
    headers: {
      Authorization: `Bearer ${loginToken}`
    }
  });

  if (result.ok) {
    const data = (await result.json()) as { accessToken: string };

    cookies.set("token", data.accessToken, {
      maxAge: 30 * 24 * 60 * 60, //  1 month
      path: "/",
      secure: !dev
    });

    redirect(302, "/get-started");
  } else {
    error(result.status, await result.json());
  }
};
