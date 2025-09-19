import React from "react";
import EachSection from "./component/Resume/template1/EachSection";
import EachSubSection from "./component/Resume/template1/EachSubSection";
import Template1 from "./component/Resume/template1/Template1";
import CoverTemplate1 from "./component/CoverLetter/CoverTemplate1";

const EditResumePage = () => {
  return (
    <>
      <div className="  h-screen flex justify-center items-center ">
        <div className="shadow-md scale-70 ">
          <Template1 istemplate={false} />
          {/* <CoverTemplate1 /> */}
        </div>
      </div>
    </>
  );
};

export default EditResumePage;
