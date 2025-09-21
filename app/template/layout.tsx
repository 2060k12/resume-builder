"use client";
import React, { useState } from "react";
import EditResumePage from "./page";
import DraggableComponents from "./component/DraggableComponents";
import RightBar from "./component/RightBar";
import { FontFamily } from "@/types/Resume";
import { useSelector } from "react-redux";

const Layout = () => {
  const [linkGap, setLinkGap] = React.useState(5);
  const [headerFontSize, setHeaderFontSize] = React.useState(18);
  const [bodyFontSize, setBodyFontSize] = React.useState(13);
  const [nameFontSize, setNameFontSize] = React.useState(30);
  const [eachSubHeaderFontSize, setEachSubHeaderFontSize] = React.useState(13);
  const [fontName, setFontName] = React.useState<FontFamily>("Verdana");
  const [sections, setSections] = useState([
    "Education",
    "Experience",
    "Project",
    "Technical Skills",
  ]);

  // dropdown
  const handleHeaderFontSizeChange = (e: any) =>
    setHeaderFontSize(Number(e.target.value));
  const handleBodyFontSizeChange = (e: any) =>
    setBodyFontSize(Number(e.target.value));
  const handleSubHeadingFontSizeChange = (e: any) =>
    setEachSubHeaderFontSize(Number(e.target.value));

  return (
    <div className="flex w-full bg-[#1e1e1e] h-screen box-border ">
      {/* Draggable Components */}
      <DraggableComponents />
      {/* Edit Resume Page */}
      <div className="col-span-7 w-full ">
        <EditResumePage
          bodyFontSize={bodyFontSize}
          headerFontSize={headerFontSize}
          eachSubHeaderFontSize={eachSubHeaderFontSize}
          fontName={fontName}
          linkGap={linkGap}
          nameFontSize={nameFontSize}
          // resumeData={}
        />
      </div>

      {/* Right Sidebar */}
      <RightBar
        headerFontSize={headerFontSize}
        eachSubHeaderFontSize={eachSubHeaderFontSize}
        bodyFontSize={bodyFontSize}
        handleBodyFontSizeChange={handleBodyFontSizeChange}
        handleHeaderFontSizeChange={handleHeaderFontSizeChange}
        handleSubHeadingFontSizeChange={handleSubHeadingFontSizeChange}
      />
    </div>
  );
};

export default Layout;
