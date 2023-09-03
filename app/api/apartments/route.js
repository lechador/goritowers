import dbConnect from "@/lib/dbConnect";
import Apartment from "@/models/Apartment";
import { NextResponse } from "next/server";

export async function POST(request) {
    await dbConnect();
    const data = await request.json();

    try {
        await Apartment.create(data);
        return NextResponse.json({message: "success"});
    } catch (error) {
        return NextResponse.json({message: "error"});
    }
}