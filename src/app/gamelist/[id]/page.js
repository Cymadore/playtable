"use client"
import Image from "next/image";
import gamelist from "@/app/components/gamelist/gamelist.json"
import Rental from "@/app/components/gamelist/Rental";

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
            <div className="flex text-center mb-5">
              <div className="flex-1 text-center p-2 bg-slate-200 rounded-xl">
                <h2 className="font-bold">플레이 빈도수 : {data.count}</h2>
              </div>
              <div className="flex-1 text-center p-2 bg-slate-200 mx-4 rounded-xl">
                <h2 className="font-bold">대여용 아미 : {data.rent.length?"준비됨":"준비된 아미 없음"}</h2>
              </div>
              <div className="flex-1 text-center p-2 bg-slate-200 rounded-xl">
                <h2 className="font-bold">게임 규모 : {data.point?data.point:'고정'}</h2>
              </div>
            </div>
            <div className="bg-slate-200 rounded-2xl p-5">
              <h2>{data.text}</h2>
            </div>
            <Rental data={data.rent} />          
          </div>
        </div>
      </div>
    </main>
  );
}
