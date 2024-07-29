'use client'
import React, {useState} from "react";
import { IoChevronBack, IoLogIn, IoPersonSharp } from "react-icons/io5";
import Link from "next/link";
import useMenuPop from "@/app/lib/store/menupop";
import { SessionProvider, useSession } from "next-auth/react";
import { signIn,signOut } from "next-auth/react";

export default function MenuPop() {
    const { isOpen, setIsOpen } = useMenuPop();
    const {data:session} = useSession();
    let authcontent;

    if(session){
       authcontent= <div className="flex space-x-2 items-center" onClick={()=>signOut()}>
        <div className="w-[40px] h-[40px] overflow-hidden rounded-full ">
            {session.user.image?<img src={session.user.image} className="w-full"/>:<IoPersonSharp size={40} className="text-gray-600" />}
        </div>
        <span className="text-gray-100 text-2xl flex-1">{session.user.name}</span>
       </div>
    } else {
        authcontent=<div className="flex space-x-2 items-center" onClick={() => signIn()}>
            <IoLogIn size={40} className="text-2xl text-gray-100" />
            <span className="text-gray-100 text-2xl flex-1">로그인</span>
        </div>
    }
    
    if(!isOpen) return;
    return(
        <div className="absolute top-0 left-0 h-full w-[300px] bg-gradient-to-b from-emerald-500 to-teal-600 z-20">
            <div className="relative w-full h-full p-5">
                <div className="text-2xl pb-5">
                    {authcontent}
                    {/* {!session?<button onClick={() => signIn()}>로그인</button>:<button onClick={() => signOut()}>로그아웃</button>} */}
                </div>
                <div className="absolute top-5 right-5"><IoChevronBack size={40} className="font-bold" onClick={() => setIsOpen(false)}/></div>
                <div className="text-2xl text-gray-100 font-extrabold pb-5">메뉴</div>
                <div className="space-y-2">
                    <div><Link href="/" className=" text-gray-100" onClick={() => setIsOpen(false)}>홈</Link></div>
                    <div><Link href="/gamelist" className=" text-gray-100"  onClick={() => setIsOpen(false)}>플레이 하는 게임 목록</Link></div>
                    <div><Link href="/contactus" className=" text-gray-100"  onClick={() => setIsOpen(false)}>오시는길</Link></div>
                    <div><Link href="/result" className=" text-gray-100"  onClick={() => setIsOpen(false)}>게임 기록</Link></div>
                </div>
               
            </div>
        </div>
    )
}