import { useNavigate } from "react-router-dom";

// This custom hook helps with navigation in our app
function useCustomSubmitPageRoute() {
  const navigate = useNavigate(); // Get the navigate function from React Router

  // This function handles button clicks for navigation
  const handleButtonClick = (route) => {
    navigate(route); // Change the current route to the specified one
  };

  return handleButtonClick; // Return the function so it can be used in other components
}

export default useCustomSubmitPageRoute; // Export the hook for use in other files
