import { mxnFormatter, type YearPoint } from '@/lib/compoundInterest';

type GrowthChartProps = {
  series: YearPoint[];
};

const WIDTH = 340;
const HEIGHT = 260;
const MARGIN = { top: 16, right: 12, bottom: 40, left: 84 };
const INNER_W = WIDTH - MARGIN.left - MARGIN.right;
const INNER_H = HEIGHT - MARGIN.top - MARGIN.bottom;

const compactMxn = new Intl.NumberFormat('es-MX', {
  style: 'currency',
  currency: 'MXN',
  notation: 'compact',
  maximumFractionDigits: 1,
});

export function GrowthChart({ series }: GrowthChartProps) {
  const last = series[series.length - 1];
  const maxY = Math.max(last?.total ?? 0, 1);
  const band = INNER_W / series.length;
  const barWidth = Math.max(2, band * 0.6);
  const labelStep = Math.ceil(series.length / 6);

  const yFor = (value: number) => MARGIN.top + INNER_H - (value / maxY) * INNER_H;
  const xFor = (index: number) => MARGIN.left + band * index + band / 2;

  const linePoints = series.map((point, index) => `${xFor(index)},${yFor(point.total)}`).join(' ');
  const yTicks = [0, maxY / 2, maxY];

  return (
    <figure className="flex flex-col gap-4">
      <svg
        role="img"
        aria-label={`Gráfica de crecimiento año por año. Al final de ${series.length} años el total acumulado es de ${mxnFormatter.format(last?.total ?? 0)}.`}
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        className="h-auto w-full max-w-[520px]"
      >
        {yTicks.map((tick) => (
          <g key={tick}>
            <line
              x1={MARGIN.left}
              x2={WIDTH - MARGIN.right}
              y1={yFor(tick)}
              y2={yFor(tick)}
              stroke="#10108F"
              strokeOpacity="0.25"
              strokeDasharray="4 4"
            />
            <text x={MARGIN.left - 8} y={yFor(tick) + 4} textAnchor="end" fontSize="18" fill="#10108F">
              {compactMxn.format(tick)}
            </text>
          </g>
        ))}

        {series.map((point, index) => {
          const x = xFor(index) - barWidth / 2;
          const baseY = yFor(0);
          return (
            <g key={point.year}>
              <rect x={x} y={yFor(point.contributed)} width={barWidth} height={baseY - yFor(point.contributed)} fill="#10108F" />
              <rect
                x={x}
                y={yFor(point.total)}
                width={barWidth}
                height={yFor(point.contributed) - yFor(point.total)}
                fill="#FFDE59"
              />
            </g>
          );
        })}

        <polyline points={linePoints} fill="none" stroke="#5170FF" strokeWidth="3" strokeLinejoin="round" />
        {series.map((point, index) => (
          <circle key={`dot-${point.year}`} cx={xFor(index)} cy={yFor(point.total)} r="3.5" fill="#5170FF" />
        ))}

        {series.map((point, index) =>
          point.year === 1 || point.year % labelStep === 0 ? (
            <text
              key={`label-${point.year}`}
              x={xFor(index)}
              y={HEIGHT - MARGIN.bottom + 20}
              textAnchor="middle"
              fontSize="18"
              fill="#10108F"
            >
              {point.year}
            </text>
          ) : null,
        )}
        <text x={WIDTH - MARGIN.right} y={HEIGHT - 4} textAnchor="end" fontSize="18" fill="#10108F">
          Años
        </text>
      </svg>

      <figcaption className="flex flex-wrap gap-x-6 gap-y-2 text-base text-brand-ink">
        <span className="flex items-center gap-2">
          <span aria-hidden="true" className="h-0.5 w-6 bg-brand-blue" />
          Total acumulado
        </span>
        <span className="flex items-center gap-2">
          <span aria-hidden="true" className="h-3 w-3 bg-brand-ink" />
          Total aportado (lo que pusiste)
        </span>
        <span className="flex items-center gap-2">
          <span aria-hidden="true" className="h-3 w-3 border border-brand-ink bg-brand-yellow" />
          Ganancia generada
        </span>
      </figcaption>
    </figure>
  );
}
