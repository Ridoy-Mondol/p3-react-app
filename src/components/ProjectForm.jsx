import { SaveFormDataToDB } from "../store/Actions";
import useFormData from "../hooks/useFormData";

import "../styles/LeftSideBar.css";

function ProjectForm() {
  const { formData, handleFieldChange, handleFileChange } =
    useFormData("form5");
  const handleChange = handleFieldChange;

  // Handle form submission (no submit logic here as this is just for editing)
  const handleSubmit = (event) => {
    event.preventDefault();
    SaveFormDataToDB(formData.projectId, formData); // Save form data on submit
  };

  // Clear changes made by the user
  const handleClearData = () => {
    localStorage.removeItem("persist:root"); // Remove the key from localStorage
    window.location.reload(); // Reload the page to clear changes
  };

  return (
    <div className="flex flex-col p-6">
      <h2 className="text-white text-xl mb-4 flex justify-center">
        Edit Projects Section
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label className="text-white mb-1">Title</label>
          <textarea
            name="title"
            id="title"
            value={formData.title || ""} // Use value from Redux
            onChange={handleFieldChange}
            className="p-1"
            rows="2"
          ></textarea>
        </div>

        {/* First Picture Group */}
        <div className="flex flex-col mb-4">
          <label className="text-white mb-1 mt-3">Image One</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleFileChange(e, "imageOne")}
            className="border p-2 rounded"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-white mb-1 mt-2">Project One Name</label>
          <textarea
            name="projectNameOne"
            id="projectNameOne"
            value={formData.projectNameOne || "Name of The Project"} // Use value from Redux
            onChange={handleChange}
            className="p-1"
            rows="2"
          ></textarea>
        </div>

        {/* Second Picture group */}
        <div className="flex flex-col mb-4">
          <label className="text-white mb-1 mt-3">Image Two</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleFileChange(e, "imageTwo")}
            className="border p-2 rounded"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-white mb-1 mt-2">Project Two Name</label>
          <textarea
            name="projectNameOne"
            id="projectNameOne"
            value={formData.projectNameTwo || "Name of The Project"} // Use value from Redux
            onChange={handleChange}
            className="p-1"
            rows="2"
          ></textarea>
        </div>

        {/* Third Picture Group */}
        <div className="flex flex-col mb-4">
          <label className="text-white mb-1 mt-3">Image Three</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleFileChange(e, "imageThree")}
            className="border p-2 rounded"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-white mb-1 mt-2">Project Three Name</label>
          <textarea
            name="projectNameThree"
            id="projectNameThree"
            value={formData.projectNameThree || "Name of The Project"} // Use value from Redux
            onChange={handleChange}
            className="p-1"
            rows="2"
          ></textarea>
        </div>

        {/* Fourth Picture Group */}
        <div className="flex flex-col mb-4">
          <label className="text-white mb-1 mt-3">Image Four</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleFileChange(e, "imageFour")}
            className="border p-2 rounded"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-white mb-1 mt-2">Project Four Name</label>
          <textarea
            name="projectNameThree"
            id="projectNameThree"
            value={formData.projectNameFour || "Planning"} // Use value from Redux
            onChange={handleChange}
            className="p-1"
            rows="2"
          ></textarea>
        </div>

        {/* Fifth Picture Group */}
        <div className="flex flex-col mb-4">
          <label className="text-white mb-1 mt-3">Image Five</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleFileChange(e, "imageFive")}
            className="border p-2 rounded"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-white mb-2 mt-2">Project Five Name</label>
          <textarea
            name="projectNameThree"
            id="projectNameThree"
            value={formData.projectNameFive || "Road Construction"} // Use value from Redux
            onChange={handleChange}
            className="p-1"
            rows="2"
          ></textarea>
        </div>

        <button
          className="bg-green-950 h-[3em] px-6 py-2 rounded-lg text-lightBeige tracking-wider mt-5"
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

export default ProjectForm;


