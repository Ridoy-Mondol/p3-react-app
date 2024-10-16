import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createOrGetProject } from '../indexDB/Dexie'; // Function to handle project creation or fetching from IndexedDB
import {
  updateFormField, // Action to update a specific form field in Redux
  LoadFormData,    // Action to load form data from the database
  SaveFormDataToDB // Action to save form data to the database
} from "../store/ProjectSlice";

function HomeForm() {
  const dispatch = useDispatch(); // Hook to dispatch actions
  const formData = useSelector((state) => state.project.formData.form1); // Getting form data from Redux store
  const { projectId } = useParams(); // Getting project ID from the URL parameters

  // Effect hook to load form data when component mounts or when projectId changes
  useEffect(() => {
    const fetchProject = async () => {
      if (projectId) {
        // If a projectId exists, fetch the project data
        await dispatch(LoadFormData(projectId)); 
      } else {
        // If no projectId, create a new project and load its data
        const id = await dispatch(createOrGetProject());
        await dispatch(LoadFormData(id));
      }
    };
    fetchProject();
  }, [projectId, dispatch]); // Depend on projectId and dispatch

  // Handle text field changes
  const handleChange = (event) => {
    const { name, value } = event.target; // Get the field name and value from the event
    dispatch(updateFormField({ formName: "form1", field: name, value })); // Update the Redux state for the form
    
    // Check if projectId exists before saving data to the DB
    if (projectId) {
      dispatch(SaveFormDataToDB(projectId, formData)); // Save form data to the database
      console.log("Data saved to IndexedDB from form:", formData);
    } else {
      console.error("Cannot save form data: projectId is not set.");
    }
  };

  // Handle file changes (image upload)
  const handleFileChange = (event) => {
    const file = event.target.files[0]; // Get the first file selected
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Create a temporary URL for the uploaded image
      dispatch(updateFormField({ formName: "form1", field: "backgroundImage", value: imageUrl })); // Update the image field in the form
      dispatch(SaveFormDataToDB(projectId, { ...formData, backgroundImage: imageUrl })); // Save the form data with the image
    }
  };

  // Handle form submission (manual save button click)
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    dispatch(SaveFormDataToDB(projectId, formData)); // Save form data to the database
  };
  
  // Clear changes made by the user
  const handleClearData = () => {
    localStorage.removeItem("persist:root"); // Remove the key from localStorage
    window.location.reload(); // Reload the page to clear changes
  };

  return (
    <div className="flex flex-col p-6">
      <h4 className="text-white mb-4 flex justify-center">Edit Home Section</h4>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label className="text-white mb-1">Title</label>
          <textarea
            name="title"
            id="title"
            value={formData.title || ""} // Display the form title from Redux or an empty string
            onChange={handleChange} // Call handleChange when user edits the field
            className="p-1"
            rows="3"
          ></textarea>
        </div>

        <div className="flex flex-col">
          <label className="text-white mb-1 mt-2">Description</label>
          <textarea
            name="description"
            id="description"
            value={formData.description || ""} // Display the form description from Redux or an empty string
            onChange={handleChange} // Call handleChange on change
            className="p-1"
            rows="4"
          ></textarea>
        </div>

        <div className="flex flex-col">
          <label className="text-white mb-1 mt-2">Button Text</label>
          <input
            name="buttonText"
            id="buttonText"
            value={formData.buttonText || ""} // Display the button text from Redux
            type="text"
            onChange={handleChange} // Call handleChange when text input changes
            className="p-1"
          />
        </div>

        <div className="flex flex-col mb-4">
          <label className="text-white mb-1 mt-3">Upload Background Image</label>
          <input
            type="file"
            accept="image/*" // Accept image files only
            onChange={handleFileChange} // Call handleFileChange on file upload
            className="border p-2 rounded"
          />
        </div>

        <button
          type="submit"
          className="bg-green-950 h-[3em] px-6 py-2 rounded-lg text-lightBeige tracking-wider"
        >
          Submit
        </button>
        <button 
        type="submit"
        className="bg-red-600 h-[3em] px-6 py-2 rounded-lg text-white tracking-wider ml-3"
        onClick = {handleClearData}
        >
          Clear Changes
        </button>

      </form>
    </div>
  );
}

export default HomeForm;
