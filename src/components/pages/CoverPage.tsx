import React from 'react';
import { A4Page } from '@/components/A4Page';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

export const CoverPage = ({ pageNumber, totalPageCount }: { pageNumber: number, totalPageCount: number }) => {
  const bgImg = PlaceHolderImages.find(img => img.id === 'logo-background');
  const bikeImg = PlaceHolderImages.find(img => img.id === 'logistics-bike');

  return (
    <A4Page pageNumber={pageNumber} totalPageCount={totalPageCount} className="p-0 overflow-hidden bg-background tech-pattern">
      <div className="relative h-full flex flex-col">
        {/* Decorative Top Bar */}
        <div className="h-2 bg-primary w-full logistics-glow" />

        {/* Hero Section */}
        <div className="relative h-[60%] w-full clip-path-oblique bg-secondary/30">
          {bgImg && (
            <Image 
              src={bgImg.imageUrl} 
              alt="Industrial background" 
              fill 
              className="object-cover opacity-30 mix-blend-overlay"
              data-ai-hint={bgImg.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-tr from-background via-transparent to-primary/5" />
          
          <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
            <div className="mb-12 relative">
              <div className="absolute -inset-8 bg-primary/10 blur-3xl rounded-full" />
              <div className="w-32 h-32 relative logistics-glow">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-primary">
                  <path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z" className="opacity-10" />
                  <path d="M50 10L85 30V70L50 90L15 70V30L50 10Z" />
                  <path d="M30 40 L50 30 L70 40 L70 60 L50 70 L30 60 Z" fill="white" className="opacity-80" />
                </svg>
              </div>
            </div>
            
            <h1 className="font-headline text-7xl font-black tracking-tighter mb-2 text-primary leading-[0.9]">
              ENVÍOS<br/>DOSRUEDAS
            </h1>
            <div className="flex items-center gap-4 w-full justify-center mt-6">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50" />
              <p className="font-headline text-xs font-bold tracking-[0.4em] text-foreground uppercase opacity-80 whitespace-nowrap">
                ESTRATEGIA LOGÍSTICA URBANA
              </p>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50" />
            </div>
          </div>
        </div>

        {/* Main Info Block */}
        <div className="flex-1 px-16 py-12 flex flex-col justify-between">
          <div className="grid grid-cols-2 gap-12">
            <div className="space-y-6">
              <div>
                <p className="text-[10px] font-headline font-bold text-primary uppercase tracking-widest mb-2">Cliente Preferente</p>
                <h2 className="text-3xl font-headline font-bold leading-tight">Corporativo Express S.A.</h2>
                <p className="text-sm text-muted-foreground font-body mt-1">División de Operaciones Metropolitanas</p>
              </div>
              
              <div className="flex gap-10">
                <div>
                  <p className="text-[9px] font-headline text-muted-foreground uppercase tracking-widest">Documento</p>
                  <p className="text-sm font-bold font-headline uppercase">PROP-2025-V4</p>
                </div>
                <div>
                  <p className="text-[9px] font-headline text-muted-foreground uppercase tracking-widest">Estado</p>
                  <p className="text-sm font-bold font-headline text-primary uppercase">Confidencial</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-1 bg-primary/20 blur-xl opacity-30" />
              <div className="relative aspect-square rounded-xl overflow-hidden border-2 border-primary/20 shadow-2xl">
                {bikeImg && (
                   <Image 
                     src={bikeImg.imageUrl} 
                     alt="Delivery focus" 
                     fill 
                     className="object-cover"
                     data-ai-hint={bikeImg.imageHint}
                   />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="text-[10px] font-headline font-bold text-white uppercase tracking-widest">Vista Operativa</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-end border-t border-white/5 pt-8">
            <div className="text-[9px] font-headline text-muted-foreground/60 leading-relaxed max-w-[200px]">
              ESTE DOCUMENTO CONTIENE INFORMACIÓN PROPIETARIA DE ENVÍOS DOSRUEDAS Y NO PUEDE SER REPRODUCIDO SIN AUTORIZACIÓN.
            </div>
            <div className="flex flex-col items-end">
              <p className="text-xs font-headline font-medium text-primary mb-1">EMITIDO POR</p>
              <p className="text-lg font-headline font-bold tracking-tight">DEPTO. ESTRATEGIA</p>
              <p className="text-[10px] text-muted-foreground">NOVIEMBRE 2025</p>
            </div>
          </div>
        </div>
      </div>
    </A4Page>
  );
};