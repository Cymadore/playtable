import prisma from "@/app/lib/prisma";

export async function POST(req) {
  const res = await req.json();
  console.log(res.game)
 
  const factions = await prisma.factionlist.findMany({
    where:{
      game:res.game,
    },
    orderBy: [
      {
        id: "asc",
      },
    ],
  }); // 전부 셀렉트
  console.log(factions)
  return Response.json(factions);
}