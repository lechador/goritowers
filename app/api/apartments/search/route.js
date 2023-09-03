import dbConnect from "@/lib/dbConnect";
import Apartment from "@/models/Apartment";
import { NextResponse } from "next/server";

export async function POST(request) {
    await dbConnect();
    const data = await request.json();
    
    const filters = {
        apartment_price: { 
            $gte: data['min-price'],
            $lte: data['max-price']
        }, 
        apartment_area: {
            $gte: data['min-area'],
            $lte: data['max-area']
        }
    }

    try {
        const apartments = await Apartment.find({...filters})
        return NextResponse.json({apartments});
    } catch (error) {
        return NextResponse.json({message: "error"});
    }
}