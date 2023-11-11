'use client';

import { useEffect } from 'react';
import { fabric } from 'fabric';
import { useRouter } from 'next/navigation';
import { FirstFloor, SecondFloor, ThirdFloor, Fourth8Floor, Fifth7Floor, Nineth14Floor } from '../polygons';

const FabricApartmentMap = ({params, apartments, floor}) => {
    const sortedApartments = [...apartments].sort((a, b) => a.apartment_number - b.apartment_number);
  const router = useRouter()
  useEffect(() => {
    let canvasWidth = 1000;
    let canvasHeight = 563;
    if(window.innerWidth<1000){
      canvasWidth = 300;
      canvasHeight = 169;
    }
    const canvas = new fabric.Canvas('floor-map-canvas', { width: canvasWidth, height: canvasHeight });
    const polygonFloors = [
      1,2,3,4,5,6,7,8,9,10,11,12,13,14
    ]
    let selectedFloor;
    if(floor.floor_id === 1){ 
        selectedFloor = FirstFloor;
    } else if(floor.floor_id === 2){ 
        selectedFloor = SecondFloor;
    } else if(floor.floor_id === 3){ 
        selectedFloor = ThirdFloor;
    } else if(floor.floor_id === 4 || floor.floor_id === 8){ 
        selectedFloor = Fourth8Floor;
    } else if (floor.floor_id === 5 || floor.floor_id === 6 || floor.floor_id === 7){ 
        selectedFloor = Fifth7Floor;
    } else if (floor.floor_id === 9 || floor.floor_id === 10 || floor.floor_id === 11 || floor.floor_id === 12 || floor.floor_id === 13 || floor.floor_id === 14){ 
        selectedFloor = Nineth14Floor;
    } 
    selectedFloor.forEach((polygonData, index) => {
      const polygon = new fabric.Polygon(polygonData.points, {
        fill: polygonData.fill,
        selectable: polygonData.selectable,
        opacity: polygonData.opacity,
        hoverCursor: 'pointer',
      });

      canvas.add(polygon);

      polygon.on('mouseover', () => {
        polygon.set({ opacity: 1 });
        canvas.renderAll();
      });

      polygon.on('mouseout', () => {
        polygon.set({ opacity: 0 });
        canvas.renderAll();
      });

      polygon.on('mousedown', () => {
        router.push(`/project/${params.block}/${params.floor}/${sortedApartments[polygonFloors[index]-1]._id}`)
      });
    });
  }, []);

  return (
    <div className="relative flex justify-center mb-32">
      <div className="relative">
        <div className="absolute">
            <img src={floor.floor_image} alt="Floor Map" className="w-80 sm:w-[1000px]" />
        </div>
        <canvas id="floor-map-canvas" className="absolute top-0 left-0 hidden sm:block"></canvas>
      </div>
    </div>
  );
};

export default FabricApartmentMap;
