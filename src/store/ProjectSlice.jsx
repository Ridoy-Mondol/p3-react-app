import { createSlice } from "@reduxjs/toolkit";

// Initial state for the project slice
const initialState = {
  projectId: null,
  formData: {},
};

// slice for project management
const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    // Action to set the projectId
    setProjectId: (state, action) => {
      console.log(
        "Inside setProjectId reducer. Action payload:",
        action.payload
      );
      state.projectId = action.payload;
    },
    // Optionally, add an action to save form data
    setFormData: (state, action) => {
      state.formData = {
        ...state.formData,
        ...action.payload,
      };
    },

    clearProject(state) {
      state.projectId = null;
      state.formData = {};
      state.form1 = {};
      state.form2 = {};
      state.form3 = {};
      state.form4 = {};
      state.form5 = {};
      state.form6 = {};
      state.form7 = {};
    },
  },
});

// Export the actions to use in components
export const { setProjectId, setFormData, clearProject } = projectSlice.actions;

// reducer to add to the store
export default projectSlice.reducer;
