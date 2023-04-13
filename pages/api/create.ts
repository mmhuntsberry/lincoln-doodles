import { validateJWT } from "@/lib/auth";
import { db } from "@/lib/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!process.env.COOKIE_NAME) return;
  const user = await validateJWT(req.cookies[process.env.COOKIE_NAME]);
  console.log(req.body);
  await db.doodle.create({
    data: {
      name: req.body.name,
      description: req.body.description,
      doodleDir: req.body.doodleDir,
      doodleId: req.body.doodleId,
      price: req.body.price,
      ownerId: user.id,
    },
  });

  res.json({ data: { message: "ok" } });
}
