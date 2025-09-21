import Image from "next/image";
import React, { ReactNode } from "react";

interface Props {
  Item: ReactNode;
  title: string;
  onClick: () => void;
}

const Viewer = ({ Item, title, onClick }: Props) => {
  return (
    <div className="shadow-md rounded-2xl bg-[#ffffff]  p-2 border-1 border-gray-300">
      <h2 className="mx-2 text-3xl">{title}</h2>
      <div className="scale-95 border-gray-300 border-2 shadow-lg"> {Item}</div>
    </div>
  );
};

export default Viewer;
