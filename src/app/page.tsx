import Image from "next/image";
import RobotGrid from "./components/RobotGrid";
import Controls from "./components/Controls";
import Nav from "./components/Nav";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Nav />

      <RobotGrid />

      <section>
        <Controls />
      </section>
    </main>
  );
}
