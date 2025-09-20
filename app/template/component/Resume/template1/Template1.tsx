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
              Jake Ryan
            </h1>
          </div>

          <div
            className="flex justify-center"
            style={{ fontSize: bodyFontSize, gap: linkGap }}
          >
            <EachLink link="#" title="123-456-789" />
            <EachLink link="#" title="jake@edu.au" />
            <EachLink link="#" title="linkedin.com/in/jake" />
            <EachLink link="#" title="github.com/jake" />
          </div>
        </div>
        {/* Summary */}
        <EachSection
          headerFontSize={headerFontSize}
          bodyFontSize={bodyFontSize}
          title="Professional Summary"
          body={
            <>
              <p>
                As a full-stack developer specializing in mobile applications, I
                bring a versatile and adaptable skill set from working with
                diverse technology stacks. Although mobile development is my
                core expertise, I am now deliberately expanding my skills in
                backend development to strengthen my understanding of system
                architecture and design.
              </p>
            </>
          }
        />

        <EachSection
          headerFontSize={headerFontSize}
          bodyFontSize={bodyFontSize}
          title="Technical Skills"
          body={
            <>
              <EachSkills
                bodyFontSize={bodyFontSize}
                title="Languages"
                body="Kotlin, Java, Swift, Dart, TypeScript, JavaScript, C#, C++, SQL, HTML, CSS"
              />
              <EachSkills
                bodyFontSize={bodyFontSize}
                title="Backend"
                body="Node.js, Express.js, .NET (C#), Firebase, REST APIs, Socket.IO, GraphQL"
              />
              <EachSkills
                bodyFontSize={bodyFontSize}
                title="Database"
                body="PostgreSQL, MySQL, SQL Server, MongoDB, Redis, Data Modeling & Database Design, NoSQL"
              />
              <EachSkills
                bodyFontSize={bodyFontSize}
                title="Mobile Development"
                body="React Native, Flutter, Android (Java/Kotlin, Jetpack Compose), iOS (Swift, SwiftUI)"
              />
              <EachSkills
                bodyFontSize={bodyFontSize}
                title="Cloud & DevOps"
                body="React Native, Flutter, Android (Java/Kotlin, Jetpack Compose), iOS (Swift, SwiftUI)"
              />
              <EachSkills
                bodyFontSize={bodyFontSize}
                title="Testing"
                body="Unit & Integration Testing (Jest, Mocha)"
              />
              <EachSkills
                bodyFontSize={bodyFontSize}
                title="Tools & Practices"
                body="Git, Figma, Postman, Trello, Agile/Scrum)"
              />
            </>
          }
        />

        {/* Education */}
        <EachSection
          headerFontSize={headerFontSize}
          bodyFontSize={bodyFontSize}
          title="Education"
          body={
            <div className="flex flex-col gap-1">
              <EachSubSection
                eachSubHeaderFontSize={eachSubHeaderFontSize}
                bodyFontSize={bodyFontSize}
                titleLeft="Bachelor of Information Technology (Mobile App Development)"
                titleRight="Aug 2022 - May 2025"
                bodyLeft="Academy of Interactive Technology"
                bodyRight="Sydney, Australia"
              />
            </div>
          }
        />
        {/* Experience */}
        <EachSection
          headerFontSize={headerFontSize}
          bodyFontSize={bodyFontSize}
          title="Experience"
          body={
            <div className="flex flex-col gap-1">
              <EachSubSection
                eachSubHeaderFontSize={eachSubHeaderFontSize}
                bodyFontSize={bodyFontSize}
                titleLeft="Mobile App Developer Intern"
                titleRight="Sep 2024 – Dec 2024"
                bodyLeft="Moyai"
                bodyRight="Remote"
                bulletPoints={[
                  "Developed and maintained responsive front-end components for mobile applications using Flutter and Dart.",
                  "Engineered an Express.js server to synchronize data from the Zoho Creator API and integrated Firebase for authentication, real-time database, and push notifications.",
                  "Collaborated effectively in an Agile environment, using Git for version control and Trello for task management to consistently meet sprint deadlines.",
                ]}
              />
            </div>
          }
        />

        {/* Projects */}
        <EachSection
          headerFontSize={headerFontSize}
          bodyFontSize={bodyFontSize}
          title="Projects"
          body={
            <div className="flex flex-col gap-1">
              <EachSubSection
                eachSubHeaderFontSize={eachSubHeaderFontSize}
                bodyFontSize={bodyFontSize}
                titleLeft="Workplace Management Application"
                titleRight="Nov 2023 – Apr 2024"
                bodyLeft="Node.js, PostgreSQL, React"
                bodyRight="Acadamy of interactive technology"
                bulletPoints={[
                  "Led a team of 4 developers in the end-to-end development of a full-stack, cross-platform application using Agile methodology",
                  "Architected a secure REST API using Express.js and PostgreSQL to manage employee rosters, leave requests, and user authentication, achieving 99.9% uptime.",
                  "Architected a secure REST API using Express.js and PostgreSQL to manage employee rosters, leave requests, and user authentication, achieving 99.9% uptime.",
                ]}
              />
              <EachSubSection
                eachSubHeaderFontSize={eachSubHeaderFontSize}
                bodyFontSize={bodyFontSize}
                titleLeft="Moyai"
                titleRight="June 2020 - Present "
                bodyLeft="Full-stack developer"
                bodyRight="Remote"
                bulletPoints={[
                  "communicate with managers to setup campus computers used on campus",
                  "communicate with managers to setup campus computers used on campus",
                  "communicate with managers to setup campus computers used on campus",
                ]}
              />
            </div>
          }
        />

        {/* Technical Skills */}
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
