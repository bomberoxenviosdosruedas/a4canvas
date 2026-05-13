import React from 'react';
import { A4Page } from '@/components/A4Page';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { TrendingUp, Shield, Zap, Globe, Target, Map } from 'lucide-react';

export const LogisticsInfoPage = ({ pageNumber, totalPageCount }: { pageNumber: number, totalPageCount: number }) => {
  const warehouseImg = PlaceHolderImages.find(img => img.id === 'warehouse');

  const stats = [
    { icon: <Zap className="w-5 h-5 text-primary" />, label: "Velocidad", value: "98.5%", desc: "Entregas en tiempo" },
    { icon: <Shield className="w-5 h-5 text-primary" />, label: "Seguridad", value: "0.02%", desc: "Incidencias reportadas" },
    { icon: <Globe className="w-5 h-5 text-primary" />, label: "Cobertura", value: "24/7", desc: "Monitoreo en tiempo real" },
    { icon: <TrendingUp className="w-5 h-5 text-primary" />, label: "Crecimiento", value: "45%", desc: "Eficiencia mejorada" },
  ];

  return (
    <A4Page pageNumber={pageNumber} totalPageCount={totalPageCount} className="tech-pattern">
      <header className="mb-10 flex justify-between items-end border-b border-primary/20 pb-6">
        <div>
          <p className="text-[10px] font-headline font-bold text-primary uppercase tracking-[0.3em] mb-1">Módulo Operativo</p>
          <h2 className="font-headline text-4xl font-bold tracking-tight">EFICIENCIA <span className="text-primary italic">TOTAL</span></h2>
        </div>
        <div className="text-right">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary text-background rounded-full font-headline font-bold text-[10px]">
             Fase 01: Optimización
          </div>
        </div>
      </header>

      <div className="grid grid-cols-12 gap-10">
        {/* Column Left: Text & Vision */}
        <div className="col-span-7 space-y-8">
          <section className="relative group">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-primary rounded-full logistics-glow" />
            <div className="pl-4">
              <h3 className="font-headline text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Target className="w-4 h-4 text-primary" />
                Nuestra Visión Estratégica
              </h3>
              <p className="font-body text-[13px] leading-relaxed text-foreground/80">
                En Envíos DosRuedas, redefinimos la logística urbana mediante el uso de inteligencia predictiva y una flota ágil que desafía la congestión citadina. Nuestra infraestructura permite una trazabilidad total, garantizando que cada envío no sea solo un paquete, sino una promesa cumplida para Corporativo Express S.A.
              </p>
            </div>
          </section>
          
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="p-5 bg-secondary/30 rounded-xl border border-white/5 hover:border-primary/20 transition-all group overflow-hidden relative">
                <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-full -mr-8 -mt-8" />
                <div className="mb-3 p-2 bg-primary/10 w-fit rounded-lg group-hover:scale-110 transition-transform">{stat.icon}</div>
                <div className="font-headline text-3xl font-black text-primary mb-1">{stat.value}</div>
                <div className="text-[10px] font-headline uppercase tracking-widest text-foreground font-bold">{stat.label}</div>
                <div className="text-[9px] text-muted-foreground/80 mt-1">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Column Right: Visual & Context */}
        <div className="col-span-5 flex flex-col gap-6">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border-2 border-primary/20 shadow-2xl group">
            {warehouseImg && (
              <Image 
                src={warehouseImg.imageUrl} 
                alt="Logistics Hub" 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                data-ai-hint={warehouseImg.imageHint}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
               <div className="flex items-center gap-2 mb-2">
                 <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                 <p className="text-[10px] uppercase font-headline tracking-[0.2em] text-primary font-bold">Live Hub</p>
               </div>
               <p className="text-sm font-headline font-bold italic text-white leading-tight">"La optimización comienza en el primer metro cuadrado."</p>
            </div>
          </div>

          <div className="p-4 bg-primary/5 border border-primary/20 rounded-xl">
            <h4 className="text-[10px] font-headline font-bold uppercase tracking-widest text-primary mb-2 flex items-center gap-2">
              <Map className="w-3 h-3" />
              Nodos de Cobertura
            </h4>
            <div className="flex gap-1">
               {Array.from({length: 8}).map((_, i) => (
                 <div key={i} className={`h-1 flex-1 rounded-full ${i < 6 ? 'bg-primary' : 'bg-primary/20'}`} />
               ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-auto pt-10">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/20" />
          <span className="font-headline text-[10px] font-black text-primary/80 uppercase tracking-[0.5em]">Workflow de Implementación</span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/20" />
        </div>
        
        <div className="grid grid-cols-3 gap-8">
          {[
            { t: "01. RECOLECCIÓN", d: "Sistemas GPS de proximidad.", c: "bg-primary/10" },
            { t: "02. DINÁMICA", d: "Ruta en tiempo real IA.", c: "bg-primary/10" },
            { t: "03. VALIDACIÓN", d: "Entrega biométrica segura.", c: "bg-primary/10" }
          ].map((step, i) => (
            <div key={i} className="flex gap-4">
              <div className="text-xl font-headline font-black text-primary/20">{i+1}</div>
              <div>
                <p className="font-headline text-xs font-bold mb-1 tracking-wider">{step.t}</p>
                <p className="text-[10px] text-muted-foreground leading-snug">{step.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </A4Page>
  );
};