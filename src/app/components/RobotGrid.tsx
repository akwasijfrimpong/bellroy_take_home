import RobotComponent from "./Robot";

export default function Robot() {
  const divs = Array.from({ length: 19 }, (_, index) => (
    <div
      key={index}
      className="w-[120px] h-[120px] border border-orange-600"
    ></div>
  ));

  return (
    <div>
      <div className="container grid grid-cols-5 w-[600px]">
        {divs}
        <RobotComponent />
      </div>
    </div>
  );
}
