import { SaveFormDataToDB } from "../store/Actions";
import useFormData from "../hooks/useFormData";

import "../styles/LeftSideBar.css";

function ContactUsForm() {
  // Using custom hook to manage form data and change handlers for form6
  const { formData, handleFieldChange } = useFormData("form6");

  // Handle form submission and save data to IndexedDB
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
        Edit Contact Us Section
      </h2>
      <form onSubmit={handleSubmit}>
        {/* Contact Us Title */}
        <div className="flex flex-col">
          <label className="text-white mb-1">Contact Us</label>
          <textarea
            name="title"
            id="title"
            value={formData.title || ""} // Ensure value from formData is displayed
            onChange={handleFieldChange} // Change handler for title field
            className="p-1"
            rows="2"
          ></textarea>
        </div>

        {/* Phone Number */}
        <div className="flex flex-col">
          <label className="text-white mt-3 mb-1">Phone Number</label>
          <textarea
            name="phoneNumber"
            id="phoneNumber"
            value={formData.phoneNumber || ""} // Ensure value from formData is displayed
            onChange={handleFieldChange} // Change handler for phoneNumber field
            className="p-1"
            rows="2"
          ></textarea>
        </div>

        {/* Email Address */}
        <div className="flex flex-col">
          <label className="text-white mt-3 mb-1">Email Address</label>
          <textarea
            name="emailAdd"
            id="emailAdd"
            value={formData.emailAdd || ""} // Ensure value from formData is displayed
            onChange={handleFieldChange} // Change handler for emailAdd field
            className="p-1"
            rows="2"
          ></textarea>
        </div>

        {/* Business Address */}
        <div className="flex flex-col">
          <label className="text-white mt-3 mb-1">Business Address</label>
          <textarea
            name="location"
            id="location"
            value={formData.location || ""} // Ensure value from formData is displayed
            onChange={handleFieldChange} // Change handler for location field
            className="p-1"
            rows="4"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button className="bg-green-950 h-[3em] px-6 py-2 rounded-lg text-lightBeige tracking-wider mt-5"
        onClick={handleSubmit}>
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

export default ContactUsForm;
