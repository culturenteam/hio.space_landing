import React from 'react';
import AmbientBackground from './components/AmbientBackground';
import ComingSoon from './components/ComingSoon';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#050505] overflow-hidden selection:bg-indigo-500/30 selection:text-white">
      <AmbientBackground />
      <ComingSoon />
    </div>
  );
};

export default App;