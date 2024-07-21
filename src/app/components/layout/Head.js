"use client"
import React, { useEffect, useState } from "react";
import { IoIosMenu } from "react-icons/io";
import useMenuPop from "@/app/lib/store/menupop";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";


const Head = () => {
    const { isOpen, setIsOpen } = useMenuPop();
    const { data:session } = useSession();
    let authcontent
    // if(!session) {


    // }
    return(
        <div className="flex bg-teal-500 p-5 flex-col items-center top-0 left-0 w-full z-[999]">
            <div className="max-w-[800px] w-full flex px-5 items-center space-x-4 relative desktop:justify-center relative">
                <div className="d cursor-pointer ">
                    <IoIosMenu size={25} className="text-gray-100" onClick={() => setIsOpen(true)}/>
                </div>
                <Link href="/" className="flex-1" onClick={() => setIsOpen(false)}>
                    <h1 className="text-2xl font-bold text-gray-100">플레이테이블</h1>
                </Link>                
                <div className="absolute right-0">
                    {authcontent}
                </div>
            </div>
        </div>
    )
}
export default Head;