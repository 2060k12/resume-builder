import React from "react";

interface Props {
  label: string;
  state?: string;
  line: number;
  style?: string;
  value?: string;
  onChange?: (e: any) => void;
  onBlur?: () => void;
  maxLength?: number;
}

const TextArea = ({
  label,
  state,
  line,
  style,
  onChange,
  onBlur,
  maxLength = 500,
  value = "",
}: Props) => {
  return (
    <textarea
      className={`border-1 border-gray-300 rounded-xl px-6 py-4 w-full text-lg ${style}`}
      value={value}
      placeholder={label}
      onChange={onChange}
      onBlur={onBlur}
      maxLength={maxLength}
      rows={line}
    />
  );
};

export default TextArea;
