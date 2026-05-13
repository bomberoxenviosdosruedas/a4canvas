import React from 'react';
import { A4Page } from '@/components/A4Page';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

export const CoverPage = ({ pageNumber, totalPageCount }: { pageNumber: number, totalPageCount: number }) => {
  const bgImg = PlaceHolderImages.find(img => img.id === 'logo-background');
  const bikeImg = PlaceHolderImages.find(img => img.id === 'logistics-bike');

  return (
    <A4Page pageNumber={pageNumber} totalPageCount={totalPageCount} className="p-0 overflow-hidden bg-background">
      <div className="relative h-full flex flex-col">
        {/* Top Hero Section with Slanted Cut */}
        <div className="relative h-[65%] w-full clip-path-polygon">
          {bgImg && (
            <Image 
              src={bgImg.imageUrl} 
              alt="Industrial background" 
              fill 
              className="object-cover opacity-40 brightness-50"
              data-ai-hint={bgImg.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-background" />
          
          <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
            <div className="w-24 h-24 mb-8 relative logistics-glow">
              <svg viewBox="0 0 100 100" className="w-full h-full fill-primary">
                <path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z" className="opacity-20" />
                <path d="M50 15L80.3 32.5V67.5L50 85L19.7 67.5V32.5L50 15Z" />
                <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="4" />
                <path d="M50 35V65M35 50H65" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </div>
            <h1 className="font-headline text-6xl font-black tracking-tighter mb-4 text-primary leading-none">
              ENVÍOS<br/>DOSRUEDAS
            </h1>
            <div className="h-1 w-32 bg-primary mb-6 mx-auto logistics-glow" />
            <p className="font-headline text-2xl font-light tracking-widest text-foreground uppercase">
              Propuesta de Estrategia Logística
            </p>
          </div>
        </div>

        {/* Bottom Content Section */}
        <div className="flex-1 p-12 flex flex-col justify-end">
          <div className="grid grid-cols-2 gap-8 items-end">
            <div>
              <h2 className="font-headline text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">Preparado para</h2>
              <div className="translucent-slate p-6 border-l-4 border-primary rounded-r-lg">
                <p className="text-xl font-headline font-semibold mb-1">Corporativo Express S.A.</p>
                <p className="text-muted-foreground text-sm font-body">División de Distribución Urbana</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1 font-headline">Fecha de emisión</p>
              <p className="text-lg font-headline font-medium">Noviembre 2025</p>
              <div className="mt-4 flex justify-end gap-2">
                 <span className="w-3 h-3 bg-primary/40 rounded-full" />
                 <span className="w-3 h-3 bg-primary/60 rounded-full" />
                 <span className="w-3 h-3 bg-primary rounded-full logistics-glow" />
              </div>
            </div>
          </div>
        </div>

        {/* Float Image Decor */}
        <div className="absolute top-[50%] right-12 w-64 h-48 translate-y-[-50%] z-20 shadow-2xl rounded-lg overflow-hidden border-2 border-primary/30">
          {bikeImg && (
             <Image 
               src={bikeImg.imageUrl} 
               alt="Delivery focus" 
               fill 
               className="object-cover"
               data-ai-hint={bikeImg.imageHint}
             />
          )}
        </div>
      </div>
    </A4Page>
  );
};
