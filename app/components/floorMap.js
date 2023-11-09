'use client';

import { useEffect } from 'react';
import { fabric } from 'fabric';
import { useRouter } from 'next/navigation';

const FabricFloorMap = ({block}) => {
  const router = useRouter()
  const hoverColor = 'rgba(255, 88, 1, 0.6)';
  useEffect(() => {
    let canvasWidth = 600;
    let canvasHeight = 676;
    if(window.innerWidth<640){
      canvasWidth = 300;
      canvasHeight = 338;
    }

    const canvas = new fabric.Canvas('floor-map-canvas', { width: canvasWidth, height: canvasHeight });
    const polygons = [
      {
        points: [
            { x: 45, y: 545 },
            { x: 41, y: 571 },
            { x: 554, y: 573 },
            { x: 553, y: 546 },
        ],
        fill: hoverColor,
        selectable: false,
        opacity: 0
      },
      {
        points: [
            { x: 49, y: 504 },
            { x: 47, y: 540 },
            { x: 555, y: 540 },
            { x: 552, y: 504 },
        ],
        fill: hoverColor,
        selectable: false,
        opacity: 0
      },
      {
        points: [
            { x: 55, y: 459 },
            { x: 54, y: 493 },
            { x: 550, y: 497 },
            { x: 547, y: 462 },
        ],
        fill: hoverColor,
        selectable: false,
        opacity: 0
      },
      {
        points: [
            { x: 57, y: 418 },
            { x: 55, y: 454 },
            { x: 546, y: 457 },
            { x: 544, y: 423 },
        ],
        fill: hoverColor,
        selectable: false,
        opacity: 0
      },
      {
        points: [
            { x: 59, y: 379 },
            { x: 58, y: 413 },
            { x: 544, y: 414 },
            { x: 541, y: 381 },
        ],
        fill: hoverColor,
        selectable: false,
        opacity: 0
      },
      {
        points: [
            { x: 61, y: 339 },
            { x: 60, y: 371 },
            { x: 542, y: 374 },
            { x: 540, y: 343 },
        ],
        fill: hoverColor,
        selectable: false,
        opacity: 0
      },
      {
        points: [
            { x: 64, y: 297 },
            { x: 62, y: 333 },
            { x: 541, y: 336 },
            { x: 538, y: 305 },
        ],
        fill: hoverColor,
        selectable: false,
        opacity: 0
      },
      {
        points: [
            { x: 66, y: 260 },
            { x: 65, y: 295 },
            { x: 540, y: 296 },
            { x: 538, y: 264 },
        ],
        fill: hoverColor,
        selectable: false,
        opacity: 0
      },
      {
        points: [
            { x: 68, y: 222 },
            { x: 67, y: 254 },
            { x: 536, y: 260 },
            { x: 533, y: 228 },
        ],
        fill: hoverColor,
        selectable: false,
        opacity: 0
      },
      {
        points: [
            { x: 72, y: 186 },
            { x: 73, y: 220 },
            { x: 533, y: 221 },
            { x: 531, y: 193 },
        ],
        fill: hoverColor,
        selectable: false,
        opacity: 0
      },
      {
        points: [
            { x: 73, y: 149 },
            { x: 72, y: 180 },
            { x: 532, y: 184 },
            { x: 531, y: 154 },
        ],
        fill: hoverColor,
        selectable: false,
        opacity: 0
      },
      {
        points: [
            { x: 75, y: 114 },
            { x: 72, y: 145 },
            { x: 529, y: 148 },
            { x: 529, y: 119 },
        ],
        fill: hoverColor,
        selectable: false,
        opacity: 0
      },
      {
        points: [
            { x: 77, y: 78 },
            { x: 75, y: 107 },
            { x: 529, y: 113 },
            { x: 525, y: 84 },
        ],
        fill: hoverColor,
        selectable: false,
        opacity: 0
      },
      {
        points: [
            { x: 80, y: 45 },
            { x: 78, y: 74 },
            { x: 525, y: 79 },
            { x: 525, y: 49 },
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
        router.push(`/project/${block}/${polygonFloors[index]}`)
      });
    });
  }, []);

  return (
    <div className="relative flex justify-center mb-32">
      <div className="relative">
        <div className="absolute">
          <img src="/a-bloki.webp" alt="Floor Map" className="w-80 sm:w-[600px]" />
        </div>
        <canvas id="floor-map-canvas" className="absolute top-0 left-0 hidden sm:block"></canvas>
      </div>
    </div>
  );
};

export default FabricFloorMap;
