import { ArrowRight } from 'lucide-react';
import { StageRoute } from '@/components/StageRoute';
import { CornerAccent, HeroShapes } from '@/components/decor/GeometricDecor';
import { PlantIllustration } from '@/components/decor/PlantIllustration';
import type { ToolId } from '@/data/tools';

type StartScreenProps = {
  hasSavedProgress: boolean;
  stageOneDone: boolean;
  onContinue: () => void;
  onRestart: () => void;
  onOpenTool: (tool: ToolId) => void;
};

export function StartScreen({ hasSavedProgress, stageOneDone, onContinue, onRestart, onOpenTool }: StartScreenProps) {
  return (
    <div className="flex flex-col gap-10">
      <section className="relative overflow-hidden rounded-[2px] bg-brand-blue">
        <HeroShapes />
        <div className="relative grid items-center gap-8 p-6 sm:p-10 md:grid-cols-[1.1fr_0.9fr] md:gap-10 md:p-14">
          <div className="flex flex-col gap-6">
            <p className="w-fit bg-brand-yellow px-3 py-1 text-base font-semibold uppercase tracking-[0.2em] text-brand-ink">
              Ruta para principiantes
            </p>
            <h1 className="font-display text-4xl leading-[1.2] text-white sm:text-5xl lg:text-6xl">
              Mi Primer Peso
            </h1>
            <p className="font-display text-2xl leading-[1.2] text-white">
              Aprende a invertir desde cero.
            </p>
          </div>
          <div className="panel mx-auto flex w-full max-w-xs items-center justify-center p-6 sm:max-w-sm">
            <CornerAccent />
            <PlantIllustration className="h-auto w-full max-w-[260px]" />
          </div>
        </div>
      </section>

      <section className="panel flex flex-col gap-8 p-6 sm:p-10">
        <div className="flex flex-col gap-3">
          <h2 className="font-display text-2xl leading-[1.2] text-brand-blue sm:text-3xl">Tu ruta de aprendizaje</h2>
          <p className="max-w-2xl text-base leading-[1.5] text-brand-ink">
            Son tres etapas, con lecciones cortas, una pregunta por lección y lenguaje sencillo. Cada término
            técnico (las palabras propias de las finanzas) se explica en la misma frase en que aparece. Tu progreso
            se guarda en este navegador.
          </p>
        </div>

        <StageRoute stageOneDone={stageOneDone} onOpenTool={onOpenTool} />

        <div className="flex flex-col gap-3 sm:flex-row">
          {hasSavedProgress ? (
            <>
              <button type="button" onClick={onContinue} className="btn sm:flex-1">
                Continuar donde te quedaste <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </button>
              <button type="button" onClick={onRestart} className="btn-outline sm:flex-1">
                Empezar de nuevo
              </button>
            </>
          ) : (
            <button type="button" onClick={onRestart} className="btn sm:w-auto sm:min-w-[260px]">
              Empezar <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </button>
          )}
        </div>
      </section>
    </div>
  );
}
