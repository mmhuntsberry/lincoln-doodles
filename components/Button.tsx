import clsx from "clsx";
import { FC } from "react";
import styles from "@/styles/typography.module.css";

export interface InputProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button: FC<InputProps> = ({ className, ...props }) => {
  return (
    <button
      className={clsx(
        styles["heading-3"],
        "border-none rounded-lg w-full text-white bg-blue-200 shadow-2xl",
        className
      )}
      {...props}
    />
  );
};

export default Button;
