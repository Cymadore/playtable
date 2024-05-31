"use client"
import React, { useEffect, useState } from "react";
import { IoIosMenu } from "react-icons/io";


const Head = () => {
    return(
        <div className="flex py-10 bg-white px-5  top-0 left-0 w-full h-[50px] z-[999] border-b border-b-main-400/30">
            <div className="mx-body w-full flex  items-center space-x-4 relative desktop:justify-center">
                <div className="d cursor-pointer">
                    <IoIosMenu size={25} className="" />
                </div>
                <div className="flex-1">
                    <h1 className="text-2xl font-bold">플레이테이블 기록보관소</h1>
                </div>                
            </div>
        </div>
    )
}
export default Head;