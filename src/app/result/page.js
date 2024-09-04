'use client';
import { useSession } from "next-auth/react";
import React,{useState, useEffect} from "react";
import { getMatch, endPoint } from "@/app/lib/result";
import ResultCard from "@/app/components/result/ResultCard";
import { IoChevronUpOutline, IoAdd } from "react-icons/io5";
import Link from "next/link";
import useSWRInfinite from "swr/infinite";

export default function Page() {
    const { data:session } = useSession();
    const getKey = (pageIndex, previousPageData) => {
      if (pageIndex === 0) return `${endPoint}?&page=1&limit=5`;
      if (!previousPageData || previousPageData.length === 0)ㄴ
      return `${endPoint}?&page=${pageIndex + 1}&limit=5`;
    };
    const { data, size, setSize, isValidating } = useSWRInfinite(getKey, getMatch);
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    let result
    function handleScroll() {
      const footerHeight = 300; // 푸터 높이+추가 높이
      const scrollPosition = document.documentElement.scrollTop + window.innerHeight;
      const threshold = document.documentElement.scrollHeight - footerHeight;
      if (
        scrollPosition >= threshold && !isValidating
      ) {
        setSize((prevSize) => prevSize + 1);
      }      
    }
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [isValidating]);

    if(!data){
      <h1>로딩중 입니다.</h1>
    } else {
      let resultdata = data&&data.flat();
      result=(
        <div className="space-y-5 px-5 pb-5">
          {resultdata?.map((item, index) => (
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
