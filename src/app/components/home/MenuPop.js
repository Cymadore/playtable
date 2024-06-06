'use client'
import React, {useState} from "react";
import { IoChevronBack } from "react-icons/io5";
import Link from "next/link";
import useMenuPop from "@/app/lib/store/menupop";

export default function MenuPop() {
    const { isOpen, setIsOpen } = useMenuPop();

    if(!isOpen) return;
    return(
        <div className="absolute top-0 left-0 h-full w-[200px] bg-green-100 z-10">
            <div className="relative w-full h-full p-5">
                <div className="absolute top-2 right-2"><IoChevronBack size={30} className="font-bold" onClick={() => setIsOpen(false)}/></div>
                <div className="text-2xl font-extrabold pb-5">메뉴</div>
                <div className="space-y-2">
                    <div>홈</div>
                    <div>오시는길</div>
                    <div>갤러리</div>
                </div>
            </div>
        </div>
    )
}