"use client";
import React from "react";
import TextFileld from "../TextFileld";
import { PrimaryButton } from "../Buttons";
import FormTemplateComponent from "./template/FormTemplateComponent";

const First = () => {
  return (
    <FormTemplateComponent
      headerTitle={"Let's Start with the Basics"}
      subTitle={
        " First, we'll need some key details to identify you and make sure employers can reach out."
      }
      formBody={
        <>
          <TextFileld type="name" label="Full Name" />
          <TextFileld type="tel" label="Phone Number" />
          <TextFileld type="email" label="Email" />
          <TextFileld type="text" label="Address" />
        </>
      }
      formButtons={
        <>
          <PrimaryButton
            label="Continue"
            onClick={() => {
              console.log("");
            }}
          />
        </>
      }
    />
  );
};

export default First;
