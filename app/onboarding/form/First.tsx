"use client";
import React from "react";
import FormTemplateComponent from "./template/FormTemplateComponent";
import TextFileld from "@/app/components/TextFileld";

const First = () => {
  // todo:// Need to add social media screen later
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
    />
  );
};

export default First;
