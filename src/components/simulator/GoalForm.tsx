import { useState, type ChangeEvent, type FormEvent } from 'react';
import { FormField } from '@/components/ui/FormField';
import type { Goal } from '@/data/goals';
import { simulateGoal, toGoalInputs, type GoalFormValues, type GoalResult } from '@/lib/goalSimulator';

type GoalFormProps = {
  goal: Goal;
  onResult: (result: GoalResult) => void;
};

const EMPTY_VALUES: GoalFormValues = { cost: '', saved: '', months: '', rate: '' };

export function GoalForm({ goal, onResult }: GoalFormProps) {
  const [values, setValues] = useState<GoalFormValues>(EMPTY_VALUES);
  const inputs = toGoalInputs(values);

  const updateField = (field: keyof GoalFormValues) => (event: ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!inputs) return;
    onResult(simulateGoal(inputs));
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2" noValidate>
      <FormField
        id="goal-cost"
        label={goal.costLabel}
        hint={goal.costHint}
        placeholder={goal.costPlaceholder}
        value={values.cost}
        onChange={updateField('cost')}
        inputMode="decimal"
      />
      <FormField
        id="goal-saved"
        label="Ya tienes ahorrado"
        hint="Lo que ya guardaste para esta meta, en pesos. Escribe 0 si todavía no empiezas."
        placeholder="Ej. 2000"
        value={values.saved}
        onChange={updateField('saved')}
        inputMode="decimal"
      />
      <FormField
        id="goal-months"
        label="Plazo en meses"
        hint="En cuántos meses quieres lograrla (1 a 600)."
        placeholder="Ej. 24"
        value={values.months}
        onChange={updateField('months')}
        inputMode="numeric"
      />
      <FormField
        id="goal-rate"
        label="Tasa anual (%)"
        hint="Ganancia anual de ejemplo que daría tu dinero invertido."
        placeholder="Ej. 8"
        value={values.rate}
        onChange={updateField('rate')}
        inputMode="decimal"
      />
      <div className="sm:col-span-2">
        <button type="submit" disabled={!inputs} className="btn w-full sm:w-auto sm:min-w-[220px]">
          SIMULAR →
        </button>
      </div>
    </form>
  );
}
