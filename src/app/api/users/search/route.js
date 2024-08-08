import prisma from "@/app/lib/prisma";

export async function GET(req) {
  const searchParams = req.nextUrl.searchParams;
  const keyword = searchParams.get("keyword");
  const result = await prisma.user.findMany({
    where: {
      name:{
        contains: keyword,
        mode: 'insensitive',
      }
    },
  });
  return Response.json(result);
}
