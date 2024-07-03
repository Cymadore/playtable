"use client"
import React, { useEffect, useState } from "react";
import { IoIosMenu } from "react-icons/io";
import useMenuPop from "@/app/lib/store/menupop";


const Footer = () => {

    return(
        <div className="flex flex-col top-0 left-0 w-full z-[999] bg-slate-400 items-center">
            <div className="max-w-[800px] w-full flex relative">
                <div className="flex-1 p-5">
                    <h1 className="text-xl font-bold">플레이테이블</h1>

                </div>                
            </div>
        </div>
    )
}
export default Footer;