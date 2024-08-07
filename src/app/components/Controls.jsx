export default function Controls() {
  return (
    <div>
      <h1 className="text-black font-bold text-xl flex">Controls:</h1>
      <p className="text-black pt-2">
        Use the <span className="font-bold">&apos;up arrow key&apos;</span> to
        move the robot forward He will only walk in the direction he is facing
      </p>
      <p className="text-black pt-2">
        {" "}
        Use the <span className="font-bold">&apos;R&apos;</span> key to rotate
        the direction the robot is facing
      </p>
    </div>
  );
}
