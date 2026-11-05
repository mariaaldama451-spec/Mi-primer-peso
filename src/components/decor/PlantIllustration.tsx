const COIN_LAYERS = [0, 1, 2, 3];
const COIN_BASE_Y = 196;
const COIN_STEP = 16;
const COIN_THICKNESS = 14;
const COIN_RX = 76;
const COIN_RY = 18;
const COIN_CX = 130;

const INK = '#10108F';
const ORANGE = '#E69A2E';
const GREEN = '#109825';

export function PlantIllustration({ className = '' }: { className?: string }) {
  return (
    <svg
      role="img"
      aria-label="Una planta verde creciendo sobre una pila de monedas naranjas"
      viewBox="0 0 260 260"
      className={className}
    >
      {COIN_LAYERS.map((layer) => {
        const top = COIN_BASE_Y - layer * COIN_STEP;
        const bottom = top + COIN_THICKNESS;
        return (
          <g key={layer} stroke={INK} strokeWidth="2">
            <path
              d={`M${COIN_CX - COIN_RX} ${top} L${COIN_CX - COIN_RX} ${bottom} A${COIN_RX} ${COIN_RY} 0 0 0 ${COIN_CX + COIN_RX} ${bottom} L${COIN_CX + COIN_RX} ${top} Z`}
              fill={ORANGE}
            />
            <ellipse cx={COIN_CX} cy={top} rx={COIN_RX} ry={COIN_RY} fill={ORANGE} />
            <ellipse cx={COIN_CX} cy={top} rx={COIN_RX - 18} ry={COIN_RY - 6} fill="none" strokeWidth="1.5" />
          </g>
        );
      })}

      <path
        d="M130 150 C 128 120, 134 96, 130 62"
        fill="none"
        stroke={GREEN}
        strokeWidth="7"
        strokeLinecap="round"
      />
      <g stroke={INK} strokeWidth="2" strokeLinejoin="round">
        <path d="M130 116 C 100 120, 82 104, 84 80 C 110 80, 126 94, 130 116 Z" fill={GREEN} />
        <path d="M131 96 C 158 100, 176 84, 174 58 C 148 58, 134 74, 131 96 Z" fill={GREEN} />
        <path d="M130 64 C 120 48, 124 32, 140 26 C 144 42, 140 56, 130 64 Z" fill={GREEN} />
      </g>
      <g stroke={INK} strokeWidth="1.5" fill="none" strokeLinecap="round">
        <path d="M128 112 C 112 104, 98 94, 90 84" />
        <path d="M133 94 C 148 86, 162 74, 170 62" />
        <path d="M130 62 C 128 52, 130 42, 136 32" />
      </g>
    </svg>
  );
}
