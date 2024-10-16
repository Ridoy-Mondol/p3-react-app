import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createOrGetProject } from '../indexDB/Dexie';
import {
  updateFormField,
  LoadFormData,
  SaveFormDataToDB,
} from "../store/ProjectSlice";

function AboutUsForm() {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.project.formData.form2); 
  const { projectId } = useParams(); 

  // Load form data from IndexedDB when the component mounts
  useEffect(() => {
    const fetchProject = async () => {
      if (projectId) {
        await dispatch(LoadFormData(projectId));
      } else {
        const id = await dispatch(createOrGetProject());
        await dispatch(LoadFormData(id));
      }
    };
    fetchProject();
  }, [projectId, dispatch]);

  // Handle text field changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(updateFormField({ formName: "form2", field: name, value })); 

    if (projectId) {
      dispatch(SaveFormDataToDB(projectId, { ...formData, [name]: value })); 
    } else {
      console.error("Cannot save form data: projectId is not set.");
    }
  };

  // Handle file/image upload
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      dispatch(updateFormField({ formName: "form2", field: "backgroundImage", value: imageUrl })); 
      dispatch(SaveFormDataToDB(projectId, { ...formData, backgroundImage: imageUrl })); 
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(SaveFormDataToDB(projectId, formData));
  };

  // Clear changes made by the user
  const handleClearData = () => {
    localStorage.removeItem("persist:root"); // Remove the key from localStorage
    window.location.reload(); // Reload the page to clear changes
  };

  return (
    <div className="flex flex-col p-6">
      <h4 className="text-white mb-4 flex justify-center">Edit About Us Section</h4>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label className="text-white mb-1">Title</label>
          <textarea
            name="title"
            id="title"
            value={formData.title || ""}
            onChange={handleChange}
            className="p-1"
            rows="2"
          ></textarea>
        </div>
        <div className="flex flex-col">
          <label className="text-white mb-1 mt-2">Subtitle</label>
          <textarea
            name="description"
            id="description"
            value={formData.description || ""}
            onChange={handleChange}
            className="p-1"
            rows="3"
          ></textarea>
        </div>
        <div className="flex flex-col">
          <label className="text-white mb-1 mt-2">Paragraph One</label>
          <textarea
            name="textParagraphOne"
            id="textParagraphOne"
            value={formData.textParagraphOne || ""} 
            onChange={handleChange}
            className="p-1"
            rows="6"
          ></textarea>
        </div>
        <div className="flex flex-col">
          <label className="text-white mb-1 mt-2">Paragraph Two</label>
          <textarea
            name="textParagraphTwo"
            id="textParagraphTwo"
            value={formData.textParagraphTwo || ""}
            onChange={handleChange}
            className="p-1"
            rows="6"
          ></textarea>
        </div>
        <div className="flex flex-col mb-4">
          <label className="text-white mb-1 mt-3">Upload Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
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

export default AboutUsForm;
