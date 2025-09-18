"use client";
import React from "react";
import {
  CustomButton,
  PrimaryButton,
  SecondaryButton,
} from "../components/Buttons";
import TextArea from "../components/TextArea";

const page = () => {
  return (
    <div className="p-4 flex h-screen w-full justify-between ">
      <div className="p-5 w-[20%] bg-white shadow-2xl rounded-3xl  flex flex-col">
        <div className="h-fit mb-2">
          <h1 className="text-2xl w-full text-center  bg-[#f7f2f2] p-2 rounded-xl shadow-xs">
            Jobs
          </h1>
        </div>
        <div className="justify-start h-full">
          <PrimaryButton label="Add Job" onClick={() => {}} />
        </div>
      </div>

      <div className="p-5 w-[79%] bg-white  shadow-2xl rounded-3xl flex flex-col ">
        <div className="h-fit rounded-xl mb-2 grid grid-cols-10 gap-2">
          <div className="col-span-2">
            <PrimaryButton label="Generate Now" onClick={() => {}} />
          </div>
          <div className="col-span-1">
            <SecondaryButton label="Download" onClick={() => {}} />
          </div>
          <div className="col-span-2">
            <SecondaryButton label="Choose Template" onClick={() => {}} />
          </div>
          <div className="col-span-1">
            <CustomButton
              style="bg-red-500 text-white"
              label="Delete"
              onClick={() => {}}
            />
          </div>
        </div>

        <TextArea
          style="shadow-sm  mb-5"
          label="Paste your Job Desctiption here."
          line={4}
        />
        <div className="grid grid-cols-2 h-full gap-5">
          <TextArea
            style="shadow-sm h-full"
            label="Your Cover Letter."
            line={11}
          />
          <TextArea
            style="shadow-sm h-full"
            label="Your Cover Letter."
            line={11}
          />
        </div>
      </div>
    </div>
  );
};

export default page;
