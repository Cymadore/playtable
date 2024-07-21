import NextAuth from "next-auth"
import NaverProvider from "next-auth/providers/naver";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    NaverProvider({
        clientId: process.env.NAVER_CLIENT_ID,
        clientSecret: process.env.NAVER_CLIENT_SECRET
      })
    // ...add more providers here
  ],
  // callbacks: {
  //   async signIn({ user, account}) {
  //   }
  // }
}
const handler = NextAuth(authOptions) 
export { handler as GET, handler as POST }