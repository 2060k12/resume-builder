import React from "react";
import Template1 from "./component/Resume/template1/Template1";
import { TemplateEditProps } from "@/types/Resume";

const EditResumePage = ({
  linkGap,
  headerFontSize,
  bodyFontSize,
  eachSubHeaderFontSize,
  fontName,
  nameFontSize,
  resumeData,
}: TemplateEditProps) => {
  return (
    <>
      <div className="  h-screen flex justify-center items-center ">
        <div className="shadow-md scale-70 ">
          <Template1
            nameFontSize={nameFontSize}
            bodyFontSize={bodyFontSize}
            headerFontSize={headerFontSize}
            eachSubHeaderFontSize={eachSubHeaderFontSize}
            fontName={fontName}
            linkGap={linkGap}
            resumeData={resumeData}
          />
        </div>
      </div>
    </>
  );
};

export default EditResumePage;
