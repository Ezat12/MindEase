import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Doctors from "./pages/Doctors/Doctors";
import DoctorProfile from "./pages/DoctorProfile/DoctorProfile";
import Library from "./pages/Library";
import { useState } from "react";
import Journal from "./pages/Journal";
import Community from "./pages/Community";
import { AudioProvider } from "./context/AudioContext";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <BrowserRouter>
      <AudioProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/doctors/:doctorId" element={<DoctorProfile />} />
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route
            path="/library"
            element={<Library searchTerm={searchTerm} />}
          />
          <Route path="/journal" element={<Journal />} />
          <Route path="/community" element={<Community />} />
        </Routes>
      </AudioProvider>
    </BrowserRouter>
  );
}
export default App;
