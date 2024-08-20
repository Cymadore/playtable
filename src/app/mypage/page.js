'use client';
import { useSession } from "next-auth/react";
import React,{useState, useEffect} from "react";
import { getGamelist } from "@/app/lib/gamelist";
import { getFactionlist } from "@/app/lib/faction";
import { useRouter } from "next/router";
import { Island_Moments } from "next/font/google";
import { IoPersonSharp } from "react-icons/io5";
import { matchByUser, endPoint } from "@/app/lib/result";
import useSWRInfinite from "swr/infinite"
import { signOut } from "next-auth/react";
export default function Page() {
    const { data:session, status } = useSession();
    const router = useRouter
    const getKey = (pageIndex, previousPageData) => {
      if (pageIndex === 0) return `${endPoint}/${session.user?.id}?&page=1&limit=10`;
      if (pageIndex + 1 > +previousPageData.pages) return null;
      return `${endPoint}/${session.user?.id}?&page=${pageIndex + 1}&limit=10`;
    };
    // const getMatchData = async (page) => {
    //   if(!session.user?.id) return;
    //   let data = await matchByUser(page); //(샵id,시작 페이지)
    //   setCtComment(data.pagination.total);
    //   return data.data;
    // };
    const {data, error, isLoading, size, setSize} = useSWRInfinite(getKey, matchByUser);
    useEffect(() => {
      if (status === 'unauthenticated') {
        alert('로그인이 필요한 페이지 입니다.');
        router.push('/'); // 리디렉션할 페이지 주소로 변경
      }
    }, [status, session?.user?.id]);
    
  if(isLoading) {
    return <p> loading...</p>;
  }
  if(session && session.user){
    return (
      <main className="flex min-h-screen flex-col">
        <div className="w-full min-h-screen bg-white h-full item-center p-5">
          <div className="w-full p-5 border-2 rounded-2xl border-slate-500 bg-slate-200">
            <div className="flex w-full space-x-2 items-center">
              <div className="w-[40px] h-[40px] overflow-hidden rounded-full ">
                {session.user.image?<img src={session.user.image} className="w-full"/>:<IoPersonSharp size={40} className="text-gray-600" />}
              </div>
              <div>{session.user.name}</div>
            </div>
            <div className="flex">
              <div>게임 횟수 : </div>
              <div>{session.user.matches}</div>
            </div>
            <div className="flex">
              <div>플레이 점수 : </div>
              <div>{session.user.point}</div>
            </div>
          </div>
          <div onClick={()=>signOut()}>로그아웃</div>
        </div>
      </main>
    );
  }
}
