"use client";
import React, { useState } from "react";

import FormTemplateComponent from "./template/FormTemplateComponent";
import TextArea from "@/app/components/TextArea";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { updateForm } from "@/store/features/formSlice";

const Fifth = () => {
  const dispatch = useDispatch();
  const form = useSelector((select: RootState) => select.form);

  const [softSkills, setSoftSkills] = useState(form.softSkills);
  const [hardSkills, setHardSkills] = useState(form.hardSkills);

  const handleChange = () => {
    dispatch(
      updateForm({
        softSkills,
        hardSkills,
      })
    );
  };

  return (
    <FormTemplateComponent
      headerTitle={"What Are You Good At?"}
      // buttonCount={2}
      subTitle={
        "What skills set you apart? List your technical and soft skills, from programming languages to leadership."
      }
      formBody={
        <>
          <TextArea
            line={2}
            label="Hard Skills (e.g., Python, SQL)"
            onBlur={handleChange}
            onChange={(e) => setSoftSkills(e.target.value)}
            value={softSkills}
          />
          <TextArea
            line={2}
            label="Soft Skills (e.g., Teamwork, Communication)"
            style="mb-4"
            onBlur={handleChange}
            onChange={(e) => setHardSkills(e.target.value)}
            value={hardSkills}
          />
        </>
      }
    />
  );
};

export default Fifth;
