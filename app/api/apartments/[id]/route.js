import dbConnect from '@/lib/dbConnect';
import Apartment from '@/models/Apartment';
import { NextResponse } from 'next/server'

export async function GET(request, { params }) {
    const id = params.id;
    await dbConnect()
    try {
        const apartment = await Apartment.findById(id);
        return NextResponse.json({ apartment });
    } catch (error) {
        return NextResponse.json({ message: "Something went wrong" });
    }
}