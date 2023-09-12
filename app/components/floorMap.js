'use client';

import { useEffect } from 'react';
import { fabric } from 'fabric';
import { useRouter } from 'next/navigation';

const FabricFloorMap = ({block}) => {
  const router = useRouter()
  const hoverColor = '#ff5801'
  useEffect(() => {
    const canvasWidth = 1000;
    const canvasHeight = 500;

    const canvas = new fabric.Canvas('floor-map-canvas', { width: canvasWidth, height: canvasHeight });
    const polygons = [
      {
        points: [
            { x: 122, y: 326 },
            { x: 124, y: 362 },
            { x: 844, y: 421 },
            { x: 847, y: 360 },
        ],
        fill: hoverColor,
        selectable: false,
        opacity: 0
      },
      {
        points: [
          { x: 122, y: 285 },
          { x: 123, y: 319 }, 
          { x: 845, y: 363 }, 
          { x: 846, y: 312 },
        ],
        fill: hoverColor,
        selectable: false,
        opacity: 0
      },
      {
        points: [
          { x: 121, y: 245 },
          { x: 850, y: 252 }, 
          { x: 849, y: 300 }, 
          { x: 119, y: 279 },
        ],
        fill: hoverColor,
        selectable: false,
        opacity: 0
      },
      {
        points: [
          { x: 119, y: 206 },
          { x: 120, y: 239 }, 
          { x: 851, y: 243 }, 
          { x: 851, y: 193 },
        ],
        fill: hoverColor,
        selectable: false,
        opacity: 0
      }
    ];
    const polygonFloors = [
      1, 2, 3, 4
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
      <div>
        <div className="absolute">
          <img src="/block-test.png" alt="Floor Map" />
        </div>
        <canvas id="floor-map-canvas" className="absolute top-0 left-0" />
      </div>
    </div>
  );
};

export default FabricFloorMap;
