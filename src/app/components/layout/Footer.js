"use client"
import React, { useEffect, useState } from "react";
import { IoIosMenu } from "react-icons/io";
import useMenuPop from "@/app/lib/store/menupop";


const Footer = () => {

    return(
        <div className="flex flex-col top-0 left-0 w-full z-[999] bg-slate-600 items-center">
            <div className="max-w-[800px] w-full flex relative">
                <div className="flex-1 p-5">
                    <h1 className="text-xl font-bold text-white">플레이테이블</h1>
                    <div className="flex justify-between">
                        <h2 className="flext-1 text-center text-white">홈</h2>
                        <h2 className="flext-1 text-center text-white">플레이 하는 게임 목록</h2>
                        <h2 className="flext-1 text-center text-white">오시는길</h2>
                        <h2 className="flext-1 text-center text-white">갤러리</h2>
                    </div>
                    <h2 className="text-l text-white">주소 : 서울특별시 동대문구 약령시로 17길 73-2 지하</h2>
                    <h2 className="text-l text-white">연락처 : 010-8967-8425</h2>
                    <h2 className="text-l text-white">이메일 : jjg0111@naver.com</h2>
                    
                </div>                
            </div>
        </div>
    )
}
export default Footer;