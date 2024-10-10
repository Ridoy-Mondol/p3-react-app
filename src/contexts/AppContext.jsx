import { createContext, useState } from 'react';
import coverImage from '../assets/coverImage.png'

export const AppContext = createContext();

function AppContextProvider({ children }) {
    const [formData, setFormData] = useState({
        title: "Crafting Exceptional Spaces with Precision and Care",
        description: "At Liceria Construction, we build spaces that bring your vision to life.",
        buttonText: "Get Started",
        backgroundImage: coverImage,
    });

    return (
        <AppContext.Provider value={{ formData, setFormData }}>
            {children}
        </AppContext.Provider>
    );
}

export default AppContextProvider;
