import clsx from "clsx";
import { FC } from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input: FC<InputProps> = ({ className, ...props }) => {
  return (
    <input
      className={clsx(
        "border-none px-2 py-1 pl-4 text-lg rounded-lg w-full",
        className
      )}
      {...props}
    />
  );
};

export default Input;
