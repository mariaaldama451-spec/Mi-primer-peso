import { ArrowRight } from 'lucide-react';

const CONDUSEF_URL = 'https://www.condusef.gob.mx';

const CONDUSEF_BLOCKS = [
  {
    heading: '¿Qué es la CONDUSEF?',
    body: 'La CONDUSEF (Comisión Nacional para la Protección y Defensa de los Usuarios de Servicios Financieros) es una institución del gobierno que protege a las personas que usan bancos, aseguradoras, fondos de inversión y otros servicios financieros.',
  },
  {
    heading: '¿Para qué sirve?',
    body: 'Atiende quejas y reclamaciones contra instituciones financieras y publica información para comparar productos. También alerta cuando alguna institución está siendo suplantada por personas que buscan engañar a la gente.',
  },
  {
    heading: 'Cómo verificar que una empresa esté registrada',
    body: 'Antes de entregar dinero, revisa que la institución aparezca en el SIPRES (el sistema de registro de instituciones financieras que consulta la CONDUSEF). Ahí puedes confirmar su nombre, domicilio, página de internet y teléfonos oficiales. Si no aparece, no le entregues dinero.',
  },
  {
    heading: 'Qué hacer si sospechas de un fraude',
    body: 'No deposites más dinero. Guarda mensajes, recibos y datos de la persona o empresa. Después comunícate con la CONDUSEF (teléfono 55 53 400 999 o en su sitio oficial) para presentar tu queja. Si ya perdiste dinero, también puedes acudir a las autoridades para presentar una denuncia.',
  },
];

export function CondusefGuide() {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid gap-5 sm:grid-cols-2">
        {CONDUSEF_BLOCKS.map((block) => (
          <div key={block.heading} className="flex flex-col gap-2 border border-brand-ink bg-white p-5">
            <h4 className="font-display text-base leading-[1.2] text-brand-ink">{block.heading}</h4>
            <p className="text-base leading-[1.5] text-brand-ink">{block.body}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-2 sm:w-fit">
        <a
          href={CONDUSEF_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Ir al sitio oficial de la Condusef"
          className="btn w-full sm:w-auto"
        >
          Ir a la Condusef <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </a>
        <p className="break-all text-base text-brand-ink">{CONDUSEF_URL.replace('https://', '')}</p>
      </div>
    </div>
  );
}
