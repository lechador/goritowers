import dbConnect from '@/lib/dbConnect';
import Floor from '@/models/Floor'; 
import Apartment from '@/models/Apartment';
import { NextResponse } from 'next/server'

export async function GET(request, { params }) {
    const blockId = params.block;
    const floorId = params.floor;

    await dbConnect();
    try {
        const floor = await Floor.findOne({ block_id: blockId, floor_id: floorId });
        if (!floor) {
            return NextResponse.json({ message: "Floor not found" });
        }

        const apartments = await Apartment.find({ block_id: blockId, floor_id: floorId });  // Find apartments with the given block and floor IDs
        if (!apartments || apartments.length === 0) {
            return NextResponse.json({ message: "No apartments found on this floor" });
        }

        return NextResponse.json({ floor, apartments });
    } catch (error) {
        return NextResponse.json({ message: "Something went wrong" });
    }
}

