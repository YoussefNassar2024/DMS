import React from 'react';

interface LogoProps {
  className?: string;
}

const PrimaryLogo: React.FC<LogoProps> = ({ className }) => (
  <div className={`relative group ${className}`}>
    <svg 
      viewBox="0 0 100 100" 
      xmlns="http://www.w3.org/2000/svg" 
      className="w-full h-full" 
      fill="currentColor"
    >
      {/* Top Left - Corner Bracket */}
      <path 
        d="M45 25 H25 V45 H9 C6.791 45 5 43.209 5 41 V9 C5 6.791 6.791 5 9 5 H41 C43.209 5 45 6.791 45 9 V25 Z" 
        className="logo-draw-path logo-part-1 transition-transform duration-300 ease-out group-hover:scale-90 origin-top-left"
      />
      
      {/* Top Right - Diagonal Arrow pointing NE */}
      <path 
        d="M 60 5 H 95 V 40 L 75 40 L 75 25 L 50 50 L 40 40 L 65 15 L 50 15 V 5 H 60 Z" 
        className="logo-draw-path logo-part-2 transition-transform duration-300 ease-out group-hover:scale-90 origin-top-right" 
      />
      
      {/* Bottom Left - 'b' / 'D' Shape */}
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M41 55 H9 C6.791 55 5 56.791 5 59 V91 C5 93.209 6.791 95 9 95 H41 C43.209 95 45 93.209 45 91 V59 C45 56.791 43.209 55 41 55 Z M40 85 H25 V65 H40 V85 Z" 
        className="logo-draw-path logo-part-3 transition-transform duration-300 ease-out group-hover:scale-90 origin-bottom-left" 
      />
      
      {/* Bottom Right - Corner Bracket */}
      <path 
        d="M55 75 H75 V55 H91 C93.209 55 95 56.791 95 59 V91 C95 93.209 93.209 95 91 95 H59 C56.791 95 55 93.209 55 91 V75 Z" 
        className="logo-draw-path logo-part-4 transition-transform duration-300 ease-out group-hover:scale-90 origin-bottom-right"
      />
    </svg>
  </div>
);

export const SecondaryLogo: React.FC<LogoProps> = ({ className }) => (
  <div className={`relative group ${className}`}>
    <svg 
      viewBox="0 0 100 100" 
      xmlns="http://www.w3.org/2000/svg" 
      className="w-full h-full" 
      fill="currentColor"
    >
      {/* Top Left - Arrow pointing SE */}
      <path 
        d="M 5 5 H 35 V 20 H 25 L 45 40 L 40 45 L 20 25 V 35 H 5 Z" 
        className="logo-draw-path logo-part-1 transition-transform duration-300 ease-out group-hover:scale-90 origin-top-left"
      />
      
      {/* Top Right - Arrow pointing SW */}
      <path 
        d="M 95 5 H 65 V 20 H 75 L 55 40 L 60 45 L 80 25 V 35 H 95 Z" 
        className="logo-draw-path logo-part-2 transition-transform duration-300 ease-out group-hover:scale-90 origin-top-right"
      />
      
      {/* Bottom Left - Arrow pointing NE */}
      <path 
        d="M 5 95 H 35 V 80 H 25 L 45 60 L 40 55 L 20 75 V 65 H 5 Z" 
        className="logo-draw-path logo-part-3 transition-transform duration-300 ease-out group-hover:scale-90 origin-bottom-left"
      />
      
      {/* Bottom Right - Arrow pointing NW */}
      <path 
        d="M 95 95 H 65 V 80 H 75 L 55 60 L 60 55 L 80 75 V 65 H 95 Z" 
        className="logo-draw-path logo-part-4 transition-transform duration-300 ease-out group-hover:scale-90 origin-bottom-right"
      />
    </svg>
  </div>
);

export default PrimaryLogo;