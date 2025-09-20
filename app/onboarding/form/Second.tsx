"use client";
import React, { useState } from "react";

import FormTemplateComponent from "./template/FormTemplateComponent";
import TextArea from "@/app/components/TextArea";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { updateForm } from "@/store/features/formSlice";

const Second = () => {
  const dispatch = useDispatch();
  const form = useSelector((state: RootState) => state.form);
  const [professionalJourneyStory, setProfessionalJourneyStory] = useState(
    form.professionalJourneyStory
  );
  const handleChange = () => {
    dispatch(updateForm({ professionalJourneyStory }));
  };

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
            value={professionalJourneyStory}
            onBlur={handleChange}
            onChange={(e) => setProfessionalJourneyStory(e.target.value)}
          />
        </>
      }
    />
  );
};

export default Second;
