"use client";

import OnBoardingPage from "./page";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen w-full ">
      {/* Form Container */}
      <div className="w-[700px] shadow-xl h-[500px] bg-[#FFFFFF] rounded-4xl py-16 px-20">
        <>
          <OnBoardingPage />
        </>
      </div>
    </div>
  );
}
