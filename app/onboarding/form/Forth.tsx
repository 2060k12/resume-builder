"use client";
import React from "react";

import FormTemplateComponent from "./template/FormTemplateComponent";
import { CustomButton } from "@/app/components/Buttons";
import TextFileld from "@/app/components/TextFileld";
import TextArea from "@/app/components/TextArea";

const Forth = () => {
  return (
    <FormTemplateComponent
      headerTitle={"Show Off Your Experience"}
      subTitle={
        "List your most recent and relevant work history. Be sure to include your main duties and accomplishments."
      }
      formBody={
        <>
          <div className="grid grid-cols-4 gap-2">
            <div className="col-span-1 bg-gray-50 rounded-2xl px-2 py-3 shadow-2xl border-gray-200 border-1 flex flex-col gap-2">
              <h4 className="bg-gray-400 text-black w-full px-4 py-2 rounded-xl shadow-2xl">
                Masters
              </h4>
              <h4 className="bg-gray-400 text-black w-full px-4 py-2 rounded-xl shadow-2xl">
                Bachelors
              </h4>
              <CustomButton
                label="Add"
                onClick={() => {}}
                style="w-full border-gray-40 border-1 p-2 "
              />
            </div>
            <div className="col-span-3 flex flex-col gap-2">
              <div className="flex gap-2">
                <TextFileld type="text" label="Job Title" />
                <div className="w-[80%]">
                  <TextFileld type="text" label="Company Name" />
                </div>
              </div>
              <div className="flex gap-2">
                <TextFileld type="text" label="Time Period (Start/End Date)" />{" "}
                <div className="w-[80%]">
                  <TextFileld type="text" label="Location" />
                </div>
              </div>

              <TextArea
                line={2}
                style="mb-2"
                label="Responsibilities/Achievements"
              />
            </div>
          </div>
        </>
      }
    />
  );
};

export default Forth;
