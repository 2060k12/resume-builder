import React, { ReactNode } from "react";

interface Props {
  titleLeft: string;
  titleRight: string;
  bodyLeft: string;
  bodyRight: string;
  bulletPoints?: string[];
  eachSubHeaderFontSize: number;
  bodyFontSize: number;
}
const EachSubSection = ({
  titleLeft,
  titleRight,
  bodyLeft,
  bodyRight,
  bulletPoints,
  eachSubHeaderFontSize = 13,
  bodyFontSize = 12,
}: Props) => {
  return (
    <div className="">
      <div className="flex justify-between">
        <h3 style={{ fontSize: eachSubHeaderFontSize }} className="font-bold ">
          {titleLeft}
        </h3>
        <h4 style={{ fontSize: bodyFontSize }} className="italic">
          {titleRight}
        </h4>
      </div>
      <div className="flex justify-between">
        <h4 style={{ fontSize: bodyFontSize }}>{bodyLeft}</h4>
        <h4 style={{ fontSize: bodyFontSize }} className="italic">
          {bodyRight}
        </h4>
      </div>

      {bulletPoints ? (
        <div className=" mt-1 ">
          <ul className="list-disc list-inside ml-4">
            {bulletPoints.map((eachPoint, index) => (
              <li style={{ fontSize: bodyFontSize }} key={index}>
                {eachPoint}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default EachSubSection;
