"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
export default function Robot() {
  const [positionCol, setPositionCol] = useState(1);
  const [positionRow, setPositionRow] = useState(1);
  const [direction, setDirection] = useState(270);

  useEffect(() => {
    const handleKeyUp = (event: { key: any }) => {
      console.log(`Key pressed: ${event.key}`);
      if (event.key === "ArrowUp") {
        if (direction == 270) {
          const newPosition = (positionCol + 1) % 6;
          if (newPosition > 5) {
            setPositionCol(1);
          } else {
            setPositionCol(newPosition);
          }
        } else if (direction == 90) {
          if (positionCol > 0) {
            let newPosition = (positionCol - 1) % 6;
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
        //upDown movement below
        else if (direction == 180) {
          if (positionRow > 0) {
            const newPos = (positionRow - 1) % 6;
            if (newPos === 0) {
              setPositionRow(5);
            } else {
              setPositionRow(newPos);
            }
          }
        } else if (direction == 0) {
          if (positionRow > 0) {
            const newPos = positionRow + 1;
            if (newPos === 6) {
              setPositionRow(1);
            } else {
              setPositionRow(newPos);
            }
          }
        }
      } // Deal with rotating direction
      if (event.key == "R" || event.key == "r") {
        setDirection((direction + 90) % 360);
      }
    };

    window.addEventListener("keyup", handleKeyUp);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [direction, positionCol, positionRow]); // Add direction and positionCol to the dependency array

  useEffect(() => {
    console.log(
      `Position col: col-start-${positionCol} Position row: row-start-${positionRow}`
    );
  }, [positionCol, positionRow, direction]);

  return (
    <div className={`col-start-${positionCol} row-start-${positionRow}`}>
      <div className={direction == 270 ? "-rotate-90" : `rotate-${direction}`}>
        <Image src="/robotOrange.jpeg" width={100} height={100} alt="robot" />
      </div>
    </div>
  );
}
