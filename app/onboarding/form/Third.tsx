"use client";
import React from "react";

import FormTemplateComponent from "./template/FormTemplateComponent";
import { CustomButton } from "@/app/components/Buttons";
import TextFileld from "@/app/components/TextFileld";

const Third = () => {
  return (
    <FormTemplateComponent
      headerTitle={"Your Academic Journey"}
      subTitle={
        "Provide details about your degrees and certifications. You can add more than one."
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
                label="Add "
                onClick={() => {}}
                style="w-full border-gray-40 border-1 p-2 "
              />
            </div>
            <div className="col-span-3 flex flex-col gap-2">
              <TextFileld type="text" label="School Name" />
              <TextFileld type="text" label="Location" />
              <div className="flex gap-2">
                <TextFileld type="text" label="Degree/Certification" />
                <div className="w-32">
                  <TextFileld type="text" label="GPA" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <TextFileld type="text" label="Field of Study" />{" "}
                <TextFileld type="text" label="Graduation Year" />
              </div>
            </div>
          </div>
        </>
      }
    />
  );
};

export default Third;
