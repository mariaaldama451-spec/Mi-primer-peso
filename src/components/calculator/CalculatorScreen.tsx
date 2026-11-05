import { CompoundInterestCalculator } from '@/components/calculator/CompoundInterestCalculator';
import { CornerAccent } from '@/components/decor/GeometricDecor';

export function CalculatorScreen() {
  return (
    <section className="panel flex flex-col gap-8 p-6 sm:p-10">
      <CornerAccent />
      <div className="flex flex-col gap-3 pr-12 sm:pr-16">
        <p className="text-base font-semibold uppercase tracking-[0.2em] text-brand-ink">Herramienta</p>
        <h2 className="font-display text-2xl leading-[1.2] text-brand-blue sm:text-3xl">
          Calculadora de interés compuesto
        </h2>
        <p className="max-w-2xl text-base leading-[1.5] text-brand-ink">
          Escribe cuánto pones hoy, cuánto agregas cada mes, cuántos años lo dejas crecer y qué tasa de ejemplo
          quieres probar. Después presiona calcular para ver el resultado.
        </p>
      </div>
      <CompoundInterestCalculator />
    </section>
  );
}
