import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importing routing components
import { Provider } from "react-redux"; // Importing Provider to make Redux store available
import { PersistGate } from "redux-persist/integration/react"; // Importing PersistGate for state persistence
import store, { persistor } from "./store/store.jsx"; // Importing Redux store and persistor
import LandingPage from "./pages/LandingPage.jsx"; // Importing Landing Page component
import HomeForm from "./components/HomeForm.jsx"; // Importing Home Form component
import AboutUsForm from "./components/AboutUsForm.jsx"; // Importing About Us Form component
import ServicesForm from "./components/ServicesForm.jsx"; // Importing Services Form component
import ProjectForm from "./components/ProjectForm.jsx"; // Importing Project Form component
import WhyUsForm from "./components/WhyUsForm.jsx"; // Importing Why Us Form component
import ContactUsForm from "./components/ContactUsForm.jsx"; // Importing Contact Us Form component
import EditorLandingPage from "./pages/EditorLandingPage.jsx"; // Importing Editor Landing Page component
import NavBarForm from "./components/NavBarForm.jsx"; // Importing NavBar Form component

function App() {
  return (
    <Provider store={store}> {/* Providing the Redux store to the app */}
      <PersistGate loading={null} persistor={persistor}> {/* Wrapping app with PersistGate for persisting state */}
        <Router basename="/p3-react-app"> {/* Setting up Router for navigation */}
          <Routes> {/* Defining routes */}
            <Route path="/" element={<LandingPage />} /> {/* Route for landing page */}
            <Route
              path="/website-generator/:projectId" // Route for editor landing page with project ID
              element={<EditorLandingPage />}
            >
              {/* Nested routes for editing different sections */}
              <Route path="edit-home" element={<HomeForm />} />
              <Route path="edit-about" element={<AboutUsForm />} />
              <Route path="edit-services" element={<ServicesForm />} />
              <Route path="edit-projects" element={<ProjectForm />} />
              <Route path="edit-whyus" element={<WhyUsForm />} />
              <Route path="edit-contactus" element={<ContactUsForm />} />
              <Route path="edit-navbar" element={<NavBarForm />} />
            </Route>
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App; // Exporting the App component
