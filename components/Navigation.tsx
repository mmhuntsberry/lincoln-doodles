// "use client";
import clsx from "clsx";

import styles from "./navigation.module.css";
import Link from "./Link";
import { cookies } from "next/headers";
import Signout from "./Signout";

const Navigation = () => {
  const cookieStore = cookies();
  const user = cookieStore.get(process.env.COOKIE_NAME ?? "");

  return (
    <nav className={styles["nav"]}>
      <ul className={clsx(styles["ul"], "")}>
        <li className={styles["li"]}>
          <Link href="/">home</Link>
        </li>
        <li className={styles["li"]}>
          <Link href="/about">about</Link>
        </li>
        <li className={styles["li"]}>
          <Link href="/doodles">doodles</Link>
        </li>
        {!!user && (
          <li className={styles["li"]}>
            <Link href="/create-doodle">sell</Link>
          </li>
        )}
        {!user && (
          <li className={styles["li"]}>
            <Link href="/signin">sign in</Link>
          </li>
        )}
        {!!user && (
          <li className={styles["li"]}>
            <Signout />
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
