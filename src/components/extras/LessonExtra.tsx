import { CompoundInterestCalculator } from '@/components/calculator/CompoundInterestCalculator';
import { CondusefGuide } from '@/components/extras/CondusefGuide';
import { InvestmentCards } from '@/components/extras/InvestmentCards';
import type { LessonExtra as LessonExtraKind } from '@/data/lessons';

const EXTRA_TITLES: Record<LessonExtraKind, string> = {
  'compound-calculator': 'Calculadora de interés compuesto',
  'condusef-guide': 'Cómo protegerte de fraudes con la CONDUSEF',
  'investment-cards': 'Instrumentos para invertir en México',
};

export function LessonExtra({ kind }: { kind: LessonExtraKind }) {
  return (
    <div className="flex flex-col gap-5 border-t border-brand-yellow pt-8">
      <h3 className="font-display text-lg leading-[1.2] text-brand-ink sm:text-xl">{EXTRA_TITLES[kind]}</h3>
      {kind === 'compound-calculator' && <CompoundInterestCalculator />}
      {kind === 'condusef-guide' && <CondusefGuide />}
      {kind === 'investment-cards' && <InvestmentCards />}
    </div>
  );
}
