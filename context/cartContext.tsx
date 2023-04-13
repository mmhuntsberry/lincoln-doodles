"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type LocalStateType = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleOpen: () => void;
  closeOpen: () => void;
};

const LocalStateContext = createContext<LocalStateType | undefined>(undefined);
const LocalStateProvider = LocalStateContext.Provider;

type Props = {
  children: ReactNode;
};

export function CartStateProvider({ children }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleOpen() {
    setIsOpen(!isOpen);
  }

  function closeOpen() {
    setIsOpen(false);
  }

  const value: LocalStateType = {
    isOpen,
    setIsOpen,
    toggleOpen,
    closeOpen,
  };

  return <LocalStateProvider value={value}>{children}</LocalStateProvider>;
}

export function useCart() {
  const all = useContext(LocalStateContext);

  if (!all) {
    throw new Error("useCart must be used within a CartStateProvider");
  }

  return all;
}
