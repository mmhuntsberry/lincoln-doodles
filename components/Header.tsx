"use client";
import clsx from "clsx";

import styles from "@/styles/typography.module.css";
import { Icon } from "@iconify/react";
import { ActionIcon } from "./ActionIcon";
import { useContext } from "react";
import { useCart } from "../context/cartContext";
import { CartStateProvider } from "../context/cartContext";
import Cart from "./Cart";

const Header = () => {
  const { toggleOpen, isOpen } = useCart();

  return (
    <>
      {isOpen && <Cart />}
      <header className="flex items-center justify-between px-4">
        <h1 className={clsx(styles["heading-4"], "")}>Lincoln Doodles</h1>
        <div className="flex gap-2">
          {/* <ActionIcon onClick={() => console.log("User click")}>
          <Icon icon="carbon:user-avatar-filled-alt" fontSize={24} />
        </ActionIcon> */}
          <ActionIcon
            onClick={
              // console.log("Cart is open: ", isOpen);
              () => toggleOpen()
            }
          >
            <Icon icon="carbon:shopping-cart" fontSize={24} />
          </ActionIcon>
        </div>
      </header>
    </>
  );
};

export default Header;
