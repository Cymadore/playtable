import NextAuth from "next-auth";
import NaverProvider from "next-auth/providers/naver";
import prisma from "@/app/lib/prisma";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    NaverProvider({
      clientId: process.env.NAVER_CLIENT_ID,
      clientSecret: process.env.NAVER_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  callbacks: {
    // 로그인 시 호출되는 콜백
    async signIn({ user, account, profile }) {
      const checkUser = await prisma.user.findFirst({
        where: {
          naverId: user.id,
        },
      });

      if (!checkUser) {
        // 사용자가 DB에 없으면 생성
        await prisma.user.create({
          data: {
            naverId: user.id,
            name: user.name,
            image: user.image,
          },
        });
      } else if (checkUser.name !== user.name || checkUser.image !== user.image) {
        // 사용자 정보가 변경되었으면 업데이트
        await prisma.user.update({
          where: {
            id: checkUser.id,
          },
          data: {
            name: user.name,
            image: user.image,
          },
        });
      }
      return true;
    },

    // JWT 토큰에 사용자 ID 저장
    async jwt({ token, user }) {
      if (user) {
        const dbUser = await prisma.user.findFirst({
          where: { naverId: user.id },
        });
        if (dbUser) {
          token.id = dbUser.id;
        }
      }
      return token;
    },

    // 세션에 사용자 정보 추가
    async session({ session, token }) {
      if (token?.id) {
        const dbUser = await prisma.user.findFirst({
          where: { id: token.id },
        });

        if (dbUser) {
          session.user.id = dbUser.id;
          session.user.name = dbUser.name;
          session.user.image = dbUser.image;
          // 필요에 따라 추가 데이터도 session에 포함 가능
          // session.user.role = dbUser.role;
        }
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };


// import NextAuth from "next-auth"
// import NaverProvider from "next-auth/providers/naver";
// import prisma from "@/app/lib/prisma";

// export const authOptions = {
//   // Configure one or more authentication providers
//   providers: [
//     NaverProvider({
//         clientId: process.env.NAVER_CLIENT_ID,
//         clientSecret: process.env.NAVER_CLIENT_SECRET
//       })
//     // ...add more providers here
//   ],
//   callbacks: {
//     async signIn({ user, account, profile}) {
//       console.log(user)
//       const checkUser = await prisma.user.findFirst({
//         where: {
//           naverId: user.id,
//         },
//       });
//       if(!checkUser) {
//         await prisma.user.create({
//           data: {
//             naverId:user.id,
//             name: user.name,
//             image: user.image,
//           },
//         });
//       } else if(checkUser.name!=user.name||checkUser.image!=user.image) {
//         await prisma.user.update({
//           where: {
//             id:checkUser.id,
//           },
//           data:{
//             name:user.name,
//             image:user.image
//           }
//         });
//       }
//       return true;
//     },
//   },
//   async jwt({ token, user }){
//     if (user) {
//       const dbUser = await prisma.user.findFirst({
//         where: { naverId: user.id},
//       });
//       if(dbUser) {
//         token.id = dbUser.id;
//       }
      
//     }
//     return token;
//   },
//   async session({ session, token }) {
//     if(token?.id){
//       const dbUser = await prisma.user.findUnique({
//         where: { id: token.id },
//       });

//       if (dbUser) {
//         session.user.id = dbUser.id;
//         session.user.name = dbUser.name;
//         session.user.image = dbUser.image;
//         // 필요에 따라 추가 데이터도 session에 포함 가능
//         // session.user.role = dbUser.role;
//       }
//     }
//     return session;
//   }
// }
// const handler = NextAuth(authOptions) 
// export { handler as GET, handler as POST }