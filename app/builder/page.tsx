"use client";
import React from "react";
import TextArea from "../components/TextArea";
import Viewer from "./components/Viewer";
import { useRouter } from "next/navigation";
import HeaderButton from "./components/HeaderButton";
import TalkToAi from "./components/TalkToAi";
import Template1 from "../template/component/Resume/template1/Template1";
import { ResumeData } from "@/types/Resume";

interface Props {
  handleGenerateResume: () => void;
  desc: string;
  handleDesc: (e: any) => void;
  resumeData?: ResumeData;
}

const BuilderPage = ({
  handleGenerateResume,
  desc,
  handleDesc,
  resumeData,
}: Props) => {
  const router = useRouter();
  return (
    <div className="p-5 w-full h-full bg-white  shadow-2xl rounded-3xl flex flex-col ">
      <HeaderButton
        chooseTemplateOnClick={() => {}}
        downloadOnClick={() => {}}
        generateOnClick={handleGenerateResume}
        deleteOnClick={() => {}}
      />

      <TextArea
        value={desc}
        onChange={handleDesc}
        style="shadow-sm  mb-5"
        label="Paste your Job Desctiption here."
        line={4}
        maxLength={2000}
      />

      <div className=" h-screen w-full   flex items-center justify-center ">
        <div className="absolute left-10 scale-[0.45] ">
          <Viewer
            onClick={() => router.push("/template")}
            Item=<Template1
              nameFontSize={10}
              bodyFontSize={10}
              headerFontSize={10}
              eachSubHeaderFontSize={10}
              fontName={"Arial"}
              linkGap={3}
              resumeData={resumeData}
            />
            title="Resume"
          />
        </div>

        <div className="absolute left-110  scale-[0.45] ">
          <Viewer
            onClick={() => router.push("/template")}
            Item=<Template1
              nameFontSize={14}
              bodyFontSize={14}
              headerFontSize={14}
              eachSubHeaderFontSize={14}
              fontName={"Arial"}
              linkGap={3}
              resumeData={resumeData}
            />
            title="Resume"
          />
        </div>

        <div className="absolute right-0   ">
          {/* <TalkToAi onClick={() => {}} /> */}
        </div>
      </div>
    </div>
  );
};

export default BuilderPage;
