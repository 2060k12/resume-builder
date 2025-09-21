"use client";
import React, { useState } from "react";
import EachSection from "./EachSection";
import EachSubSection from "./EachSubSection";
import { TemplateEditProps } from "@/app/template/layout";

const Template1 = ({
  linkGap,
  headerFontSize,
  bodyFontSize,
  eachSubHeaderFontSize,
  fontName,
  nameFontSize,
  resumeData,
}: TemplateEditProps) => {
  return (
    <>
      <div
        style={{ fontFamily: fontName }}
        className={`flex flex-col w-[210mm] h-[297mm] bg-white p-10 gap-2`}
      >
        {/* header */}
        <div className=" mb-2">
          <div>
            <h1
              style={{ fontSize: nameFontSize }}
              className="  w-full text-center font-bold"
            >
              {resumeData?.header.fullName}
            </h1>
          </div>

          <div
            className="flex justify-center"
            style={{ fontSize: bodyFontSize, gap: linkGap }}
          >
            <EachLink
              link="#"
              title={
                resumeData?.header.phoneNumber
                  ? resumeData?.header.phoneNumber
                  : ""
              }
            />
            <EachLink
              link="#"
              title={resumeData?.header.email ? resumeData?.header.email : ""}
            />
            <EachLink
              link={
                resumeData?.header.links.linkedin
                  ? resumeData?.header.links.linkedin
                  : ""
              }
              title="LinkedIn"
            />
            <EachLink
              link={
                resumeData?.header.links.github
                  ? resumeData?.header.links.github
                  : ""
              }
              title="Github"
            />
          </div>
        </div>
        {/* Summary */}
        {resumeData?.summary ? (
          <EachSection
            headerFontSize={headerFontSize}
            bodyFontSize={bodyFontSize}
            title="Professional Summary"
            body={
              <>
                <p>{resumeData?.summary}</p>
              </>
            }
          />
        ) : (
          ""
        )}

        {/* Technical Skills */}
        {resumeData?.technicalSkills ? (
          <EachSection
            headerFontSize={headerFontSize}
            bodyFontSize={bodyFontSize}
            title="Technical Skills"
            body={
              <>
                {resumeData.technicalSkills.map((skills) => (
                  <EachSkills
                    bodyFontSize={bodyFontSize}
                    title={skills.title}
                    body={skills.body}
                  />
                ))}
              </>
            }
          />
        ) : (
          ""
        )}

        {/* Education */}
        {resumeData?.education ? (
          <EachSection
            headerFontSize={headerFontSize}
            bodyFontSize={bodyFontSize}
            title="Education"
            body={
              <div className="flex flex-col gap-1">
                {resumeData.education.map((each) => (
                  <EachSubSection
                    eachSubHeaderFontSize={eachSubHeaderFontSize}
                    bodyFontSize={bodyFontSize}
                    titleLeft={each.titleLeft}
                    titleRight={each.titleRight}
                    bodyLeft={each.bodyLeft}
                    bodyRight={each.bodyRight}
                    bulletPoints={each.bulletPoints ? each.bulletPoints : []}
                  />
                ))}
              </div>
            }
          />
        ) : (
          ""
        )}

        {/* Experience */}
        {resumeData?.experience ? (
          <EachSection
            headerFontSize={headerFontSize}
            bodyFontSize={bodyFontSize}
            title="Education"
            body={
              <div className="flex flex-col gap-1">
                {resumeData.experience.map((each) => (
                  <EachSubSection
                    eachSubHeaderFontSize={eachSubHeaderFontSize}
                    bodyFontSize={bodyFontSize}
                    titleLeft={each.titleLeft}
                    titleRight={each.titleRight}
                    bodyLeft={each.bodyLeft}
                    bodyRight={each.bodyRight}
                    bulletPoints={each.bulletPoints ? each.bulletPoints : []}
                  />
                ))}
              </div>
            }
          />
        ) : (
          ""
        )}
        {/* Projects */}
        {resumeData?.projects ? (
          <EachSection
            headerFontSize={headerFontSize}
            bodyFontSize={bodyFontSize}
            title="Education"
            body={
              <div className="flex flex-col gap-1">
                {resumeData.projects.map((each) => (
                  <EachSubSection
                    eachSubHeaderFontSize={eachSubHeaderFontSize}
                    bodyFontSize={bodyFontSize}
                    titleLeft={each.titleLeft}
                    titleRight={each.titleRight}
                    bodyLeft={each.bodyLeft}
                    bodyRight={each.bodyRight}
                    bulletPoints={each.bulletPoints ? each.bulletPoints : []}
                  />
                ))}
              </div>
            }
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Template1;

const EachSkills = ({
  bodyFontSize,
  title,
  body,
}: {
  title: string;
  body: string;

  bodyFontSize: number;
}) => {
  return (
    <div className="grid grid-cols-12">
      <h3 style={{ fontSize: body }} className="col-span-2 font-bold">
        {title}
      </h3>
      <h4 style={{ fontSize: bodyFontSize }} className="col-span-10">
        {body}
      </h4>
    </div>
  );
};

const EachLink = ({
  link,
  title,
  style,
}: {
  link: string;
  title: string;
  style?: React.CSSProperties;
}) => {
  return (
    <div>
      <a style={style} href={link}>
        <h4>{title}</h4>
      </a>
    </div>
  );
};
