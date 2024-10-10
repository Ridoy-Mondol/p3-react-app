import { useDispatch } from "react-redux";
import { setProjectId } from "../store/ProjectSlice";
import Dexie from "dexie";

// Initialize Dexie with a database for storing form data
const db = new Dexie("WebsiteBuilderDB");

// Define schema (for a project with multiple forms)
db.version(1).stores({
  projects:
    "++id, projectId, formData, form1, form2, form3, form4, form5, form6",
});

export const getFormDataById = async (projectId) => {
  try {
    const data = await db.projects.get(projectId); // Query by projectId field
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

// Dexie.js or wherever the function is located
export const createOrGetProject = async () => {
  try {
    // Check if there's already a project in localStorage
    let projectId = localStorage.getItem("projectId");

    if (projectId) {
      const existingProject = await db.projects
        .where("projectId")
        .equals(parseInt(projectId))
        .first();
      if (existingProject) {
        console.log(
          "Existing project found in IndexedDB with projectId:",
          projectId
        );
        return projectId;
      }
    }

    const newProjectId = Date.now();

    // If no projectId is found, create a new project
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

    /* const newProjectId = await db.projects.add({
      projectId: Date.now(),
      ...newProjectData,
    }); */
    await db.projects.add(newProjectData);

    // Save the newly generated projectId in localStorage
    localStorage.setItem("projectId", newProjectId);

    return newProjectId;
  } catch (error) {
    console.error("Failed to create or retrieve project:", error);
  }
};

// Function to save form data in IndexedDB
export const saveFormData = async (projectId, formData) => {
  try {
    console.log("Saving form data for project ID:", projectId, formData); // for debugging
    // Save form data based on projectId
    await db.projects.put({ projectId, ...formData });
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

// Function to create a new project with empty forms
/* export const createNewProject = async () => {
  try {
    // Create a new project with empty form data for each form
    const id = await db.projects.add({
      form1: {},
      form2: {},
      form3: {},
      form4: {
        title: "",
        subtitles: Array(4).fill(""),
        textAreas: Array(4).fill(""),
        image: null,
      },
      form5: { title: "", images: Array(5).fill(null) },
      form6: { title: "", inputs: Array(3).fill(""), textarea: "" },
    });
    console.log("New project created with ID:", id);
    return id;
  } catch (error) {
    console.error("Failed to create a new project:", error);
  }
}; */

// Function to get form data by projectId from IndexedDB
/* export const getFormDataById = async (projectId) => {
  try {
    const data = await db.projects.get({ projectId });
    if (data) {
      console.log("Data retrieved for project ID:", projectId, data); // Debugging output
    } else {
      console.log("No data found for project ID:", projectId); // Debugging output
    }
    return data;
  } catch (error) {
    console.error("Failed to retrieve data:", error);
    return null;
  }
}; */
