import prisma from "@/app/lib/prisma";

export async function GET() {
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

    }
  }); // 전부 셀렉트
  return Response.json(match);
}
export async function POST(req) {
  const res = await req.json();
  console.log(res)
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
    })
  })
  // const shop = await prisma.shop.create({
  //   data: {
  //     name:res.shop.name,
  //     images:res.shop.images,
  //     addr:res.shop.addr,
  //     latitude:res.shop.latitude,
  //     longitude:res.shop.longitude,
  //     tags:res.shop.tags,
  //     starpoint:res.shop.starpoint,
  //     price:res.shop.price,
  //   },
  // });
  // return Response.json(shop);
}