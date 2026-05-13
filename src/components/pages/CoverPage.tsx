import React from 'react';
import { A4Page } from '@/components/A4Page';
import { Package } from 'lucide-react';

export const CoverPage = ({ pageNumber, totalPageCount }: { pageNumber: number, totalPageCount: number }) => {
  return (
    <A4Page pageNumber={pageNumber} totalPageCount={totalPageCount} className="p-0">
      <div className="relative h-full flex flex-col px-12 md:px-16">
        
        {/* Header Ribbon */}
        <header className="flex justify-between items-center w-full py-12 border-b border-white/5">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-full border-2 border-primary p-1 bg-background flex items-center justify-center relative shadow-[0_0_20px_rgba(250,189,0,0.2)]">
              <div className="font-headline font-black text-primary italic leading-none text-center text-[10px]">
                ENVÍOS<br/>DOSRUEDAS
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="font-headline text-3xl font-black italic tracking-tighter text-white leading-none">ENVÍOS</h1>
              <h1 className="font-headline text-3xl font-black italic tracking-tighter text-primary leading-none">DOSRUEDAS</h1>
              <div className="mt-2 bg-primary text-background font-bold px-3 py-0.5 rounded-sm text-[10px] tracking-widest uppercase self-start">
                LOGÍSTICA CORPORATIVA
              </div>
            </div>
          </div>
          <Package className="text-primary w-10 h-10 opacity-80" />
        </header>

        {/* Hero Section */}
        <main className="flex-grow flex flex-col items-center justify-center text-center">
          <h2 className="font-headline text-5xl font-black text-white uppercase tracking-tight mb-2">PARTNER LOGÍSTICO</h2>
          <h2 className="font-headline text-5xl font-black text-primary uppercase tracking-tight mb-6 text-shadow-gold">ESPECIALIZADO</h2>
          <p className="font-body text-xl text-muted-foreground italic mb-10">El Motor de su Última Milla</p>
          
          <div className="border border-primary/30 rounded-full px-8 py-2.5 bg-background/40 backdrop-blur-md mb-16 shadow-[0_0_15px_rgba(250,189,0,0.1)]">
            <span className="text-primary font-mono text-xs font-bold tracking-widest uppercase">Cobertura Integral en Mar del Plata</span>
          </div>

          <div className="w-full industrial-card-glow p-10 text-left">
            <h3 className="font-headline text-xl text-primary font-bold uppercase mb-8 text-center tracking-widest border-b border-primary/10 pb-4">7 AÑOS INNOVANDO EN LA CIUDAD</h3>
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="font-body text-sm leading-relaxed text-muted-foreground">
                  Nacimos en Mar del Plata y llevamos más de 7 años operando, creciendo e innovando de manera constante. Brindamos un servicio logístico de excelencia y confianza.
                </p>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="font-body text-sm leading-relaxed text-muted-foreground">
                  Especialistas en la logística de última milla para <strong className="text-white">E-Commerce, plataformas y pymes</strong>. Somos el <strong className="text-white">partner logístico de referencia</strong>.
                </p>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="font-body text-sm leading-relaxed text-muted-foreground">
                  Nos integramos a su operación como un aliado estratégico, para que usted se enfoque en escalar sus ventas con seguridad total.
                </p>
              </div>
            </div>
          </div>
        </main>

        {/* Spacer for Page Footer */}
        <div className="h-20" />
      </div>
    </A4Page>
  );
};