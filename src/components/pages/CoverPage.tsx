import React from 'react';
import { A4Page } from '@/components/A4Page';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

export const CoverPage = ({ pageNumber, totalPageCount }: { pageNumber: number, totalPageCount: number }) => {
  const bgImg = PlaceHolderImages.find(img => img.id === 'logo-background');
  const bikeImg = PlaceHolderImages.find(img => img.id === 'logistics-bike');

  return (
    <A4Page pageNumber={pageNumber} totalPageCount={totalPageCount} className="p-0 overflow-hidden bg-background tech-pattern">
      <div className="scanline opacity-10" />
      
      {/* Decorative Accents */}
      <div className="absolute top-8 left-8 corner-accent border-r-0 border-b-0" />
      <div className="absolute top-8 right-8 corner-accent border-l-0 border-b-0" />
      <div className="absolute bottom-16 left-8 corner-accent border-r-0 border-t-0" />
      <div className="absolute bottom-16 right-8 corner-accent border-l-0 border-t-0" />

      <div className="relative h-full flex flex-col">
        {/* Header Ribbon */}
        <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent w-full logistics-glow" />

        {/* Hero Area */}
        <div className="relative h-[65%] w-full flex items-center justify-center">
          {bgImg && (
            <div className="absolute inset-0 z-0">
              <Image 
                src={bgImg.imageUrl} 
                alt="Industrial background" 
                fill 
                className="object-cover opacity-20 grayscale"
                data-ai-hint={bgImg.imageHint}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
            </div>
          )}
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="mb-12 relative">
              <div className="absolute -inset-12 bg-primary/20 blur-[100px] rounded-full animate-pulse" />
              <div className="w-40 h-40 relative">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-primary drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]">
                  <path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z" className="opacity-10" />
                  <path d="M50 12L83 31V69L50 88L17 69V31L50 12Z" />
                  <path d="M35 45 L50 35 L65 45 L65 55 L50 65 L35 55 Z" fill="white" className="opacity-90" />
                </svg>
              </div>
            </div>
            
            <h1 className="font-headline text-8xl font-black tracking-tighter text-center leading-[0.85] mb-4">
              <span className="text-foreground">ENVÍOS</span><br/>
              <span className="text-primary italic">DOSRUEDAS</span>
            </h1>
            
            <div className="flex items-center gap-6 mt-8">
              <div className="h-px w-16 bg-primary/40" />
              <p className="font-headline text-sm font-bold tracking-[0.6em] text-foreground/60 uppercase whitespace-nowrap">
                ESTRATEGIA LOGÍSTICA URBANA
              </p>
              <div className="h-px w-16 bg-primary/40" />
            </div>
          </div>
        </div>

        {/* Footer Content Area */}
        <div className="flex-1 bg-secondary/20 border-t border-white/5 px-16 py-12 flex flex-col justify-between">
          <div className="grid grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <p className="text-[10px] font-headline font-bold text-primary uppercase tracking-[0.3em] mb-3">Cliente Preferente</p>
                <h2 className="text-4xl font-headline font-bold leading-none tracking-tight">Corporativo Express S.A.</h2>
                <div className="h-1 w-12 bg-primary mt-4" />
                <p className="text-sm text-muted-foreground font-body mt-4">División de Operaciones Metropolitanas</p>
              </div>
            </div>

            <div className="flex flex-col justify-center items-end text-right">
              <div className="mb-6">
                <p className="text-[9px] font-headline text-primary uppercase tracking-widest mb-1">CÓDIGO DE DOCUMENTO</p>
                <p className="text-xl font-black font-headline tracking-tighter">PROP-2025-EDR-V4</p>
              </div>
              <div>
                <p className="text-[9px] font-headline text-muted-foreground uppercase tracking-widest mb-1">FECHA DE EMISIÓN</p>
                <p className="text-lg font-bold font-headline">NOVIEMBRE 2025</p>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center border-t border-white/5 pt-10">
            <div className="flex items-center gap-4">
               <div className="w-10 h-10 border border-primary/20 rounded flex items-center justify-center font-headline font-black text-primary text-xs">
                 HQ
               </div>
               <p className="text-[9px] font-headline text-muted-foreground leading-tight max-w-[250px] uppercase tracking-wider">
                 ESTA PROPUESTA ES PROPIEDAD INTELECTUAL DE ENVÍOS DOSRUEDAS. CONFIDENCIALIDAD NIVEL 4 REQUERIDA.
               </p>
            </div>
            <div className="text-right">
              <p className="text-[10px] font-headline font-bold text-primary mb-1">VALIDEZ 30 DÍAS</p>
              <p className="text-xs font-headline font-black uppercase opacity-60">SISTEMA DINÁMICO v4.0.2</p>
            </div>
          </div>
        </div>
      </div>
    </A4Page>
  );
};