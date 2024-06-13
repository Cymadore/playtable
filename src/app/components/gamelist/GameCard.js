"use client"
import React from "react";

export default function GameCard({ props, className }) {
    const data = props;
    console.log(data.img)
    return (
        <div className={`inline-block ${className} max-w-[372px] `}>
            <div className={`relative max-h-[182px] bg-slate-400 overflow-hidden rounded-lg bg-center flex flex-col`}>
                <div className="overflow-hidden flex-1">
                    <img src={data.img}  />
                </div>
                <h1 className="text-center">{data.name}</h1>
            </div>
        </div>
    )
}