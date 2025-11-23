import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-2 brand-font font-bold tracking-tighter select-none ${className}`}>
      <div className="relative w-8 h-8 flex items-center justify-center bg-white text-black rounded-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 opacity-20 animate-pulse" />
        <span className="relative z-10 text-lg">h</span>
      </div>
      <span className="text-2xl text-white">HIO<span className="text-gray-500">.space</span></span>
    </div>
  );
};

export default Logo;