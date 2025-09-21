import TextFileld from "@/app/components/TextFileld";
import { RiSendPlaneFill } from "@remixicon/react";
import React from "react";

const TalkToAi = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="shadow-md rounded-2xl border-1 border-gray-300 p-4 ">
      <h2 className="mb-1 bg-amber-400 text-white px-4 py-2 rounded-2xl ">
        Talk to AI
      </h2>
      <div className="w-full h-[90%]  rounded-2xl mt-3 flex flex-col justify-between">
        <div className="  bg-gray-100 h-full mb-2">a</div>
        <div className=" h-fit rounded-xl flex justify-center items-center gap-2">
          <div>
            <TextFileld
              label="Enter your message"
              type="text"
              value=""
              onChange={(e) => {}}
            />
          </div>
          <div className=" p-3 rounded-xl bg-blue-400">
            <RiSendPlaneFill color="white" size={20} onClick={onClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalkToAi;
