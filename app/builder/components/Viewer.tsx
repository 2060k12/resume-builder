import Image from "next/image";
import React from "react";

interface Props {
  imgSrc: string;
  title: string;
  onClick: () => void;
}

const Viewer = ({ imgSrc, title, onClick }: Props) => {
  return (
    <div className="shadow-md rounded-2xl bg-[#ffffff]  p-2 border-1 border-gray-300">
      <h2 className="mb-1 mx-2">{title}</h2>
      <Image
        onClick={onClick}
        src={imgSrc}
        width={400}
        height={400}
        alt="Generated Resume"
        className="rounded-2xl  border-gray-50 border-1 hover:p-2 hover:border-none transition-all ease-in duration-300"
      />
    </div>
  );
};

export default Viewer;
