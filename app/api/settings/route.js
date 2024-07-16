import dbConnect from "@/lib/dbConnect";
import Setting from "@/models/Setting";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";


export async function GET(){
        await dbConnect()
        const settings = await Setting.find();
        return NextResponse.json({settings})
}


export async function PUT(request){ 
    const session = await getServerSession()
    if(session){ 
        await dbConnect()
        const {id, newValue} = await request.json()
        const doc = await Setting.findById(id);
        doc.setting_value = newValue;
        await doc.save(); 
        return NextResponse.json({ message: "done" });
    }
    return NextResponse.json({message: "not authorized"})
}