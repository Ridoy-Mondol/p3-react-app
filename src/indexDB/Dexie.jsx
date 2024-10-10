import Dexie from "dexie";

// Initialize Dexie with a database for storing form data
const db = new Dexie("WebsiteBuilderDB");

// Define schema (for a project with multiple forms)
db.version(1).stores({
  projects: "++id, projectId, form1, form2, form3, form4, form5, form6, form7",
});

// Function to get form data by projectId from IndexedDB
export const getFormDataById = async (projectId) => {
  try {
    // Ensure projectId is treated as a string for searching
    const data = await db.projects.where("projectId").equals(projectId.toString()).first();
    if (data) {
      console.log("Data retrieved for project ID:", projectId, data);
    } else {
      console.log("No data found for project ID:", projectId);
    }
    return data;
  } catch (error) {
    console.error("Failed to retrieve data:", error);
    return null;
  }
};

export const createOrGetProject = async () => {
  try {
    // Check if there's already a project in localStorage
    let projectId = localStorage.getItem("projectId");

    if (projectId) {
      const existingProject = await db.projects.where("projectId").equals(parseInt(projectId)).first();
      if (existingProject) {
        console.log("Existing project found in IndexedDB with projectId:", projectId);
        return parseInt(projectId); // Ensure projectId is an integer
      }
    }

    const newProjectId = Date.now(); // Use timestamp as project ID

    // Create a new project with empty form data for each form
    const newProjectData = {
      projectId: newProjectId,
      form1: {},
      form2: {},
      form3: {},
      form4: {},
      form5: {},
      form6: {},
      form7: {},
    };

    await db.projects.add(newProjectData); // Save the new project data in IndexedDB

    // Save the newly generated projectId in localStorage
    localStorage.setItem("projectId", newProjectId.toString());

    return newProjectId; // Return the new project ID
  } catch (error) {
    console.error("Failed to create or retrieve project:", error);
  }
};


// Function to save form data in IndexedDB
export const saveFormData = async (projectId, formData) => {
  try {
    // Check if projectId is null or undefined
    if (!projectId) {
      console.error("Cannot save form data: projectId is null or undefined.");
      return; // Exit if projectId is not valid
    }

    console.log("Saving form data for project ID:", projectId, formData); // for debugging

    // Ensure projectId is a string
    await db.projects.where("projectId").equals(projectId.toString()).modify(formData);
    console.log("Form data saved successfully for project ID:", projectId);
  } catch (error) {
    console.error("Failed to save form data:", error);
  }
};


// Function to clear IndexedDB
export const clearIndexedDB = async () => {
  try {
    await db.projects.clear(); // This will clear all the projects
    console.log("IndexedDB cleared successfully.");
  } catch (error) {
    console.error("Failed to clear IndexedDB:", error);
  }
};

export default db;
