import { useEffect } from "react"; // Import the useEffect hook for managing side effects
import { useDispatch, useSelector } from "react-redux"; // Import Redux hooks to interact with the store
import { useParams } from "react-router-dom"; // Import to get URL parameters
import {
  updateFormField, // Action to update form field in Redux
  LoadFormData, // Action to load form data from IndexedDB
  SaveFormDataToDB, // Action to save form data to IndexedDB
} from "../store/Actions";

const useFormData = (formName = "form") => {
  const dispatch = useDispatch(); // Get the dispatch function to send actions
  const formData = useSelector((state) => state.form[formName]); // Get dynamic form data from Redux
  const { projectId } = useParams(); // Get the project ID from the URL parameters

  // Load form data from IndexedDB when the component mounts
  useEffect(() => {
    if (projectId) {
      dispatch(LoadFormData(projectId)); // Load data from IndexedDB using the project ID
    }
  }, [projectId, dispatch]); // Re-run effect if projectId or dispatch changes

  // Handle text field changes and save to IndexedDB
  const handleFieldChange = (e) => {
    const { name, value } = e.target; // Get the name and value of the changed field
    dispatch(updateFormField(formName, name, value)); // Update the form field in Redux
    dispatch(SaveFormDataToDB(projectId, { ...formData, [name]: value })); // Save the updated form data to IndexedDB
  };

  // Handle file input changes (like image uploads)
  const handleFileChange = (e, imageKey) => {
    const file = e.target.files[0]; // Get the first file from the input
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Create a temporary URL for the file
      dispatch(updateFormField(formName, imageKey, imageUrl)); // Update the form field in Redux with the image URL
      dispatch(
        SaveFormDataToDB(projectId, { ...formData, [imageKey]: imageUrl }) // Save the updated image URL to IndexedDB
      );
    }
  };

  return {
    formData, // Return the form data
    handleFieldChange, // Return the field change handler
    handleFileChange, // Return the file change handler
    projectId, // Return the project ID
  };
};

export default useFormData; // Export the custom hook for use in components
