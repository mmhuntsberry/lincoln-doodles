import clsx from "clsx";
import React, { FC } from "react";

interface ActionIconProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const ActionIcon: FC<ActionIconProps> = ({
  children,
  onClick,
  className,
}) => {
  return (
    <button className={clsx(className)} onClick={onClick}>
      {children}
    </button>
  );
};
