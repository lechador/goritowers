import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";
import dbConnect from "@/lib/dbConnect";
import bcrypt from 'bcrypt'
import User from "@/models/User";

async function login(credentials){ 
    try { 
        dbConnect()
        const user = await User.findOne({email:credentials.email})
        if(!user) throw new Error("wrong credentials")
        const isCorrect = await bcrypt.compare(credentials.password, user.password)
        if(!isCorrect) throw new Error("wrong Credentials");
        console.log(user)
        return user;
    } catch(error){ 
        console.log("error while loggin in")
        throw new Error("Somethnig went wrong")
    }
}


export const authOptions = { 
    pages: { 
        signIn: '/login'
    }, 
    providers: [
        CredentialsProvider({
            async authorize(credentials){ 
                try{ 
                    const user = await login(credentials)
                    return user;
                } catch (error){ 
                    throw new Error("failed to login")
                }
            }
        })
    ]
}
const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}

export const config = {
    api: {
      bodyParser: false,
    },
}
