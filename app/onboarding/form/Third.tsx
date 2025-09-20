"use client";
import React, { useEffect } from "react";

import FormTemplateComponent from "./template/FormTemplateComponent";
import { CustomButton } from "@/app/components/Buttons";
import TextFileld from "@/app/components/TextFileld";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { updateForm } from "@/store/features/formSlice";

const Third = () => {
  const dispatch = useDispatch();
  const form = useSelector((state: RootState) => state.form);
  const [entries, setEntries] = React.useState(() =>
    form.academicJourney.length
      ? form.academicJourney
      : [
          {
            schoolName: "",
            location: "",
            certificationName: "",
            gpa: "",
            fieldOfStudy: "",
            graduationYear: "",
          },
        ]
  );
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const handleSelect = (index: number) => {
    setSelectedIndex(index);
  };

  const handleAdd = () => {
    if (entries.length === 4) return;
    setEntries((prev) => {
      const newEntries = [
        ...prev,
        {
          schoolName: "",
          location: "",
          certificationName: "",
          gpa: "",
          fieldOfStudy: "",
          graduationYear: "",
        },
      ];
      setSelectedIndex(newEntries.length - 1); // select newly added form
      return newEntries;
    });
  };

  const handleChange = (field: string, value: string) => {
    setEntries((prev) =>
      prev.map((entry, idx) =>
        idx === selectedIndex ? { ...entry, [field]: value } : entry
      )
    );
  };

  useEffect(() => {
    dispatch(updateForm({ academicJourney: entries }));
  }, entries);

  return (
    <FormTemplateComponent
      headerTitle={"Your Academic Journey"}
      subTitle={
        "Provide details about your degrees and certifications. You can add more than one."
      }
      formBody={
        <>
          <div className="grid grid-cols-4 gap-2">
            {/* Left: Headings + Add button */}
            <div className="col-span-1 bg-gray-50 rounded-2xl px-2 py-3 shadow-2xl border-gray-200 border-1 flex flex-col gap-2">
              {entries.map((_, idx) => (
                <EachHeading
                  key={idx}
                  title={`Entry ${idx + 1}`}
                  isSelected={selectedIndex === idx}
                  onClick={() => handleSelect(idx)}
                />
              ))}
              <CustomButton
                label="Add"
                onClick={handleAdd}
                style="w-full border-gray-400 border-1 p-1 "
              />
            </div>

            <div className="col-span-3 flex flex-col gap-2">
              <TextFileld
                type="text"
                label="School Name"
                value={entries[selectedIndex].schoolName}
                onChange={(e) => handleChange("schoolName", e.target.value)}
              />
              <TextFileld
                type="text"
                label="Location"
                value={entries[selectedIndex].location}
                onChange={(e) => handleChange("location", e.target.value)}
              />
              <div className="flex gap-2">
                <TextFileld
                  type="text"
                  label="Degree/Certification"
                  value={entries[selectedIndex].certificationName}
                  onChange={(e) =>
                    handleChange("certificationName", e.target.value)
                  }
                />
                <div className="w-32">
                  <TextFileld
                    type="text"
                    label="GPA"
                    value={entries[selectedIndex].gpa}
                    onChange={(e) => handleChange("gpa", e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <TextFileld
                  type="text"
                  label="Field of Study"
                  value={entries[selectedIndex].fieldOfStudy}
                  onChange={(e) => handleChange("fieldOfStudy", e.target.value)}
                />
                <TextFileld
                  type="text"
                  label="Graduation Year"
                  value={entries[selectedIndex].graduationYear}
                  onChange={(e) =>
                    handleChange("graduationYear", e.target.value)
                  }
                />
              </div>
            </div>
          </div>
        </>
      }
    />
  );
};

export default Third;

export const EachHeading = ({
  title,
  onClick,
  isSelected = false,
}: {
  title: string;
  onClick: () => void;
  isSelected?: boolean;
}) => {
  return (
    <h4
      onClick={onClick}
      className={`${
        isSelected ? "bg-blue-400 text-white" : "bg-gray-200 text-black"
      } w-full px-4 py-2 rounded-xl shadow-2xl`}
    >
      {title}
    </h4>
  );
};
