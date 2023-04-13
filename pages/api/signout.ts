import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../lib/db";
import { comparePasswords, createJWT } from "../../lib/auth";
import { serialize } from "cookie";

export default async function signin(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!process.env.COOKIE_NAME) return;
  res.setHeader(
    "Set-Cookie",
    serialize(process.env.COOKIE_NAME, "", {
      httpOnly: true,
      path: "/",
      maxAge: -1,
    })
  );
  res.status(201);
  res.end();
}
