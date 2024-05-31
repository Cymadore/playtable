"use client";
// import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import React from "react";
// import EmptyData from "../ui/EmptyData";

export default function ContentsProvider({ children }) {
  const pathname = usePathname();
//   const { data: session } = useSession();
//   if (pathname == "/" || pathname.match("/admin")) {
//     if (pathname.match("/admin") && session?.user?.grade != 99) {
//       return <EmptyData />;
//     }
//     return (
//       <div className="w-full  bg-white scrollbar-hide pb-[60px]">
//         {children}
//       </div>
//     );
//   }
  return (
    <div className="w-full mx-body bg-slate-400 scrollbar-hide mobile:pt-[50px] pb-[60px]">
      {children}
    </div>
  );
}
