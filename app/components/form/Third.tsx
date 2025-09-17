"use client";
import React from "react";
import TextFileld from "../TextFileld";
import { PrimaryButton, SecondaryButton } from "../Buttons";
import FormTemplateComponent from "./template/FormTemplateComponent";
import TextArea from "../TextArea";

const Third = () => {
  return (
    <FormTemplateComponent
      headerTitle={"Your Academic Journey"}
      buttonCount={2}
      subTitle={
        "Provide details about your degrees and certifications. You can add more than one."
      }
      formBody={
        <>
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
        </>
      }
      formButtons={
        <>
          <SecondaryButton
            label="Back"
            onClick={() => {
              console.log("");
            }}
          />
          <PrimaryButton
            label="Continue"
            onClick={() => {
              console.log("");
            }}
          />
        </>
      }
    />
  );
};

export default Third;
