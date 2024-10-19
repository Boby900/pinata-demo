//set up the db-adapter as well, drizzle and store the users info over there. TODO
import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [GitHub],
})