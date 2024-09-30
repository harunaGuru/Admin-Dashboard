import NextAuth from 'next-auth';
import { authConfig } from './authConfig';
import CredentialsProvider from "next-auth/providers/credentials";
import { connectDB } from './lib/utilities';
import { User } from './lib/schema';
import bcrypt  from 'bcryptjs'
 
const login = async (credentials) => {
    try {
        await connectDB()
        const user = await User.findOne({username: credentials.username})
        if(!user || !user.isAdmin) throw new Error("Wrong credentials")
        const IsPasswordCorrect =  bcrypt.compareSync(credentials.password, user.password)
        if(!IsPasswordCorrect) throw new Error("Wrong credentials")
        return user
    } catch (error) {
        console.log(error)
        throw new Error("failed to sign in User")
    }
}
export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [CredentialsProvider({
    async authorize(credentials){
        try {
            const user = await login(credentials)
            return user
        } catch (error) {
            return null
        }
    }
  })],
    callbacks: {
        async jwt({ token, user }) {
        if (user) {
            token.username = user.username;
            token.img = user.img;
        }
        return token;
        },
        async session({ session, token }) {
        if (token) {
            session.user.username = token.username;
            session.user.img = token.img;
        }
        return session;
        },
    },
});