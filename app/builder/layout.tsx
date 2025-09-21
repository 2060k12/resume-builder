"use client";
import React, { ReactNode } from "react";
import { PrimaryButton } from "../components/Buttons";
import BuilderPage from "./page";
import MenuBar from "./components/MenuBar";

interface Props {
  childrens: ReactNode;
}
const Layout = ({ childrens }: Props) => {
  return (
    <div className="p-4 flex h-screen w-full justify-between gap-4 ">
      <MenuBar onClick={() => {}} />
      <BuilderPage />
    </div>
  );
};

export default Layout;
