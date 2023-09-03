import dbConnect from "@/lib/dbConnect";
import Block from "@/models/Block";
import Apartment from "@/models/Apartment";
import { NextResponse } from "next/server";

export async function POST(request) {
  await dbConnect();
  const data = await request.json();

  try {
    await Block.create(data);
    return NextResponse.json({ message: "success" });
  } catch (error) {
    return NextResponse.json({ message: "error" });
  }
}

export async function GET(request) {
  await dbConnect();
  try {
    const blocks = await Block.find({});
    const apartmentCounts = await Apartment.aggregate([
      {
        $group: {
          _id: "$block_id",
          total: { $sum: 1 },
          sold: {
            $sum: {
              $cond: [{ $eq: ["$is_sold", true] }, 1, 0],
            },
          },
        },
      },
    ]);
    const apartmentCountMap = {};
    apartmentCounts.forEach((entry) => {
      apartmentCountMap[entry._id] = {
        total: entry.total,
        sold: entry.sold,
      };
    });
    const blocksWithCounts = blocks.map((block) => ({
      ...block.toObject(),
      apartmentCount: apartmentCountMap[block.block_id]?.total || 0,
      soldApartmentCount: apartmentCountMap[block.block_id]?.sold || 0,
    }));

    return NextResponse.json({ blocks: blocksWithCounts });
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong" });
  }
}
