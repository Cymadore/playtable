import prisma from "@/app/lib/prisma";

export async function POST() {
  const factionlist = await prisma.factionlist.findMany(); // 전부 셀렉트
  return Response.json(factionlist);
}
// export async function POST(req) {
//   const res = await req.json();
//   console.log(res)
//   const shop = await prisma.shop.create({
//     data: {
//       name:res.shop.name,
//       images:res.shop.images,
//       addr:res.shop.addr,
//       latitude:res.shop.latitude,
//       longitude:res.shop.longitude,
//       tags:res.shop.tags,
//       starpoint:res.shop.starpoint,
//       price:res.shop.price,
//     },
//   });
//   return Response.json(shop);
// }