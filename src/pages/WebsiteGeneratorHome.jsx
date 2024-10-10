import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoadFormData } from "../store/Actions"; 
import { useParams } from "react-router-dom";

function WebsiteGeneratorHome() {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form.form1); 
  const { projectId } = useParams(); 

  useEffect(() => {
    if (projectId) {
      dispatch(LoadFormData(projectId));
    }
  }, [projectId, dispatch]);

  return (
    <div
      className="home flex items-center justify-center min-h-screen bg-gray-200"
      style={{
        backgroundImage: `url(${formData.backgroundImage || ""})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="textGroup bg-transparent p-8 rounded-lg shadow-lg max-w-3xl text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">{formData.title}</h1>
        <p className="text-lg text-white mb-4">{formData.description}</p>
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
          {formData.buttonText}
        </button>
      </div>
    </div>
  );
}

export default WebsiteGeneratorHome;
