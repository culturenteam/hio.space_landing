import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Twitter, ArrowRight } from 'lucide-react';
import { TWITTER_URL, SOCIAL_HANDLE } from '../constants';
import Logo from './Logo';

interface ComingSoonBrutalistProps {
  onCTAClick: () => void;
}

const ComingSoonBrutalist: React.FC<ComingSoonBrutalistProps> = ({ onCTAClick }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleCTAClick = () => {
    onCTAClick();
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-[#F5F5F0] text-black z-10 font-mono">
      
      {/* Header */}
      <header className="relative border-b border-black p-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Logo dark />
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider">
            <div className="w-1.5 h-1.5 bg-black" />
            <span>BUILDING</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative flex-1 flex flex-col justify-center p-6">
        <div className="max-w-6xl mx-auto w-full">
          
          {/* Grid structure */}
          <div className="grid grid-cols-12 gap-8">
            
            {/* Left column - decorative ruler with grid */}
            <div className="col-span-12 md:col-span-1 flex md:flex-col gap-1 items-center">
              {/* Grid pattern */}
              <div className="hidden md:block w-full h-32 relative">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'linear-gradient(#000 0.5px, transparent 0.5px), linear-gradient(90deg, #000 0.5px, transparent 0.5px)',
                  backgroundSize: '8px 8px',
                  opacity: 0.15
                }} />
              </div>
              {/* Vertical line */}
              <div className="hidden md:block w-px h-full bg-black opacity-20" />
            </div>

            {/* Main content */}
            <div className="col-span-12 md:col-span-10 space-y-12 relative">
              
              {/* Subtle grid on content sides */}
              <div className="absolute -left-4 top-0 bottom-0 w-16 hidden lg:block" style={{
                backgroundImage: 'linear-gradient(#000 0.5px, transparent 0.5px), linear-gradient(90deg, #000 0.5px, transparent 0.5px)',
                backgroundSize: '8px 8px',
                opacity: 0.08
              }} />
              <div className="absolute -right-4 top-0 bottom-0 w-16 hidden lg:block" style={{
                backgroundImage: 'linear-gradient(#000 0.5px, transparent 0.5px), linear-gradient(90deg, #000 0.5px, transparent 0.5px)',
                backgroundSize: '8px 8px',
                opacity: 0.08
              }} />
              
              {/* Status badge */}
              <div className="inline-flex items-center gap-3">
                <div className="w-px h-6 bg-black opacity-30" />
                <div className="border border-black px-4 py-2 text-xs uppercase tracking-widest">
                  PHASE_01 / INITIALIZING
                </div>
              </div>

              {/* Main heading */}
              <div className="space-y-8">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase leading-none tracking-tight">
                  THE WEB IS<br />
                  STAGNANT.
                </h1>
                
                {/* Decorative line with connection */}
                <div className="flex items-center gap-3">
                  <div className="h-px w-16 bg-black opacity-30" />
                  <div className="h-1.5 w-1.5 bg-black" />
                  <div className="h-px flex-1 max-w-xs bg-black opacity-10" />
                </div>

                <p className="text-lg md:text-xl max-w-2xl leading-relaxed font-sans">
                  We are rethinking the relationship between you and your digital presence. 
                  It shouldn't be a chore. It should be <span className="font-bold">alive</span>, <span className="font-bold">effortless</span>, and <span className="font-bold">yours</span>.
                </p>
              </div>

              {/* CTA Section */}
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <div className="h-px bg-black w-12 opacity-30" />
                  <div className="h-1 w-1 bg-black" />
                  <div className="h-px bg-black flex-1 opacity-10" />
                </div>
                
                <a
                  href={TWITTER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleCTAClick}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  className="group inline-block border border-black hover:bg-black hover:text-white transition-colors duration-200"
                >
                  <div className="flex items-center gap-6 p-6">
                    <div className="border border-current p-3">
                      <Twitter className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                      <p className="text-xs uppercase tracking-widest font-bold mb-1">FOLLOW THE JOURNEY</p>
                      <p className="text-lg font-mono">{SOCIAL_HANDLE}</p>
                    </div>
                    <ArrowRight className={`w-6 h-6 ml-auto transition-transform duration-200 ${isHovering ? 'translate-x-2' : ''}`} />
                  </div>
                </a>

                <div className="flex items-center gap-2">
                  <div className="h-px bg-black flex-1 opacity-10" />
                  <div className="h-1 w-1 bg-black" />
                  <div className="h-px bg-black w-12 opacity-30" />
                </div>
              </div>

              {/* Feature Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
                {[
                  { 
                    num: "01",
                    title: "NO EDITORS", 
                    desc: "Forget drag and drop. Forget code. Just intent." 
                  },
                  { 
                    num: "02",
                    title: "ALWAYS ACTIVE", 
                    desc: "A presence that grows and adapts with you." 
                  },
                  { 
                    num: "03",
                    title: "PURE FOCUS", 
                    desc: "For the artists, the makers, and the restless." 
                  }
                ].map((item, i) => (
                  <div key={i} className="border border-black p-6 space-y-4 relative">
                    <div className="absolute top-0 left-0 w-1 h-1 bg-black" />
                    <div className="absolute top-0 right-0 w-1 h-1 bg-black" />
                    <div className="flex items-start justify-between">
                      <span className="text-4xl font-bold opacity-15">{item.num}</span>
                      <div className="w-3 h-3 border border-black" />
                    </div>
                    <div className="h-px bg-black opacity-10 w-full" />
                    <h3 className="text-lg font-bold uppercase tracking-wide">{item.title}</h3>
                    <p className="text-sm leading-relaxed font-sans">{item.desc}</p>
                    <div className="absolute bottom-0 left-0 w-1 h-1 bg-black" />
                    <div className="absolute bottom-0 right-0 w-1 h-1 bg-black" />
                  </div>
                ))}
              </div>

              {/* Decorative pattern */}
              <div className="flex items-center gap-1.5 mt-12">
                {[...Array(16)].map((_, i) => (
                  <div 
                    key={i} 
                    className="bg-black" 
                    style={{ 
                      width: i % 4 === 0 ? '6px' : '2px',
                      height: i % 4 === 0 ? '6px' : '2px',
                      opacity: i % 4 === 0 ? 1 : 0.2 
                    }} 
                  />
                ))}
              </div>
            </div>

            {/* Right column - decorative ruler with grid */}
            <div className="col-span-12 md:col-span-1 flex md:flex-col gap-1 items-center justify-end">
              {/* Vertical line */}
              <div className="hidden md:block w-px h-full bg-black opacity-20" />
              {/* Grid pattern */}
              <div className="hidden md:block w-full h-32 relative">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'linear-gradient(#000 0.5px, transparent 0.5px), linear-gradient(90deg, #000 0.5px, transparent 0.5px)',
                  backgroundSize: '8px 8px',
                  opacity: 0.15
                }} />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative border-t border-black p-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs uppercase tracking-wider">
          <div className="flex items-center gap-3">
            <div className="w-1 h-1 bg-black" />
            <p>© {new Date().getFullYear()} hio.space / ALL SYSTEMS NOMINAL</p>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:underline transition-all">MANIFESTO</Link>
            <div className="w-px h-3 bg-black opacity-20" />
            <Link to="/privacy" className="hover:underline transition-all">PRIVACY</Link>
            <div className="w-px h-3 bg-black opacity-20" />
            <Link to="/contact" className="hover:underline transition-all">CONTACT</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ComingSoonBrutalist;
