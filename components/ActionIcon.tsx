import React, { FC } from "react";

interface ActionIconProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const ActionIcon: FC<ActionIconProps> = ({ children, onClick }) => {
  return <button onClick={onClick}>{children}</button>;
};
