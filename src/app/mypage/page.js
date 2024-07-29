'use client';
import { useSession } from "next-auth/react";
import React,{useState, useEffect} from "react";
import { getGamelist } from "@/app/lib/gamelist";
import { getFactionlist } from "@/app/lib/faction";

export default function Page() {
    const { data:session } = useSession();

  return (
    <main className="flex min-h-screen flex-col">
      <div className="w-full min-h-screen bg-white h-full item-center">

      </div>
    </main>
  );
}
