import type { ReactNode } from 'react';
import type { GoalId } from '@/data/goals';

type GoalIllustrationProps = {
  id: GoalId;
  className?: string;
};

export function GoalIllustration({ id, className = '' }: GoalIllustrationProps) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 64 64"
      className={`h-16 w-16 shrink-0 ${className}`}
    >
      {ILLUSTRATIONS[id]}
    </svg>
  );
}

const ILLUSTRATIONS: Record<GoalId, ReactNode> = {
  viaje: (
    <>
      <circle cx="46" cy="16" r="8" fill="#FFDE59" stroke="#10108F" strokeWidth="2" />
      <polygon points="4,56 24,20 44,56" fill="#5170FF" stroke="#10108F" strokeWidth="2" strokeLinejoin="round" />
      <polygon points="30,56 44,34 60,56" fill="#10108F" />
    </>
  ),
  celular: (
    <>
      <rect x="17" y="4" width="30" height="56" rx="3" fill="#5170FF" stroke="#10108F" strokeWidth="2" />
      <rect x="21" y="12" width="22" height="36" fill="#FFDE59" />
      <circle cx="32" cy="54" r="2.5" fill="#FFDE59" />
    </>
  ),
  boda: (
    <>
      <circle cx="24" cy="32" r="14" fill="none" stroke="#5170FF" strokeWidth="6" />
      <circle cx="40" cy="32" r="14" fill="none" stroke="#10108F" strokeWidth="6" />
      <polygon points="32,6 36,12 32,18 28,12" fill="#FFDE59" stroke="#10108F" strokeWidth="1.5" />
    </>
  ),
  carro: (
    <>
      <path
        d="M6 40 L14 40 L20 26 L44 26 L52 40 L58 40 L58 50 L6 50 Z"
        fill="#5170FF"
        stroke="#10108F"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="18" cy="50" r="7" fill="#10108F" />
      <circle cx="18" cy="50" r="3" fill="#FFDE59" />
      <circle cx="46" cy="50" r="7" fill="#10108F" />
      <circle cx="46" cy="50" r="3" fill="#FFDE59" />
    </>
  ),
  casa: (
    <>
      <polygon points="32,6 60,30 4,30" fill="#FFDE59" stroke="#10108F" strokeWidth="2" strokeLinejoin="round" />
      <rect x="12" y="30" width="40" height="28" fill="#5170FF" stroke="#10108F" strokeWidth="2" />
      <rect x="27" y="40" width="10" height="18" fill="#10108F" />
    </>
  ),
  personalizada: (
    <>
      <polygon points="32,4 58,32 32,60 6,32" fill="none" stroke="#5170FF" strokeWidth="5" />
      <circle cx="32" cy="32" r="10" fill="#FFDE59" stroke="#10108F" strokeWidth="2" />
    </>
  ),
};
