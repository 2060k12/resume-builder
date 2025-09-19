"use client";
import React from "react";
import {
  CustomButton,
  PrimaryButton,
  SecondaryButton,
} from "../components/Buttons";
import TextArea from "../components/TextArea";
import EditResumeModal from "../components/EditResumeModal";

const BuilderPage = () => {
  return (
    <div className="p-5 w-full h-full bg-white  shadow-2xl rounded-3xl flex flex-col ">
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
            style="bg-red-500 text-white hover:bg-red-300 p-3"
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
        <div className="shadow-lg text-center border-1 border-gray-200 p-2 h-full rounded-2xl">
          Resume
        </div>
        <div className="shadow-lg  text-center border-1 border-gray-200 p-2 h-full rounded-2xl">
          Cover Letter
        </div>
      </div>
    </div>
  );
};

export default BuilderPage;
