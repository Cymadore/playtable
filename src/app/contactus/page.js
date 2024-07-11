import Image from "next/image";
import ClubMap from "../components/map/map";
import Link from "next/link";

export default function page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="w-full min-h-screen bg-white h-full p-5 ">
        <div className="w-full text-center space-y-2">
          <h1 className="text-xl ">오시는 길</h1>
          <ClubMap
              clubAddress={{ lat: 37.5864579, lon: 127.0423587 }}
              isMobile={false}
            />
          {/* <h1 className="m-5">플레이테이블은 2023년 10월 제기동에 오픈한 미니어쳐 게임 클럽입니다.<br/>다양한 미니어쳐 게임을 플레이 할 수 있는 공간과 페인팅을 할 수 있는 공간이 준비되어 있습니다.</h1> */}
        </div>
        <h2>서울특별시 동대문구 약령시로 17길 73-2 지하층</h2>
        <div className="flex space-x-2">
          <Link href={'https://cafe.naver.com/playtable'} className="flex-1 flex"><img src={'https://storage.cloud.google.com/playtable-photo/siteimg/icons/navercafe.png'} className="max-h-5" /><h2>네이버 카페</h2></Link>
          <Link href={'https://open.kakao.com/o/gVnR4bAf'} className="flex-1 flex"><img src={'https://storage.cloud.google.com/playtable-photo/siteimg/icons/kakao.png'} className="max-h-5" /><h2>카카오톡 오픈채팅</h2></Link>
        </div>
        <br/>
        <h2>대중교통</h2>
        <h2>지하철 1호선, 수인분당선, 경의중앙선 청량리역 2번 출구에서 도보로 13분</h2>
        <h2>지하철 6호선 고려대역 4번 출구에서 도보로 12분</h2>
        <h2></h2>
        {/* <ResultList /> */}
      </div>
    </main>
  );
}
