import "../styles/WebsiteGeneratorEditor.css";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoadFormData } from "../store/Actions"; 
import { useParams } from "react-router-dom";

function WhyUs() {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form.form3);
  const { projectId } = useParams();

  useEffect(() => {
    if (projectId) {
      dispatch(LoadFormData(projectId));
    }
  }, [projectId, dispatch]);

  return (
    <div>
      <section className="bg-gray-100 py-12 p-5 md:p-15 lg:p-20">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="text-4xl font-bold text-center mb-2">
            {formData.sectionTitle || "Why Choose Us?"}
          </h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-[#48A0DC]">
                {formData.subtitleOne || "Expert Team"}{" "}
              </h3>
              <p className="text-gray-700">
                {formData.textAreaOne || "Default description goes here."}{" "}
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-[#48A0DC]">
                {formData.subtitleTwo || "Client-Focused Approach"}{" "}
              </h3>
              <p className="text-gray-700">
                {formData.textAreaTwo || "Default description goes here."}{" "}
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-[#48A0DC]">
                {formData.subtitleThree || "Quality Materials"}{" "}
              </h3>
              <p className="text-gray-700">
                {formData.textAreaThree || "Default description goes here."}{" "}
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-[#48A0DC]">
                {formData.subtitleFour || "Transparent Pricing"}
              </h3>
              <p className="text-gray-700">
                {formData.textAreaFour || "Default description goes here."}{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WhyUs;