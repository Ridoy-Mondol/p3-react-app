import { useState } from "react"; // Importing useState hook from React
import LeftSideBar from "./LeftSideBar.jsx"; // Importing the LeftSideBar component
import WebsiteGeneratorEditor from "./WebsiteGeneratorEditor.jsx"; // Importing the main editor component
import "../styles/EditorLandingPage.css"; // Importing CSS styles for the editor landing page

function EditorLandingPage() {
  // State to manage the collapsed/expanded state of the sidebar
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Function to toggle the sidebar's collapsed state
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed); // Toggle the isCollapsed state
  };

  return (
    <div className="flex h-full">
      {/* Left Sidebar */}
      <div
        className={`fixed left-0 top-0 h-full bg-gradient-to-r from-green-700 to-green-900 overflow-y-auto editorPage custom-scrollbar transition-all duration-300 ease-in-out ${
          isCollapsed
            ? "w-[80px] bg-gradient-to-r from-gray-800 to-green-900" // Collapsed width and background
            : "w-[35%] sm:w-1/2 md:w-[35%]" // Expanded width for larger screens
        }`}
      >
        <div className="sticky top-0 z-10 bg-gray-700">
          <button
            className="text-white p-2 bg-green-900 w-full text-center"
            onClick={toggleSidebar} // Button to toggle sidebar
          >
            {isCollapsed ? "Expand" : "Collapse"} {/* Button text changes based on state */}
          </button>
        </div>

        {/* LeftSideBar is only rendered when the sidebar is expanded */}
        {!isCollapsed && <LeftSideBar />}
      </div>

      {/* Main Content Area */}
      <div
        className={`ml-16 transition-all duration-300 ease-in-out ${
          isCollapsed
            ? "ml-[80px] w-[calc(100%-80px)]" // Adjusting margin and width when collapsed
            : "ml-[35%] sm:ml-[50%] md:ml-[35%] w-[calc(100%-35%)] sm:w-[calc(100%-50%)] md:w-[calc(100%-35%)]" // Adjusting margin and width when expanded
        } h-full overflow-y-auto custom-scrollbar`}
      >
        <WebsiteGeneratorEditor /> {/* Rendering the main editor component */}
      </div>
    </div>
  );
}

export default EditorLandingPage; // Exporting the EditorLandingPage component for use in other parts of the application
