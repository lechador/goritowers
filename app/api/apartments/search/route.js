import dbConnect from "@/lib/dbConnect";
import Apartment from "@/models/Apartment";
import { NextResponse } from "next/server";

export async function POST(request) {
    await dbConnect();
    const data = await request.json();

    const filters = {
        apartment_area: {
            $gte: data['min-area'],
            $lte: data['max-area']
        },
        is_sold: false // Added condition for is_sold
    };

    if (data['bedrooms']) {
        const bedroomFilters = [];

        for (let i = 1; i <= data['bedrooms']; i++) {
            if (i === 1) {
                bedroomFilters.push({
                    bedroom_area: { $gt: 0 }
                });
            } else if (i === 2) {
                bedroomFilters.push({
                    second_bedroom_area: { $gt: 0 }
                });
            } else if (i === 3) {
                bedroomFilters.push({
                    third_bedroom_area: { $gt: 0 }
                });
            }
        }

        filters['$and'] = bedroomFilters;
    }

    const page = parseInt(data.page) || 1;
    const limit = parseInt(data.limit) || 8;
    const skip = (page - 1) * limit;

    try {
        const total = await Apartment.countDocuments(filters);
        const apartments = await Apartment.find({ ...filters })
            .skip(skip)
            .limit(limit);
            
        return NextResponse.json({ apartments, total });
    } catch (error) {
        return NextResponse.json({ message: "error" }, { status: 500 });
    }
}
