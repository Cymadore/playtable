'use client';
import { useSession } from "next-auth/react";
import React,{useState, useEffect} from "react";
import { getGamelist } from "@/app/lib/gamelist";
import { getFactionlist } from "@/app/lib/faction";
import { useRouter } from "next/router";
import { Island_Moments } from "next/font/google";

export default function Page() {
    const { data:session, status } = useSession();
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter
    console.log(session)
    useEffect(() => {
      if (status === 'unauthenticated') {
        alert('로그인이 필요한 페이지 입니다.');
        router.push('/'); // 리디렉션할 페이지 주소로 변경
      } else {
        setIsLoading(false);
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
            <img src={session.user.image} />
            <div>{session.user.name}</div>
            <div>{session.user.matches}</div>
            <div>{session.user.point}</div>
          </div>
        </div>
      </main>
    );
  }
}
