'use client';

import { useEffect, useState } from 'react';
import { fabric } from 'fabric';

const FabricFloorMap = () => {
  const [selectedFloor, setSelectedFloor] = useState(null);

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
        fill: 'rgba(0, 123, 255, 0.5)',
        selectable: false,
        opacity: 0,
      },
      {
        points: [
          { x: 122, y: 285 },
          { x: 123, y: 319 }, 
          { x: 845, y: 363 }, 
          { x: 846, y: 312 },
        ],
        fill: 'rgba(0, 123, 255, 0.5)',
        selectable: false,
        opacity: 0,
      },
    ];

    polygons.forEach(polygonData => {
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
        setSelectedFloor(14);
        console.log(polygon);
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
