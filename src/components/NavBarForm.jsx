import {SaveFormDataToDB} from "../store/Actions";
import useFormData from "../hooks/useFormData";

import "../styles/LeftSideBar.css";

function NavBarForm() {
  // Using custom hook to manage form data for form7 and handling field and file changes
  const { formData, handleFieldChange, handleFileChange } =
    useFormData("form7");

  // Handle form submission and save the form data to IndexedDB or any other DB
  const handleSubmit = (event) => {
    event.preventDefault();
    SaveFormDataToDB(formData.projectId, formData); // Saving form data on submit
    // You can add any additional logic here (e.g., show success message, etc.)
  };

  return (
    <div className="flex flex-col p-6">
      <h2 className="text-white text-xl mb-4 flex justify-center">
        Edit NavBar Section
      </h2>
      <form onSubmit={handleSubmit}>
        {/* List One Field */}
        <div className="flex flex-col">
          <label className="text-white mb-1">List One</label>
          <textarea
            name="listOne"
            id="listOne"
            value={formData.listOne || ""} // Ensure value from formData is displayed
            onChange={handleFieldChange} // Change handler for listOne field
            className="p-1"
            rows="2"
          ></textarea>
        </div>

        {/* List Two Field */}
        <div className="flex flex-col">
          <label className="text-white mb-1">List Two</label>
          <textarea
            name="listTwo"
            id="listTwo"
            value={formData.listTwo || ""} // Ensure value from formData is displayed
            onChange={handleFieldChange} // Change handler for listTwo field
            className="p-1"
            rows="2"
          ></textarea>
        </div>

        {/* List Three Field */}
        <div className="flex flex-col">
          <label className="text-white mb-1">List Three</label>
          <textarea
            name="listThree"
            id="listThree"
            value={formData.listThree || ""} // Ensure value from formData is displayed
            onChange={handleFieldChange} // Change handler for listThree field
            className="p-1"
            rows="2"
          ></textarea>
        </div>

        {/* List Four Field */}
        <div className="flex flex-col">
          <label className="text-white mb-1">List Four</label>
          <textarea
            name="listFour"
            id="listFour"
            value={formData.listFour || ""} // Ensure value from formData is displayed
            onChange={handleFieldChange} // Change handler for listFour field
            className="p-1"
            rows="2"
          ></textarea>
        </div>

        {/* List Five Field */}
        <div className="flex flex-col">
          <label className="text-white mb-1">List Five</label>
          <textarea
            name="listFive"
            id="listFive"
            value={formData.listFive || ""} // Ensure value from formData is displayed
            onChange={handleFieldChange} // Change handler for listFive field
            className="p-1"
            rows="2"
          ></textarea>
        </div>

        {/* List Six Field */}
        <div className="flex flex-col">
          <label className="text-white mb-1">List Six</label>
          <textarea
            name="listSix"
            id="listSix"
            value={formData.listSix || ""} // Ensure value from formData is displayed
            onChange={handleFieldChange} // Change handler for listSix field
            className="p-1"
            rows="2"
          ></textarea>
        </div>

        {/* Logo One Upload */}
        <div className="flex flex-col mb-4">
          <label className="text-white mb-1 mt-3">Logo One</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleFileChange(e, "logoOne")} // File change handler for logoOne
            className="border p-2 rounded"
          />
        </div>

        {/* Submit Button */}
        <button
          className="bg-green-950 h-[3em] px-6 py-2 rounded-lg text-lightBeige tracking-wider mt-5"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default NavBarForm;
