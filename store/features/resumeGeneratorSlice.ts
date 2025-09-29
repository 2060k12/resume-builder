import { ResumeData } from "@/types/Resume";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ResumeData = {
  header: {
    fullName: "",
    phoneNumber: "",
    email: "",
    links: {
      linkedin: "",
      github: "",
    },
  },
  summary: "",
  education: [],
  experience: [],
  projects: [],
  technicalSkills: [],
};

const resumeSlice = createSlice({
  name: "resumeGenerator",
  initialState,
  reducers: {
    updateResume: (state, action: PayloadAction<Partial<ResumeData>>) => {
      // Use Immer to merge nested data without losing properties
      if (action.payload.header) {
        state.header = { ...state.header, ...action.payload.header };
      }
      if (action.payload.summary) {
        state.summary = action.payload.summary;
      }
      if (action.payload.education) {
        state.education = action.payload.education;
      }
      if (action.payload.experience) {
        state.experience = action.payload.experience;
      }
      if (action.payload.projects) {
        state.projects = action.payload.projects;
      }
      if (action.payload.technicalSkills) {
        state.technicalSkills = action.payload.technicalSkills;
      }
    },
    resetResume: () => initialState,
  },
});

export const { updateResume, resetResume } = resumeSlice.actions;
export default resumeSlice.reducer;
