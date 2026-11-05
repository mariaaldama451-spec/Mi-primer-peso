import { parseNumberInRange } from '@/lib/compoundInterest';

export type GoalFormValues = {
  cost: string;
  saved: string;
  months: string;
  rate: string;
};

export type GoalInputs = {
  cost: number;
  saved: number;
  months: number;
  annualRate: number;
};

export type GoalResult =
  | { status: 'reached' }
  | {
      status: 'saving';
      months: number;
      withoutMonthly: number;
      withMonthly: number;
      monthlyDifference: number;
      totalDifference: number;
    };

const MAX_MONTHS = 600;

function parseMonths(raw: string): number | null {
  const value = parseNumberInRange(raw, 1, MAX_MONTHS);
  return value !== null && Number.isInteger(value) ? value : null;
}

export function toGoalInputs(values: GoalFormValues): GoalInputs | null {
  const cost = parseNumberInRange(values.cost, 1, 1e12);
  const saved = parseNumberInRange(values.saved, 0, 1e12);
  const months = parseMonths(values.months);
  const annualRate = parseNumberInRange(values.rate, 0, 100);
  if (cost === null || saved === null || months === null || annualRate === null) return null;
  return { cost, saved, months, annualRate };
}

export function simulateGoal({ cost, saved, months, annualRate }: GoalInputs): GoalResult {
  const remaining = cost - saved;
  if (remaining <= 0) return { status: 'reached' };

  const withoutMonthly = remaining / months;
  const rate = annualRate / 1200;
  const growth = Math.pow(1 + rate, months);
  const withMonthly = rate === 0 ? withoutMonthly : ((cost - saved * growth) * rate) / (growth - 1);
  if (withMonthly <= 0) return { status: 'reached' };

  const monthlyDifference = withoutMonthly - withMonthly;
  return {
    status: 'saving',
    months,
    withoutMonthly,
    withMonthly,
    monthlyDifference,
    totalDifference: monthlyDifference * months,
  };
}
