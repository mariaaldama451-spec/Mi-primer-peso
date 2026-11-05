import { ArrowRight } from 'lucide-react';
import { CornerAccent } from '@/components/decor/GeometricDecor';
import { INVESTMENTS, type Investment } from '@/data/investments';

export function InvestmentCards() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {INVESTMENTS.map((investment) => (
        <InvestmentCard key={investment.name} investment={investment} />
      ))}
    </div>
  );
}

function InvestmentCard({ investment }: { investment: Investment }) {
  const rows = [
    { label: 'Cómo funciona', value: investment.howItWorks },
    { label: 'Ejemplo', value: investment.example },
    { label: 'Le conviene a', value: investment.suitableFor },
    { label: 'Todavía no le conviene a', value: investment.notYetFor },
  ];
  const facts = [
    { label: 'Riesgo', value: investment.risk },
    { label: 'Monto mínimo', value: investment.minimum },
    { label: 'Plazo aproximado', value: investment.term },
  ];

  return (
    <article className="panel flex flex-col gap-5 bg-white p-5 sm:p-6">
      <CornerAccent />
      <h4 className="pr-12 font-display text-lg leading-[1.2] text-brand-ink">{investment.name}</h4>

      <dl className="flex flex-col gap-4">
        {rows.map((row) => (
          <div key={row.label} className="flex flex-col gap-1">
            <dt className="text-base font-semibold uppercase tracking-[0.12em] text-brand-ink">{row.label}</dt>
            <dd className="text-base leading-[1.5] text-brand-ink">{row.value}</dd>
          </div>
        ))}
      </dl>

      <dl className="grid gap-3 border-t border-brand-yellow pt-4 sm:grid-cols-3">
        {facts.map((fact) => (
          <div key={fact.label} className="flex flex-col gap-1 bg-brand-paper p-3">
            <dt className="text-base font-semibold uppercase tracking-[0.12em] text-brand-ink">{fact.label}</dt>
            <dd className="text-base font-semibold leading-[1.4] text-brand-ink">{fact.value}</dd>
          </div>
        ))}
      </dl>

      <div className="flex flex-col gap-2">
        <a
          href={investment.officialUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={investment.officialLabel}
          className="btn w-full"
        >
          Ver sitio oficial <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </a>
        <p className="break-all text-base text-brand-ink">{investment.officialUrl.replace('https://', '')}</p>
      </div>
    </article>
  );
}
