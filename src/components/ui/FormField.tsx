import type { ChangeEvent } from 'react';

type FormFieldProps = {
  id: string;
  label: string;
  hint: string;
  placeholder: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  inputMode: 'decimal' | 'numeric';
};

export function FormField({ id, label, hint, placeholder, value, onChange, inputMode }: FormFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-base font-semibold text-brand-ink">
        {label}
      </label>
      <input
        id={id}
        type="text"
        inputMode={inputMode}
        autoComplete="off"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        aria-describedby={`${id}-hint`}
        className="min-h-12 w-full rounded-[2px] border border-brand-ink bg-white px-4 py-3 text-base text-brand-ink placeholder:text-brand-muted focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue"
      />
      <span id={`${id}-hint`} className="text-base leading-[1.5] text-brand-ink">
        {hint}
      </span>
    </div>
  );
}
