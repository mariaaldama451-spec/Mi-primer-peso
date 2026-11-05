export type GoalId = 'viaje' | 'celular' | 'boda' | 'carro' | 'casa' | 'personalizada';

export type Goal = {
  id: GoalId;
  title: string;
  description: string;
  costLabel: string;
  costHint: string;
  costPlaceholder: string;
};

export const GOALS: Goal[] = [
  {
    id: 'viaje',
    title: 'Viaje',
    description: 'Ahorra para unas vacaciones o una escapada.',
    costLabel: 'Costo total del viaje',
    costHint: 'Lo que cuesta todo el viaje, en pesos.',
    costPlaceholder: 'Ej. 30000',
  },
  {
    id: 'celular',
    title: 'Celular nuevo',
    description: 'Junta el dinero para el modelo que quieres.',
    costLabel: 'Costo total del celular',
    costHint: 'Precio del celular que quieres, en pesos.',
    costPlaceholder: 'Ej. 15000',
  },
  {
    id: 'boda',
    title: 'Boda',
    description: 'Reúne lo necesario para la celebración que imaginas.',
    costLabel: 'Costo total de la boda',
    costHint: 'Presupuesto total de la celebración, en pesos.',
    costPlaceholder: 'Ej. 150000',
  },
  {
    id: 'carro',
    title: 'Carro',
    description: 'Reúne el enganche (el pago inicial) de tu coche.',
    costLabel: 'Enganche del carro',
    costHint: 'Lo que pagarías de inicio, en pesos.',
    costPlaceholder: 'Ej. 60000',
  },
  {
    id: 'casa',
    title: 'Casa',
    description: 'Reúne el enganche (el pago inicial) de tu casa.',
    costLabel: 'Enganche de la casa',
    costHint: 'Lo que pagarías de inicio, en pesos.',
    costPlaceholder: 'Ej. 300000',
  },
  {
    id: 'personalizada',
    title: 'Meta personalizada',
    description: 'Define tu propia meta con el monto que necesitas.',
    costLabel: 'Costo total de tu meta',
    costHint: 'Cuánto necesitas juntar en total, en pesos.',
    costPlaceholder: 'Ej. 20000',
  },
];
