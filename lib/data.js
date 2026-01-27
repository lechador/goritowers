import dbConnect from "@/lib/dbConnect";
import Block from "@/models/Block";
import Apartment from "@/models/Apartment";
import Floor from '@/models/Floor';

export async function getBlocks() {
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
      _id: block._id.toString(),
      apartmentCount: apartmentCountMap[block.block_id]?.total || 0,
      soldApartmentCount: apartmentCountMap[block.block_id]?.sold || 0,
    }));

    return blocksWithCounts;
  } catch (error) {
    console.error("Error fetching blocks:", error);
    return [];
  }
}

export async function getBlockData(blockId) {
    await dbConnect();
    try {
        const block = await Block.findOne({ block_id: blockId });
        if (!block) return null;

        const floors = await Floor.find({ block_id: blockId }); 
        return {
            block: { ...block.toObject(), _id: block._id.toString() },
            floors: floors.map(f => ({ ...f.toObject(), _id: f._id.toString() }))
        };
    } catch (error) {
        console.error("Error fetching block data:", error);
        return null;
    }
}

export async function getFloorData(blockId, floorId) {
    await dbConnect();
    try {
        const floor = await Floor.findOne({ block_id: blockId, floor_id: floorId });
        if (!floor) return null;

        const apartments = await Apartment.find({ block_id: blockId, floor_id: floorId });
        return {
            floor: { ...floor.toObject(), _id: floor._id.toString() },
            apartments: apartments.map(a => ({ ...a.toObject(), _id: a._id.toString() }))
        };
    } catch (error) {
        console.error("Error fetching floor data:", error);
        return null;
    }
}

export async function getApartmentData(id) {
    await dbConnect();
    try {
        const apartment = await Apartment.findById(id);
        if (!apartment) return null;
        return { ...apartment.toObject(), _id: apartment._id.toString() };
    } catch (error) {
        console.error("Error fetching apartment data:", error);
        return null;
    }
}
