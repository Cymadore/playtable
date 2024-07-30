'use client';
import { useSession } from "next-auth/react";
import React,{useState, useEffect} from "react";
import { getMatch } from "@/app/lib/result";
import ResultCard from "@/app/components/result/ResultCard";
import { IoChevronUpOutline, IoAdd } from "react-icons/io5";
import Link from "next/link";

export default function Page() {
    const { data:session } = useSession();
    const [matchlist, setMatchlist] = useState('');
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    let result
    useEffect(()=>{
        async function getData() {
            const data = await getMatch();
            setMatchlist(data);
        }; 
        getData();
    }, []);

    if(!matchlist){
      <h1>게임 결과가 없습니다.</h1>
    } else {
      result=(
        <div className="space-y-5 px-5">
        {matchlist?.map((item, index) => (
          <ResultCard props={item} key={"match"+index} />
        ))}
      </div>
      )
    }
  return (
    <main className="flex min-h-screen flex-col">
      <div className="w-full min-h-screen bg-white h-full item-center">
        <div className="w-full my-10"><h1 className="text-4xl font-extrabold text-center">게임 결과</h1></div>
        {result}
        <div className="fixed bottom-5 right-5"><button className="rounded-full bg-teal-500/50 p-5 text-center" onClick={scrollToTop}><IoChevronUpOutline size={50} className="text-gray-100 text-center"/></button></div>
        {session?.user&&<div className="fixed bottom-5 left-5"><Link href="/addresult"><button className="rounded-full bg-teal-500/50 p-5 text-center"><IoAdd size={50} className="text-gray-100 text-center"/></button></Link></div>}
      </div>
    </main>
  );
}
