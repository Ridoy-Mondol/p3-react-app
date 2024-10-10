import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  updateFormField,
  LoadFormData,
  SaveFormDataToDB,
} from "../store/Actions"; // Import Redux actions

import "../styles/LeftSideBar.css";

function WhyUsForm() {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form.form3); // Get form1 data from Redux store
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
    dispatch(updateFormField("form3", name, value)); // Update Redux store
    dispatch(SaveFormDataToDB(projectId, { ...formData, [name]: value })); // Save to IndexedDB
  };

  // Handle file/image upload
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Create a temporary URL for the file
      dispatch(updateFormField("form3", "backgroundImage", imageUrl)); // Update Redux store
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
          className="bg-green-950 h-[3em] px-6 py-2 rounded-lg text-lightBeige tracking-wider mt-6"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default WhyUsForm;
