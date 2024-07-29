'use client';
import { useSession } from "next-auth/react";
import React,{useState, useEffect} from "react";
import { getMatch } from "@/app/lib/result";
import dayjs from "dayjs";


export default function Page() {
    const { data:session } = useSession();
    const [matchlist, setMatchlist] = useState('');

    let result

    useEffect(()=>{
        async function getData() {
            const data = await getMatch();
            setMatchlist(data);
            console.log(data)
        }; 
        getData();
    }, []);

    if(!matchlist){
      <h1>게임 결과가 없습니다.</h1>
    } else {
      result=(
        <div className="space-y-5 px-5">
        {matchlist?.map((item, index) => (
          <div className="p-5 w-full rounded-2xl bg-gray-200 shadow-lg" key={"match"+index}>
            <div>
              <h1 className="text-xl font-extrabold text-center">{item.gamelist.name}</h1>
            </div>
            <div className="flex items-center">
              <div className="flex-1 text-left">
                <div className={`${item.result=='win'?'text-teal-700':'text-red-600'} text-xl font-extrabold`}>{item.result=='win'?'승리':'패배'}</div>
                <div className="text-xl">{item.player1.name}</div>
                <div className="text-2xl font-extrabold">{item.p1Faction.name}</div>
              </div>
              <div className="flex-1 text-center">
                <h2 className=" text-xl font-extrabold">VS</h2>
                <h2 className="text-lg font-bold">{dayjs(item.createdAt).format("YYYY-MM-DD")}</h2>
              </div>
              <div className="flex-1 text-right">
                <div className={`${item.result=='win'?'text-red-600':'text-teal-700'} text-xl font-extrabold`}>{item.result=='lose'?'승리':'패배'}</div>
                <div className="text-xl">{item.player2.name}</div>
                <div className="text-2xl font-extrabold">{item.p2Faction.name}</div>
              </div>
            </div>
          </div>
          // <GameCard props={item} key={"game"+index} className={index % 2 == 0 && "md:mr-4"} />
        ))}
      </div>
      )
    }
  return (
    <main className="flex min-h-screen flex-col">
      <div className="w-full min-h-screen bg-white h-full item-center">
        <div className="w-full my-10"><h1 className="text-4xl font-extrabold text-center">게임 결과 기록</h1></div>
        {result}
      </div>
    </main>
  );
}
