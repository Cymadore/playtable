"use client";
import React from "react";
import useSWR from "swr";
// import gamelist from "@/app/components/gamelist/gamelist.json"
import GameCard from "../components/gamelist/GameCard";
import { endPoint, getGamelist } from "@/app/lib/gamelist";


export default function page() {
  // const data = gamelist;
  const cacheKey = endPoint;
  // const getData = () => {
  //   const data = gamelist;
  //   return data;
  // }
  const { isLoading, error, data, mutate } = useSWR(cacheKey, ()=> getGamelist()
  );
  let content = (
    <div className="">
      {data?.map((item, index) => (
        <GameCard props={item} key={"game"+index} className={index % 2 == 0 && "md:mr-4"} />
      ))}
    </div>
  )
  if (isLoading) {
    return <div className="min-h-[1080px] bg-white"></div>;
  } else if (error) {
    return <p>{error.message}</p>;
  }
  return (
    <main className="flex min-h-screen flex-col">
      <div className="w-full min-h-screen bg-white h-full item-center">
        {/* <img src="https://storage.googleapis.com/playtablestorage/siteimg/home-main.jpg" className="max-w-[800px] p-5 w-full text-center" /> */}
        <div className="w-full p-5 text-center space-y-4">
          <h1 className="text-xl">플레이테이블에서 플레이 가능한 게임은 다음과 같습니다.</h1>
          <div className="text-left">
          {content}
          </div>
        </div>
        
      </div>
    </main>
  );
}
