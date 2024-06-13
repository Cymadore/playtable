"use client"
import Image from "next/image";
import gamelist from "@/app/components/gamelist/gamelist.json"
import GameCard from "../components/gamelist/GameCard";

export default function page() {
  const data = gamelist;
  let content = (
    <div className="">
      {data?.map((item, index) => (
        <GameCard props={item} key={"game"+index} className={index % 2 == 0 && "mb-4 mr-4"} />
      ))}
    </div>
  )
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
