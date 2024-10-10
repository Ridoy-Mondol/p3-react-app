import {
  updateFormField,
  LoadFormData,
  SaveFormDataToDB,
} from "../store/Actions";
import useFormData from "../hooks/useFormData";

import "../styles/LeftSideBar.css";

function NavBarForm() {
  const { formData, handleFieldChange, handleFileChange } =
    useFormData("form7");
  const handleChange = handleFieldChange;

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    SaveFormDataToDB(formData.projectId, formData);
  };

  return (
    <div className="flex flex-col p-6">
      <h2 className="text-white text-xl mb-4 flex justify-center">
        Edit NavBar Section
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label className="text-white mb-1">List One</label>
          <textarea
            name="listOne"
            id="listOne"
            value={formData.listOne || ""} // Use value from Redux
            onChange={handleChange}
            className="p-1"
            rows="2"
          ></textarea>
        </div>

        <div className="flex flex-col">
          <label className="text-white mb-1">List Two</label>
          <textarea
            name="listTwo"
            id="listTwo"
            value={formData.listTwo || ""} // Use value from Redux
            onChange={handleChange}
            className="p-1"
            rows="2"
          ></textarea>
        </div>

        <div className="flex flex-col">
          <label className="text-white mb-1">List Three</label>
          <textarea
            name="listThree"
            id="listThree"
            value={formData.listThree || ""} // Use value from Redux
            onChange={handleChange}
            className="p-1"
            rows="2"
          ></textarea>
        </div>

        <div className="flex flex-col">
          <label className="text-white mb-1">List Four</label>
          <textarea
            name="listFour"
            id="listFour"
            value={formData.listFour || ""} // Use value from Redux
            onChange={handleChange}
            className="p-1"
            rows="2"
          ></textarea>
        </div>

        <div className="flex flex-col">
          <label className="text-white mb-1">List Five</label>
          <textarea
            name="listFive"
            id="listFive"
            value={formData.listFive || ""} // Use value from Redux
            onChange={handleChange}
            className="p-1"
            rows="2"
          ></textarea>
        </div>

        <div className="flex flex-col">
          <label className="text-white mb-1">List Six</label>
          <textarea
            name="listSix"
            id="listSix"
            value={formData.listSix || ""} // Use value from Redux
            onChange={handleChange}
            className="p-1"
            rows="2"
          ></textarea>
        </div>

        <div className="flex flex-col mb-4">
          <label className="text-white mb-1 mt-3">Logo One</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleFileChange(e, "logoOne")}
            className="border p-2 rounded"
          />
        </div>

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
