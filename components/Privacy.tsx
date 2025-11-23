import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Privacy: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#050505] overflow-hidden">
      <div className="relative min-h-screen flex flex-col p-6 z-10 max-w-4xl mx-auto">
        
        {/* Header */}
        <header className="w-full flex justify-between items-center py-6 animate-fade-in-down">
          <Logo />
          <Link 
            to="/"
            className="glass-panel px-4 py-2 rounded-full text-xs font-medium text-gray-400 hover:text-white hover:bg-white/10 transition-all flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
        </header>

        {/* Content */}
        <main className="flex-1 py-12">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
                Manifesto for Privacy
              </h1>
              <p className="text-gray-400 text-lg">
                Our commitment to your digital autonomy
              </p>
            </div>

            <div className="prose prose-invert max-w-none space-y-6 text-gray-300">
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">Your Data, Your Rules</h2>
                <p>
                  We believe the web has lost its way. Platforms have become data extraction machines, 
                  treating users as products rather than people. We're building something different.
                </p>
                <p>
                  At HIO.space, privacy isn't a feature—it's the foundation. Your digital presence 
                  should serve you, not advertisers, not algorithms, not corporations.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">What We Collect</h2>
                <p>
                  Currently, we collect nothing. This is a coming soon page. When we launch:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>We will never sell your data</li>
                  <li>We will never track you across the web</li>
                  <li>We will never use your content to train AI without explicit consent</li>
                  <li>We will be transparent about what we collect and why</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">Our Principles</h2>
                <div className="space-y-3">
                  <div className="p-4 rounded-lg border border-white/10 bg-white/[0.02]">
                    <h3 className="text-white font-semibold mb-2">Minimal Collection</h3>
                    <p className="text-sm text-gray-400">
                      We only collect what's necessary to provide the service you're using.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg border border-white/10 bg-white/[0.02]">
                    <h3 className="text-white font-semibold mb-2">User Control</h3>
                    <p className="text-sm text-gray-400">
                      You can export, delete, or modify your data at any time.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg border border-white/10 bg-white/[0.02]">
                    <h3 className="text-white font-semibold mb-2">Transparency</h3>
                    <p className="text-sm text-gray-400">
                      Clear, honest communication about how your data is used.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg border border-white/10 bg-white/[0.02]">
                    <h3 className="text-white font-semibold mb-2">Security First</h3>
                    <p className="text-sm text-gray-400">
                      Industry-standard encryption and security practices.
                    </p>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">Questions?</h2>
                <p>
                  We're still building. If you have questions about privacy or want to discuss 
                  our approach, <Link to="/contact" className="text-indigo-400 hover:text-indigo-300 underline">reach out</Link>.
                </p>
              </section>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="w-full py-8 text-xs text-gray-600 text-center">
          <p>&copy; {new Date().getFullYear()} HIO.space. Building with intention.</p>
        </footer>
      </div>
    </div>
  );
};

export default Privacy;
