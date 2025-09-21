export interface TemplateEditProps {
  linkGap: number;
  headerFontSize: number;
  bodyFontSize: number;
  eachSubHeaderFontSize: number;
  nameFontSize: number;
  fontName: FontFamily;
  resumeData?: ResumeData;
}

interface Link {
  linkedin: string;
  github: string;
}

interface Header {
  fullName: string;
  phoneNumber: string;
  email: string;
  links: Link;
}

interface SectionItem {
  titleLeft: string;
  titleRight: string;
  bodyLeft: string;
  bodyRight: string;
  bulletPoints?: string[];
}
interface TechnicalSkill {
  title: string;
  body: string;
}

export interface ResumeData {
  header?: Header;
  summary?: string;
  education?: SectionItem[];
  experience?: SectionItem[];
  projects?: SectionItem[];
  technicalSkills: TechnicalSkill[];
}

export type FontFamily = "Arial" | "Roboto" | "Times New Roman" | "Verdana";
