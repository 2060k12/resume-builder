"use client";
import { PrimaryButton } from "@/app/components/Buttons";
import TextFileld from "@/app/components/TextFileld";
import React from "react";

const page = () => {
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  return (
    <div className="w-screen h-screen flex justify-center items-center ">
      <div className="bg-white shadow-md h-64 w-100 rounded-2xl p-5 flex flex-col gap-2">
        <h1 className="text-2xl mb-2">Let's keep things secured</h1>

        <TextFileld
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextFileld
          label="Password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <PrimaryButton label="Register" onClick={() => {}} />
      </div>
    </div>
  );
};
export default page;
