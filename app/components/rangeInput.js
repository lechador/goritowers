'use client'
import React, { useState } from "react";

export default function RangeInput({ title, min, max, color, unit, setMinPrice, setMaxPrice, setMinArea, setMaxArea }) {
    const [value, setValue] = useState((max + min) / 2);

    const handleRangeChange = (event) => {
        const newValue = parseInt(event.target.value, 10);
        setValue(newValue);

        switch (title) {
            case "მინიმალური ფასი":
                setMinPrice(newValue);
                break;
            case "მაქსიმალური ფასი":
                setMaxPrice(newValue);
                break;
            case "მინიმალური ფართი":
                setMinArea(newValue);
                break;
            case "მაქსიმალური ფართი":
                setMaxArea(newValue);
                break;
            default:
                break;
        }
    };

    return (
        <div className="mb-4">
            <input
                type="range"
                min={min}
                max={max}
                value={value}
                onChange={handleRangeChange}
                className="range"
            />
            <p className="text-lg">
                <span className={`text-${color} font-bold`}>{title}:</span>{" "}
                <span className="font-bold tracking-wider">
                    {value} {unit}
                </span>
            </p>
        </div>
    );
}
