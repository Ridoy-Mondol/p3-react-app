import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  updateFormField,
  LoadFormData,
  SaveFormDataToDB,
} from "../store/Actions";

const useFormData = (formName = "form") => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form[formName]); // Get dynamic form data from Redux
  const { projectId } = useParams();

  // Load form data from IndexedDB when the component mounts
  useEffect(() => {
    if (projectId) {
      dispatch(LoadFormData(projectId)); // Load data from IndexedDB
    }
  }, [projectId, dispatch]);

  // Handle text field changes and save to IndexedDB
  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateFormField(formName, name, value));
    dispatch(SaveFormDataToDB(projectId, { ...formData, [name]: value }));
  };

  const handleFileChange = (e, imageKey) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Create a temporary URL for the file
      dispatch(updateFormField(formName, imageKey, imageUrl)); // Update Redux state
      dispatch(
        SaveFormDataToDB(projectId, { ...formData, [imageKey]: imageUrl })
      ); // Save to IndexedDB
    }
  };

  return {
    formData,
    handleFieldChange,
    handleFileChange,
    projectId,
  };
};

export default useFormData;
