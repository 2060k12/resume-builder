import {
  CustomButton,
  PrimaryButton,
  SecondaryButton,
} from "@/app/components/Buttons";
import React from "react";

const HeaderButton = ({
  downloadOnClick,
  generateOnClick,
  chooseTemplateOnClick,
  deleteOnClick,
}: {
  downloadOnClick: () => void;
  generateOnClick: () => void;
  chooseTemplateOnClick: () => void;
  deleteOnClick: () => void;
}) => {
  return (
    <div className="h-fit rounded-xl mb-2 grid grid-cols-10 gap-2">
      <div className="col-span-2">
        <PrimaryButton label="Generate Now" onClick={generateOnClick} />
      </div>
      <div className="col-span-1">
        <SecondaryButton label="Download" onClick={downloadOnClick} />
      </div>
      <div className="col-span-2">
        <SecondaryButton
          label="Choose Template"
          onClick={chooseTemplateOnClick}
        />
      </div>
      <div className="col-span-1">
        <CustomButton
          style="bg-red-500 text-white hover:bg-red-300 p-3"
          label="Delete"
          onClick={deleteOnClick}
        />
      </div>
    </div>
  );
};

export default HeaderButton;
