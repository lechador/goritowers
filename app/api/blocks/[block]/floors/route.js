import dbConnect from "@/lib/dbConnect";
import Floor from "@/models/Floor";
import { NextResponse } from "next/server";

export async function POST(request) {
    await dbConnect();
    const data = await request.json();

    try {
        await Floor.create(data);
        return NextResponse.json({message: "success"});
    } catch (error) {
        return NextResponse.json({message: "error"});
    }
}