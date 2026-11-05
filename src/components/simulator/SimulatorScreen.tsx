import { useState } from 'react';
import { CornerAccent } from '@/components/decor/GeometricDecor';
import { GoalForm } from '@/components/simulator/GoalForm';
import { GoalIllustration } from '@/components/simulator/GoalIllustration';
import { GoalPicker } from '@/components/simulator/GoalPicker';
import { GoalResultView } from '@/components/simulator/GoalResultView';
import type { Goal } from '@/data/goals';
import type { GoalResult } from '@/lib/goalSimulator';

export function SimulatorScreen() {
  const [goal, setGoal] = useState<Goal | null>(null);
  const [result, setResult] = useState<GoalResult | null>(null);
  const [formKey, setFormKey] = useState(0);

  const chooseGoal = (nextGoal: Goal) => {
    setGoal(nextGoal);
    setResult(null);
  };

  const startNewGoal = () => {
    setGoal(null);
    setResult(null);
  };

  const restartForm = () => {
    setResult(null);
    setFormKey((key) => key + 1);
  };

  return (
    <section className="panel flex flex-col gap-8 p-6 sm:p-10">
      <CornerAccent />
      <div className="flex flex-col gap-3 pr-12 sm:pr-16">
        <p className="text-base font-semibold uppercase tracking-[0.2em] text-brand-ink">Herramienta</p>
        <h2 className="font-display text-2xl leading-[1.2] text-brand-blue sm:text-3xl">Simulador de metas</h2>
        <p className="max-w-2xl text-base leading-[1.5] text-brand-ink">
          Elige una meta, escribe cuánto cuesta y en cuánto tiempo la quieres. Te mostramos cuánto ahorrar al mes, con y
          sin invertir.
        </p>
      </div>

      {goal ? (
        <div className="flex flex-col gap-8">
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-brand-yellow pt-6">
            <div className="flex items-center gap-4">
              <GoalIllustration id={goal.id} />
              <div className="flex flex-col gap-1">
                <p className="text-base font-semibold text-brand-ink">Tu meta</p>
                <h3 className="font-display text-xl leading-[1.2] text-brand-ink">{goal.title}</h3>
              </div>
            </div>
            <button type="button" onClick={startNewGoal} className="btn-outline min-h-[44px] px-4 py-2">
              Cambiar meta
            </button>
          </div>

          <GoalForm key={formKey} goal={goal} onResult={setResult} />

          {result && <GoalResultView result={result} onNewGoal={startNewGoal} onRestart={restartForm} />}
        </div>
      ) : (
        <GoalPicker onSelect={chooseGoal} />
      )}
    </section>
  );
}
