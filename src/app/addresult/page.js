'use client';
import { useSession } from "next-auth/react";
import React,{useState, useEffect} from "react";
import { getGamelist } from "@/app/lib/gamelist";
import { getFactionlist } from "@/app/lib/faction";

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

    let gameselector

    useEffect(()=>{
        async function getData() {
            const data = await getGamelist();
            setGamelist(data);
        }; 
        getData();
    }, []);
    useEffect(()=>{
        if(gamelist){
            console.log(gamelist);
            setGame(gamelist[2])
            async function getData() {
                if(!game) return;
                console.log(game)
                const data = await getFactionlist(game.name);
                setFactions(data);
            }
            getData();
        }
    }, [gamelist,game]);

  return (
    <main className="flex min-h-screen flex-col">
      <div className="w-full min-h-screen bg-white h-full item-center">

      </div>
    </main>
  );
}
