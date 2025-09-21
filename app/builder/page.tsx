"use client";
import React, { useEffect, useState } from "react";
import TextArea from "../components/TextArea";
import Viewer from "./components/Viewer";
import { useRouter } from "next/navigation";
import axios from "axios";
import HeaderButton from "./components/HeaderButton";
import TalkToAi from "./components/TalkToAi";
const BuilderPage = () => {
  const router = useRouter();
  const [desc, setDesc] = useState("");
  const userId = "842db853-2d8e-4ba9-b96a-383b3eeb8007";
  let user: any = null;
  const [resumeData, setResumeData] = useState();
  const handleGenerateResume = async () => {
    if (desc.length < 10) {
      alert("To Generate a resume. Please enter a valid Job Description.");
    }

    try {
      const res = await axios.post("/api/openai", {
        user: user,
        jobs: desc,
      });

      setResumeData(res.data);
    } catch (error) {
      console.error("Failed to generate resume:", error);

      alert("An error occurred while generating the resume. Please try again.");
    }
    alert("Ready");
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  async function getUserDetails() {
    try {
      const res = await axios.get("/api/users/details/" + userId);
      const userData = res.data;

      const resume = await axios.post("/api/openai", {
        user: userData,
        job: {
          title: "Full-Stack Mobile Developer",
          description:
            "Looking for a developer with React Native, Node.js, AI integration experience...",
        },
      });

      user = resume.data;
      console.log(resume);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="p-5 w-full h-full bg-white  shadow-2xl rounded-3xl flex flex-col ">
      <HeaderButton
        chooseTemplateOnClick={() => {}}
        downloadOnClick={() => {}}
        generateOnClick={() => {}}
        deleteOnClick={() => {}}
      />

      <TextArea
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        style="shadow-sm  mb-5"
        label="Paste your Job Desctiption here."
        line={4}
      />

      <div className=" h-full w-full justify-between flex items-center ">
        <div className="absolute grid grid-cols-3 gap-4 w-[78%] ">
          <Viewer
            onClick={() => router.push("/template")}
            imgSrc="/template/resume/template1.png"
            title="Resume"
          />
          <Viewer
            onClick={() => router.push("/template")}
            imgSrc="/template/cover/template1.png"
            title="Cover Letter"
          />
          <TalkToAi onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default BuilderPage;
