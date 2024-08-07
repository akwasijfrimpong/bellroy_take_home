"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
export default function Robot() {
  const [positionCol, setPositionCol] = useState(1);
  const [positionRow, setPositionRow] = useState(1);
  const [direction, setDirection] = useState(270);
  const rotationClass =
    direction === 0
      ? "rotate-0"
      : direction === 90
      ? "rotate-90"
      : direction === 180
      ? "rotate-180"
      : "-rotate-90";
  //use effect used to hand key strokes
  useEffect(() => {
    const handleKeyUp = (event: { key: any }) => {
      console.log(`Key pressed: ${event.key}`);
      if (event.key === "ArrowUp") {
        handleWalk();
      } // Deal with rotating direction
      if (event.key == "R" || event.key == "r") {
        handleRotate();
      }
    };

    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [direction, positionCol, positionRow]);

  //updates position

  const handleWalk = () => {
    if (direction == 270) {
      const newPosition = positionCol + 1;
      if (newPosition > 5) {
        setPositionCol(1);
      } else {
        setPositionCol(newPosition);
      }
    } else if (direction == 90) {
      if (positionCol > 0) {
        let newPosition = positionCol - 1;
        if (newPosition > 0) {
          setPositionCol(newPosition);
          console.log("going here");
        } else {
          setPositionCol(5);
        }
      }
      if (positionCol <= 0) {
        setPositionCol(5);
      }
    }
    if (direction == 180) {
      if (positionRow > 0) {
        const newPos = positionRow - 1;
        if (newPos === 0) {
          setPositionRow(5);
        } else {
          setPositionRow(newPos);
        }
      }
    }
    if (direction == 0) {
      if (positionRow > 0) {
        const newPos = positionRow + 1;
        if (newPos === 6) {
          setPositionRow(1);
        } else {
          setPositionRow(newPos);
        }
      }
    }
  };

  const handleRotate = () => {
    setDirection((direction + 90) % 360);
  };

  return (
    <div style={{ gridColumnStart: positionCol, gridRowStart: positionRow }}>
      <div className={rotationClass}>
        <Image src="/robotOrange.jpeg" width={120} height={120} alt="robot" />
      </div>
      <div>
        <button
          className="bg-orange-500 p-3 w-[80px] text-white rounded-lg font-bold absolute top-[175px] left-[610px]"
          onClick={handleWalk}
        >
          Walk
        </button>
        <button
          className="bg-orange-500 p-3 w-[80px] text-white rounded-lg font-bold absolute top-[176px] left-[700px]"
          onClick={handleRotate}
        >
          Rotate
        </button>
      </div>
    </div>
  );
}
