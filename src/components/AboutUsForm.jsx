import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  updateFormField,
  LoadFormData,
  SaveFormDataToDB,
} from "../store/Actions"; // Import Redux actions

import "../styles/LeftSideBar.css";

function AboutUsForm() {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form.form2); // Get form1 data from Redux store
  const { projectId } = useParams(); // Get the projectId from the URL

  // Load form data from IndexedDB when the component mounts
  useEffect(() => {
    if (projectId) {
      dispatch(LoadFormData(projectId)); // Load form data from IndexedDB into Redux
    }
  }, [projectId, dispatch]);

  // Handle text field changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(updateFormField("form2", name, value)); // Update Redux store
    dispatch(SaveFormDataToDB(projectId, { ...formData, [name]: value })); // Save to IndexedDB
  };

  // Handle file/image upload
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Create a temporary URL for the file
      dispatch(updateFormField("form2", "backgroundImage", imageUrl)); // Update Redux store
      dispatch(
        SaveFormDataToDB(projectId, { ...formData, backgroundImage: imageUrl })
      ); // Save to IndexedDB
    }
  };

  // Handle form submission (no submit logic here as this is just for editing)
  const handleSubmit = (event) => {
    event.preventDefault();
    // Additional submit actions can be performed here, such as saving data to a server if needed.
    SaveFormDataToDB(formData.projectId, formData);
  };

  return (
    <div className="flex flex-col p-6">
      <h4 className="text-white mb-4 flex justify-center">
        Edit About Us Section
      </h4>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label className="text-white mb-1">Title</label>
          <textarea
            name="title"
            id="title"
            value={formData.title || ""} // Use value from Redux
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
            value={formData.description || ""} // Use value from Redux
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
            value={formData.textParagraphOne || ""} // Use value from Redux
            onChange={handleChange}
            className="p-1"
            rows="6"
          ></textarea>
        </div>
        <div className="flex flex-col">
          <label className="text-white mb-1 mt-2">Paragraph Two </label>
          <textarea
            name="textParagraphTwo"
            id="textParagraphTwo"
            value={formData.textParagraphTwo || ""} // Use value from Redux
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

        <button className="bg-green-950 h-[3em] px-6 py-2 rounded-lg text-lightBeige tracking-wider"
        onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default AboutUsForm;
