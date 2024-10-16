import { saveFormData, getFormDataById } from "../indexDB/Dexie"; // Importing functions to save and get form data from IndexedDB

// Action to load form data by project ID
export const LoadFormData = (projectId) => async (dispatch) => {
  try {
    const data = await getFormDataById(projectId); // Fetching data from IndexedDB using the project ID
    console.log("Data fetched from IndexedDB:", data); // Logging the fetched data
    if (data) {
      dispatch(setFormData(data)); // Dispatching the fetched data to the Redux store
      dispatch(setProjectId(projectId)); // Dispatching the project ID to the Redux store
      console.log("Form data and project ID dispatched to Redux"); // Logging success message
    } else {
      console.log("No data found for the project"); // Logging if no data is found
    }
  } catch (error) {
    console.error("Failed to load form data:", error); // Logging any errors that occur
  }
};

// Save form data to IndexedDB whenever changes occur
export const SaveFormDataToDB = (projectId, formData) => async (dispatch) => {
  try {
    await saveFormData(projectId, formData); // Saving the form data to IndexedDB
    console.log("Form data saved to IndexedDB"); // Logging success message
  } catch (error) {
    console.error("Failed to save form data:", error); // Logging any errors that occur
  }
};

// Action creators
export const updateFormField = (formName, field, value, index = undefined) => ({
  type: "UPDATE_FORM_FIELD", // Action type for updating a form field
  payload: { formName, field, value, index }, // Payload containing form details
});

// Action to set form data in the Redux store
export const setFormData = (formData) => ({
  type: "SET_FORM_DATA", // Action type for setting form data
  payload: formData, // Payload containing the form data
});

// Action for saving project ID in the Redux store
export const setProjectId = (projectId) => ({
  type: "SET_PROJECT_ID", // Action type for setting project ID
  payload: projectId, // Payload containing the project ID
});
