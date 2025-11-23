import React from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <Link to="/" className={`flex items-center select-none ${className}`}>
      <img 
        src="/hio.svg" 
        alt="hio.space" 
        className="h-8 w-auto hover:opacity-80 transition-opacity"
      />
    </Link>
  );
};

export default Logo;