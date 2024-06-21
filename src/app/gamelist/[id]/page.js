"use client"
import Image from "next/image";
import gamelist from "@/app/components/gamelist/gamelist.json"

export default function page({params}) {
  const data = gamelist[params.id];
  return (
    <main className="flex min-h-screen flex-col">
      <div className="w-full min-h-screen bg-white h-full item-center">
        {/* <img src="https://storage.googleapis.com/playtablestorage/siteimg/home-main.jpg" className="max-w-[800px] p-5 w-full text-center" /> */}
        <div className="w-full p-5 text-center space-y-4">
          <h1 className="text-xl">{data.name}</h1>
          <div className="text-left max-w-full max-h-">
            <img src={data.img} className="max-w-[800px] w-full text-center" />
          </div>
          <div className="text-left">
            <h2>플레이 빈도수 : {data.count}</h2>
            <h2>대여용 아미 : {data.rent.length?"준비됨":"준비된 아미 없음"}</h2>
            <h2>{data.text}</h2>
          </div>
        </div>
      </div>
    </main>
  );
}
