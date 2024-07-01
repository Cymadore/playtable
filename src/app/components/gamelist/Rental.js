"use client"
import Image from "next/image";
import gamelist from "@/app/components/gamelist/gamelist.json"
import { Swiper, SwiperSlide } from "swiper/react";

export default function Rental({data}) {
  let rent;
  console.log(data)
  if (data.length) {
    rent = (
      <Swiper
        spaceBetween={5}
        slidesPerView={1.5}
        className="z-0"
      >
        {data.map((item, index) => (
          <SwiperSlide key={"rent" + index}>
            <div className="relative">
                <img src={item.src} className=""/>
                <p className="absolute bottom-2 inset-x-0 text-center font-bold text-white text-2xl text-shadow-2xl">{item.name}</p>
            </div>
            
          </SwiperSlide>
        ))}
      </Swiper>
    )
  }

  if (data.length) {
    return (
      <div className="flex-col space-y-4">
        <h1 className="text-xl font-bold">대여 아미 목록</h1>
        <div className="overflow-scroll w-full no-scrollbar">{rent}</div>
      </div>
    );
  };
}
