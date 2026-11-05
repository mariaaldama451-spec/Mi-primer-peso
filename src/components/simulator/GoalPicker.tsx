import { ArrowRight } from 'lucide-react';
import { CornerAccent } from '@/components/decor/GeometricDecor';
import { GoalIllustration } from '@/components/simulator/GoalIllustration';
import { GOALS, type Goal } from '@/data/goals';

type GoalPickerProps = {
  onSelect: (goal: Goal) => void;
};

export function GoalPicker({ onSelect }: GoalPickerProps) {
  return (
    <div className="flex flex-col gap-5">
      <h3 className="font-display text-lg leading-[1.2] text-brand-ink">Elige tu meta</h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {GOALS.map((goal) => (
          <button
            key={goal.id}
            type="button"
            onClick={() => onSelect(goal)}
            className="panel group flex flex-col gap-4 bg-white p-5 text-left transition-colors duration-200 ease-out hover:border-brand-ink hover:bg-brand-yellow/30"
          >
            <CornerAccent />
            <GoalIllustration id={goal.id} />
            <span className="pr-10 font-display text-lg leading-[1.2] text-brand-ink">{goal.title}</span>
            <span className="text-base leading-[1.5] text-brand-ink">{goal.description}</span>
            <span className="mt-auto flex items-center gap-2 text-base font-semibold text-brand-ink">
              Elegir
              <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
