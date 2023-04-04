"use client";
import clsx from "clsx";
import { FC } from "react";
import typography from "@/styles/typography.module.css";
import styles from "./navigation.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const pathname = usePathname();
  return (
    <nav className={styles["nav"]}>
      <ul className={clsx(styles["ul"], "")}>
        <li className={styles["li"]}>
          <Link
            className={`${
              pathname === "/" &&
              "underline underline-offset-4 decoration-orange-200"
            }`}
            href="/"
          >
            Home
          </Link>
        </li>
        <li className={styles["li"]}>
          <Link
            className={`${
              pathname === "/about" &&
              "underline underline-offset-4 decoration-orange-200"
            }`}
            href="/about"
          >
            About
          </Link>
        </li>
        <li className={styles["li"]}>
          <Link
            className={`${
              pathname === "/doodles" &&
              "underline underline-offset-4 decoration-orange-200"
            }`}
            href="/doodles"
          >
            Doodles
          </Link>
        </li>
        <li className={styles["li"]}>
          <Link
            className={`${
              pathname === "/sell" &&
              "underline underline-offset-4 decoration-orange-200"
            }`}
            href="/sell"
          >
            Sell
          </Link>
        </li>
        <li className={styles["li"]}>
          <Link
            className={`${
              pathname === "/orders" &&
              "underline underline-offset-4 decoration-orange-200"
            }`}
            href="/orders"
          >
            Orders
          </Link>
        </li>
        <li className={styles["li"]}>
          <Link
            className={`${
              pathname === "/signout" &&
              "underline underline-offset-4 decoration-orange-200"
            }`}
            href="/signout"
          >
            Sign Out
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
