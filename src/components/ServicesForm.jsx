import {
  updateFormField,
  LoadFormData,
  SaveFormDataToDB,
} from "../store/Actions";
import useFormData from "../hooks/useFormData";

import "../styles/LeftSideBar.css";

function ServicesForm() {
  const { formData, handleFieldChange, handleFileChange } =
    useFormData("form4");
  const handleChange = handleFieldChange;

  // Handle form submission (no submit logic here as this is just for editing)
  const handleSubmit = (event) => {
    event.preventDefault();
    // Additional submit actions can be performed here, such as saving data to a server if needed.
    SaveFormDataToDB(formData.projectId, formData);
  };

  return (
    <div className="flex flex-col p-6">
      <h4 className="text-white mb-4 flex justify-center">
        Edit Services Section
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
          <label className="text-white mb-1 mt-2">Subtitle One</label>
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
          <label className="text-white mb-1 mt-2">Description One</label>
          <textarea
            name="textAreaOne"
            id="textAreaOne"
            value={formData.textAreaOne || ""} // Use value from Redux
            onChange={handleChange}
            className="p-1"
            rows="5"
          ></textarea>
        </div>
        <div className="flex flex-col mb-4">
          <label className="text-white mb-1 mt-3">Image One</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleFileChange(e, "firstImage")}
            className="border p-2 rounded"
          />
        </div>

        {/* Second Card */}
        <div className="flex flex-col">
          <label className="text-white mb-1 mt-2">Subtitle Two</label>
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
          <label className="text-white mb-1 mt-2">Description Two</label>
          <textarea
            name="textAreaTwo"
            id="textAreaTwo"
            value={formData.textAreaTwo || ""} // Use value from Redux
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

        {/*Third Card */}
        <div className="flex flex-col">
          <label className="text-white mb-1 mt-2">Subtitle Three</label>
          <textarea
            name="subtitleThree"
            id="subtitleThree"
            value={formData.subtitleTwo || ""} // Use value from Redux
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
            value={formData.textAreaThree || ""} // Use value from Redux
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

        {/* Fourth Card */}
        <div className="flex flex-col">
          <label className="text-white mb-1 mt-2">Subtitle Four</label>
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
          <label className="text-white mb-1 mt-2">Description Four</label>
          <textarea
            name="textAreaFour"
            id="textAreaFour"
            value={formData.textAreaFour || ""} // Use value from Redux
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

        <button
          className="bg-green-950 h-[3em] px-6 py-2 rounded-lg text-lightBeige tracking-wider"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ServicesForm;
