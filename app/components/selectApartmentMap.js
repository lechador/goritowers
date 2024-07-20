'use client';

import { useEffect } from 'react';
import { fabric } from 'fabric';
import { useRouter } from 'next/navigation';
import { FirstFloor, SecondFloor, ThirdFloor, Fourth8Floor, Fifth7Floor, Nineth14Floor, mobileFloor1 } from '../[locale]/polygons';
import GetWindowWidth from './getWidth';



const FabricApartmentMap = ({params, apartments, floor, locale}) => {
  const size = GetWindowWidth()
    const sortedApartments = [...apartments].sort((a, b) => a.apartment_number - b.apartment_number);
  const router = useRouter()
  useEffect(() => {
    if(size.width){ 
    let canvasWidth = size.width>1024 ? 1200 : 320;
    let canvasHeight = size.width>1024 ? 1125 : 326;
    let selectedFloor;
    if(size.width<1000){
      selectedFloor = mobileFloor1;
    } else { 
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
    }
    const canvas = new fabric.Canvas('floor-map-canvas', { width: canvasWidth, height: canvasHeight });
    const polygonFloors = [
      1,2,3,4,5,6,7,8,9,10,11,12,13,14
    ]
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
        router.push(`/${locale}/project/${params.block}/${params.floor}/${sortedApartments[polygonFloors[index]-1]._id}`)
      });
      polygon.on('touchstart', (event) => {
        router.push(`/${locale}/project/${params.block}/${params.floor}/${sortedApartments[polygonFloors[index]-1]._id}`)
    });
      
    });
  }
  }, [size.width]);

  return (
    <div className="relative flex justify-center md:mb-[150px]">
      <div className="relative">
        <div className="absolute">
            {
              size.width > 1000 ? (
                <img src={`/floors/${floor.floor_image}`} alt="Floor Map" width='1200' height='1125' />
              ) : (
                <img src={`/floors/mobile/${floor.floor_image_mobile}`} alt="Floor Map" width='320' height='326' />
              )
            }
        </div>
        <canvas id="floor-map-canvas" className="absolute top-0 left-0"></canvas>
      </div>
    </div>
  );
};

export default FabricApartmentMap;
