export type LessonOption = {
  text: string;
  feedback: string;
  correct: boolean;
};

export type LessonSection = {
  heading: string;
  body: string;
};

export type LessonExtra = 'compound-calculator' | 'condusef-guide' | 'investment-cards';

export type Lesson = {
  id: string;
  title: string;
  intro: string;
  sections: LessonSection[];
  example: {
    heading: string;
    body: string;
  };
  highlight?: string;
  question: string;
  options: LessonOption[];
  link?: {
    label: string;
    href: string;
  };
  extra?: LessonExtra;
};

export type Stage = {
  number: number;
  title: string;
  description: string;
  available: boolean;
};

export const STAGES: Stage[] = [
  {
    number: 1,
    title: 'Los fundamentos',
    description: 'Entiende qué le pasa a tu dinero con el tiempo y cómo elegir entre ahorrar e invertir.',
    available: true,
  },
  {
    number: 2,
    title: 'Tu primera inversión',
    description: 'Aprenderás a elegir un primer instrumento de inversión para empezar con poco dinero.',
    available: false,
  },
  {
    number: 3,
    title: 'Haz crecer tu dinero',
    description: 'Verás cómo el tiempo y la constancia trabajan a tu favor para que tu dinero crezca.',
    available: false,
  },
];

export const STAGE_ONE_LESSONS: Lesson[] = [
  {
    id: 'inflacion',
    title: 'La inflación: tu dinero pierde valor',
    intro:
      'La inflación es el aumento general de los precios con el paso del tiempo. Eso significa que, con la misma cantidad de dinero, cada vez puedes comprar menos cosas.',
    sections: [
      {
        heading: '¿Qué significa en la vida diaria?',
        body: 'Si hoy un kilo de tortillas cuesta cierta cantidad, dentro de un año probablemente costará un poco más. Tus billetes no cambian, pero su poder de compra (lo que alcanzan a comprar) sí se reduce.',
      },
      {
        heading: '¿Y si guardo el dinero sin ganar nada?',
        body: 'Si lo dejas guardado sin ningún rendimiento (la ganancia que da una inversión), la inflación se lo va comiendo poco a poco. Por eso invertir busca que tu dinero crezca, al menos, al ritmo de los precios.',
      },
    ],
    example: {
      heading: 'Un ejemplo con cifras reales (dato aproximado)',
      body: 'En diciembre de 2023, la inflación anual en México fue de 4.66%, según el INEGI (Instituto Nacional de Estadística y Geografía). Eso quiere decir que, en promedio, algo que costaba 100 pesos en diciembre de 2022 costaba cerca de 105 pesos un año después.',
    },
    question: 'Si tienes 1,000 pesos guardados sin ganar nada y los precios suben, ¿qué pasa con tu dinero?',
    options: [
      {
        text: 'Sigue valiendo 1,000 pesos, pero compra menos cosas',
        feedback:
          'Correcto. Los billetes conservan su número, pero su poder de compra baja cuando los precios suben.',
        correct: true,
      },
      {
        text: 'Aumenta su valor solo, sin hacer nada',
        feedback:
          'No. El dinero guardado no crece por sí solo, y los precios suben, así que te alcanza para menos.',
        correct: false,
      },
      {
        text: 'Se convierte en una inversión automáticamente',
        feedback:
          'No. Guardar dinero sin ganar nada no es invertir; solo lo deja quieto.',
        correct: false,
      },
      {
        text: 'No cambia en absoluto',
        feedback:
          'No del todo. El número de pesos no cambia, pero lo que puedes comprar con ellos sí.',
        correct: false,
      },
    ],
    link: {
      label: 'Revisa tú mismo la calculadora de inflación de Banxico (el banco central de México)',
      href: 'https://www.banxico.org.mx/SieInternet/consultarDirectorioInternetAction.do?sector=8&accion=consultarCuadro&idCuadro=CP154&locale=es',
    },
  },
  {
    id: 'ahorro-inversion',
    title: 'Ahorrar vs. invertir',
    intro:
      'Ahorrar es guardar dinero para tenerlo a la mano. Invertir es poner tu dinero a trabajar para que crezca, a cambio de cierto riesgo (la posibilidad de perder parte de lo que pusiste).',
    sections: [
      {
        heading: 'Ahorrar: tener el dinero listo',
        body: 'Ahorrar sirve para emergencias y gastos cercanos, como la reparación del coche o las compras de diciembre. Lo importante es que el dinero esté disponible y seguro cuando lo necesites.',
      },
      {
        heading: 'Invertir: dejar que el dinero crezca',
        body: 'Invertir sirve para metas de mediano y largo plazo (dentro de varios años), como tu retiro o el enganche de una casa. Como buscas más ganancia, aceptas que el valor de tu inversión puede subir o bajar.',
      },
    ],
    example: {
      heading: 'Un ejemplo cotidiano',
      body: 'Ana tiene dos bolsitas de dinero. En la primera guarda 2,000 pesos para una emergencia: los necesita hoy y no pueden perderse. En la segunda aparta 500 pesos al mes en una inversión para su casa dentro de ocho años: ese dinero tiene tiempo para crecer.',
    },
    question: 'Ana necesita 2,000 pesos el próximo mes para una emergencia. ¿Qué le conviene más?',
    options: [
      {
        text: 'Tenerlos ahorrados y disponibles',
        feedback:
          'Correcto. Lo que necesitas pronto conviene tenerlo a la mano, porque una inversión podría estar abajo justo cuando la necesitas.',
        correct: true,
      },
      {
        text: 'Invertirlos en algo que puede subir o bajar mucho',
        feedback:
          'Puede crecer, pero también bajar. Si el dinero lo necesitas el próximo mes, ese riesgo no te conviene.',
        correct: false,
      },
      {
        text: 'Esperar a que la inflación los haga crecer',
        feedback:
          'La inflación no hace crecer tu dinero; al contrario, hace que compre menos.',
        correct: false,
      },
    ],
  },
  {
    id: 'riesgo-rendimiento',
    title: 'Riesgo y rendimiento',
    intro:
      'El rendimiento es la ganancia que obtienes por tu inversión. El riesgo es la posibilidad de perder parte de tu dinero o de ganar menos de lo esperado. En general, a mayor ganancia posible, mayor riesgo.',
    sections: [
      {
        heading: 'La regla básica',
        body: 'Ninguna inversión puede prometerte ganancias altas y, al mismo tiempo, cero riesgo. Si alguien te promete ganar mucho sin ningún riesgo, desconfía.',
      },
      {
        heading: 'Por qué pasa',
        body: 'Una inversión con rendimiento fijo, como un instrumento del gobierno, te dice de antemano cuánto te pagará. Una inversión en acciones depende de cómo le vaya a la empresa, así que su resultado es más incierto.',
      },
    ],
    example: {
      heading: 'Comparemos dos opciones (cifras de ejemplo)',
      body: 'Opción A: un instrumento de deuda del gobierno, como los CETES (documentos que compras y el gobierno te paga con intereses), que paga una tasa conocida, por ejemplo 10% anual. Opción B: acciones de una empresa (pequeños pedazos de propiedad que se compran en la bolsa), que podrían subir 20% en un año o bajar 15%. Estas cifras son solo ejemplos; no están garantizadas.',
    },
    question: '¿Cuál de las dos opciones tiene más riesgo?',
    options: [
      {
        text: 'La opción B, las acciones',
        feedback:
          'Correcto. Su resultado depende del desempeño de la empresa, así que puede dejarte más ganancia o más pérdida.',
        correct: true,
      },
      {
        text: 'La opción A, el instrumento del gobierno',
        feedback:
          'No. Aunque pague menos, su rendimiento se conoce de antemano, por eso tiene menos riesgo.',
        correct: false,
      },
      {
        text: 'Las dos tienen exactamente el mismo riesgo',
        feedback:
          'No. Una depende de un pago fijo y la otra del desempeño de una empresa, así que son distintas.',
        correct: false,
      },
      {
        text: 'Ninguna tiene riesgo',
        feedback:
          'Todas las inversiones tienen algún riesgo, aunque en algunas sea muy bajo.',
        correct: false,
      },
    ],
  },
  {
    id: 'interes-compuesto',
    title: 'Interés compuesto: tu dinero trabaja sobre sí mismo',
    intro:
      'El interés compuesto es la ganancia que se calcula no solo sobre el dinero que pusiste, sino también sobre los intereses que ya ganó. Funciona como una bola de nieve: cada vuelta junta más nieve.',
    sections: [
      {
        heading: 'Interés simple vs. compuesto',
        body: 'Con interés simple, la ganancia se calcula solo sobre tu capital (el dinero que pusiste al inicio), así que cada periodo gana lo mismo. Con interés compuesto, cada ganancia se suma al saldo y genera la siguiente.',
      },
      {
        heading: 'El tiempo es tu mejor aliado',
        body: 'Entre más años dejes crecer el dinero, más pesa la bola de nieve. Por eso empezar temprano, aunque sea con poco, suele dar mejores resultados que empezar tarde con mucho.',
      },
    ],
    example: {
      heading: 'Un ejemplo con números sencillos',
      body: 'Pones 10,000 pesos a una tasa de ejemplo de 10% anual. Al final del año 1 tienes 11,000 pesos. Al año 2, el 10% se calcula sobre 11,000, no sobre 10,000, así que tienes 12,100 pesos. Con interés simple habrías tenido 12,000. Los 100 pesos extra son el interés sobre el interés.',
    },
    question: '¿Qué hace que el interés compuesto haga crecer tu dinero más rápido?',
    options: [
      {
        text: 'Que la ganancia también genera ganancia en los siguientes periodos',
        feedback:
          'Correcto. Los intereses que ya ganaste también producen intereses, y eso acelera el crecimiento con el tiempo.',
        correct: true,
      },
      {
        text: 'Que el banco te regala un porcentaje extra al abrir la cuenta',
        feedback: 'No. El efecto viene de reinvertir las ganancias, no de un regalo.',
        correct: false,
      },
      {
        text: 'Que retires la ganancia cada mes',
        feedback:
          'Retirar la ganancia corta la bola de nieve, porque deja de generar intereses sobre sí misma.',
        correct: false,
      },
      {
        text: 'Que el dinero se guarde en efectivo debajo del colchón',
        feedback: 'El efectivo no genera intereses, así que no crece por composición.',
        correct: false,
      },
    ],
    extra: 'compound-calculator',
  },
  {
    id: 'antes-de-invertir',
    title: 'Antes de invertir: protege tu dinero',
    intro:
      'Antes de elegir dónde invertir, hay tres reglas básicas: tener un fondo de emergencia (ahorro para imprevistos), no invertir dinero que necesitas pronto y desconfiar de las promesas de ganancia garantizada.',
    sections: [
      {
        heading: 'Primero, tu fondo de emergencia',
        body: 'Es ahorro disponible, en un lugar seguro, para imprevistos como una enfermedad o quedarte sin empleo. Una guía común es juntar entre 3 y 6 meses de tus gastos básicos antes de invertir.',
      },
      {
        heading: 'No inviertas dinero que necesitas pronto',
        body: 'Si vas a necesitar el dinero en pocos meses, una caída del mercado podría obligarte a vender con pérdida. El dinero de la renta del próximo mes no es dinero para invertir.',
      },
      {
        heading: 'Desconfía de las "ganancias garantizadas"',
        body: 'Ninguna inversión seria garantiza ganancias altas sin riesgo. Los gurús que prometen hacerte millonario rápido suelen cobrar por cursos o pedirte que les entregues tu dinero.',
      },
    ],
    example: {
      heading: 'Señales de alarma',
      body: 'Presionarte para decidir en el momento, prometer rendimientos muy altos sin riesgo, pedir depósitos a cuentas personales o usar empresas que no puedes verificar. Ante cualquiera de estas señales, detente y verifica antes de entregar un peso.',
    },
    highlight: 'Si suena demasiado bueno para ser verdad, probablemente es fraude.',
    question: 'Un conocido te ofrece duplicar tu dinero en tres meses con "ganancia garantizada". ¿Qué haces primero?',
    options: [
      {
        text: 'Verifico que la empresa esté registrada en la CONDUSEF antes de entregar dinero',
        feedback:
          'Correcto. Verificar el registro es el paso que protege tu dinero antes de cualquier depósito.',
        correct: true,
      },
      {
        text: 'Le entrego el dinero porque es alguien conocido',
        feedback: 'Conocer a la persona no garantiza que el negocio sea legítimo. Verifica antes de dar dinero.',
        correct: false,
      },
      {
        text: 'Pido un préstamo para invertir más',
        feedback: 'Pedir dinero prestado para invertir multiplica el riesgo. Primero va tu fondo de emergencia.',
        correct: false,
      },
      {
        text: 'Pongo una cantidad pequeña para "probar"',
        feedback:
          'Aunque sea poco, si la empresa no está registrada puedes perder ese dinero. Verifica primero.',
        correct: false,
      },
    ],
    extra: 'condusef-guide',
  },
  {
    id: 'donde-invertir',
    title: 'Dónde invertir en México',
    intro:
      'En México hay varias formas de invertir. Aquí conoces cuatro instrumentos (los productos donde se pone el dinero), cada uno con su nivel de riesgo, su monto mínimo y su plazo aproximado. Las cifras son ejemplos, no garantías.',
    sections: [
      {
        heading: 'Antes de elegir',
        body: 'Compara siempre el riesgo, el plazo en el que necesitarás el dinero y los costos. Ninguna opción es la mejor para todas las personas.',
      },
    ],
    example: {
      heading: 'Cómo leer las tarjetas',
      body: 'Cada tarjeta muestra cómo funciona, un ejemplo con números, a quién le conviene, quién todavía no debería usarlo, su nivel de riesgo, su monto mínimo y su plazo aproximado.',
    },
    question:
      'Ana tiene 1,500 pesos para su fondo de emergencia y quiere un lugar seguro, sencillo y con el dinero disponible. ¿Cuál opción le conviene más?',
    options: [
      {
        text: 'Una cuenta de ahorro en un banco regulado',
        feedback: 'Correcto. Es segura, sencilla y el dinero queda disponible cuando lo necesites.',
        correct: true,
      },
      {
        text: 'Acciones de una empresa que puede subir o bajar mucho',
        feedback:
          'Las acciones pueden bajar justo cuando Ana necesite su dinero. Para un fondo de emergencia no son adecuadas.',
        correct: false,
      },
      {
        text: 'Un fondo de inversión con plazo de varios años',
        feedback:
          'Si Ana necesita el dinero antes del plazo, podría tener costos o pérdidas. Para emergencias conviene la disponibilidad.',
        correct: false,
      },
      {
        text: 'Una promesa de rendimiento garantizado de alguien que conoció en redes sociales',
        feedback: 'Es una señal de alarma. Ninguna promesa así es confiable.',
        correct: false,
      },
    ],
    extra: 'investment-cards',
  },
];
