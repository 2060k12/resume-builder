import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AcademicJourney {
  schoolName: string;
  location: string;
  certificationName: string;
  gpa: string;
  fieldOfStudy: string;
  graduationYear: string;
}

interface Experience {
  jobTitle: string;
  company: string;
  timePeriod: string;
  location: string;
  responsibilityAchivements: string;
}

interface FormState {
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

const initialState: FormState = {
  fullName: "",
  phoneNumber: "",
  email: "",
  address: "",
  professionalJourneyStory: "",
  academicJourney: [],
  experience: [],
  hardSkills: "",
  softSkills: "",
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateForm: (state, action: PayloadAction<Partial<FormState>>) => {
      return { ...state, ...action.payload };
    },
    resetForm: () => initialState,
  },
});
export const { updateForm, resetForm } = formSlice.actions;
export default formSlice.reducer;
