import React, { ReactNode } from "react";

interface Props {
  titleLeft: string;
  titleRight: string;
  bodyLeft: string;
  bodyRight: string;
  bulletPoints?: string[];
}
const EachSubSection = ({
  titleLeft,
  titleRight,
  bodyLeft,
  bodyRight,
  bulletPoints,
}: Props) => {
  return (
    <div className="">
      <div className="flex justify-between">
        <h3 className="font-bold text-lg ">{titleLeft}</h3>
        <h4 className="italic">{titleRight}</h4>
      </div>
      <div className="flex justify-between">
        <h4>{bodyLeft}</h4>
        <h4 className="italic">{bodyRight}</h4>
      </div>

      {bulletPoints ? (
        <div className=" mt-1 ">
          <ul className="list-disc list-inside ml-4">
            {bulletPoints.map((eachPoint, index) => (
              <li key={index}>{eachPoint}</li>
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
