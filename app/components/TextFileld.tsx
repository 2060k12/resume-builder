import React from "react";

interface Props {
  label: string;
  state?: string;
  type: React.HTMLInputTypeAttribute;
  value?: string;
  onChange?: (e: any) => void;
  onBlur?: () => void;
}

const TextFileld = ({
  label,
  state,
  type,
  onChange,
  onBlur,
  value = "",
}: Props) => {
  return (
    <input
      type={type}
      className="border-1 border-gray-300 rounded-xl px-4 py-2 w-full text-xl"
      value={value}
      placeholder={label}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};

export default TextFileld;
