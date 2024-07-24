import NextAuth from "next-auth"
import NaverProvider from "next-auth/providers/naver";
import prisma from "@/app/lib/prisma";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    NaverProvider({
        clientId: process.env.NAVER_CLIENT_ID,
        clientSecret: process.env.NAVER_CLIENT_SECRET
      })
    // ...add more providers here
  ],
  callbacks: {
    async signIn({ user, account, profile}) {
      console.log(user)
      const checkUser = await prisma.user.findFirst({
        where: {
          naverId: user.id,
        },
      });
      if(!checkUser) {
        await prisma.user.create({
          data: {
            naverId:user.id,
            name: user.name,
            image: user.image,
          },
        });
      } else if(checkUser.name!=user.name||checkUser.image!=user.image) {
        await prisma.user.update({
          where: {
            id:checkUser.id,
          },
          data:{
            name:user.name,
            image:user.image
          }
        });
      }
      return true;
    }
  }
}
const handler = NextAuth(authOptions) 
export { handler as GET, handler as POST }