import { ArrowRight, ExternalLink } from 'lucide-react';
import { LessonQuiz } from '@/components/LessonQuiz';
import { ProgressPath, type PathStep } from '@/components/ProgressPath';
import { LessonExtra } from '@/components/extras/LessonExtra';
import { CornerAccent, HexBadge } from '@/components/decor/GeometricDecor';
import { STAGE_ONE_LESSONS, type Lesson } from '@/data/lessons';

type LessonScreenProps = {
  lessonIndex: number;
  selectedOption: number | undefined;
  onSelect: (optionIndex: number) => void;
  onNext: () => void;
};

export function LessonScreen({ lessonIndex, selectedOption, onSelect, onNext }: LessonScreenProps) {
  const lesson = STAGE_ONE_LESSONS[lessonIndex];
  const total = STAGE_ONE_LESSONS.length;
  const answered = selectedOption !== undefined;

  const steps: PathStep[] = STAGE_ONE_LESSONS.map((_, index) => ({
    label: `Lección ${index + 1}`,
    status: index < lessonIndex ? 'done' : index === lessonIndex ? 'active' : 'locked',
  }));

  return (
    <div className="flex flex-col gap-6">
      <section className="panel flex flex-col gap-8 p-6 sm:p-10">
        <CornerAccent />
        <div className="flex flex-col gap-6 pr-12 sm:pr-16">
          <p className="text-base font-semibold uppercase tracking-[0.2em] text-brand-ink">
            Etapa 1 de 3 · Lección {lessonIndex + 1} de {total}
          </p>
          <ProgressPath steps={steps} ariaLabel="Progreso de lecciones de la etapa 1" />
        </div>

        <header className="flex items-center gap-4 sm:gap-6">
          <HexBadge value={lessonIndex + 1} status="active" />
          <h2 className="font-display text-2xl leading-[1.2] text-brand-blue sm:text-3xl">{lesson.title}</h2>
        </header>

        <LessonBody lesson={lesson} />
      </section>

      <section className="panel flex flex-col gap-8 p-6 sm:p-10">
        <div className="flex flex-col gap-2">
          <p className="text-base font-semibold uppercase tracking-[0.2em] text-brand-ink">Pon a prueba lo aprendido</p>
          <LessonQuiz
            question={lesson.question}
            options={lesson.options}
            selected={selectedOption}
            onSelect={onSelect}
          />
        </div>

        <div className="flex justify-end">
          <button type="button" onClick={onNext} disabled={!answered} className="btn w-full sm:w-auto sm:min-w-[220px]">
            Siguiente <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </button>
        </div>
      </section>
    </div>
  );
}

function LessonBody({ lesson }: { lesson: Lesson }) {
  return (
    <div className="flex flex-col gap-8">
      <p className="text-base leading-[1.5] text-brand-ink sm:text-lg">{lesson.intro}</p>

      {lesson.sections.map((section) => (
        <div key={section.heading} className="flex flex-col gap-2">
          <h3 className="font-display text-lg leading-[1.2] text-brand-ink">{section.heading}</h3>
          <p className="text-base leading-[1.5] text-brand-ink">{section.body}</p>
        </div>
      ))}

      <div className="flex flex-col gap-2 bg-brand-yellow p-5 sm:p-6">
        <h3 className="font-display text-lg leading-[1.2] text-brand-ink">{lesson.example.heading}</h3>
        <p className="text-base leading-[1.5] text-brand-ink">{lesson.example.body}</p>
      </div>

      {lesson.highlight && (
        <p className="bg-brand-ink px-5 py-4 font-display text-lg leading-[1.4] text-white">
          {lesson.highlight}
        </p>
      )}

      {lesson.link && (
        <a
          href={lesson.link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-fit items-center gap-2 border-b-2 border-brand-ink pb-1 text-base font-semibold text-brand-ink transition-colors duration-200 hover:bg-brand-yellow"
        >
          {lesson.link.label}
          <ExternalLink aria-hidden="true" className="h-4 w-4 shrink-0" />
        </a>
      )}

      {lesson.extra && <LessonExtra kind={lesson.extra} />}
    </div>
  );
}
