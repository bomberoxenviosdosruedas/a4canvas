import React from 'react';
import { A4Page } from '@/components/A4Page';
import { Truck, Package, TrendingUp } from 'lucide-react';
import Image from 'next/image';

const LOGO_URL = "https://xnarosypsowmisjcevsi.supabase.co/storage/v1/object/public/enviosadmindosruedas/logo.png";

export const CoverPage = ({ pageNumber, totalPageCount }: { pageNumber: number, totalPageCount: number }) => {
  return (
    <A4Page pageNumber={pageNumber} totalPageCount={totalPageCount} className="p-0">
      <div className="relative h-full flex flex-col items-center">
        
        {/* Header Ribbon */}
        <header className="flex justify-between items-center w-full pb-10 border-b border-white/5 mb-auto">
          <div className="flex items-center gap-5">
            <div className="w-20 h-20 rounded-full border-2 border-primary p-1 bg-background flex items-center justify-center relative shadow-[0_0_20px_rgba(255,193,7,0.2)]">
              <Image src={LOGO_URL} alt="Logo" fill className="object-contain p-2" />
            </div>
            <div className="flex flex-col">
              <h1 className="font-headline text-3xl font-black italic tracking-tighter text-white leading-none">ENVÍOS</h1>
              <h1 className="font-headline text-3xl font-black italic tracking-tighter text-primary leading-none">DOSRUEDAS</h1>
              <div className="mt-2 bg-primary text-background font-bold px-3 py-0.5 rounded-sm text-[10px] tracking-[0.2em] uppercase self-start shadow-lg">
                LOGÍSTICA CORPORATIVA
              </div>
            </div>
          </div>
          <div className="text-right">
             <p className="font-mono text-[10px] text-primary/60 font-bold uppercase tracking-widest">Canvas v4.0</p>
             <p className="font-headline text-lg font-black text-white italic">EDR <span className="text-primary">CORE</span></p>
          </div>
        </header>

        {/* Hero Section */}
        <main className="flex-grow flex flex-col items-center justify-center text-center w-full max-w-2xl">
          <div className="mb-4">
            <h2 className="font-headline text-[52px] font-black text-white uppercase tracking-tighter leading-[0.9]">PARTNER LOGÍSTICO</h2>
            <h2 className="font-headline text-[52px] font-black text-primary uppercase tracking-tighter leading-[0.9] drop-shadow-2xl">ESPECIALIZADO</h2>
          </div>
          <p className="font-body text-xl text-muted-foreground italic mb-12 tracking-wide">"El Motor de su Última Milla"</p>
          
          <div className="border border-primary/30 rounded-full px-10 py-2.5 bg-primary/5 backdrop-blur-md mb-16 shadow-[0_0_20px_rgba(255,193,7,0.1)]">
            <span className="text-primary font-bold text-xs tracking-[0.4em] uppercase">Cobertura Integral en Mar del Plata</span>
          </div>

          <div className="w-full industrial-card-glow p-10 text-left relative overflow-hidden">
            <h3 className="font-headline text-2xl text-primary font-bold uppercase mb-8 text-center tracking-[0.2em] border-b border-primary/10 pb-4">
              7 AÑOS INNOVANDO EN LA CIUDAD
            </h3>
            
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="p-3 bg-primary/10 rounded-lg text-primary border border-primary/20">
                  <Truck className="w-5 h-5" />
                </div>
                <p className="font-body text-[14px] leading-relaxed text-foreground/80">
                  Nacimos en Mar del Plata y llevamos más de 7 años operando, creciendo e innovando. Nos guía un propósito: brindar un servicio logístico de <strong className="text-white">excelencia y confianza</strong>.
                </p>
              </div>
              <div className="flex gap-6 items-start">
                <div className="p-3 bg-primary/10 rounded-lg text-primary border border-primary/20">
                  <Package className="w-5 h-5" />
                </div>
                <p className="font-body text-[14px] leading-relaxed text-foreground/80">
                  Hoy nos especializamos en la logística de última milla para <strong className="text-white">E-Commerce y Pymes</strong>, posicionándonos como el <strong className="text-white">partner logístico de referencia</strong>.
                </p>
              </div>
              <div className="flex gap-6 items-start">
                <div className="p-3 bg-primary/10 rounded-lg text-primary border border-primary/20">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <p className="font-body text-[14px] leading-relaxed text-foreground/80">
                  Nos integramos a su operación comercial como un aliado estratégico, para que usted se enfoque exclusivamente en <strong className="text-white">escalar sus ventas</strong>.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </A4Page>
  );
};
