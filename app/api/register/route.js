import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function POST(request){ 
    try {
        await dbConnect()
        const {email, password} = await request.json()
        const alreadyExists = await User.findOne({email})
        if(alreadyExists){
            return NextResponse.json({message: "already registered"})
        }
        await User.create({email, password: password})

        return NextResponse.json({ message: "Succesfully created" });
    } catch (error) {
        return NextResponse.json({ message: error });
    }
}