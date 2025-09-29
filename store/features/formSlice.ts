import { FormState } from "@/types/Form";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
