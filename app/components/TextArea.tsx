import React from "react";

interface Props {
  label: string;
  state?: string;
  line: number;
  style?: string;
  value?: string;
  onChange?: (e: any) => void;
  onBlur?: () => void;
}

const TextArea = ({
  label,
  state,
  line,
  style,
  onChange,
  onBlur,
  value = "",
}: Props) => {
  return (
    <textarea
      className={`border-1 border-gray-300 rounded-xl px-6 py-4 w-full text-lg ${style}`}
      value={value}
      placeholder={label}
      onChange={onChange}
      onBlur={onBlur}
      maxLength={500}
      rows={line}
    />
  );
};

export default TextArea;
