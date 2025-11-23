import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-3 brand-font font-bold tracking-tighter select-none ${className}`}>
      <img 
        src="/hio.svg" 
        alt="HIO" 
        className="h-8 w-auto"
      />
      <span className="text-2xl text-white lowercase">hio<span className="text-gray-500">.space</span></span>
    </div>
  );
};

export default Logo;