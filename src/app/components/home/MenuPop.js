'use client'
import React, {useState} from "react";
import { IoChevronBack } from "react-icons/io5";
import Link from "next/link";
import useMenuPop from "@/app/lib/store/menupop";

export default function MenuPop() {
    const { isOpen, setIsOpen } = useMenuPop();

    if(!isOpen) return;
    return(
        <div className="absolute top-0 left-0 h-full w-[300px] bg-green-100 z-20">
            <div className="relative w-full h-full p-5">
                <div className="absolute top-2 right-2"><IoChevronBack size={30} className="font-bold" onClick={() => setIsOpen(false)}/></div>
                <div className="text-2xl font-extrabold pb-5">메뉴</div>
                <div className="space-y-2">
                    <div><Link href="/" className="" onClick={() => setIsOpen(false)}>홈</Link></div>
                    <div><Link href="/gamelist" className=""  onClick={() => setIsOpen(false)}>플레이 하는 게임 목록</Link></div>
                    <div><Link href="/contactus" className=""  onClick={() => setIsOpen(false)}>오시는길</Link></div>
                    <div><Link href="/wip" className=""  onClick={() => setIsOpen(false)}>갤러리</Link></div>
                </div>
            </div>
        </div>
    )
}