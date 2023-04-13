"use client";
import { signout } from "@/lib/api";
import React from "react";

const Signout = () => {
  return (
    <button
      onClick={async () => {
        await signout();
        window.location.reload();
      }}
    >
      signout
    </button>
  );
};

export default Signout;
