import dbConnect from "@/lib/dbConnect";
import Apartment from "@/models/Apartment";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";


export async function GET(request){
    const session = await getServerSession()
    if(session){
        dbConnect()
        const apartments = await Apartment.find().sort({ apartment_number: 1 });
        return NextResponse.json({apartments})
    } 
    return NextResponse.json({message: "not authorized"})
}


export async function PUT(request){ 
    const session = await getServerSession()
    if(session){ 
        dbConnect()
        const {aptId, state} = await request.json()
        const doc = await Apartment.findById(aptId);
        doc.is_sold = state ? false : true;
        await doc.save(); 
        return NextResponse.json({ message: "done" });
    }
    return NextResponse.json({message: "not authorized"})
}