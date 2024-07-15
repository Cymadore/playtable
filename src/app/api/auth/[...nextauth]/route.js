import NextAuth from "next-auth"
import NaverProvider from "next-auth/providers/naver";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    NaverProvider({
        clientId: process.env.NEXT_PUBLIC_NAVER_API_ID,
        clientSecret: process.env.NEXT_PUBLIC_NAVER_API_SECRET
      })
    // ...add more providers here
  ],
}
export default NextAuth(authOptions)