'use client';
import { useSession } from "next-auth/react";
import React,{useState, useEffect} from "react";
import { getResultGamelist } from "@/app/lib/gamelist";
import { IoSearch } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { addMatch, getUser } from "@/app/lib/result";
import _ from "lodash";

export default function Page() {
    const { data:session, status } = useSession();
    const router = useRouter();
    const [game, setGame] = useState('');
    const [p1Id, setP1Id] = useState('');
    const [p1Faction, setP1Faction] = useState('');
    const [p2Id, setP2Id] = useState('');
    const [p2Faction, setP2Faction] = useState('');
    const [result, setResult] = useState('');
    const [gamelist, setGamelist] = useState([]);
    const [factions, setFactions] = useState([]);

    const [p1FactionKeyword, setP1FactionKeyword] = useState("");
    const [filteredP1F, setFilteredP1F] = useState([]);
    
    const [p2FactionKeyword, setP2FactionKeyword] = useState("");
    const [filteredP2F, setFilteredP2F] = useState([]);

    const [userKeywrod, setUserKeyword] = useState("");
    const [userList, setUserList] = useState([]);
    
    const [openSelector, setOpenSelector] = useState('');

    useEffect(()=> {
      console.log(session)
      if (status === 'unauthenticated') {
        alert('로그인이 필요한 페이지 입니다.');
        router.push('/result'); // 리디렉션할 페이지 주소로 변경
      } else if (status === 'authenticated') {
        console.log(session)
        setP1Id(session.user.id);
      }
    }, [session, status, router])

    const selectGame=(item)=>{
      setGame(item);
      setOpenSelector('');
    }

    const selectP1Faction=(item)=>{
      setP1Faction(item);
      setP1FactionKeyword(item.name)
      setOpenSelector('');
    }

    const selectP2Faction=(item)=>{
      setP2Faction(item);
      setP2FactionKeyword(item.name)
      setOpenSelector('');
    }

    const searchUsers = async (item) =>{
      setUserKeyword(item);
      const data = await getUser(`/users/search?keyword=${item}`)
      setUserList(data);
    }

    const selectP2User = (item)=>{
      setP2Id(item.id);
      setUserKeyword(item.name)
      setOpenSelector('');
    }

    const checkData = () => {
      if(!game||!p1Id||!p1Faction||!p2Id||!p2Faction||!result) return false;
      return true;
    }

    const applyResult = async () => {
      console.log('데이터 체크',checkData());
      if(!checkData()) {
        alert("입력되지 않은 데이터가 있습니다.");
        return;
      }
      let p1Points = 0;
      let p2Points = 0;
      if (result === 'win') {
        p1Points = 3;
        p2Points = p2Id!=0?1:0;
      } else if (result === 'draw') {
        p1Points = 2;
        p2Points = p2Id!=0?2:0;
      } else if (result === 'lose') {
        p1Points = 1;
        p2Points = p2Id!=0?3:0;
      }
      const resultData ={
        gameId:game.id,
        p1Id:p1Id,
        p1FactionId:p1Faction.id,
        p2Id:p2Id,
        p2FactionId:p2Faction.id,
        result: result,
        winnerId: result=='win'?p1Id:result=='lose'?p2Id:null,
        loserId: result=='win'?p2Id:result=='lose'?p1Id:null,
        p1Points: p1Points,
        p2Points:p2Points
      }
      console.log(resultData)
      const applyResult = await addMatch(resultData);
      console.log(applyResult);
      if(applyResult.id) {
        alert("등록되었습니다.");
        router.push('/result'); 
      }
    }

    useEffect(()=>{
      setFilteredP1F(
        factions.filter(o=>o.name.includes(p1FactionKeyword))
      )
    },[p1FactionKeyword])

    useEffect(()=>{ 
      setFilteredP2F(
        factions.filter(o=>o.name.includes(p2FactionKeyword))
      )
    },[p2FactionKeyword])

    useEffect(()=>{
      async function getData() {
          const data = await getResultGamelist();
          setGamelist(data);
      }; 
      getData();
    }, []);

    useEffect(()=>{
        if(gamelist){
            async function getData() {
                if(!game) return;
                setFactions(game.faction);
                setFilteredP1F(game.faction);
                setOpenSelector('');
                setP1FactionKeyword('');
                setFilteredP2F(game.faction);
                setP2FactionKeyword('');
            }
            getData();
        }
    }, [gamelist,game]);

  return (
    <main className="flex min-h-screen flex-col">
      <div className="w-full min-h-screen bg-white h-full item-center">
        <div className="w-full my-10"><h1 className="text-4xl font-extrabold text-center">게임 결과 기록</h1></div>
        <div className="w-full p-5 space-y-5">
        <div className="w-full rounded-2xl p-5 bg-gray-200 shadow-lg">
          <div className="relative w-full flex-1">
            <input
              type="text"
              onChange={(e) => searchUsers(e.target.value)}
              value={userKeywrod}
              placeholder="상대 플레이어를 선택해 주세요"
              className=" w-full rounded-lg bg-slate-100 !outline-none text-2xl indent-4 text-black"
              onClick={()=>setOpenSelector('user')}
              // onKeyDown={handleKeyDown}
            />
            {openSelector=='user'&&(
              <div className="px-5 border-black border-2 w-full max-h-[180px] bg-slate-100 absolute overflow-scroll no-scrollbar space-y-2 z-20">
                {userList?.map((item, index)=>(
                  <div className="" key={'gamelist'+index} onClick={()=>selectP2User(item)}>{item.name}</div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div><p className="text-xl font-extrabold text-black">기록할 게임을 선택해 주세요.</p></div>
        <div className="w-full rounded-2xl p-5 bg-gray-200 shadow-lg">
          <div className="relative cursor-pointer">
            <h1 className="text-2xl font-extrabold" onClick={()=>setOpenSelector('game')}>{!game?'게임을 선택하세요':game.name}</h1>
            {openSelector=='game'&&(
              <div className="px-5 border-black border-2 w-full max-h-[180px] bg-slate-100 absolute overflow-scroll no-scrollbar z-20">
                {gamelist?.map((item, index)=>(
                  <div key={'gamelist'+index} onClick={()=>selectGame(item)}>{item.name}</div>
                ))}
              </div>
            )}
          </div>
        </div>
        {game&&(
          <div className="space-y-5">
            <div><p className="text-xl font-extrabold text-black">자신의 진영을 선택해 주세요.</p></div>
            <div className="w-full rounded-2xl p-5 bg-gray-200 shadow-lg">
              <div className="cursor-pointer">
                <div className="flex space-x-2">
                  <IoSearch size={30} />
                  <div className="relative w-full flex-1">
                    <input
                      type="text"
                      onChange={(e) => setP1FactionKeyword(e.target.value)}
                      value={p1FactionKeyword}
                      placeholder="자신의 팩션을 선택해주세요"
                      className=" w-full rounded-lg bg-slate-100 !outline-none text-2xl indent-4 text-black"
                      onClick={()=>setOpenSelector('p1Faction')}
                      // onKeyDown={handleKeyDown}
                    />
                    {openSelector=='p1Faction'&&(
                    <div className="px-5 border-black border-2 w-full max-h-[180px] bg-slate-100 absolute overflow-scroll no-scrollbar space-y-2 z-20">
                      {filteredP1F?.map((item, index)=>(
                        <div className="" key={'gamelist'+index} onClick={()=>selectP1Faction(item)}>{item.name}</div>
                      ))}
                    </div>
                    )}
                    </div>
                  </div>
                </div>
              </div>
              <div><p className="text-xl font-extrabold text-black">상대의 진영을 선택해 주세요.</p></div>
              <div className="w-full rounded-2xl p-5 bg-gray-200 shadow-lg">
                <div className="cursor-pointer">
                  <div className="flex space-x-2">
                    <IoSearch size={30} />
                    <div className="relative w-full flex-1">
                    <input
                      type="text"
                      onChange={(e) => setP2FactionKeyword(e.target.value)}
                      value={p2FactionKeyword}
                      placeholder="상대의 팩션을 선택해주세요"
                      className=" w-full rounded-lg bg-slate-100 !outline-none text-2xl indent-4 text-black"
                      onClick={()=>setOpenSelector('p2Faction')}
                      // onKeyDown={handleKeyDown}
                    />
                    {openSelector=='p2Faction'&&(
                    <div className="px-5 border-black border-2 w-full max-h-[180px] bg-slate-100 absolute overflow-scroll no-scrollbar space-y-2 z-20">
                      {filteredP2F?.map((item, index)=>(
                        <div className="" key={'gamelist'+index} onClick={()=>selectP2Faction(item)}>{item.name}</div>
                      ))}
                    </div>
                    )}
                    </div>
                  </div>
                </div>
              </div>
              <div><p className="text-xl font-extrabold text-black">게임의 결과를 선택해주세요</p></div>
              <div className="w-full flex space-x-5">
                <div className={`w-full flex-1 p-5 rounded-xl text-white text-2xl font-extrabold text-center ${result=='win'?'bg-teal-500':'bg-gray-500'}`} onClick={()=>setResult('win')}>승리</div>
                <div className={`w-full flex-1 p-5 rounded-xl text-white text-2xl font-extrabold text-center ${result=='draw'?'bg-teal-500':'bg-gray-500'}`} onClick={()=>setResult('draw')}>무승부</div>
                <div className={`w-full flex-1 p-5 rounded-xl text-white text-2xl font-extrabold text-center ${result=='lose'?'bg-teal-500':'bg-gray-500'}`} onClick={()=>setResult('lose')}>패배</div>
              </div>
            </div>
          )}
          <div>
            <div className={`w-full p-5 rounded-xl text-white text-2xl font-extrabold text-center ${checkData?'bg-teal-500':'bg-gray-500'}`} onClick={()=>applyResult()}>등록</div>
          </div>
        </div>
      </div>
    </main>
  );
}
