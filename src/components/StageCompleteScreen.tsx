import { StageRoute } from '@/components/StageRoute';
import { CornerAccent } from '@/components/decor/GeometricDecor';
import type { ToolId } from '@/data/tools';

type StageCompleteScreenProps = {
  onOpenTool: (tool: ToolId) => void;
};

export function StageCompleteScreen({ onOpenTool }: StageCompleteScreenProps) {
  return (
    <section className="panel flex flex-col gap-8 p-6 sm:p-10">
      <CornerAccent />
      <div className="flex flex-col gap-4 pr-12 sm:pr-16">
        <p className="text-base font-semibold uppercase tracking-[0.2em] text-brand-ink">Etapa 1 completada</p>
        <h2 className="font-display text-2xl leading-[1.2] text-brand-blue sm:text-3xl">Terminaste la etapa 1.</h2>
        <p className="max-w-2xl text-base leading-[1.5] text-brand-ink">
          Ya sabes qué le pasa al dinero guardado con la inflación, cuándo conviene ahorrar y cuándo invertir, y por
          qué más ganancia posible suele significar más riesgo.
        </p>
      </div>

      <StageRoute stageOneDone onOpenTool={onOpenTool} />
    </section>
  );
}
