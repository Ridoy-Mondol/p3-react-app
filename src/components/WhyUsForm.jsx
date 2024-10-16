import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createOrGetProject } from '../indexDB/Dexie'; // Import Dexie method
import {
  updateFormField,
  LoadFormData,
  SaveFormDataToDB,
} from "../store/ProjectSlice"; // Import Redux actions

import "../styles/LeftSideBar.css";

function WhyUsForm() {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.project.formData.form3); // Get form3 data from Redux store
  const { projectId } = useParams(); // Get the projectId from the URL

  // Load form data from IndexedDB when the component mounts
  useEffect(() => {
    const fetchProject = async () => {
      if (projectId) {
        await dispatch(LoadFormData(projectId)); // Load form data from IndexedDB into Redux
      } else {
        // Create or get a project if no projectId is provided
        const id = await dispatch(createOrGetProject());
        await dispatch(LoadFormData(id));
      }
    };
    fetchProject();
  }, [projectId, dispatch]);

  // Handle text field changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(updateFormField({ formName: "form3", field: name, value })); // Update Redux store
    
    if (projectId) {
      dispatch(SaveFormDataToDB(projectId, formData)); // Save to IndexedDB
    } else {
      console.error("Cannot save form data: projectId is not set.");
    }
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(SaveFormDataToDB(projectId, formData)); // Save current form data on submit
  };

  // Clear changes made by the user
  const handleClearData = () => {
    localStorage.removeItem("persist:root"); // Remove the key from localStorage
    window.location.reload(); // Reload the page to clear changes
  };

  return (
    <div className="flex flex-col p-6">
      <h4 className="text-white mb-4 flex justify-center">
        Edit Why Choose Us Section
      </h4>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label className="text-white mb-1">Title</label>
          <textarea
            name="sectionTitle"
            id="sectionTitle"
            value={formData.sectionTitle || ""} // Use value from Redux
            onChange={handleChange}
            className="p-1"
            rows="2"
          ></textarea>
        </div>
        <div className="flex flex-col">
          <label className="text-white mb-1 mt-2">Subtitle 1</label>
          <textarea
            name="subtitleOne"
            id="subtitleOne"
            value={formData.subtitleOne || ""} // Use value from Redux
            onChange={handleChange}
            className="p-1"
            rows="2"
          ></textarea>
        </div>
        <div className="flex flex-col">
          <label className="text-white mb-1 mt-2">Description 1</label>
          <textarea
            name="textAreaOne"
            id="textAreaOne"
            value={formData.textAreaOne || ""} // Use value from Redux
            onChange={handleChange}
            className="p-1"
            rows="6"
          ></textarea>
        </div>

        <div className="flex flex-col">
          <label className="text-white mb-1 mt-2">Subtitle 2</label>
          <textarea
            name="subtitleTwo"
            id="subtitleTwo"
            value={formData.subtitleTwo || ""} // Use value from Redux
            onChange={handleChange}
            className="p-1"
            rows="2"
          ></textarea>
        </div>
        <div className="flex flex-col">
          <label className="text-white mb-1 mt-2">Description 2</label>
          <textarea
            name="textAreaTwo"
            id="textAreaTwo"
            value={formData.textAreaTwo || ""} // Use value from Redux
            onChange={handleChange}
            className="p-1"
            rows="6"
          ></textarea>
        </div>

        <div className="flex flex-col">
          <label className="text-white mb-1 mt-2">Subtitle 3</label>
          <textarea
            name="subtitleThree"
            id="subtitleThree"
            value={formData.subtitleThree || ""} // Use value from Redux
            onChange={handleChange}
            className="p-1"
            rows="2"
          ></textarea>
        </div>
        <div className="flex flex-col">
          <label className="text-white mb-1 mt-2">Description 3</label>
          <textarea
            name="textAreaThree"
            id="textAreaThree"
            value={formData.textAreaThree || ""} // Use value from Redux
            onChange={handleChange}
            className="p-1"
            rows="6"
          ></textarea>
        </div>

        <div className="flex flex-col">
          <label className="text-white mb-1 mt-2">Subtitle 4</label>
          <textarea
            name="subtitleFour"
            id="subtitleFour"
            value={formData.subtitleFour || ""} // Use value from Redux
            onChange={handleChange}
            className="p-1"
            rows="2"
          ></textarea>
        </div>
        <div className="flex flex-col">
          <label className="text-white mb-4 mt-2">Description 4</label>
          <textarea
            name="textAreaFour"
            id="textAreaFour"
            value={formData.textAreaFour || ""} // Use value from Redux
            onChange={handleChange}
            className="p-1"
            rows="6"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-green-950 h-[3em] px-6 py-2 rounded-lg text-lightBeige tracking-wider mt-6"
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

export default WhyUsForm;
