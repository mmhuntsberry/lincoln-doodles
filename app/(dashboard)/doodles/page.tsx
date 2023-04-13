// import { delay } from "@/lib/async";
import Doodle from "@/components/Doodle";
import { getUserFromCookie } from "@/lib/auth";
import { db } from "@/lib/db";
// import { cookies } from "next/headers";
import Link from "next/link";
import { Suspense } from "react";

const getData = async () => {
  // const user = await getUserFromCookie(cookies());
  const doodles = await db.doodle.findMany({
    // where: {
    //   ownerId: user?.id,
    // },
  });

  return { doodles };
};

export default async function Page() {
  const { doodles } = await getData();

  return (
    <div className="flex gap-8 flex-wrap justify-center h-screen items-center">
      {doodles.map((x) => (
        <Doodle id={x.id} src={x.doodleId} key={x.doodleId} />
      ))}
    </div>
  );
}
