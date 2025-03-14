import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import UploadPhoto from "./pages/UploadPhoto";
import PhotoGallery from "./pages/PhotoGallery";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/upload" element={<UploadPhoto />} />
        <Route path="/gallery" element={<PhotoGallery />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
