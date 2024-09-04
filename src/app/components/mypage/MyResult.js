"use client"
import React,{useState, useEffect} from "react";
import { matchByUser, endPoint } from "@/app/lib/result";
import ResultCard from "@/app/components/result/ResultCard";
import { IoChevronUpOutline } from "react-icons/io5";
import useSWRInfinite from "swr/infinite";



export default function MyResult({ userid }) {
    const getKey = (pageIndex, previousPageData) => {
        if (pageIndex === 0) return `${endPoint}/${userid}?&page=1&limit=5`;
        if (!previousPageData || previousPageData.length === 0)ㄴ
        return `${endPoint}/${userid}?&page=${pageIndex + 1}&limit=5`;
      };
      const {data, error, isLoading, size, setSize} = useSWRInfinite(getKey, matchByUser);
    if(isLoading) {
        return;
    }
    let result
    if(!data) {
        result =(<p>데이터가 없습니다.</p>)
    } else {
        let resultdata = data&&data.flat();
        result = (
            <div className="space-y-5 px-5 pb-5">
                {resultdata?.map((item, index) => (
                    <ResultCard props={item} key={"match"+index} />
                ))}
            </div>
        )
    }
    return (
        <div className="w-full min-h-screen bg-white h-full item-center">
            <div className="w-full my-10"><h1 className="text-4xl font-extrabold text-center">게임 결과</h1></div>
            {result}
        </div>
    )
}