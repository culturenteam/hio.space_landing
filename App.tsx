import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AmbientBackground from './components/AmbientBackground';
import ComingSoon from './components/ComingSoon';
import Privacy from './components/Privacy';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <div className="relative min-h-screen w-full bg-[#050505] overflow-hidden selection:bg-indigo-500/30 selection:text-white">
        <AmbientBackground />
        <Routes>
          <Route path="/" element={<ComingSoon />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;