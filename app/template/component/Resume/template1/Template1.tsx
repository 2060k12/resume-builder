import React from "react";
import EachSection from "./EachSection";
import EachSubSection from "./EachSubSection";

interface Props {
  istemplate: boolean;
}

const Template1 = ({ istemplate }: Props) => {
  return (
    <>
      <div className={`flex flex-col w-[210mm] h-[297mm] bg-white  p-10 gap-2`}>
        {/* header */}
        <div className=" mb-2">
          <div>
            <h1 className="text-3xl  w-full text-center font-bold">
              Jake Ryan
            </h1>
          </div>
          <div className=" flex gap-3 justify-center ">
            <a href="http://">
              <h4>123-456-789</h4>
            </a>
            <a href="http://">
              <h4>jake@edu.au</h4>
            </a>
            <a href="http://">
              <h4>linkedin.com/in/jake</h4>
            </a>
            <a href="http://">
              <h4>github.com/jake</h4>
            </a>
          </div>
        </div>
        {/* Education */}
        <EachSection
          title="Education"
          body={
            <div className="flex flex-col gap-1">
              <EachSubSection
                titleLeft="Southwestern University"
                titleRight="Georgetown, TX"
                bodyLeft="Bachelors of Arts in Computer Science, Minor in Business"
                bodyRight="Aug 2014 - May 2018"
              />
              <EachSubSection
                titleLeft="Southwestern University"
                titleRight="Georgetown, TX"
                bodyLeft="Bachelors of Arts in Computer Science, Minor in Business"
                bodyRight="Aug 2014 - May 2018"
              />
              <EachSubSection
                titleLeft="Southwestern University"
                titleRight="Georgetown, TX"
                bodyLeft="Bachelors of Arts in Computer Science, Minor in Business"
                bodyRight="Aug 2014 - May 2018"
              />
            </div>
          }
        />
        {/* Experience */}
        <EachSection
          title="Experience"
          body={
            <div className="flex flex-col gap-1">
              <EachSubSection
                titleLeft="Undergraduate Research Assistant"
                titleRight="June 2020 - Present "
                bodyLeft="Texas A & M Univeersity"
                bodyRight="College Station, TX"
                bulletPoints={[
                  "communicate with managers to setup campus computers used on campus",
                  "communicate with managers to setup campus computers used on campus",
                  "communicate with managers to setup campus computers used on campus",
                ]}
              />
              <EachSubSection
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

        {/* Projects */}
        <EachSection
          title="Projects"
          body={
            <div className="flex flex-col gap-1">
              <EachSubSection
                titleLeft="Work place management system"
                titleRight="June 2020 - Present "
                bodyLeft="Texas A & M Univeersity"
                bodyRight="College Station, TX"
                bulletPoints={[
                  "communicate with managers to setup campus computers used on campus",
                  "communicate with managers to setup campus computers used on campus",
                  "communicate with managers to setup campus computers used on campus",
                ]}
              />
              <EachSubSection
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
        <EachSection
          title="Technical Skills"
          body={
            <div className="flex flex-col gap-1">
              <EachSubSection
                titleLeft="Work place management system"
                titleRight="June 2020 - Present "
                bodyLeft="Texas A & M Univeersity"
                bodyRight="College Station, TX"
                bulletPoints={[
                  "communicate with managers to setup campus computers used on campus",
                  "communicate with managers to setup campus computers used on campus",
                  "communicate with managers to setup campus computers used on campus",
                ]}
              />
            </div>
          }
        />
      </div>
    </>
  );
};

export default Template1;
