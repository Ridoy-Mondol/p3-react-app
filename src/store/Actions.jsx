import { saveFormData, getFormDataById } from "../indexDb/Dexie";

// Load form data from IndexedDB and dispatch it to Redux
export const LoadFormData = (projectId) => async (dispatch) => {
  try {
    const data = await getFormDataById(projectId);
    console.log("Data from IndexedDB:", data);
    if (data) {
      dispatch(setFormData(data));
    } else {
      console.log("No data found for the project");
    }
  } catch (error) {
    console.error("Failed to load form data:", error);
  }
};

// Save form data to IndexedDB whenever changes occur
export const SaveFormDataToDB = (projectId, formData) => async (dispatch) => {
  try {
    await saveFormData(projectId, formData);
    console.log("Form data saved to IndexedDB");
  } catch (error) {
    console.error("Failed to save form data:", error);
  }
};

// Action creators
export const updateFormField = (formName, field, value, index = undefined) => ({
  type: "UPDATE_FORM_FIELD",
  payload: { formName, field, value, index },
});

export const setFormData = (formData) => ({
  type: "SET_FORM_DATA",
  payload: formData,
});

// Added function for saving project Id
export const setProjectId = (projectId) => ({
  type: "SET_PROJECT_ID",
  payload: projectId,
});
