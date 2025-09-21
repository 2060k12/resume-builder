"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { PrimaryButton } from "../components/Buttons";
import BuilderPage from "./page";
import MenuBar from "./components/MenuBar";

import axios from "axios";

import { ResumeData } from "@/types/Resume";
import { UserDetails } from "../generated/prisma";
import { ApiResponse } from "@/utils/ApiResponse";
import { parse } from "path";
interface Props {
  childrens: ReactNode;
}

const Layout = ({ childrens }: Props) => {
  const [desc, setDesc] = useState("");
  const userId = "1786ea9c-d107-4151-b04e-1bdc86304e06";
  let [user, setUser] = useState<UserDetails>();
  const [resumeData, setResumeData] = useState<ResumeData>();

  const handleGenerateResume = async () => {
    if (desc.length < 10) {
      alert("To Generate a resume. Please enter a valid Job Description.");
    }

    try {
      const res = await axios.post<{ data: string }>("/api/openai", {
        user: user,
        jobs: desc,
      });
      const cleaned = res.data.data.replace(/```json\n?|\n```/g, "");
      const parsed: ResumeData = JSON.parse(cleaned);

      setResumeData(parsed);
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
      const res = await axios.get<UserDetails>("/api/users/details/" + userId);
      setUser(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="p-4 flex h-screen w-full justify-between gap-4 ">
      <MenuBar onClick={() => {}} />
      <BuilderPage
        handleDesc={(e) => setDesc(e.target.value)}
        desc={desc}
        handleGenerateResume={handleGenerateResume}
        resumeData={resumeData}
      />
    </div>
  );
};

export default Layout;
