/* import { useContext } from "react";
import { AppContext } from "../contexts/AppContext.jsx";

import "../styles/LeftSideBar.css";

function HomeForm() {
  const { formData, setFormData } = useContext(AppContext); // Use the shared state

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData((prevFormData) => ({
        ...prevFormData,
        backgroundImage: imageUrl,
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can perform any submit actions here
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
            value={formData.title}
            onChange={handleChange}
            className="p-1"
            rows="6"
          ></textarea>
        </div>
        <div className="flex flex-col">
          <label className="text-white mb-1 mt-2">Description</label>
          <textarea
            name="description"
            id="description"
            value={formData.description}
            onChange={handleChange}
            className="p-1"
            rows="3"
          ></textarea>
        </div>
        <div className="flex flex-col">
          <label className="text-white mb-1 mt-2">Button Text</label>
          <input
            name="buttonText"
            id="buttonText"
            value={formData.buttonText}
            type="text"
            onChange={handleChange}
            className="p-1"
          />
        </div>

        <div className="flex flex-col mb-4">
          <label className="text-white mb-1 mt-3">
            Upload Background Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="border p-2 rounded"
          />
        </div>

        <button className="bg-green-950 h-[3em] px-6 py-2 rounded-lg text-lightBeige tracking-wider">
          Submit
        </button>
      </form>
    </div>
  );
}

export default HomeForm;
 */

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  updateFormField,
  LoadFormData,
  SaveFormDataToDB,
} from "../store/Actions"; // Import Redux actions

import "../styles/LeftSideBar.css";

function HomeForm() {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form.form1); // Get form1 data from Redux store
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
    dispatch(updateFormField("form1", name, value)); // Update Redux store
    dispatch(SaveFormDataToDB(projectId, { ...formData, [name]: value })); // Save to IndexedDB
  };

  // Handle file/image upload
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Create a temporary URL for the file
      dispatch(updateFormField("form1", "backgroundImage", imageUrl)); // Update Redux store
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
    // Additional submit actions can be performed here, such as saving data to a server if needed.
    console.log("Form data saved to IndexedDB:", formData);
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
            value={formData.title || ""} // Use value from Redux
            onChange={handleChange}
            className="p-1"
            rows="3"
          ></textarea>
        </div>
        <div className="flex flex-col">
          <label className="text-white mb-1 mt-2">Description</label>
          <textarea
            name="description"
            id="description"
            value={formData.description || ""} // Use value from Redux
            onChange={handleChange}
            className="p-1"
            rows="4"
          ></textarea>
        </div>
        <div className="flex flex-col">
          <label className="text-white mb-1 mt-2">Button Text</label>
          <input
            name="buttonText"
            id="buttonText"
            value={formData.buttonText || ""} // Use value from Redux
            type="text"
            onChange={handleChange}
            className="p-1"
          />
        </div>

        <div className="flex flex-col mb-4">
          <label className="text-white mb-1 mt-3">
            Upload Background Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="border p-2 rounded"
          />
        </div>

        <button
          className="bg-green-950 h-[3em] px-6 py-2 rounded-lg text-lightBeige tracking-wider"
          onClick={handleSubmit}
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default HomeForm;
