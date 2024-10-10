import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store.jsx";

import LandingPage from "./pages/LandingPage.jsx";
import HomeForm from "./components/HomeForm.jsx";
import AboutUsForm from "./components/AboutUsForm.jsx";
import ServicesForm from "./components/ServicesForm.jsx";
import ProjectForm from "./components/ProjectForm.jsx";
import WhyUsForm from "./components/WhyUsForm.jsx";
import ContactUsForm from "./components/ContactUsForm.jsx";
import EditorLandingPage from "./pages/EditorLandingPage.jsx";
import NavBarForm from "./components/NavBarForm.jsx";
// import HomeForm2 from "./components/HomeForm2.jsx";

function App() {
  return (
    <Provider store={store}>
      <Router basename="/p3-react-app">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/website-generator/:projectId"
            element={<EditorLandingPage />}
          >
            <Route path="edit-home" element={<HomeForm />} />
            <Route path="edit-about" element={<AboutUsForm />} />
            <Route path="edit-services" element={<ServicesForm />} />
            <Route path="edit-projects" element={<ProjectForm />} />
            <Route path="edit-whyus" element={<WhyUsForm />} />
            <Route path="edit-contactus" element={<ContactUsForm />} />
            <Route path="edit-navbar" element={<NavBarForm />} />
          </Route>
          {/* <Route path="edit-home2" element={<HomeForm2 />} /> */}
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
