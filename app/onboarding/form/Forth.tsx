"use client";
import React, { useEffect } from "react";

import FormTemplateComponent from "./template/FormTemplateComponent";
import { CustomButton } from "@/app/components/Buttons";
import TextFileld from "@/app/components/TextFileld";
import TextArea from "@/app/components/TextArea";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/store/hooks";
import { RootState } from "@/store/store";
import { updateForm } from "@/store/features/formSlice";
import { EachHeading } from "./Third";

const Forth = () => {
  const dispatch = useDispatch();
  const form = useAppSelector((select: RootState) => select.form);
  const [entries, setEntries] = React.useState(() =>
    form.experience.length
      ? form.experience
      : [
          {
            jobTitle: "",
            company: "",
            location: "",
            responsibilityAchivements: "",
            timePeriod: "",
          },
        ]
  );

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const handleSelect = (index: number) => {
    setSelectedIndex(index);
  };

  const handleAdd = () => {
    if (entries.length === 3) return;
    setEntries((prev) => {
      const newEntries = [
        ...prev,
        {
          jobTitle: "",
          company: "",
          location: "",
          responsibilityAchivements: "",
          timePeriod: "",
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
    dispatch(updateForm({ experience: entries }));
  }, entries);

  return (
    <FormTemplateComponent
      headerTitle={"Show Off Your Experience"}
      subTitle={
        "List your most recent and relevant work history. Be sure to include your main duties and accomplishments."
      }
      formBody={
        <>
          <div className="grid grid-cols-4 gap-2">
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
              <div className="flex gap-2">
                <TextFileld
                  type="text"
                  label="Job Title"
                  value={entries[selectedIndex].jobTitle}
                  onChange={(e) => handleChange("jobTitle", e.target.value)}
                />
                <div className="w-[80%]">
                  <TextFileld
                    type="text"
                    label="Company Name"
                    value={entries[selectedIndex].company}
                    onChange={(e) => handleChange("company", e.target.value)}
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <TextFileld
                  type="text"
                  label="Time Period (Start/End Date)"
                  value={entries[selectedIndex].timePeriod}
                  onChange={(e) => handleChange("timePeriod", e.target.value)}
                />{" "}
                <div className="w-[80%]">
                  <TextFileld
                    type="text"
                    label="Location"
                    value={entries[selectedIndex].location}
                    onChange={(e) => handleChange("location", e.target.value)}
                  />
                </div>
              </div>

              <TextArea
                line={2}
                style="mb-2"
                label="Responsibilities/Achievements"
                value={entries[selectedIndex].responsibilityAchivements}
                onChange={(e) =>
                  handleChange("responsibilityAchivements", e.target.value)
                }
              />
            </div>
          </div>
        </>
      }
    />
  );
};

export default Forth;
