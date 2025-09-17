"use client";
import React from "react";
import TextFileld from "../TextFileld";
import { PrimaryButton, SecondaryButton } from "../Buttons";
import FormTemplateComponent from "./template/FormTemplateComponent";
import TextArea from "../TextArea";

const Forth = () => {
  return (
    <FormTemplateComponent
      headerTitle={"Show Off Your Experience"}
      buttonCount={2}
      subTitle={
        "List your most recent and relevant work history. Be sure to include your main duties and accomplishments."
      }
      formBody={
        <>
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

          <TextArea line={2} label="Responsibilities/Achievements" />
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

export default Forth;
