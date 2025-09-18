import React from "react";

interface Props {
  label: string;
  onClick: () => void;
  style?: string;
}
const PrimaryButton = ({ label, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-400 rounded-xl w-full text-white p-3 hover:bg-blue-300"
    >
      {label}
    </button>
  );
};

const SecondaryButton = ({ label, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="bg-gray-300 text-black  rounded-xl w-full  p-3 hover:bg-gray-200"
    >
      {label}
    </button>
  );
};

const CustomButton = ({ label, onClick, style }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`${style} text-black  rounded-xl w-full  p-3`}
    >
      {label}
    </button>
  );
};

export { PrimaryButton, SecondaryButton, CustomButton };
