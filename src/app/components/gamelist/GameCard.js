"use client"
import React from "react";

export default function GameCard({ props, className }) {
    return (
        <div className={`inline-block ${className} desktop:max-w-[372px] `}>
            <div className={`relative desktop:max-h-[182px] mobile:max-h-[171px] overflow-hidden rounded-lg bg-center`}>
                <div></div>
                <h1>{props.name}</h1>
            </div>
        </div>
    )
}