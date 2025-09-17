"use client";
import React from "react";
import TextFileld from "../TextFileld";
import { PrimaryButton, SecondaryButton } from "../Buttons";
import FormTemplateComponent from "./template/FormTemplateComponent";
import TextArea from "../TextArea";

const Fifth = () => {
  return (
    <FormTemplateComponent
      headerTitle={"What Are You Good At?"}
      buttonCount={2}
      subTitle={
        "What skills set you apart? List your technical and soft skills, from programming languages to leadership."
      }
      formBody={
        <>
          <TextArea line={2} label="Hard Skills (e.g., Python, SQL)" />
          <TextArea
            line={2}
            label="Soft Skills (e.g., Teamwork, Communication)"
          />
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

export default Fifth;
