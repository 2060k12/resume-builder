"use client";
import React, { ReactNode } from "react";
import { PrimaryButton } from "../components/Buttons";
import BuilderPage from "./page";

interface Props {
  childrens: ReactNode;
}
const Layout = ({ childrens }: Props) => {
  return (
    <div className="p-4 flex h-screen w-full justify-between gap-4 ">
      <div className="p-5 w-[20%] bg-white shadow-2xl rounded-3xl  flex flex-col">
        <div className="h-fit mb-2">
          <h1 className="text-2xl w-full text-center  bg-[#f7f2f2] p-2 rounded-xl shadow-xs">
            Jobs
          </h1>
        </div>
        <div className="justify-start h-full">
          <PrimaryButton label="Add Job" onClick={() => {}} />
        </div>
      </div>

      <BuilderPage />
    </div>
  );
};

export default Layout;
