import React from 'react';

// Common SVG props
const defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const ArrowRight: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...defaultProps} {...props}>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

export const ArrowLeft: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...defaultProps} {...props}>
    <path d="m12 19-7-7 7-7" />
    <path d="M19 12H5" />
  </svg>
);

export const Sparkles: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...defaultProps} {...props}>
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
  </svg>
);

export const X: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...defaultProps} {...props}>
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

export const Github: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...defaultProps} {...props}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
);

export const MessageSquare: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...defaultProps} {...props}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

export const Sun: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...defaultProps} {...props}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="m4.93 4.93 1.41 1.41" />
    <path d="m17.66 17.66 1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="m6.34 17.66-1.41-1.41" />
    <path d="m19.07 4.93-1.41 1.41" />
  </svg>
);

export const Moon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...defaultProps} {...props}>
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </svg>
);

export const Menu: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...defaultProps} {...props}>
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);

export const Search: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...defaultProps} {...props}>
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

export const Calendar: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...defaultProps} {...props}>
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
    <line x1="16" x2="16" y1="2" y2="6" />
    <line x1="8" x2="8" y1="2" y2="6" />
    <line x1="3" x2="21" y1="10" y2="10" />
  </svg>
);

export const Clock: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...defaultProps} {...props}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

export const Tag: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...defaultProps} {...props}>
    <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
    <path d="M7 7h.01" />
  </svg>
);

export const Home: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...defaultProps} {...props}>
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
);

export const User: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...defaultProps} {...props}>
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
    </svg>
);