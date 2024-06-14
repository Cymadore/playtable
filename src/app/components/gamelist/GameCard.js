"use client"
import React from "react";

export default function GameCard({ props, className }) {
    const data = props;
    console.log(data.img)
    return (
        <div className={`inline-block ${className} mb-4 max-w-[372px] `}>
            <div className={`relative max-h-[240px] bg-slate-400 overflow-hidden rounded-lg bg-center flex flex-col`}>
                <div className="overflow-hidden flex-1 flex justify-center items-center">
                    <img src={data.img} className="text-center item-center"/>
                </div>
                <h1 className="text-center py-2 font-extrabold text-white">{data.name}</h1>
            </div>
        </div>
    )
}