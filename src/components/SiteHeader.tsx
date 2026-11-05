import { BookOpen, Home, Sprout, type LucideIcon } from 'lucide-react';

type SiteHeaderProps = {
  onHome: () => void;
  onLessons: () => void;
};

export function SiteHeader({ onHome, onLessons }: SiteHeaderProps) {
  return (
    <header className="w-full border-b border-brand-yellow">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-[2px] border border-brand-ink bg-brand-blue">
            <Sprout aria-hidden="true" className="h-5 w-5 text-brand-yellow" strokeWidth={2.5} />
          </span>
          <span className="font-display text-lg leading-none text-brand-ink sm:text-xl">Mi Primer Peso</span>
        </div>
        <nav aria-label="Navegación principal" className="flex items-center gap-1 sm:gap-2">
          <HeaderNavButton icon={Home} label="Inicio" onClick={onHome} />
          <HeaderNavButton icon={BookOpen} label="Lecciones" onClick={onLessons} />
        </nav>
      </div>
    </header>
  );
}

type HeaderNavButtonProps = {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
};

function HeaderNavButton({ icon: Icon, label, onClick }: HeaderNavButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="inline-flex min-h-[44px] items-center gap-2 rounded-[2px] px-3 py-2 text-base font-semibold text-brand-ink transition-colors duration-200 hover:bg-brand-yellow"
    >
      <Icon aria-hidden="true" className="h-5 w-5" />
      <span className="hidden sm:inline">{label}</span>
    </button>
  );
}
