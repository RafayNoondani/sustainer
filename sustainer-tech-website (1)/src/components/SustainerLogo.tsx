import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  showWordmark?: boolean;
}

export const SustainerLogo: React.FC<LogoProps> = ({
  className = '',
  size = 34,
  showWordmark = true
}) => {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Brand Shield Icon */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 512 512"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 hover:scale-105"
      >
        <defs>
          <linearGradient id="shieldBgGradLight" x1="256" y1="64" x2="256" y2="448" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#EBF8FA"/>
            <stop offset="100%" stopColor="#DEF4F7"/>
          </linearGradient>
          <linearGradient id="leftRimGradLight" x1="116" y1="112" x2="256" y2="448" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0D9488"/>
            <stop offset="100%" stopColor="#059669"/>
          </linearGradient>
          <linearGradient id="rightRimGradLight" x1="396" y1="112" x2="256" y2="448" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#06B6D4"/>
            <stop offset="100%" stopColor="#0284C7"/>
          </linearGradient>
          <linearGradient id="letterSGradLight" x1="180" y1="140" x2="340" y2="380" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0284C7"/>
            <stop offset="50%" stopColor="#0D9488"/>
            <stop offset="100%" stopColor="#059669"/>
          </linearGradient>
        </defs>

        {/* Shield background plate */}
        <path
          d="M256 64L396 112V240C396 332 334 416 256 448C178 416 116 332 116 240V112L256 64Z"
          fill="url(#shieldBgGradLight)"
          stroke="#BAE6FD"
          strokeWidth="6"
        />

        {/* Left shield border (Teal) */}
        <path
          d="M256 64L116 112V240C116 332 178 416 256 448"
          stroke="url(#leftRimGradLight)"
          strokeWidth="38"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Right shield border (Cyan) */}
        <path
          d="M256 64L396 112V240C396 332 334 416 256 448"
          stroke="url(#rightRimGradLight)"
          strokeWidth="38"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Center Stylized 'S' */}
        <path
          d="M328 190C324 162 298 144 260 144C216 144 186 168 186 204C186 270 334 246 334 316C334 354 300 376 256 376C208 376 182 350 178 318"
          stroke="url(#letterSGradLight)"
          strokeWidth="42"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>

      {/* Brand Wordmark */}
      {showWordmark && (
        <span className="font-display tracking-tight text-slate-900 font-bold text-lg sm:text-xl flex items-center gap-1.5">
          <span>SUSTAINER</span>
          <span className="text-teal-600 font-semibold">TECH</span>
        </span>
      )}
    </div>
  );
};
