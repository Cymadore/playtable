import prisma from "@/app/lib/prisma";

export async function GET(req, {params}) {
    const id = Number(params.id);

  const gamedata = await prisma.gamelist.findUnique({
    where: { id },
    include: {
        rent:true
    }
  });
  return Response.json(gamedata);
}