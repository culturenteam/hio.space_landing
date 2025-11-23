import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Twitter, ArrowRight, Loader2 } from 'lucide-react';
import { TWITTER_URL, SOCIAL_HANDLE } from '../constants';
import Logo from './Logo';
import TypingEffect from './TypingEffect';

const ComingSoon: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-between p-6 z-10">
      
      {/* Header */}
      <header className="w-full max-w-6xl flex justify-between items-center py-6 animate-fade-in-down">
        <Logo />
        <a 
          href={TWITTER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="glass-panel px-4 py-2 rounded-full text-xs font-medium text-gray-400 hover:text-white hover:bg-white/10 transition-all flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          System Status: Building
        </a>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center text-center max-w-3xl mx-auto w-full gap-12">
        
        {/* Abstract/Vague Hook */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs tracking-wide uppercase">
            <Loader2 className="w-3 h-3 animate-spin" />
            <span>Initializing Phase One</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-500">
            The web is <br className="hidden md:block" />
            <span className="text-white">stagnant.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-xl mx-auto font-light leading-relaxed">
            We are rethinking the relationship between you and your digital presence. 
            It shouldn't be a chore. It should be 
            <span className="text-white font-medium ml-1">
              <TypingEffect 
                phrases={[
                  "alive.",
                  "effortless.",
                  "conversational.",
                  "fluid.",
                  "yours."
                ]} 
              />
            </span>
          </p>
        </div>

        {/* CTA Section */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
          <a
            href={TWITTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="relative glass-panel px-8 py-4 rounded-lg flex items-center gap-4 hover:bg-white/5 transition-all duration-300"
          >
            <div className="bg-black p-2 rounded-md">
                <Twitter className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Follow the journey</p>
              <p className="text-white font-medium">{SOCIAL_HANDLE}</p>
            </div>
            <ArrowRight className={`w-5 h-5 text-gray-500 ml-4 transition-transform duration-300 ${isHovering ? 'translate-x-1 text-white' : ''}`} />
          </a>
        </div>

        {/* Abstract Feature Grid (Vague hints) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 w-full text-left">
          {[
            { title: "No Editors", desc: "Forget drag and drop. Forget code. Just intent." },
            { title: "Always Active", desc: "A presence that grows and adapts with you." },
            { title: "Pure Focus", desc: "For the artists, the makers, and the restless." }
          ].map((item, i) => (
            <div key={i} className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
              <h3 className="text-white font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

      </main>

      {/* Footer */}
      <footer className="w-full max-w-6xl py-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
        <p>&copy; {new Date().getFullYear()} hio.space. All systems nominal.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link to="/privacy" className="hover:text-gray-400 cursor-pointer transition-colors">Manifesto</Link>
          <Link to="/privacy" className="hover:text-gray-400 cursor-pointer transition-colors">Privacy</Link>
          <Link to="/contact" className="hover:text-gray-400 cursor-pointer transition-colors">Contact</Link>
        </div>
      </footer>
    </div>
  );
};

export default ComingSoon;