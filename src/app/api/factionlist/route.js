import prisma from "@/app/lib/prisma";

export async function POST(req) {
  const res = await req.json();
 
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
  return Response.json(factions);
}