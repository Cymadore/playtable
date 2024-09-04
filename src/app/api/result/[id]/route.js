import prisma from "@/app/lib/prisma";

export async function GET(req, {params}) {
  const user = Number(params.id)
  const searchParams = req.nextUrl.searchParams;
  const [page, limit] = [searchParams.get("page"), searchParams.get("limit")]
  const match = await prisma.match.findMany({
    where:{
      OR:[
        {p1Id:user,},
        {p2Id:user,},
      ]
    },
    orderBy:{
      id:"desc",
    },
    include:{
      player1:true,
      player2:true,
      p1Faction:true,
      p2Faction:true,
      gamelist:true,
    },
    take: +limit,
    skip: (+page - 1) * +limit
  }); // 전부 셀렉트
  console.log(match)
  return Response.json(match);
}