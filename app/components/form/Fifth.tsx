"use client";
import React from "react";

import FormTemplateComponent from "./template/FormTemplateComponent";
import TextArea from "../TextArea";

const Fifth = () => {
  return (
    <FormTemplateComponent
      headerTitle={"What Are You Good At?"}
      // buttonCount={2}
      subTitle={
        "What skills set you apart? List your technical and soft skills, from programming languages to leadership."
      }
      formBody={
        <>
          <TextArea line={2} label="Hard Skills (e.g., Python, SQL)" />
          <TextArea
            line={2}
            label="Soft Skills (e.g., Teamwork, Communication)"
            style="mb-4"
          />
        </>
      }
    />
  );
};

export default Fifth;
