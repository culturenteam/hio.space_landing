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
      
      {/* Grid overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03]">
        <div className="h-full w-full" style={{
          backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }} />
      </div>

      {/* Header */}
      <header className="relative border-b-2 border-black p-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider">
            <div className="w-2 h-2 bg-black" />
            <span>BUILDING</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative flex-1 flex flex-col justify-center p-6">
        <div className="max-w-6xl mx-auto w-full">
          
          {/* Grid structure */}
          <div className="grid grid-cols-12 gap-6">
            
            {/* Left column - decorative ruler */}
            <div className="col-span-12 md:col-span-1 flex md:flex-col gap-2">
              <div className="w-full md:w-2 h-2 md:h-full bg-black" />
              <div className="w-full md:w-2 h-2 md:h-8 bg-black" />
              <div className="w-full md:w-2 h-2 md:h-4 bg-black" />
            </div>

            {/* Main content */}
            <div className="col-span-12 md:col-span-10 space-y-12">
              
              {/* Status badge */}
              <div className="inline-block border-2 border-black px-4 py-2 text-xs uppercase tracking-widest">
                PHASE_01 / INITIALIZING
              </div>

              {/* Main heading */}
              <div className="space-y-6">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase leading-none tracking-tight">
                  THE WEB IS<br />
                  STAGNANT.
                </h1>
                
                {/* Decorative line */}
                <div className="flex items-center gap-4">
                  <div className="h-0.5 w-24 bg-black" />
                  <div className="h-2 w-2 bg-black" />
                </div>

                <p className="text-lg md:text-xl max-w-2xl leading-relaxed font-sans">
                  We are rethinking the relationship between you and your digital presence. 
                  It shouldn't be a chore. It should be <span className="font-bold">alive</span>, <span className="font-bold">effortless</span>, and <span className="font-bold">yours</span>.
                </p>
              </div>

              {/* CTA Section */}
              <div className="space-y-6">
                <div className="h-px bg-black w-full" />
                
                <a
                  href={TWITTER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleCTAClick}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  className="group inline-block border-2 border-black hover:bg-black hover:text-white transition-colors duration-200"
                >
                  <div className="flex items-center gap-6 p-6">
                    <div className="border-2 border-current p-3">
                      <Twitter className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                      <p className="text-xs uppercase tracking-widest font-bold mb-1">FOLLOW THE JOURNEY</p>
                      <p className="text-lg font-mono">{SOCIAL_HANDLE}</p>
                    </div>
                    <ArrowRight className={`w-6 h-6 ml-auto transition-transform duration-200 ${isHovering ? 'translate-x-2' : ''}`} />
                  </div>
                </a>

                <div className="h-px bg-black w-full" />
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
                  <div key={i} className="border-2 border-black p-6 space-y-4">
                    <div className="flex items-start justify-between">
                      <span className="text-4xl font-bold opacity-20">{item.num}</span>
                      <div className="w-4 h-4 border-2 border-black" />
                    </div>
                    <h3 className="text-lg font-bold uppercase tracking-wide">{item.title}</h3>
                    <p className="text-sm leading-relaxed font-sans">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Decorative pattern */}
              <div className="flex gap-2 mt-12">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-black" style={{ opacity: (i % 3 === 0) ? 1 : 0.3 }} />
                ))}
              </div>
            </div>

            {/* Right column - decorative ruler */}
            <div className="col-span-12 md:col-span-1 flex md:flex-col gap-2 justify-end">
              <div className="w-full md:w-2 h-2 md:h-4 bg-black" />
              <div className="w-full md:w-2 h-2 md:h-8 bg-black" />
              <div className="w-full md:w-2 h-2 md:h-full bg-black" />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative border-t-2 border-black p-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs uppercase tracking-wider">
          <p>© {new Date().getFullYear()} hio.space / ALL SYSTEMS NOMINAL</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:underline">MANIFESTO</Link>
            <Link to="/privacy" className="hover:underline">PRIVACY</Link>
            <Link to="/contact" className="hover:underline">CONTACT</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ComingSoonBrutalist;
