"use client"
import React, { useEffect, useState } from "react";
import { IoIosMenu } from "react-icons/io";
import useMenuPop from "@/app/lib/store/menupop";
import Link from "next/link";


const Footer = () => {

    return(
        <div className="flex flex-col top-0 left-0 w-full z-[999] bg-slate-600 items-center">
            <div className="max-w-[800px] w-full flex relative">
                <div className="flex-1 space-y-5 p-5">
                    <h1 className="text-xl font-bold text-white">플레이테이블</h1>
                    <div className="flex justify-between">
                    <div><Link href="/" className="text-white flex-1">홈</Link></div>
                    <div><Link href="/gamelist" className="text-white">플레이 하는 게임 목록</Link></div>
                    <div><Link href="/contactus" className="text-white">오시는길</Link></div>
                    <div><Link href="/wip" className="text-white">갤러리</Link></div>
                    </div>
                    <h2 className="text-l text-white">주소 : 서울특별시 동대문구 약령시로 17길 73-2 지하</h2>
                    {/* <h2 className="text-l text-white">연락처 : 010-8967-8425</h2>
                    <h2 className="text-l text-white">이메일 : jjg0111@naver.com</h2> */}
                    
                </div>                
            </div>
        </div>
    )
}
export default Footer;