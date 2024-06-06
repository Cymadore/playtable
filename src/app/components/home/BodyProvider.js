"use client";
import { usePathname } from "next/navigation";
import React from "react";

export default function BodyProvider({ children }) {
  const pathname = usePathname();
  if (pathname == "/") {
    return <body className="bg-slate-400 relative scrollbar-hide">{children}</body>;
  }
  return (
    <body className="bg-slate-400 relative scrollbar-hide">{children}</body>
  );
}
