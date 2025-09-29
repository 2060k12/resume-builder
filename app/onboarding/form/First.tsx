"use client";
import React, { useState } from "react";
import FormTemplateComponent from "./template/FormTemplateComponent";
import TextFileld from "@/app/components/TextFileld";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { updateForm } from "@/store/features/formSlice";

const First = () => {
  // todo:// Need to add social media screen later

  const dispatch = useDispatch();
  const form = useSelector((state: RootState) => state.form);

  const [fullName, setFullName] = useState(form.fullName);
  const [phoneNumber, setPhoneNumber] = useState(form.phoneNumber);
  const [email, setEmail] = useState(form.email);
  const [address, setAddress] = useState(form.address);

  const handleChange = () => {
    dispatch(updateForm({ fullName, phoneNumber, email, address }));
  };

  return (
    <FormTemplateComponent
      headerTitle={"Let's Start with the Basics"}
      subTitle={
        " First, we'll need some key details to identify you and make sure employers can reach out."
      }
      formBody={
        <>
          <TextFileld
            type="name"
            label="Full Name"
            value={fullName}
            onBlur={handleChange}
            onChange={(e) => setFullName(e.target.value)}
          />
          <TextFileld
            type="tel"
            label="Phone Number"
            value={phoneNumber}
            onBlur={handleChange}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <TextFileld
            type="email"
            label="Email"
            value={email}
            onBlur={handleChange}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextFileld
            type="text"
            label="Address"
            value={address}
            onBlur={handleChange}
            onChange={(e) => setAddress(e.target.value)}
          />
        </>
      }
    />
  );
};

export default First;
