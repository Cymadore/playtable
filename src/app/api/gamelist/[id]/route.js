import prisma from "@/app/lib/prisma";

export async function GET(req, {params}) {
    console.log("backend id : ",params.id)
    const id = Number(params.id);

  const gamedata = await prisma.gamelist.findUnique({
    where: { id },
    include: {
        rent:true
    }
  });
  console.log(gamedata)
  return Response.json(gamedata);
}