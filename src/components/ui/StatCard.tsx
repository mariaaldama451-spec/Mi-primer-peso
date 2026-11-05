type StatCardProps = {
  label: string;
  value: string;
  highlight?: boolean;
};

export function StatCard({ label, value, highlight = false }: StatCardProps) {
  return (
    <div className={`flex flex-col gap-2 border border-brand-ink p-4 ${highlight ? 'bg-brand-yellow' : 'bg-white'}`}>
      <span className="text-base font-semibold leading-[1.4] text-brand-ink">{label}</span>
      <span className="font-display text-xl leading-[1.2] text-brand-ink">{value}</span>
    </div>
  );
}
