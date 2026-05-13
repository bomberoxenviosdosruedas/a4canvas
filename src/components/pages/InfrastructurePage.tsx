
import React from 'react';
import { A4Page } from '@/components/A4Page';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { MapPin, Globe, Box, Server } from 'lucide-react';

export const InfrastructurePage = ({ pageNumber, totalPageCount }: { pageNumber: number, totalPageCount: number }) => {
  const warehouse = PlaceHolderImages.find(img => img.id === 'warehouse');
  
  return (
    <A4Page pageNumber={pageNumber} totalPageCount={totalPageCount} className="tech-pattern">
      <header className="mb-12">
        <p className="text-[10px] font-headline font-bold text-primary uppercase tracking-[0.5em] mb-4">Módulo 04 / Operaciones</p>
        <h2 className="font-headline text-6xl font-black tracking-tighter leading-none">NODOS DE <br/><span className="text-primary italic">RED GLOBAL</span></h2>
      </header>

      <div className="grid grid-cols-12 gap-8 flex-1">
        <div className="col-span-4 space-y-6">
          <div className="p-6 bg-secondary/30 rounded-2xl border border-white/5 group hover:border-primary/50 transition-all">
            <MapPin className="text-primary w-8 h-8 mb-4" />
            <h3 className="font-headline font-bold text-xl mb-2">Hub Metropolitano</h3>
            <p className="text-xs text-muted-foreground">Centro de distribución de 5,000 m² con control climático y seguridad nivel 5.</p>
          </div>
          <div className="p-6 bg-secondary/30 rounded-2xl border border-white/5">
            <Globe className="text-primary w-8 h-8 mb-4" />
            <h3 className="font-headline font-bold text-xl mb-2">Micro-Hubs</h3>
            <p className="text-xs text-muted-foreground">12 puntos estratégicos para distribución de última milla en menos de 45 min.</p>
          </div>
          <div className="p-6 bg-secondary/30 rounded-2xl border border-white/5">
            <Server className="text-primary w-8 h-8 mb-4" />
            <h3 className="font-headline font-bold text-xl mb-2">Data Center</h3>
            <p className="text-xs text-muted-foreground">Infraestructura local para procesamiento de rutas en tiempo real sin latencia.</p>
          </div>
        </div>

        <div className="col-span-8 relative">
          <div className="h-full w-full rounded-[40px] overflow-hidden border-2 border-primary/20 shadow-2xl relative group">
            {warehouse && (
              <Image 
                src={warehouse.imageUrl} 
                alt="Infraestructura" 
                fill 
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                data-ai-hint={warehouse.imageHint}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            
            <div className="absolute bottom-10 left-10 right-10">
              <div className="flex gap-4 mb-6">
                <div className="flex-1 p-4 bg-primary/90 text-background rounded-xl">
                  <p className="text-[8px] font-black uppercase tracking-widest">Capacidad Total</p>
                  <p className="text-2xl font-headline font-black">15,000 PKG/DÍA</p>
                </div>
                <div className="flex-1 p-4 bg-background/90 text-primary border border-primary/20 rounded-xl backdrop-blur-md">
                  <p className="text-[8px] font-black uppercase tracking-widest">Disponibilidad</p>
                  <p className="text-2xl font-headline font-black">99.99%</p>
                </div>
              </div>
              <p className="text-[10px] text-white/60 font-medium leading-relaxed">
                Nuestra infraestructura está diseñada para escalar con su negocio, garantizando integridad física y digital de cada envío.
              </p>
            </div>
          </div>
        </div>
      </div>
    </A4Page>
  );
};
