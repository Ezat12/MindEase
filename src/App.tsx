import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Library from './pages/Library';
import Journal from './pages/Journal';
import Community from './pages/Community';
import Welcome from './pages/Welcome';
import SignUp from './pages/SignUp';
import Login from './pages/Login'; 
import Header from './components/Header';
import FooterPlayer from './components/FooterPlayer';
import { AudioProvider } from './context/AudioContext';

const AppContent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();


  const isAuthPage = 
    location.pathname === '/' || 
    location.pathname === '/signup' || 
    location.pathname === '/login';

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-[#fcfdfe]">
      
      
      {!isAuthPage && (
        <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      )}

      <main className="flex-1 overflow-y-auto custom-scrollbar">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/signup" element={<SignUp />} />
          
          <Route path="/login" element={<Login />} />
          
          <Route path="/library" element={<Library searchTerm={searchTerm} />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/community" element={<Community />} />
        </Routes>
      </main>

     
      {!isAuthPage && <FooterPlayer />}
    </div>
  );
};

function App() {
  return (
    <AudioProvider>
      <Router>
        <AppContent />
      </Router>
    </AudioProvider>
  );
}

export default App;
