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
          <div className="text-left">
            <img src={data.img} className="max-w-[800px] p-5 w-full text-center" />
          </div>
        </div>
        
      </div>
    </main>
  );
}
