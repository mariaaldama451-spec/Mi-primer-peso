import { CalculatorScreen } from '@/components/calculator/CalculatorScreen';
import { SimulatorScreen } from '@/components/simulator/SimulatorScreen';
import { TOOLS, type ToolId } from '@/data/tools';

type ToolsScreenProps = {
  tool: ToolId;
  onSelectTool: (tool: ToolId) => void;
  onBack: () => void;
};

export function ToolsScreen({ tool, onSelectTool, onBack }: ToolsScreenProps) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button type="button" onClick={onBack} className="btn-outline min-h-[44px] w-full sm:w-auto">
          ← Volver a las herramientas
        </button>
        <div role="tablist" aria-label="Herramientas" className="grid grid-cols-2 gap-2 sm:min-w-[420px]">
          {TOOLS.map((item) => {
            const selected = item.id === tool;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                id={`tab-${item.id}`}
                aria-selected={selected}
                aria-controls={`panel-${item.id}`}
                onClick={() => onSelectTool(item.id)}
                className={`min-h-[52px] border px-4 py-3 text-base font-semibold leading-tight transition-colors duration-200 ease-out ${
                  selected
                    ? 'border-brand-yellowDeep bg-brand-yellow text-brand-ink'
                    : 'border-brand-ink bg-transparent text-brand-ink hover:bg-brand-yellow/40'
                }`}
              >
                {item.tabLabel}
              </button>
            );
          })}
        </div>
      </div>

      <div id="panel-calculator" role="tabpanel" aria-labelledby="tab-calculator" hidden={tool !== 'calculator'}>
        <CalculatorScreen />
      </div>
      <div id="panel-simulator" role="tabpanel" aria-labelledby="tab-simulator" hidden={tool !== 'simulator'}>
        <SimulatorScreen />
      </div>
    </div>
  );
}
