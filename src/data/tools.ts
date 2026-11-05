export type ToolId = 'calculator' | 'simulator';

export type ToolInfo = {
  id: ToolId;
  stageNumber: number;
  tabLabel: string;
  title: string;
  description: string;
  actionLabel: string;
};

export const TOOLS: ToolInfo[] = [
  {
    id: 'calculator',
    stageNumber: 2,
    tabLabel: 'Calculadora',
    title: 'Calculadora de interés compuesto',
    description: 'Mira cómo crece tu dinero año por año con una tasa de ejemplo.',
    actionLabel: 'ABRIR CALCULADORA →',
  },
  {
    id: 'simulator',
    stageNumber: 3,
    tabLabel: 'Simulador de metas',
    title: 'Simulador de metas',
    description: 'Calcula cuánto ahorrar cada mes para llegar a una meta, con y sin invertir.',
    actionLabel: 'ABRIR SIMULADOR →',
  },
];
