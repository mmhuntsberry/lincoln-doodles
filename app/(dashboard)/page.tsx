// import { delay } from "@/lib/async";
import { getUserFromCookie } from "@/lib/auth";
import { db } from "@/lib/db";
import { cookies } from "next/headers";
import Link from "next/link";
import { Suspense } from "react";
import typography from "@/styles/typography.module.css";
import styles from "./page.module.css";
import Image from "next/image";
import clsx from "clsx";

export default async function Page() {
  return (
    <div className={clsx(styles["home"], "flex justify-center items-center")}>
      <h1 className={typography["heading-1"]}>Lincoln Doodles</h1>
      <div className={clsx(styles["bg"])}></div>
    </div>
  );
}
