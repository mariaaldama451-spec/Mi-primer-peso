type ShapesProps = {
  className?: string;
};

const HEX_POINTS = '28,1 55,16 55,48 28,63 1,48 1,16';

export function HeroShapes({ className = '' }: ShapesProps) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 600 420"
      preserveAspectRatio="xMidYMid slice"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    >
      <defs>
        <pattern id="hero-stripes" width="28" height="28" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <rect width="14" height="28" fill="#FFDE59" fillOpacity="0.22" />
        </pattern>
        <pattern id="hero-dots" width="22" height="22" patternUnits="userSpaceOnUse">
          <circle cx="4" cy="4" r="2.4" fill="#FFDE59" />
        </pattern>
      </defs>
      <rect x="400" y="0" width="200" height="170" fill="url(#hero-stripes)" />
      <rect x="0" y="300" width="150" height="120" fill="url(#hero-dots)" />
      <circle cx="520" cy="360" r="92" fill="#FFDE59" />
      <path d="M-20 170 A 110 110 0 0 1 90 280 L -20 280 Z" fill="#FFDE59" />
      <polygon points="300,380 360,280 240,280" fill="none" stroke="#FFDE59" strokeWidth="6" />
      <circle cx="60" cy="60" r="44" fill="none" stroke="#FFDE59" strokeWidth="10" />
      <polygon points="470,70 500,110 470,150 440,110" fill="#FFDE59" />
      <polygon points="230,40 262,62 230,84 198,62" fill="none" stroke="#FFDE59" strokeWidth="5" />
    </svg>
  );
}

export function CornerAccent({ className = '' }: ShapesProps) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 80 80"
      className={`pointer-events-none absolute right-0 top-0 h-16 w-16 sm:h-20 sm:w-20 ${className}`}
    >
      <path d="M80 0 L80 80 A80 80 0 0 1 0 0 Z" fill="#5170FF" />
      <circle cx="62" cy="18" r="6" fill="#FFDE59" />
    </svg>
  );
}

export function ShapeDivider({ className = '' }: ShapesProps) {
  return (
    <div aria-hidden="true" className={`flex items-center gap-3 ${className}`}>
      <span className="h-px flex-1 bg-brand-yellow" />
      <svg viewBox="0 0 48 16" className="h-4 w-12 shrink-0">
        <circle cx="8" cy="8" r="6" fill="#5170FF" />
        <polygon points="24,2 30,8 24,14 18,8" fill="#FFDE59" />
        <path d="M40 2 A6 6 0 0 1 40 14 Z" fill="#5170FF" />
      </svg>
      <span className="h-px flex-1 bg-brand-yellow" />
    </div>
  );
}

type HexBadgeProps = {
  value: number;
  status: 'done' | 'active' | 'locked';
};

const HEX_STYLES: Record<HexBadgeProps['status'], { fill: string; text: string }> = {
  done: { fill: '#5170FF', text: '#FFFFFF' },
  active: { fill: '#FFDE59', text: '#10108F' },
  locked: { fill: '#C4C4C4', text: '#6E6E6E' },
};

export function HexBadge({ value, status }: HexBadgeProps) {
  const style = HEX_STYLES[status];
  return (
    <div className="relative h-16 w-14 shrink-0">
      <svg aria-hidden="true" viewBox="0 0 56 64" className="absolute inset-0 h-full w-full">
        <polygon points={HEX_POINTS} fill={style.fill} stroke="#10108F" strokeWidth="2" />
      </svg>
      <span
        className="absolute inset-0 grid place-items-center font-display text-2xl leading-none"
        style={{ color: style.text }}
      >
        {value}
      </span>
    </div>
  );
}
