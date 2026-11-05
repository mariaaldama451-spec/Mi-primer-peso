import type { LessonOption } from '@/data/lessons';

type LessonQuizProps = {
  question: string;
  options: LessonOption[];
  selected: number | undefined;
  onSelect: (index: number) => void;
};

export function LessonQuiz({ question, options, selected, onSelect }: LessonQuizProps) {
  const selectedOption = selected === undefined ? undefined : options[selected];

  return (
    <div className="flex flex-col gap-5">
      <h3 id="quiz-question" className="font-display text-lg leading-[1.2] text-brand-ink sm:text-xl">
        {question}
      </h3>
      <div role="radiogroup" aria-labelledby="quiz-question" className="flex flex-col gap-3">
        {options.map((option, index) => {
          const isSelected = selected === index;
          return (
            <button
              key={option.text}
              type="button"
              role="radio"
              aria-checked={isSelected}
              onClick={() => onSelect(index)}
              className={`flex min-h-14 items-center gap-4 rounded-[2px] border px-4 py-3 text-left text-base leading-[1.5] transition-colors duration-200 ease-out ${
                isSelected
                  ? 'border-brand-ink bg-brand-yellow font-semibold text-brand-ink'
                  : 'border-brand-ink/40 bg-brand-paper text-brand-ink hover:border-brand-ink hover:bg-brand-yellow/50'
              }`}
            >
              <span
                aria-hidden="true"
                className="grid h-5 w-5 shrink-0 place-items-center rounded-full border-2 border-brand-ink bg-white"
              >
                {isSelected && <span className="h-2.5 w-2.5 rounded-full bg-brand-ink" />}
              </span>
              <span>{option.text}</span>
            </button>
          );
        })}
      </div>
      {selectedOption ? (
        <p role="status" className="border-l-4 border-brand-ink bg-brand-yellow px-4 py-3 text-base leading-[1.5] text-brand-ink">
          {selectedOption.feedback}
        </p>
      ) : (
        <p className="text-base leading-[1.5] text-brand-ink">Elige una respuesta para poder continuar.</p>
      )}
    </div>
  );
}
