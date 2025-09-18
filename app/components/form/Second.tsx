"use client";
import React from "react";

import FormTemplateComponent from "./template/FormTemplateComponent";
import TextArea from "../TextArea";

const Second = () => {
  return (
    <FormTemplateComponent
      headerTitle={"Tell Us Your Story"}
      subTitle={
        "In a few sentences, summarize your professional journey, key achievements, and career goals. "
      }
      formBody={
        <>
          <TextArea
            style="mb-[5px]"
            line={6}
            label="Write your story here ...."
          />
        </>
      }
    />
  );
};

export default Second;
