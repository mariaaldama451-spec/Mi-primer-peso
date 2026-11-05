import { useState, type ChangeEvent, type FormEvent } from 'react';
import { GrowthChart } from '@/components/calculator/GrowthChart';
import { FormField } from '@/components/ui/FormField';
import { StatCard } from '@/components/ui/StatCard';
import {
  computeCompound,
  mxnFormatter,
  parseNumberInRange,
  parseYears,
  yearlySeries,
  type CompoundInputs,
  type CompoundResult,
  type YearPoint,
} from '@/lib/compoundInterest';

type FormValues = {
  initial: string;
  monthly: string;
  years: string;
  rate: string;
};

type CalculationResult = {
  summary: CompoundResult;
  series: YearPoint[];
};

const EMPTY_VALUES: FormValues = { initial: '', monthly: '', years: '', rate: '' };

function toInputs(values: FormValues): CompoundInputs | null {
  const initial = parseNumberInRange(values.initial, 0, 1e12);
  const monthly = parseNumberInRange(values.monthly, 0, 1e9);
  const years = parseYears(values.years);
  const annualRate = parseNumberInRange(values.rate, 0, 100);
  if (initial === null || monthly === null || years === null || annualRate === null) return null;
  return { initial, monthly, years, annualRate };
}

export function CompoundInterestCalculator() {
  const [values, setValues] = useState<FormValues>(EMPTY_VALUES);
  const [result, setResult] = useState<CalculationResult | null>(null);
  const inputs = toInputs(values);

  const updateField = (field: keyof FormValues) => (event: ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!inputs) return;
    setResult({ summary: computeCompound(inputs), series: yearlySeries(inputs) });
  };

  return (
    <div className="flex flex-col gap-8">
      <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2" noValidate>
        <FormField
          id="calc-initial"
          label="Monto inicial"
          hint="Lo que pones hoy, en pesos."
          placeholder="Ej. 10000"
          value={values.initial}
          onChange={updateField('initial')}
          inputMode="decimal"
        />
        <FormField
          id="calc-monthly"
          label="Aportación mensual"
          hint="Lo que agregas cada mes, en pesos."
          placeholder="Ej. 500"
          value={values.monthly}
          onChange={updateField('monthly')}
          inputMode="decimal"
        />
        <FormField
          id="calc-years"
          label="Plazo en años"
          hint="Cuántos años dejas crecer el dinero (1 a 100)."
          placeholder="Ej. 10"
          value={values.years}
          onChange={updateField('years')}
          inputMode="numeric"
        />
        <FormField
          id="calc-rate"
          label="Tasa anual (%)"
          hint="Lo que gana tu dinero al año, en porcentaje."
          placeholder="Ej. 10"
          value={values.rate}
          onChange={updateField('rate')}
          inputMode="decimal"
        />
        <div className="sm:col-span-2">
          <button type="submit" disabled={!inputs} className="btn w-full sm:w-auto sm:min-w-[220px]">
            CALCULAR →
          </button>
        </div>
      </form>

      {result && <CalculationOutput result={result} />}

      <p className="border-t border-brand-yellow pt-4 text-base leading-[1.5] text-brand-ink">
        Aviso: la tasa es un ejemplo y no está garantizada. Los resultados son estimaciones educativas, no una
        promesa de ganancia.
      </p>
    </div>
  );
}

function CalculationOutput({ result }: { result: CalculationResult }) {
  const { summary, series } = result;
  return (
    <section aria-live="polite" className="flex flex-col gap-8">
      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard label="Total acumulado" value={mxnFormatter.format(summary.total)} />
        <StatCard label="Total aportado" value={mxnFormatter.format(summary.contributed)} />
        <StatCard label="Ganancia generada" value={mxnFormatter.format(summary.gain)} highlight />
      </div>

      <p className="text-base leading-[1.5] text-brand-ink">
        Si guardas el dinero sin invertirlo, terminarías con {mxnFormatter.format(summary.contributed)}. Invirtiéndolo
        con esta tasa de ejemplo, terminarías con {mxnFormatter.format(summary.total)}: {mxnFormatter.format(summary.gain)}{' '}
        más.
      </p>

      <GrowthChart series={series} />
    </section>
  );
}
