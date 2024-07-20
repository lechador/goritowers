'use client';

import { useEffect } from 'react';
import { fabric } from 'fabric';
import { useRouter } from 'next/navigation';

const FabricFloorMap = ({block, locale}) => {
  const router = useRouter()
  const hoverColor = 'rgba(255, 88, 1, 0.6)';
  useEffect(() => {
    let canvasWidth = 1382;
    let canvasHeight = 1037;
    if(window.innerWidth<640){
      canvasWidth = 320;
      canvasHeight = 300;
    }

    const canvas = new fabric.Canvas('floor-map-canvas', { width: canvasWidth, height: canvasHeight });
    const polygons = [
      {
        points: [
            { x: 341, y: 796 },
            { x: 340, y: 828 },
            { x: 1044, y: 829 },
            { x: 1044, y: 796 },
        ],
        fill: hoverColor,
        selectable: false,
        opacity: 0
      },
      {
        points: [
          { x: 343, y: 742 },
          { x: 343, y: 785 },
          { x: 1043, y: 784 },
          { x: 1043, y: 743 },          
        ],
        fill: hoverColor,
        selectable: false,
        opacity: 0
      },
      {
        points: [
            { x: 350, y: 691 },
            { x: 350, y: 718 },
            { x: 1043, y: 721 },
            { x: 1043, y: 686 },
        ],
        fill: hoverColor,
        selectable: false,
        opacity: 0
      },
      {
        points: [
          { x: 351, y: 635 },
          { x: 351, y: 678 },
          { x: 1044, y: 679 },
          { x: 1041, y: 630 },          
        ],
        fill: hoverColor,
        selectable: false,
        opacity: 0
      },
      {
        points: [
          { x: 351, y: 576 },
          { x: 350, y: 625 },
          { x: 1046, y: 621 },
          { x: 1043, y: 576 },          
        ],
        fill: hoverColor,
        selectable: false,
        opacity: 0
      },
      {
        points: [
          { x: 350, y: 523 },
          { x: 350, y: 571 },
          { x: 1045, y: 568 },
          { x: 1041, y: 525 },          
        ],
        fill: hoverColor,
        selectable: false,
        opacity: 0
      },
      {
        points: [
          { x: 351, y: 468 },
          { x: 349, y: 514 },
          { x: 1045, y: 516 },
          { x: 1043, y: 469 },          
        ],
        fill: hoverColor,
        selectable: false,
        opacity: 0
      },
      {
        points: [
          { x: 351, y: 412 },
          { x: 347, y: 458 },
          { x: 1044, y: 462 },
          { x: 1044, y: 415 },          
        ],
        fill: hoverColor,
        selectable: false,
        opacity: 0
      },
      {
        points: [
          { x: 350, y: 359 },
          { x: 350, y: 402 },
          { x: 1044, y: 400 },
          { x: 1045, y: 359 },          
        ],
        fill: hoverColor,
        selectable: false,
        opacity: 0
      },
      {
        points: [
          { x: 351, y: 302 },
          { x: 351, y: 350 },
          { x: 1044, y: 349 },
          { x: 1043, y: 305 },          
        ],
        fill: hoverColor,
        selectable: false,
        opacity: 0
      },
      {
        points: [
          { x: 351, y: 249 },
          { x: 351, y: 295 },
          { x: 1044, y: 295 },
          { x: 1044, y: 250 },          
        ],
        fill: hoverColor,
        selectable: false,
        opacity: 0
      },
      {
        points: [
          { x: 350, y: 191 },
          { x: 350, y: 239 },
          { x: 1045, y: 239 },
          { x: 1044, y: 195 },          
        ],
        fill: hoverColor,
        selectable: false,
        opacity: 0
      },
      {
        points: [
          { x: 350, y: 137 },
          { x: 350, y: 185 },
          { x: 1045, y: 183 },
          { x: 1045, y: 136 },          
        ],
        fill: hoverColor,
        selectable: false,
        opacity: 0
      },
      {
        points: [
          { x: 351, y: 82 },
          { x: 350, y: 127 },
          { x: 1044, y: 129 },
          { x: 1045, y: 85 },          
        ],
        fill: hoverColor,
        selectable: false,
        opacity: 0
      },
    ];
    const polygonFloors = [
      1,2,3,4,5,6,7,8,9,10,11,12,13,14
    ]
    polygons.forEach((polygonData, index) => {
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
        router.push(`/${locale}/project/${block}/${polygonFloors[index]}`)
      });
    });
  }, []);

  return (
    <div className="relative flex justify-center mb-32">
      <div className="relative">
        <div className="absolute">
          <img src="/images/3_result.webp" alt="Floor Map" className="w-80 sm:w-[1382px]" />
        </div>
        <canvas id="floor-map-canvas" className="absolute top-0 left-0 hidden sm:block"></canvas>
      </div>
    </div>
  );
};

export default FabricFloorMap;
