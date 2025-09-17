import React from "react";

interface Props {
  label: string;
  state?: string;
  type: React.HTMLInputTypeAttribute;
}

const TextFileld = ({ label, state, type }: Props) => {
  return (
    <input
      type={type}
      className="border-1 border-gray-300 rounded-xl px-4 py-2 w-full text-xl"
      placeholder={label}
    />
  );
};

export default TextFileld;
