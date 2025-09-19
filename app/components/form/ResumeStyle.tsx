"use client";
import React from "react";
import FormTemplateComponent from "./template/FormTemplateComponent";
import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react";

const SelectStyle = () => {
  return (
    <FormTemplateComponent
      headerTitle={"Choose Your Resume Style"}
      //   buttonCount={2}
      subTitle={"You can always change them later."}
      formBody={
        <>
          <div className="h-[235px] bg-gray-200 rounded-2xl px-2 py-8  flex gap-3">
            <div className="flex justify-center items-center w-5  ">
              <RiArrowLeftSLine size={40} color="gray" />
            </div>
            <div className="bg-white h-44 w-38 rounded-2xl"></div>
            <div className="bg-white h-44  w-38 rounded-2xl"></div>
            <div className="bg-white h-44  w-38 rounded-2xl"></div>
            <div className="flex justify-center items-center w-5">
              <RiArrowRightSLine size={40} />
            </div>
          </div>
        </>
      }
    />
  );
};

export default SelectStyle;
