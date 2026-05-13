
import React from 'react';
import { A4Page } from '@/components/A4Page';
import { CheckCircle2, Circle } from 'lucide-react';

export const TimelinePage = ({ pageNumber, totalPageCount }: { pageNumber: number, totalPageCount: number }) => {
  const steps = [
    { week: "SEMANA 01", title: "Auditoría Operativa", desc: "Mapeo de necesidades específicas y diagnóstico de rutas actuales." },
    { week: "SEMANA 02", title: "Integración Digital", desc: "Conexión vía API con sus sistemas ERP y configuración de nodos." },
    { week: "SEMANA 03", title: "Despliegue Piloto", desc: "Inicio de operaciones en zona norte con flota dedicada de 10 unidades." },
    { week: "SEMANA 04", title: "Escalamiento Total", desc: "Activación del 100% de la red metropolitana y revisión de KPIs." },
  ];

  return (
    <A4Page pageNumber={pageNumber} totalPageCount={totalPageCount} className="tech-pattern">
      <header className="mb-20">
        <p className="text-[10px] font-headline font-bold text-primary uppercase tracking-[0.5em] mb-4">Módulo 09 / Implementación</p>
        <h2 className="font-headline text-6xl font-black tracking-tighter leading-none">CRONOGRAMA <br/><span className="text-primary italic">DE DESPLIEGUE</span></h2>
      </header>

      <div className="relative flex-1 px-10">
        <div className="absolute left-[51px] top-10 bottom-10 w-0.5 bg-gradient-to-b from-primary via-primary/20 to-transparent" />
        
        <div className="space-y-16">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-12 relative group">
              <div className="z-10 bg-background border-2 border-primary rounded-full p-2 group-hover:scale-125 transition-transform duration-300">
                {i === 0 ? <CheckCircle2 className="w-6 h-6 text-primary fill-primary/10" /> : <Circle className="w-6 h-6 text-primary/40" />}
              </div>
              
              <div className="flex-1 pt-1">
                <div className="flex items-center gap-6 mb-3">
                  <span className="text-xs font-black font-headline text-primary bg-primary/10 px-4 py-1 rounded-full uppercase tracking-widest">{step.week}</span>
                  <div className="h-px flex-1 bg-white/5" />
                </div>
                <h3 className="text-2xl font-headline font-black text-foreground mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground max-w-xl font-medium leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 bg-primary/5 p-8 rounded-3xl border border-primary/20">
        <p className="text-xs text-primary font-bold uppercase tracking-[0.2em] mb-2">Compromiso de Tiempo</p>
        <p className="text-sm text-foreground/70 italic leading-relaxed">
          "Garantizamos un despliegue operativo funcional en menos de 30 días naturales, minimizando cualquier interrupción en su flujo actual de negocios."
        </p>
      </div>
    </A4Page>
  );
};
