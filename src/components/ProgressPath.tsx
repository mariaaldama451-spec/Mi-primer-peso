import { Check } from 'lucide-react';

export type PathStepStatus = 'done' | 'active' | 'locked';

export type PathStep = {
  label: string;
  status: PathStepStatus;
};

type ProgressPathProps = {
  steps: PathStep[];
  ariaLabel: string;
};

export function ProgressPath({ steps, ariaLabel }: ProgressPathProps) {
  const count = steps.length;
  const doneCount = steps.filter((step) => step.status === 'done').length;
  const segments = Math.max(count - 1, 1);
  const fillFraction = Math.min(doneCount, segments) / segments;
  const inset = `calc(100% / ${count * 2})`;

  return (
    <div className="relative" role="group" aria-label={ariaLabel}>
      <div
        aria-hidden="true"
        className="absolute top-4 h-1 bg-brand-disabledBorder"
        style={{ left: inset, right: inset }}
      />
      <div
        aria-hidden="true"
        className="absolute top-4 h-1 bg-brand-blue transition-[width] duration-500 ease-out"
        style={{ left: inset, width: `calc((100% - ${inset} * 2) * ${fillFraction})` }}
      />
      <div className="relative grid" style={{ gridTemplateColumns: `repeat(${count}, minmax(0, 1fr))` }}>
        {steps.map((step, index) => (
          <div key={step.label} className="flex flex-col items-center gap-2 text-center">
            <PathNode number={index + 1} status={step.status} />
            <span
              className={`hidden text-base leading-tight sm:block ${
                step.status === 'locked' ? 'text-brand-ink/70' : 'font-semibold text-brand-ink'
              }`}
            >
              {step.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function PathNode({ number, status }: { number: number; status: PathStepStatus }) {
  if (status === 'done') {
    return (
      <span className="grid h-8 w-8 place-items-center rounded-full border-2 border-brand-ink bg-brand-blue text-white">
        <Check aria-hidden="true" className="h-4 w-4" strokeWidth={3} />
        <span className="sr-only">{number}</span>
      </span>
    );
  }
  if (status === 'active') {
    return (
      <span className="relative grid h-8 w-8 place-items-center">
        <span
          aria-hidden="true"
          className="absolute inset-0 rotate-45 border-2 border-brand-ink bg-brand-yellow ring-4 ring-brand-paper"
        />
        <span className="relative font-display text-base text-brand-ink">{number}</span>
      </span>
    );
  }
  return (
    <span className="grid h-8 w-8 place-items-center rounded-full border-2 border-brand-disabledBorder bg-brand-disabled font-display text-base text-brand-muted">
      {number}
    </span>
  );
}
