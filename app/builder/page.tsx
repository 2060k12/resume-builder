"use client";
import React, { useEffect, useState } from "react";
import {
  CustomButton,
  PrimaryButton,
  SecondaryButton,
} from "../components/Buttons";
import TextArea from "../components/TextArea";
import TextFileld from "../components/TextFileld";
import { RiSendPlaneFill } from "@remixicon/react";
import Viewer from "./components/Viewer";
import { useRouter } from "next/navigation";
import axios from "axios";
import OpenAI from "openai";
const BuilderPage = () => {
  const router = useRouter();
  const [desc, setDesc] = useState("");
  const userId = "842db853-2d8e-4ba9-b96a-383b3eeb8007";

  useEffect(() => {
    getUserDetails();
  }, []);

  async function getUserDetails() {
    try {
      const res = await axios.get("/api/users/details/" + userId);
      const userData = res.data;

      // const resume = await axios.post("/api/openai", {
      //   user: userData,
      //   job: {
      //     title: "Full-Stack Mobile Developer",
      //     description:
      //       "Looking for a developer with React Native, Node.js, AI integration experience...",
      //   },
      // });

      // console.log(resume);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="p-5 w-full h-full bg-white  shadow-2xl rounded-3xl flex flex-col ">
      <div className="h-fit rounded-xl mb-2 grid grid-cols-10 gap-2">
        <div className="col-span-2">
          <PrimaryButton label="Generate Now" onClick={() => {}} />
        </div>
        <div className="col-span-1">
          <SecondaryButton label="Download" onClick={() => {}} />
        </div>
        <div className="col-span-2">
          <SecondaryButton label="Choose Template" onClick={() => {}} />
        </div>
        <div className="col-span-1">
          <CustomButton
            style="bg-red-500 text-white hover:bg-red-300 p-3"
            label="Delete"
            onClick={() => {}}
          />
        </div>
      </div>

      <TextArea
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        style="shadow-sm  mb-5"
        label="Paste your Job Desctiption here."
        line={4}
      />
      {/* <div className="grid grid-cols-2 h-full gap-5"> */}
      <div className=" h-full w-full justify-between flex items-center ">
        {/* <div className="shadow-md  aspect-[210/297] bg-white w-[350px] h-full  "></div> */}
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
          <div className="shadow-md rounded-2xl border-1 border-gray-300 p-4 ">
            <h2 className="mb-1 bg-amber-400 text-white px-4 py-2 rounded-2xl ">
              Talk to AI
            </h2>
            <div className="w-full h-[90%]  rounded-2xl mt-3 flex flex-col justify-between">
              <div className="  bg-gray-100 h-full mb-2">a</div>
              <div className=" h-fit rounded-xl flex justify-center items-center gap-2">
                <div>
                  <TextFileld
                    label="Enter your message"
                    type="text"
                    value=""
                    onChange={(e) => {}}
                  />
                </div>
                <div className=" p-3 rounded-xl bg-blue-400">
                  <RiSendPlaneFill color="white" size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuilderPage;
