export type CompoundInputs = {
  initial: number;
  monthly: number;
  years: number;
  annualRate: number;
};

export type CompoundResult = {
  total: number;
  contributed: number;
  gain: number;
};

export type YearPoint = CompoundResult & {
  year: number;
};

export function computeCompound({ initial, monthly, years, annualRate }: CompoundInputs): CompoundResult {
  const months = years * 12;
  const rate = annualRate / 100 / 12;
  const contributed = initial + monthly * months;
  const total =
    rate === 0
      ? contributed
      : initial * Math.pow(1 + rate, months) + monthly * ((Math.pow(1 + rate, months) - 1) / rate);
  return { total, contributed, gain: total - contributed };
}

export function yearlySeries(inputs: CompoundInputs): YearPoint[] {
  return Array.from({ length: inputs.years }, (_, index) => ({
    year: index + 1,
    ...computeCompound({ ...inputs, years: index + 1 }),
  }));
}

export const mxnFormatter = new Intl.NumberFormat('es-MX', {
  style: 'currency',
  currency: 'MXN',
  maximumFractionDigits: 0,
});

export function parseNumberInRange(raw: string, min: number, max: number): number | null {
  if (raw.trim() === '') return null;
  const value = Number(raw);
  return Number.isFinite(value) && value >= min && value <= max ? value : null;
}

export function parseYears(raw: string): number | null {
  const value = parseNumberInRange(raw, 1, 100);
  return value !== null && Number.isInteger(value) ? value : null;
}
