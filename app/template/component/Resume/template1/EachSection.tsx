import React, { ReactNode } from "react";

interface Props {
  title: string;
  body: ReactNode;
  headerFontSize: number;
  bodyFontSize: number;
}
const EachSection = ({
  title,
  body,
  headerFontSize = 20,
  bodyFontSize = 13,
}: Props) => {
  return (
    <div>
      <h2 style={{ fontSize: headerFontSize }}>{title}</h2>
      <hr />
      <div style={{ fontSize: bodyFontSize }}>{body}</div>
    </div>
  );
};

export default EachSection;
