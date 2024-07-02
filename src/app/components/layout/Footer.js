"use client"
import React, { useEffect, useState } from "react";
import { IoIosMenu } from "react-icons/io";
import useMenuPop from "@/app/lib/store/menupop";


const Footer = () => {

    return(
        <div className="flex py-10 px-5  top-0 left-0 w-full h-[50px] z-[999] border-b border-b-main-400/30 bg-slate-400">
            <div className="w-full flex  items-center space-x-4 relative desktop:justify-center">
                <div className="flex-1 text-center">
                    <h1 className="text-2xl font-bold">플레이테이블</h1>
                </div>                
            </div>
        </div>
    )
}
export default Footer;