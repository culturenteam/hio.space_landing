import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import AmbientBackground from './components/AmbientBackground';
import ComingSoon from './components/ComingSoon';
import ComingSoonBrutalist from './components/ComingSoonBrutalist';
import Privacy from './components/Privacy';
import Contact from './components/Contact';
import { getVariant, trackEvent, type Variant } from './utils/analytics';

const HomePage: React.FC = () => {
  const [variant, setVariant] = useState<Variant>('A');

  useEffect(() => {
    const assignedVariant = getVariant();
    setVariant(assignedVariant);
    trackEvent('view', assignedVariant);
  }, []);

  const handleCTAClick = () => {
    trackEvent('cta_click', variant);
  };

  if (variant === 'B') {
    return <ComingSoonBrutalist onCTAClick={handleCTAClick} />;
  }

  return (
    <>
      <AmbientBackground />
      <ComingSoon onCTAClick={handleCTAClick} />
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="relative min-h-screen w-full bg-[#050505] overflow-hidden selection:bg-indigo-500/30 selection:text-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy" element={
            <>
              <AmbientBackground />
              <Privacy />
            </>
          } />
          <Route path="/contact" element={
            <>
              <AmbientBackground />
              <Contact />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;