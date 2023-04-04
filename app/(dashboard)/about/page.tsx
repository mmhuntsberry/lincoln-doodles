// import { delay } from "@/lib/async";
import { getUserFromCookie } from "@/lib/auth";
import { db } from "@/lib/db";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import me from "../../../assets/link.png";
import clsx from "clsx";
import styles from "./about.module.css";

export default async function Page() {
  return (
    <div
      className={clsx(
        styles["page"],
        "flex sm:items-start md:items-center justify-center"
      )}
    >
      <section className={clsx(styles["container"], "h-1/2 w-1/2 gap-8")}>
        <Image
          src={me}
          alt="Lincoln Huntsberry"
          width={350}
          height={486}
          className="object-contain"
        />
        <div className={clsx(styles["text-container"])}>
          <p>
            Hi I’m Lincoln! Thank you for stopping by and showing your support.
            For those of you that are not familiar with the term “Neurodiverse”,
            my goal is to help spread awareness as well as establish a culture
            that empowers neurodiverse individuals within the art community.
          </p>
          <br />
          <p>
            This platform is designed to be a safe place that will help
            strengthen and nurture my identity.
          </p>
        </div>
      </section>
      <div className={clsx(styles["bg"])}></div>
    </div>
  );
}
