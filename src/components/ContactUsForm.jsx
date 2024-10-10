import {
  updateFormField,
  LoadFormData,
  SaveFormDataToDB,
} from "../store/Actions";
import useFormData from "../hooks/useFormData";

import "../styles/LeftSideBar.css";

function ContactUsForm() {
  const { formData, handleFieldChange, handleFileChange } =
    useFormData("form6");
  const handleChange = handleFieldChange;

  // Handle form submission (no submit logic here as this is just for editing)
  const handleSubmit = (event) => {
    event.preventDefault();
    SaveFormDataToDB(formData.projectId, formData);
    // Additional submit actions can be performed here, such as saving data to a server if needed.
  };

  return (
    <div className="flex flex-col p-6">
      <h2 className="text-white text-xl mb-4 flex justify-center">
        Edit Contact Us Section
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label className="text-white mb-1">Contact Us</label>
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
          <label className="text-white mt-3 mb-1">Phone Number</label>
          <textarea
            name="phoneNumber"
            id="phoneNumber"
            value={formData.phoneNumber || ""} // Use value from Redux
            onChange={handleChange}
            className="p-1"
            rows="2"
          ></textarea>
        </div>

        <div className="flex flex-col">
          <label className="text-white mt-3 mb-1">Email Address</label>
          <textarea
            name="emailAdd"
            id="emailAdd"
            value={formData.emailAdd || ""} // Use value from Redux
            onChange={handleChange}
            className="p-1"
            rows="2"
          ></textarea>
        </div>

        <div className="flex flex-col">
          <label className="text-white mt-3 mb-1">Business Address</label>
          <textarea
            name="location"
            id="location"
            value={formData.location || ""} // Use value from Redux
            onChange={handleChange}
            className="p-1"
            rows="4"
          ></textarea>
        </div>

        <button className="bg-green-950 h-[3em] px-6 py-2 rounded-lg text-lightBeige tracking-wider mt-5"
        onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactUsForm;
