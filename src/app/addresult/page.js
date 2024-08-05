'use client';
import { useSession } from "next-auth/react";
import React,{useState, useEffect} from "react";
import { getResultGamelist } from "@/app/lib/gamelist";
import { IoSearch } from "react-icons/io5";
import { useRouter } from "next/navigation";

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

    const [isGame, setIsGame] = useState(false);
    const [isP1Faction, setIsP1Faction] = useState(false);
    const [p1FactionKeyword, setP1FactionKeyword] = useState("");
    const [filteredP1F, setFilteredP1F] = useState([])
    
    const [isP2Faction, setIsP2Faction] = useState(false);
    const [p2FactionKeyword, setP2FactionKeyword] = useState("");
    const [filteredP2F, setFilteredP2F] = useState([])



    let gameselector
    useEffect(()=> {
      if (status === 'unauthenticated') {
        alert('로그인이 필요한 페이지 입니다.');
        router.push('/result'); // 리디렉션할 페이지 주소로 변경
      } else if (status === 'authenticated') {
        setP1Id(session.user)
      }
    }, [status, router])

    const selectGame=(item)=>{
      setGame(item);
      setIsGame(false);
    }

    const selectP1Faction=(item)=>{
      setP1Faction(item);
      setP1FactionKeyword(item.name)
      setIsP1Faction(false);
    }

    const selectP2Faction=(item)=>{
      setP2Faction(item);
      setP2FactionKeyword(item.name)
      setIsP2Faction(false);
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
          console.log(data)
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
                setIsP1Faction(false);
                setP1FactionKeyword('');
                setFilteredP2F(game.faction);
                setIsP2Faction(false);
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
          <div><p className="text-xl font-extrabold text-black">기록할 게임을 선택해 주세요.</p></div>
          <div className="w-full rounded-2xl p-5 bg-gray-200 shadow-lg">
            <div className="relative cursor-pointer">
              <h1 className="text-2xl font-extrabold" onClick={()=>setIsGame(!isGame)}>{!game?'게임을 선택하세요':game.name}</h1>
              {isGame&&(
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
                      onClick={()=>setIsP1Faction(!isP1Faction)}
                      // onKeyDown={handleKeyDown}
                    />
                    {isP1Faction&&(
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
                      onClick={()=>setIsP2Faction(!isP2Faction)}
                      // onKeyDown={handleKeyDown}
                    />
                    {isP2Faction&&(
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
        </div>

      </div>
    </main>
  );
}
