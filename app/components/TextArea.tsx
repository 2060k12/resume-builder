import React from "react";

interface Props {
  label: string;
  state?: string;
  line: number;
}

const TextArea = ({ label, state, line }: Props) => {
  return (
    <textarea
      className="border-1 border-gray-300 rounded-xl px-6 py-4 w-full text-lg"
      placeholder={label}
      maxLength={500}
      rows={line}
    />
  );
};

export default TextArea;
