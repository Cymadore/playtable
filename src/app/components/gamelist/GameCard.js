"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";


export default function GameCard({ props, className }) {
    const data = props;
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setIsLoading(false);
      }, [props]);
    if(isLoading) {
        return;
    }
    return (
        <div className={`inline-block ${className} mb-4 max-w-[372px] `}>
            <Link href={`/gamelist/${data.id}`} className={`relative max-h-[240px] bg-slate-400 overflow-hidden rounded-lg bg-center flex flex-col`}>
                <div className="overflow-hidden flex-1 flex justify-center items-center">
                    <img src={data.img} className="text-center item-center"/>
                </div>
                <h1 className="text-center py-2 font-extrabold text-white">{data.name}</h1>
            </Link>
        </div>
    )
}