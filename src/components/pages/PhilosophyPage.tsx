
import React from 'react';
import { A4Page } from '@/components/A4Page';
import { Target, Heart, Eye, Award } from 'lucide-react';

export const PhilosophyPage = ({ pageNumber, totalPageCount }: { pageNumber: number, totalPageCount: number }) => {
  return (
    <A4Page pageNumber={pageNumber} totalPageCount={totalPageCount} className="tech-pattern">
      <header className="mb-16">
        <p className="text-[10px] font-headline font-bold text-primary uppercase tracking-[0.5em] mb-4">Módulo 02 / Identidad</p>
        <h2 className="font-headline text-6xl font-black tracking-tighter leading-none">FILOSOFÍA <br/><span className="text-primary italic">CORPORATIVA</span></h2>
      </header>

      <div className="grid grid-cols-2 gap-12 flex-1">
        <section className="space-y-12">
          <div className="p-8 bg-secondary/20 rounded-3xl border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -mr-16 -mt-16" />
            <h3 className="font-headline text-2xl font-black text-primary mb-6 flex items-center gap-4">
              <Eye className="w-6 h-6" /> VISIÓN
            </h3>
            <p className="text-sm text-foreground/70 leading-relaxed font-medium">
              Ser el referente global en logística de última milla, transformando la complejidad urbana en una red de flujo continuo, sostenible y tecnológicamente avanzada para el año 2030.
            </p>
          </div>

          <div className="p-8 bg-secondary/20 rounded-3xl border border-white/5">
            <h3 className="font-headline text-2xl font-black text-primary mb-6 flex items-center gap-4">
              <Target className="w-6 h-6" /> MISIÓN
            </h3>
            <p className="text-sm text-foreground/70 leading-relaxed font-medium">
              Entregar valor excepcional a través de soluciones de transporte ágiles y precisas, integrando inteligencia artificial y una flota humana altamente capacitada para superar las expectativas de nuestros aliados comerciales.
            </p>
          </div>
        </section>

        <section className="bg-card/50 rounded-3xl border border-primary/20 p-10 flex flex-col justify-center">
          <h3 className="font-headline text-xs font-black text-primary uppercase tracking-[0.4em] mb-12 text-center">Nuestros Pilares</h3>
          <div className="space-y-10">
            {[
              { t: "Integridad", d: "Transparencia total en cada proceso de entrega.", i: <Heart className="w-5 h-5" /> },
              { t: "Excelencia", d: "Búsqueda incansable de la perfección operativa.", i: <Award className="w-5 h-5" /> },
              { t: "Innovación", d: "Tecnología de vanguardia como motor de cambio.", i: <Target className="w-5 h-5" /> }
            ].map((p, i) => (
              <div key={i} className="flex gap-6 items-start group">
                <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-background transition-all">
                  {p.i}
                </div>
                <div>
                  <h4 className="font-headline font-black text-lg text-foreground">{p.t}</h4>
                  <p className="text-xs text-muted-foreground mt-1 leading-tight">{p.d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      
      <footer className="mt-12 pt-8 border-t border-white/5">
        <p className="text-[10px] font-headline font-bold text-muted-foreground uppercase text-center tracking-[0.2em]">
          Envíos DosRuedas: Donde la eficiencia encuentra el compromiso.
        </p>
      </footer>
    </A4Page>
  );
};
