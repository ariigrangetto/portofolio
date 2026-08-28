import { useId, type SVGProps } from 'react';

interface BugBlogIllustrationProps extends SVGProps<SVGSVGElement> {
  size?: number;
  glow?: boolean;
  primaryColor?: string;
  secondaryColor?: string;
  bgTileColor?: string;
  showTile?: boolean;
}

export function BugBlogIllustration({
  size = 64,
  glow = true,
  primaryColor = '#8B7FD4',
  secondaryColor = '#6c5ecf',
  bgTileColor = '#161522',
  showTile = true,
  className = '',
  style,
  ...props
}: BugBlogIllustrationProps) {
  const filterId = useId();
  const gradId = useId();

  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{
        filter: glow ? `drop-shadow(0 0 12px rgba(139, 127, 212, 0.45))` : undefined,
        ...style,
      }}
      {...props}
    >
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={primaryColor} />
          <stop offset="100%" stopColor={secondaryColor} />
        </linearGradient>
        <filter id={filterId} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor={primaryColor} floodOpacity="0.5" />
        </filter>
      </defs>

      {showTile && (
        <>
          <rect
            width="64"
            height="64"
            rx="12"
            fill={bgTileColor}
            stroke="rgba(139, 127, 212, 0.3)"
            strokeWidth="1.2"
          />
          <circle cx="10" cy="10" r="1" fill="rgba(139, 127, 212, 0.4)" />
          <circle cx="54" cy="10" r="1" fill="rgba(139, 127, 212, 0.4)" />
          <circle cx="10" cy="54" r="1" fill="rgba(139, 127, 212, 0.4)" />
          <circle cx="54" cy="54" r="1" fill="rgba(139, 127, 212, 0.4)" />
        </>
      )}

      <g transform="translate(0, 9)">
        <rect x="14" y="2" width="5" height="5" fill={`url(#${gradId})`} rx="0.5" />
        <rect x="45" y="2" width="5" height="5" fill={`url(#${gradId})`} rx="0.5" />
        <line
          x1="26"
          y1="12"
          x2="18"
          y2="5"
          stroke={primaryColor}
          strokeWidth="1.5"
          strokeLinecap="square"
        />
        <line
          x1="38"
          y1="12"
          x2="46"
          y2="5"
          stroke={primaryColor}
          strokeWidth="1.5"
          strokeLinecap="square"
        />

        <rect x="25" y="12" width="14" height="10" fill={`url(#${gradId})`} rx="1" />

        <rect x="27" y="14" width="3.5" height="3.5" fill={bgTileColor} rx="0.5" />
        <rect x="33.5" y="14" width="3.5" height="3.5" fill={bgTileColor} rx="0.5" />
        <rect x="21" y="22" width="22" height="24" fill={`url(#${gradId})`} rx="1.5" />

        <line x1="22" y1="27" x2="43" y2="27" stroke={bgTileColor} strokeWidth="0.9" opacity="0.7" />
        <line x1="22" y1="31" x2="43" y2="31" stroke={bgTileColor} strokeWidth="0.9" opacity="0.7" />
        <line x1="22" y1="35" x2="43" y2="35" stroke={bgTileColor} strokeWidth="0.9" opacity="0.7" />
        <line x1="22" y1="39" x2="43" y2="39" stroke={bgTileColor} strokeWidth="0.9" opacity="0.7" />
        <line x1="22" y1="43" x2="43" y2="43" stroke={bgTileColor} strokeWidth="0.9" opacity="0.7" />
        <line x1="32" y1="22" x2="32" y2="46" stroke={bgTileColor} strokeWidth="2.2" />

        <rect x="13" y="24" width="8" height="2.5" fill={primaryColor} rx="0.5" />
        <rect x="13" y="30" width="8" height="2.5" fill={primaryColor} rx="0.5" />
        <rect x="13" y="36" width="8" height="2.5" fill={primaryColor} rx="0.5" />

        <rect x="43" y="24" width="8" height="2.5" fill={primaryColor} rx="0.5" />
        <rect x="43" y="30" width="8" height="2.5" fill={primaryColor} rx="0.5" />
        <rect x="43" y="36" width="8" height="2.5" fill={primaryColor} rx="0.5" />
      </g>
    </svg>
  );
}

export default BugBlogIllustration;
