import { StatCard } from '@/components/ui/StatCard';
import { mxnFormatter } from '@/lib/compoundInterest';
import type { GoalResult } from '@/lib/goalSimulator';

type GoalResultViewProps = {
  result: GoalResult;
  onNewGoal: () => void;
  onRestart: () => void;
};

export function GoalResultView({ result, onNewGoal, onRestart }: GoalResultViewProps) {
  return (
    <section aria-live="polite" className="flex flex-col gap-8 border-t border-brand-yellow pt-8">
      {result.status === 'reached' ? (
        <p className="bg-brand-yellow p-5 text-base leading-[1.5] text-brand-ink">
          Con lo que ya tienes ahorrado llegas a tu meta sin aportar más.
        </p>
      ) : (
        <SavingOutput result={result} />
      )}

      <p className="text-base leading-[1.5] text-brand-ink">
        Aviso: la tasa es un ejemplo y no está garantizada. Los resultados son estimaciones educativas.
      </p>

      <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
        <button type="button" onClick={onNewGoal} className="btn-outline w-full sm:w-auto sm:min-w-[220px]">
          CREAR OTRA META
        </button>
        <button type="button" onClick={onRestart} className="btn w-full sm:w-auto sm:min-w-[220px]">
          EMPEZAR DE NUEVO
        </button>
      </div>
    </section>
  );
}

function SavingOutput({ result }: { result: Extract<GoalResult, { status: 'saving' }> }) {
  const { months, withoutMonthly, withMonthly, monthlyDifference, totalDifference } = result;
  const monthsLabel = months === 1 ? 'mes' : 'meses';

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Ahorro mensual sin invertir" value={mxnFormatter.format(withoutMonthly)} />
        <StatCard label="Ahorro mensual invirtiendo" value={mxnFormatter.format(withMonthly)} />
        <StatCard label="Diferencia mensual" value={mxnFormatter.format(monthlyDifference)} highlight />
        <StatCard label="Diferencia total en el plazo" value={mxnFormatter.format(totalDifference)} highlight />
      </div>

      <div className="flex flex-col gap-3">
        <p className="font-display text-xl leading-[1.3] text-brand-ink">
          Si ahorras {mxnFormatter.format(withoutMonthly)} al mes llegas a tu meta en {months} {monthsLabel}.
        </p>
        <p className="text-base leading-[1.5] text-brand-ink">
          Si inviertes {mxnFormatter.format(withMonthly)} al mes con esta tasa de ejemplo, llegas en el mismo plazo y
          aportas {mxnFormatter.format(monthlyDifference)} menos cada mes.
        </p>
      </div>
    </>
  );
}
