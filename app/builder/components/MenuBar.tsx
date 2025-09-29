import { PrimaryButton } from "@/app/components/Buttons";
import React from "react";

const MenuBar = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="p-5 w-[15%] bg-white shadow-2xl rounded-3xl  flex flex-col">
      <div className="h-fit mb-2">
        <h1 className="text-2xl w-full text-center  bg-[#f7f2f2] p-2 rounded-xl shadow-xs">
          Jobs
        </h1>
      </div>
      <div className="justify-start h-full">
        <PrimaryButton label="Add Job" onClick={() => {}} />
      </div>
    </div>
  );
};

export default MenuBar;
