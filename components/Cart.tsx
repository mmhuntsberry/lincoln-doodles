import clsx from "clsx";
import { ActionIcon } from "./ActionIcon";
import { Icon } from "@iconify/react";
import { useCart } from "../context/cartContext";

interface Cart {
  className?: string;
  children: React.ReactNode;
  isOpen?: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Cart = ({ className, children }: Cart) => {
  const { toggleOpen } = useCart();
  return (
    <div
      className={clsx(
        "p-8 py-4 bg-orange-200 h-full absolute top-0 right-0 w-1/3",
        className
      )}
    >
      <ActionIcon
        className="absolute top-3 right-3"
        onClick={() => toggleOpen()}
      >
        <Icon icon="carbon:close" fontSize={24} />
      </ActionIcon>
    </div>
  );
};

export default Cart;
