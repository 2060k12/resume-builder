import Image from "next/image";
import First from "./components/form/First";
import Second from "./components/form/Second";
import Third from "./components/form/Third";
import Forth from "./components/form/Forth";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen w-full ">
      {/* Form Container */}
      <div className="w-[700px] shadow-xl h-[500px] bg-[#FFFFFF] rounded-4xl py-16 px-20">
        {/* <First /> */}
        {/* <Second /> */}
        {/* <Third /> */}
        <Forth />
      </div>
    </div>
  );
}
