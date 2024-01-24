import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt'

export async function POST(request){ 
    try {
        await dbConnect()
        const {email, password} = await request.json()
        const alreadyExists = await User.findOne({email})
        if(alreadyExists){
            return NextResponse.json({message: "already registered"})
        }
        const hashedPassword = await bcrypt.hash(password, 10)

        await User.create({email, password: hashedPassword})

        return NextResponse.json({ message: "Succesfully created" });
    } catch (error) {
        return NextResponse.json({ message: error });
    }
}