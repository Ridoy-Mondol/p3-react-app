import React, { useEffect, useState } from "react";
import { getFormDataById } from "../indexDb/Dexie";
import WebsiteGeneratorHome from "../pages/WebsiteGeneratorHome";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import Projects from "../pages/Projects";
import Services from "../pages/Services";
import whyUs from "../pages/WhyUs";

function PreviewGenerator() {
  const [formData, setFormData] = useState(null);
  const [projectId, setProjectId] = useState(null);

  useEffect(() => {
    const storedProjectId = localStorage.getItem("projectId");
    if (storedProjectId) {
      setProjectId(storedProjectId);
    }
  }, []);

  useEffect(() => {
    const fetchFormData = async () => {
      if (projectId) {
        const data = await getFormDataById(projectId);
        setFormData(data);
      }
    };
    fetchFormData();
  }, [projectId]);

  if (!formData) {
    return <div>Loading...</div>; // Show a loading message until form data is fetched
  }

  return (
    <div>
      <h1>My Preview Page</h1>
    </div>
  );
}

export default PreviewGenerator;
