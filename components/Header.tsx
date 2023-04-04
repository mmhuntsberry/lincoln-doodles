"use client";
import clsx from "clsx";
import { FC } from "react";
import styles from "@/styles/typography.module.css";
import { Icon } from "@iconify/react";
import { ActionIcon } from "./ActionIcon";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-4">
      <h1 className={clsx(styles["heading-4"], "")}>Lincoln Doodles</h1>
      <div className="flex gap-2">
        <ActionIcon onClick={() => console.log("User click")}>
          <Icon icon="carbon:user-avatar-filled-alt" fontSize={24} />
        </ActionIcon>
        <ActionIcon onClick={() => console.log("clicked")}>
          <Icon icon="carbon:shopping-cart" fontSize={24} />
        </ActionIcon>
      </div>
    </header>
  );
};

export default Header;
