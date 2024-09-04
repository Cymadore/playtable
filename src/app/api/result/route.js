import prisma from "@/app/lib/prisma";

export async function GET(req) {
  const searchParams = req.nextUrl.searchParams;
  const [page, limit] = [searchParams.get("page"), searchParams.get("limit")]
  const match = await prisma.match.findMany({
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
  return Response.json(match);
}
export async function POST(req) {
  const res = await req.json();
  console.log(res.data)
  const result = await prisma.$transaction(async (tx) => {
    const match = await tx.match.create({
      data:{
        gameId:res.data.gameId,
        p1Id:res.data.p1Id,        
        p1FactionId:res.data.p1FactionId,
        p2Id:res.data.p2Id,
        p2FactionId:res.data.p2FactionId,
        result:res.data.result,
        winnerId:res.data.winnerId,
        loserId:res.data.loserId,
      }
    });
    if(match){
      await tx.user.update({
        where:{id:res.data.p1Id},
        data:{point:{increment:res.data.p1Points}}
      });
      await tx.user.update({
        where:{id:res.data.p2Id},
        data:{point:{increment:res.data.p2Points}}
      });
    }
    return match;
  })
  return Response.json(result);
}