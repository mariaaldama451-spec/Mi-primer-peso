import { ProgressPath, type PathStep, type PathStepStatus } from '@/components/ProgressPath';
import { HexBadge } from '@/components/decor/GeometricDecor';
import { STAGES } from '@/data/lessons';
import { TOOLS, type ToolId } from '@/data/tools';

type StageRouteProps = {
  stageOneDone: boolean;
  onOpenTool: (tool: ToolId) => void;
};

export function StageRoute({ stageOneDone, onOpenTool }: StageRouteProps) {
  const rows = STAGES.map((stage) => {
    const tool = stageOneDone ? TOOLS.find((item) => item.stageNumber === stage.number) : undefined;
    let status: PathStepStatus;
    if (tool) status = 'active';
    else if (!stage.available) status = 'locked';
    else status = stageOneDone ? 'done' : 'active';
    return { stage, tool, status };
  });

  const steps: PathStep[] = rows.map(({ stage, status }) => ({ label: `Etapa ${stage.number}`, status }));

  return (
    <div className="flex flex-col gap-8">
      <ProgressPath steps={steps} ariaLabel="Ruta de aprendizaje en tres etapas" />
      <ol className="grid gap-4 md:grid-cols-3">
        {rows.map(({ stage, tool, status }) => (
          <li key={stage.number} className="flex gap-4 border border-brand-yellow bg-brand-paper p-5 md:flex-col">
            <HexBadge value={stage.number} status={status} />
            <div className="flex flex-col gap-2">
              <h3 className="font-display text-base leading-tight text-brand-ink">{tool ? tool.title : stage.title}</h3>
              <p className="text-base leading-[1.5] text-brand-ink">{tool ? tool.description : stage.description}</p>
              {tool ? (
                <button type="button" onClick={() => onOpenTool(tool.id)} className="btn mt-2 w-full">
                  {tool.actionLabel}
                </button>
              ) : (
                !stage.available && (
                  <span className="mt-1 w-fit border border-brand-ink px-2 py-0.5 text-base font-semibold uppercase tracking-[0.12em] text-brand-ink">
                    Próximamente
                  </span>
                )
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
