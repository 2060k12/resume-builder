import { PrimaryButton, SecondaryButton } from "@/app/components/Buttons";
import TextFileld from "@/app/components/TextFileld";
import { RiBold, RiItalic, RiLink, RiText } from "@remixicon/react";
import React from "react";

interface Props {
  headerFontSize: number;
  eachSubHeaderFontSize: number;
  bodyFontSize: number;
  handleHeaderFontSizeChange: (e: any) => void;
  handleSubHeadingFontSizeChange: (e: any) => void;
  handleBodyFontSizeChange: (e: any) => void;
}

const RightBar = ({
  headerFontSize,
  eachSubHeaderFontSize,
  bodyFontSize,
  handleHeaderFontSizeChange,
  handleBodyFontSizeChange,
  handleSubHeadingFontSizeChange,
}: Props) => {
  return (
    <div className="bg-[#2c2c2c] text-white w-1/3 rounded-2xl m-4 border-1 border-[#4c4c4c] px-2 py-4 flex flex-col gap-3">
      <div className="flex gap-2">
        <SecondaryButton label="Back" onClick={() => {}} />
        <PrimaryButton label="Save" onClick={() => {}} />
      </div>
      <div className="flex flex-col gap-1">
        {/* Header Font Size */}
        <div className="flex justify-between items-center gap-3 ">
          <h1 className="w-1/2 rounded-lg bg-red-100 px-4 text-black border-1 p-1">
            Heading
          </h1>
          <select
            className="border-1 p-2 rounded-lg w-1/2  "
            id="options"
            value={headerFontSize}
            onChange={handleHeaderFontSizeChange}
          >
            {Array.from({ length: 25 }, (_, i) => (
              <option key={i + 15} value={i + 15}>
                {" "}
                {i + 15}
              </option>
            ))}
          </select>
        </div>

        {/* sub heading */}
        <div className="flex justify-between items-center gap-3 ">
          <h1 className="w-1/2 rounded-lg bg-red-100 px-4 text-black border-1 p-1">
            Sub Heading
          </h1>
          <select
            className="border-1 p-2 rounded-lg w-1/2  "
            id="options"
            value={eachSubHeaderFontSize}
            onChange={handleSubHeadingFontSizeChange}
          >
            {Array.from({ length: 15 }, (_, i) => (
              <option key={i + 10} value={i + 10}>
                {i + 10}
              </option>
            ))}
          </select>
        </div>

        {/* Body Font Size Change */}
        <div className="flex justify-between items-center gap-3 ">
          <h1 className="w-1/2 rounded-lg bg-red-100 px-4 text-black border-1 p-1">
            Body
          </h1>
          <select
            className="w-1/2 border-1 p-2 rounded-lg "
            id="bodyFontSize"
            value={bodyFontSize}
            onChange={handleBodyFontSizeChange}
          >
            {Array.from({ length: 13 }, (_, i) => (
              <option key={i} value={i + 10}>
                {i + 10}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex justify-center items-center gap-2">
        <div className="border-1 p-2 rounded-lg bg-gray-400">
          <RiText color="white" />
        </div>
        <TextFileld
          label="Edit here.."
          type="text"
          value=""
          onChange={() => {}}
        />
      </div>
      <div className="flex justify-center items-center gap-2">
        <div className="border-1 p-2 rounded-lg bg-gray-400">
          <RiLink color="white" />
        </div>
        <TextFileld label="Link" type="text" value="" onChange={() => {}} />
      </div>

      <div className="flex gap-2">
        <div className="border-1 p-1 rounded-lg">
          <RiBold />
        </div>
        <div className="border-1 p-1 rounded-lg">
          <RiItalic />
        </div>
      </div>
    </div>
  );
};

export default RightBar;
