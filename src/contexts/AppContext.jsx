import { createContext, useState } from 'react'; // Importing necessary hooks from React
import coverImage from '../assets/coverImage.png'; // Importing the cover image asset

// Creating a context for the application
export const AppContext = createContext();

function AppContextProvider({ children }) {
    // Setting up the initial state for form data
    const [formData, setFormData] = useState({
        title: "Crafting Exceptional Spaces with Precision and Care", // Default title
        description: "At Liceria Construction, we build spaces that bring your vision to life.", // Default description
        buttonText: "Get Started", // Default button text
        backgroundImage: coverImage, // Default background image
    });

    return (
        // Providing the context value to the children components
        <AppContext.Provider value={{ formData, setFormData }}>
            {children} {/* Rendering child components that will have access to the context */}
        </AppContext.Provider>
    );
}

export default AppContextProvider; // Exporting the provider component for use in the app
