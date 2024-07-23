'use client';
import { useSession } from "next-auth/react";
import React,{useState, useEffect} from "react";
import { getGamelist } from "@/app/lib/gamelist";

export default function Page() {
    const { data:session } = useSession();
    const [game, setGame] = useState('');
    const [p1Id, setP1Id] = useState('');
    const [p1Faction, setP1Faction] = useState('');
    const [p2Id, setP2Id] = useState('');
    const [p2Faction, setP2Faction] = useState('');
    const [result, setResult] = useState('');
    const [gamelist, setGamelist] = useState([]);
    const [factions, setFactions] = useState([]);

    useEffect(()=>{
        async function getData() {
            const data = await getGamelist();
            setGamelist(data);
        }; 
        getData();
    }, []);
    useEffect(()=>{
        console.log(gamelist)
    }, [gamelist]);

  return (
    <main className="flex min-h-screen flex-col">
      <div className="w-full min-h-screen bg-white h-full item-center">

      </div>
    </main>
  );
}
