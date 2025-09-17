import React from "react";

interface Props {
  label: string;
  onClick: () => void;
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

const SecondaryButton = () => {
  return <div>Buttons</div>;
};

export { PrimaryButton, SecondaryButton };
