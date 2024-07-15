"use client";
import { useEffect, useState } from "react";

export default function ClubMap({ clubAddress, isMobile }) {
  const address = clubAddress;
  let naverMap;
  useEffect(() => {
    const mapScript = document.createElement("script");
    mapScript.async = true;
    mapScript.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_MAP_API_ID}&autoload=false&submodules=geocoder&callback=InitMap`;
    document.head.appendChild(mapScript);
    const onLoadNavermap = () => {
      naverMap = naver.maps.Map;
      var mapOptions = {
        center: new naver.maps.LatLng(address.lat, address.lon),
        zoom: 18
      };
      naverMap = new naver.maps.Map("map", mapOptions);
      var marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(address.lat, address.lon),
        map: naverMap
      });
    };
    mapScript.addEventListener("load", onLoadNavermap);
  }, [address]);
  if (!clubAddress) {
    return <></>;
  }
  return (
    <div className="z-10">
      <div
        id="map"
        className={`w-full ${isMobile ? "h-44" : "h-96"} z-10 border-2 border-slate-400`}
      ></div>
    </div>
  );
}
