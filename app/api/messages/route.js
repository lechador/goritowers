import dbConnect from "@/lib/dbConnect";
import Message from "@/models/Message";
import Setting from "@/models/Setting";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";


export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const locale = searchParams.get('locale');

    if (!locale) {
        return NextResponse.json({ message: "Locale is required" }, { status: 400 });
    }
    await dbConnect();
    const messages = await Message.find({ locale }).select('messages');
    return NextResponse.json({ messages });
}




export async function PUT(request) {
    try {
        await dbConnect()

        // Parse the incoming request data
        const { newValue, nestedKey, locale } = await request.json();
        
        // Check for valid data
        if (!newValue || !nestedKey) {
            return NextResponse.json({ message: "Invalid data" }, { status: 400 });
        }

        // Extract key and subKey from nestedKey
        const [key, subKey] = nestedKey.split('.');

        // Find the single document
        const messageDoc = await Message.findOne({locale: locale});
        if (!messageDoc) {
            return NextResponse.json({ message: "Message document not found" }, { status: 404 });
        }

        // Update the message
        const updateResult = await Message.updateOne(
            { _id: messageDoc._id },
            { $set: { [`messages.${key}.${subKey}`]: newValue } }
        );

        if (updateResult.matchedCount === 0) {
            return NextResponse.json({ message: "No changes made" }, { status: 400 });
        }

        return NextResponse.json({ message: "Message updated successfully" });
    } catch (error) {
        console.error("Error updating message:", error);
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
}