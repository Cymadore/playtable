'use client';
import { useSession } from "next-auth/react";
import React,{useState, useEffect} from "react";
import { useRouter } from "next/router";
import { IoPersonSharp } from "react-icons/io5";
import { signOut } from "next-auth/react";
import MyResult from "../components/mypage/MyResult";
export default function Page() {
    const { data:session, status } = useSession();
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter
    useEffect(() => {
      if (status === 'unauthenticated') {
        alert('로그인이 필요한 페이지 입니다.');
        router.push('/'); // 리디렉션할 페이지 주소로 변경
      }
      setIsLoading(false);
    }, [status, session?.user?.id]);
    
  if(isLoading) {
    return <p> loading...</p>;
  }
  if(session && session.user){
    return (
      <main className="flex min-h-screen flex-col">
        <div className="w-full min-h-screen bg-white h-full item-center p-5">
          <div className="w-full p-5 border-2 rounded-2xl border-slate-500 bg-slate-200 space-y-5">
            <div className="flex w-full space-x-2 items-center relative">
              <div className="w-[40px] h-[40px] overflow-hidden rounded-full ">
                {session.user.image?<img src={session.user.image} className="w-full"/>:<IoPersonSharp size={40} className="text-gray-600" />}
              </div>
              <div className="text-3xl">{session.user.name}</div>
              <div className="absolute right-5" onClick={()=>signOut()}>로그아웃</div>
            </div>
            <div className="flex space-x-5">
              <div className="flex-1 flex p-5 rounded-3xl bg-emerald-500 text-gray-100">
                <div>게임 횟수 : </div>
                <div className="flex-1 text-right">{session.user.matches}회</div>
              </div>
              <div className="flex-1 flex p-5 rounded-3xl bg-emerald-500 text-gray-100">
                <div>플레이 점수 : </div>
                <div className="flex-1 text-right">{session.user.point}pt</div>
              </div>
            </div>
          </div>
          <div>
            <MyResult userid={session.user.id} />
          </div>
        </div>
      </main>
    );
  }
}
