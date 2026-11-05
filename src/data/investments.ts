export type Investment = {
  name: string;
  howItWorks: string;
  example: string;
  suitableFor: string;
  notYetFor: string;
  risk: string;
  minimum: string;
  term: string;
  officialLabel: string;
  officialUrl: string;
};

export const INVESTMENTS: Investment[] = [
  {
    name: 'CETES',
    howItWorks:
      'Son documentos del gobierno federal: le prestas dinero al gobierno y te lo devuelve al vencer, con una ganancia. Se compran a descuento, es decir, por debajo de su valor de 10 pesos, y la diferencia es tu ganancia.',
    example:
      'Compras 1,000 pesos a 28 días con una tasa de ejemplo de 10% anual: al vencimiento recibirías unos 1,008 pesos. Es una cifra de ejemplo, no garantizada.',
    suitableFor: 'Quien quiere un lugar seguro para su dinero a corto o mediano plazo.',
    notYetFor:
      'Quien necesita el dinero en pocos días, porque retirarlo antes del plazo puede implicar costos o menos ganancia.',
    risk: 'Bajo',
    minimum: 'Desde 100 pesos',
    term: 'De 28 a 364 días',
    officialLabel: 'Ver sitio oficial de CETES Directo',
    officialUrl: 'https://www.cetesdirecto.com',
  },
  {
    name: 'Fondos de inversión',
    howItWorks:
      'Muchas personas juntan su dinero en un mismo fondo y un profesional lo invierte en una mezcla de instrumentos, como CETES o acciones. Cada fondo tiene su estrategia y cobra comisiones (cargos por administrarlo).',
    example:
      'Pones 1,000 pesos en un fondo que, como ejemplo, rinde 9% anual: al cabo de un año tendrías unos 1,090 pesos, antes de comisiones.',
    suitableFor: 'Quien quiere repartir su dinero en varias inversiones sin elegirlas una por una.',
    notYetFor:
      'Quien no ha revisado las comisiones ni el riesgo del fondo, y quien necesita el dinero en pocos días.',
    risk: 'De bajo a alto, según el fondo',
    minimum: 'Varía según el fondo; revísalo antes de invertir',
    term: 'Varía según el fondo: días, meses o años',
    officialLabel: 'Ver sitio oficial de CONDUSEF',
    officialUrl: 'https://www.condusef.gob.mx',
  },
  {
    name: 'Ahorro e inversión en bancos',
    howItWorks:
      'Un banco te paga intereses por tener tu dinero en una cuenta de ahorro o en una inversión a plazo. Los bancos están regulados y tus depósitos cuentan con el seguro del IPAB (Instituto para la Protección al Ahorro Bancario), hasta cierto monto.',
    example:
      'Dejas 5,000 pesos en una cuenta que, como ejemplo, paga 6% anual: en un año ganarías unos 300 pesos de intereses.',
    suitableFor: 'Quien quiere tener su dinero a la mano con un rendimiento sencillo y bajo riesgo.',
    notYetFor:
      'Quien no compara tasas, comisiones ni condiciones, porque una cuenta puede pagar muy poco o cobrar cargos.',
    risk: 'Bajo',
    minimum: 'Depende del banco y del producto',
    term: 'Desde disponible en cualquier momento hasta plazos fijos',
    officialLabel: 'Ver sitio oficial del IPAB',
    officialUrl: 'https://www.ipab.org.mx',
  },
  {
    name: 'Acciones',
    howItWorks:
      'Al comprar una acción compras una pequeña parte de una empresa que cotiza en la Bolsa Mexicana de Valores (BMV). Se compran a través de una casa de bolsa o intermediario autorizado; ganas si el precio sube o si la empresa reparte utilidades (dividendos), y puedes perder si baja.',
    example:
      'Compras acciones por 1,000 pesos: si suben 20% valen 1,200 pesos; si bajan 15%, valen 850 pesos. Son cifras de ejemplo.',
    suitableFor: 'Quien tiene metas a varios años y puede aguantar caídas sin vender por pánico.',
    notYetFor: 'Quien necesita el dinero pronto o todavía no tiene fondo de emergencia.',
    risk: 'Alto',
    minimum: 'Puedes comprar una sola acción; el precio depende de la empresa',
    term: 'Sin plazo fijo; suele ser de mediano y largo plazo',
    officialLabel: 'Ver sitio oficial de la BMV',
    officialUrl: 'https://www.bmv.com.mx',
  },
];
