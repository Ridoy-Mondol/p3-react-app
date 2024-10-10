import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoadFormData } from "../store/Actions"; 
import { useParams } from "react-router-dom";

function AboutUs() {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form.form2);
  const { projectId } = useParams();

  useEffect(() => {
    if (projectId) {
      dispatch(LoadFormData(projectId));
    }
  }, [projectId, dispatch]);

  return (
    <div className="flex flex-col lg:flex-row md:flex-row p-10 bg-lightBeige gap-6">
      <div className="w-full md:w-1/2 lg:w-2/3 p-4 flex justify-center items-center">
        <img
          className="aboutUsPhoto"
          src={formData.backgroundImage || "defaultImagePath"}
          alt="About Us"
        />
      </div>
      <div className="w-full md:w-1/2 p-6">
        <h3 className="mb-3 text-4xl font-bold text-[#48A0DC]">
          {formData.title || "About Us"}
        </h3>
        <h2 className="text-4xl text-gray-800 font-medium mb-9">
          {formData.description || "Default description goes here."}{" "}
        </h2>
        <p className="mb-2">
          {formData.textParagraphOne || "Default paragraph one goes here."}{" "}
        </p>
        <p>
          {formData.textParagraphTwo || "Default paragraph two goes here."}{" "}
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
