"use client";
import React, { FC } from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

interface Link {
  href: string;
  //linkText?: string | React.ReactNode;
  children: React.ReactNode | string;
}

const Link: FC<Link> = ({ href, children }) => {
  const pathname = usePathname();

  return (
    <NextLink
      className={`${
        pathname === href &&
        "underline underline-offset-4 decoration-orange-200"
      }`}
      href={href}
    >
      {children}
    </NextLink>
  );
};

export default Link;
