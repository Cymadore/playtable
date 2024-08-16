"use client"
import React, { useEffect, useState } from "react";
import dayjs from "dayjs";



export default function ResultCard({ props, className }) {
    const data = props;
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setIsLoading(false);
      }, [props]);
    if(isLoading) {
        return;
    }
    return (
        <div className="p-5 w-full rounded-2xl bg-gray-200 shadow-lg">
            <div>
              <h1 className="text-xl font-extrabold text-center">{data.gamelist.name}</h1>
              <h2 className="text-lg font-bold text-center">{dayjs(data.createdAt).format("YYYY-MM-DD")}</h2>

            </div>
            <div className="flex items-center">
              <div className="flex-1 text-left">
                <div className="max-h-[90px]">
                    <div className={`${data.result=='win'?'text-teal-700':data.result=='lose'?'text-red-600':'text-slate-400'} text-xl font-extrabold`}>{data.result=='win'?'승리':data.result=='lose'?'패배':'무승부'}</div>
                    <div className="text-md">{data.player1.name}</div>
                    <div className="text-md font-extrabold truncate max-w-[148px] md:truncate-none md:max-w-none">{data.p1Faction.name}</div>
                </div>
              </div>
              <div className="text-center">
                <h2 className=" text-xl font-extrabold">VS</h2>
              </div>
              <div className="flex-1 text-right">
                <div className="max-h-[90px]">
                    <div className={`${data.result=='win'?'text-red-600':data.result=='lose'?'text-teal-700':'text-slate-400'} text-xl font-extrabold`}>{data.result=='lose'?'승리':data.result=='win'?'패배':'무승부'}</div>
                    <div className="text-md">{data.player2.name}</div>
                    <div className="text-md font-extrabold truncate max-w-[148px] md:truncate-none md:max-w-none">{data.p2Faction.name}</div>
                </div>
              </div>
            </div>
          </div>
    )
}