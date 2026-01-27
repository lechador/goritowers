import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import { authConfig } from "./auth.config"
import bcrypt from "bcrypt";

async function login(credentials){ 
    try { 
        await dbConnect()
        const user = await User.findOne({email:credentials.email})
        if(!user) throw new Error("wrong credentials")
        
        const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);
        if(!isPasswordCorrect) throw new Error("wrong Credentials");
        
        console.log("User logged in:", user.email)
        return user;
    } catch(error){ 
        console.log("Error while logging in:", error.message)
        return null
    }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            credentials: {
                email: {},
                password: {},
            },
            async authorize(credentials){ 
                if (!credentials?.email || !credentials?.password) return null;
                const user = await login(credentials)
                return user;
            }
        })
    ]
})
