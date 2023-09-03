import dbConnect from '@/lib/dbConnect';
import Block from '@/models/Block';
import Floor from '@/models/Floor'; 
import { NextResponse } from 'next/server'

export async function GET(request, { params }) {
    const blockId = params.block;
    await dbConnect();
    try {
        const block = await Block.findOne({ block_id: blockId });
        if (!block) {
            return NextResponse.json({ message: "Block not found" });
        }

        const floors = await Floor.find({ block_id: blockId }); 
        return NextResponse.json({ block, floors });
    } catch (error) {
        return NextResponse.json({ message: "Something went wrong" });
    }
}
