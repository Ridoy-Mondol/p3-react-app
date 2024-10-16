import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { LoadFormData, SaveFormDataToDB } from "../store/Actions"; // Actions to load and save data
import useFormData from "../hooks/useFormData"; // Custom hook to manage form data
import "../styles/LeftSideBar.css"; // Custom CSS

function ServicesForm() {
  const dispatch = useDispatch();
  const { formData, handleFieldChange, handleFileChange } = useFormData("form4"); // Hook to manage form state
  const { projectId } = useParams(); // Get projectId from the URL

  useEffect(() => {
    // Load form data when projectId is available
    if (projectId) {
      dispatch(LoadFormData(projectId)); // Dispatch action to load data
    }
  }, [projectId, dispatch]); // Effect depends on projectId and dispatch

  const handleChange = handleFieldChange; // Shortcut for handling field changes

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submit behavior
    SaveFormDataToDB(formData.projectId, formData); // Save form data to the database
  };

  // Clear changes made by the user
  const handleClearData = () => {
    localStorage.removeItem("persist:root"); // Remove the key from localStorage
    window.location.reload(); // Reload the page to clear changes
  };

  return (
    <div className="flex flex-col p-6">
      <h4 className="text-white mb-4 flex justify-center">Edit Services Section</h4>
      
      {/* Form structure for title, subtitles, descriptions, and images */}
      <form onSubmit={handleSubmit}>
        {/* Section Title */}
        <div className="flex flex-col">
          <label className="text-white mb-1">Title</label>
          <textarea
            name="sectionTitle"
            id="sectionTitle"
            value={formData.sectionTitle || ""}
            onChange={handleChange}
            className="p-1"
            rows="2"
          ></textarea>
        </div>

        {/* Subtitle One and Description One */}
        <div className="flex flex-col">
          <label className="text-white mb-1 mt-2">Subtitle One</label>
          <textarea
            name="subtitleOne"
            id="subtitleOne"
            value={formData.subtitleOne || ""}
            onChange={handleChange}
            className="p-1"
            rows="2"
          ></textarea>
        </div>
        <div className="flex flex-col">
          <label className="text-white mb-1 mt-2">Description One</label>
          <textarea
            name="textAreaOne"
            id="textAreaOne"
            value={formData.textAreaOne || ""}
            onChange={handleChange}
            className="p-1"
            rows="5"
          ></textarea>
        </div>
        
        {/* Image One Upload */}
        <div className="flex flex-col mb-4">
          <label className="text-white mb-1 mt-3">Image One</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleFileChange(e, "firstImage")}
            className="border p-2 rounded"
          />
        </div>

        {/* Repeat for Subtitle Two, Description Two, and Image Two */}
        <div className="flex flex-col">
          <label className="text-white mb-1 mt-2">Subtitle Two</label>
          <textarea
            name="subtitleTwo"
            id="subtitleTwo"
            value={formData.subtitleTwo || ""}
            onChange={handleChange}
            className="p-1"
            rows="2"
          ></textarea>
        </div>
        <div className="flex flex-col">
          <label className="text-white mb-1 mt-2">Description Two</label>
          <textarea
            name="textAreaTwo"
            id="textAreaTwo"
            value={formData.textAreaTwo || ""}
            onChange={handleChange}
            className="p-1"
            rows="5"
          ></textarea>
        </div>
        <div className="flex flex-col mb-4">
          <label className="text-white mb-1 mt-3">Image Two</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleFileChange(e, "secondImage")}
            className="border p-2 rounded"
          />
        </div>

        {/* Continue for Subtitle Three, Description Three, and Image Three */}
        <div className="flex flex-col">
          <label className="text-white mb-1 mt-2">Subtitle Three</label>
          <textarea
            name="subtitleThree"
            id="subtitleThree"
            value={formData.subtitleThree || ""}
            onChange={handleChange}
            className="p-1"
            rows="2"
          ></textarea>
        </div>
        <div className="flex flex-col">
          <label className="text-white mb-1 mt-2">Description Three</label>
          <textarea
            name="textAreaThree"
            id="textAreaThree"
            value={formData.textAreaThree || ""}
            onChange={handleChange}
            className="p-1"
            rows="5"
          ></textarea>
        </div>
        <div className="flex flex-col mb-4">
          <label className="text-white mb-1 mt-3">Image Three</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleFileChange(e, "thirdImage")}
            className="border p-2 rounded"
          />
        </div>

        {/* Subtitle Four, Description Four, and Image Four */}
        <div className="flex flex-col">
          <label className="text-white mb-1 mt-2">Subtitle Four</label>
          <textarea
            name="subtitleFour"
            id="subtitleFour"
            value={formData.subtitleFour || ""}
            onChange={handleChange}
            className="p-1"
            rows="2"
          ></textarea>
        </div>
        <div className="flex flex-col">
          <label className="text-white mb-1 mt-2">Description Four</label>
          <textarea
            name="textAreaFour"
            id="textAreaFour"
            value={formData.textAreaFour || ""}
            onChange={handleChange}
            className="p-1"
            rows="5"
          ></textarea>
        </div>
        <div className="flex flex-col mb-4">
          <label className="text-white mb-1 mt-3">Image Four</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleFileChange(e, "fourthImage")}
            className="border p-2 rounded"
          />
        </div>

        {/* Submit button */}
        <button
          className="bg-green-950 h-[3em] px-6 py-2 rounded-lg text-lightBeige tracking-wider"
          onClick={handleSubmit}
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

export default ServicesForm;
