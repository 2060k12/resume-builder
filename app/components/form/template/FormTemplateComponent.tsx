"use client";
import React, { ReactNode } from "react";
import { PrimaryButton } from "../../Buttons";

interface Props {
  headerTitle: String;
  subTitle: String;
  formButtons: ReactNode;
  formBody: ReactNode;
  buttonCount?: number;
}

const FormTemplateComponent = ({
  headerTitle,
  subTitle,
  formButtons,
  formBody,
  buttonCount = 1,
}: Props) => {
  return (
    <div className="flex flex-col">
      <div className="mb-4">
        <h2 className="text-4xl font-bold">{headerTitle}</h2>
        <h4>{subTitle}</h4>
      </div>
      <div className="flex flex-col gap-2">{formBody}</div>
      <div
        className={`w-full mt-4 ${
          buttonCount > 1 ? "grid grid-cols-2 gap-2" : ""
        } `}
      >
        {formButtons}
      </div>
    </div>
  );
};

export default FormTemplateComponent;
