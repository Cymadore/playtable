import Image from "next/image";
import ResultList from "./components/home/ResultList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="w-full min-h-screen bg-white h-full">
        <img src="https://storage.googleapis.com/playtablestorage/siteimg/home-main.jpg" className="max-w-[800px] p-5 w-full text-center" />
        <div className="w-full p-5 text-center">
          <h1 className="text-xl ">플레이테이블은 청량리에 위치한 미니어쳐 게임 클럽입니다.</h1>
          <h1 className="m-5">플레이테이블은 2023년 10월 제기동에 오픈한 미니어쳐 게임 클럽입니다.<br/>다양한 미니어쳐 게임을 플레이 할 수 있는 공간과 페인팅을 할 수 있는 공간이 준비되어 있습니다.</h1>
          {/* <h1 className="">현재 게임장에서 주로 플레이되는 게임은 다음과 같습니다.</h1>
          <ul>
            <li>워해머40k : 킬팀</li>
            <li>워해머 에이지 오브 지그마 : 워크라이</li>
            <li>워머신</li>
            <li>말리폭스</li>
          </ul> */}
        </div>
        {/* <ResultList /> */}
      </div>
    </main>
  );
}
