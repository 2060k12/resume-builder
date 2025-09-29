export interface AcademicJourney {
  schoolName: string;
  location: string;
  certificationName: string;
  gpa: string;
  fieldOfStudy: string;
  graduationYear: string;
}

export interface Experience {
  jobTitle: string;
  company: string;
  timePeriod: string;
  location: string;
  responsibilityAchivements: string;
}

export interface FormState {
  fullName: string;
  phoneNumber: string;
  email: string;
  address: string;
  professionalJourneyStory: string;
  academicJourney: AcademicJourney[];
  experience: Experience[];
  hardSkills: string;
  softSkills: string;
}
