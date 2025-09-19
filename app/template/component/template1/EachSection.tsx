import React, { ReactNode } from "react";

interface Props {
  title: string;
  body: ReactNode;
}
const EachSection = ({ title, body }: Props) => {
  return (
    <div>
      <h2 className="text-xl">{title}</h2>
      <hr />
      <div>{body}</div>
    </div>
  );
};

export default EachSection;
