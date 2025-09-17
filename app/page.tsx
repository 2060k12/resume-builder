import Image from "next/image";
import First from "./components/form/First";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen w-full ">
      {/* Form Container */}
      <div className="w-[700px] shadow-xl h-[500px] bg-[#FFFFFF] rounded-4xl p-20">
        <First />
      </div>
    </div>
  );
}
