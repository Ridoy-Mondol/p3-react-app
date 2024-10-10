import { useState } from "react";
import LeftSideBar from "./LeftSideBar.jsx";
// import { Outlet } from "react-router-dom";
import WebsiteGeneratorEditor from "./WebsiteGeneratorEditor.jsx";
import "../styles/EditorLandingPage.css";

/* function EditorLandingPage() {
  return (
    <div className="flex">
      <div className="fixed left-0 top-0 w-[28%] bg-gray-600 h-full overflow-y-auto editorPage custom-scrollbar">
        <LeftSideBar />
      </div>
      <div className="ml-[28%] w-[72%] h-full overflow-y-auto custom-scrollbar">
        <WebsiteGeneratorEditor />
      </div>
    </div>
  );
} */

function EditorLandingPage() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="flex h-full">
      {/* Left Sidebar */}
      <div
        className={`fixed left-0 top-0 h-full bg-gradient-to-r from-green-700 to-green-900 overflow-y-auto editorPage custom-scrollbar transition-all duration-300 ease-in-out ${
          isCollapsed
            ? "w-[80px] bg-gradient-to-r from-gray-800 to-green-900"
            : "w-[35%] sm:w-1/2 md:w-[35%]"
        }`}
      >
        <div className="sticky top-0 z-10 bg-gray-700">
          <button
            className="text-white p-2 bg-green-900 w-full text-center"
            onClick={toggleSidebar}
          >
            {isCollapsed ? "Expand" : "Collapse"}
          </button>
        </div>

        {!isCollapsed && <LeftSideBar />}
      </div>

      {/* Main Content */}
      <div
        className={`ml-16 transition-all duration-300 ease-in-out ${
          isCollapsed
            ? "ml-[80px] w-[calc(100%-80px)]"
            : "ml-[35%] sm:ml-[50%] md:ml-[35%] w-[calc(100%-35%)] sm:w-[calc(100%-50%)] md:w-[calc(100%-35%)]"
        } h-full overflow-y-auto custom-scrollbar`}
      >
        <WebsiteGeneratorEditor />
      </div>
    </div>
  );
}

export default EditorLandingPage;
