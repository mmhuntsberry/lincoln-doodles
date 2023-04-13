import clsx from "clsx";
import { FC } from "react";
import styles from "@/styles/typography.module.css";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({ className, ...props }) => {
  return (
    <button
      {...props}
      className={clsx(
        styles["heading-3"],
        "border-none rounded-lg w-full text-white bg-blue-200 shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
      {...props}
    />
  );
};

export default Button;
