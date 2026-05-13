import React from 'react';
import { A4Page } from '@/components/A4Page';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { TrendingUp, Shield, Zap, Globe, Target, Map, Activity, Clock } from 'lucide-react';

export const LogisticsInfoPage = ({ pageNumber, totalPageCount }: { pageNumber: number, totalPageCount: number }) => {
  const warehouseImg = PlaceHolderImages.find(img => img.id === 'warehouse');

  const stats = [
    { icon: <Zap className="w-5 h-5" />, label: "Velocidad", value: "98.5%", desc: "Entregas en tiempo real" },
    { icon: <Shield className="w-5 h-5" />, label: "Seguridad", value: "0.02%", desc: "Ratio de incidencias" },
    { icon: <Globe className="w-5 h-5" />, label: "Cobertura", value: "24/7", desc: "Monitoreo global activo" },
    { icon: <TrendingUp className="w-5 h-5" />, label: "Crecimiento", value: "45%", desc: "Mejora de SLA anual" },
  ];

  return (
    <A4Page pageNumber={pageNumber} totalPageCount={totalPageCount} className="tech-pattern">
      <div className="scanline opacity-5" />
      
      <header className="mb-12 flex justify-between items-start">
        <div className="relative">
          <div className="absolute -left-6 top-0 bottom-0 w-1.5 bg-primary logistics-glow" />
          <p className="text-[10px] font-headline font-bold text-primary uppercase tracking-[0.4em] mb-2">Módulo de Operaciones v4</p>
          <h2 className="font-headline text-5xl font-black tracking-tighter leading-none">EFICIENCIA <span className="text-primary italic">URBANA</span></h2>
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className="px-4 py-1.5 bg-primary text-background rounded-sm font-headline font-black text-[10px] tracking-widest uppercase">
             ESTATUS: OPERATIVO
          </div>
          <p className="text-[9px] font-mono text-primary/60">REF: DATA-SYNC-HUB-01</p>
        </div>
      </header>

      <div className="grid grid-cols-12 gap-12">
        {/* Main Content */}
        <div className="col-span-7 space-y-10">
          <section className="bg-secondary/20 p-8 rounded-2xl border border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-2xl" />
            <h3 className="font-headline text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Target className="w-5 h-5 text-primary" />
              </div>
              Nuestra Visión Estratégica
            </h3>
            <p className="font-body text-sm leading-relaxed text-foreground/70 mb-6 italic border-l-2 border-primary/20 pl-6">
              "En Envíos DosRuedas, redefinimos la logística urbana mediante el uso de inteligencia predictiva y una flota ágil que desafía la congestión citadina. Nuestra infraestructura permite una trazabilidad total, garantizando que cada envío sea una promesa cumplida."
            </p>
            <div className="flex items-center gap-2 text-[10px] font-headline font-bold text-primary/60 uppercase tracking-widest">
              <Activity className="w-3 h-3" /> Monitor de Rendimiento Activo
            </div>
          </section>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="p-6 bg-card border border-white/5 rounded-xl hover:border-primary/40 transition-all group relative overflow-hidden">
                <div className="absolute -right-4 -top-4 w-20 h-20 bg-primary/5 rounded-full blur-xl group-hover:bg-primary/10 transition-colors" />
                <div className="mb-4 text-primary group-hover:scale-110 transition-transform origin-left">{stat.icon}</div>
                <div className="font-headline text-4xl font-black text-foreground mb-1 tracking-tighter">{stat.value}</div>
                <div className="text-[10px] font-headline uppercase tracking-[0.2em] text-primary font-bold">{stat.label}</div>
                <div className="text-[10px] text-muted-foreground mt-1 font-medium">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Sidebar */}
        <div className="col-span-5 flex flex-col gap-8">
          <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border-2 border-primary/10 shadow-[0_0_40px_rgba(0,0,0,0.4)] group">
            {warehouseImg && (
              <Image 
                src={warehouseImg.imageUrl} 
                alt="Logistics Hub" 
                fill 
                className="object-cover transition-transform duration-[2s] group-hover:scale-110"
                data-ai-hint={warehouseImg.imageHint}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
            <div className="absolute inset-x-0 bottom-0 p-8">
               <div className="flex items-center gap-3 mb-4">
                 <div className="w-3 h-3 rounded-full bg-primary animate-ping" />
                 <p className="text-xs uppercase font-headline tracking-[0.3em] text-white font-black">Live Logistics Node</p>
               </div>
               <p className="text-lg font-headline font-bold text-white leading-tight">Distribución Inteligente: Fase 01 Optimización de Metros Cuadrados</p>
            </div>
          </div>

          <div className="bg-primary/5 border border-primary/20 p-6 rounded-2xl">
             <div className="flex items-center justify-between mb-4">
               <h4 className="text-[10px] font-headline font-black uppercase tracking-widest text-primary flex items-center gap-2">
                 <Map className="w-4 h-4" /> Nodos de Cobertura
               </h4>
               <span className="text-[9px] font-mono text-primary/50">LNK-992</span>
             </div>
             <div className="flex gap-1.5">
                {Array.from({length: 12}).map((_, i) => (
                  <div key={i} className={`h-1.5 flex-1 rounded-full ${i < 9 ? 'bg-primary' : 'bg-white/10'}`} />
                ))}
             </div>
             <p className="text-[9px] text-muted-foreground mt-3 uppercase tracking-tighter">75% Capacidad de Red - Nodos Urbanos Activos</p>
          </div>
        </div>
      </div>

      <footer className="mt-auto pt-12 border-t border-white/5">
        <div className="flex items-center justify-between mb-8">
          <p className="text-[10px] font-headline font-black text-primary uppercase tracking-[0.5em]">Workflow de Implementación</p>
          <div className="h-px flex-1 mx-8 bg-gradient-to-r from-primary/30 to-transparent" />
        </div>
        
        <div className="grid grid-cols-3 gap-10">
          {[
            { t: "RECOLECCIÓN", d: "Sistemas GPS de alta precisión y proximidad.", icon: <Clock className="w-4 h-4" /> },
            { t: "RUTEO DINÁMICO", d: "Cálculo de rutas en tiempo real mediante IA.", icon: <Activity className="w-4 h-4" /> },
            { t: "ENTREGA SEGURA", d: "Validación biométrica y trazabilidad final.", icon: <Shield className="w-4 h-4" /> }
          ].map((step, i) => (
            <div key={i} className="flex flex-col gap-3 relative">
              <div className="text-5xl font-headline font-black text-primary/10 absolute -top-4 -left-2">{i+1}</div>
              <div className="flex items-center gap-2 text-primary">
                {step.icon}
                <p className="font-headline text-xs font-black tracking-widest uppercase">{step.t}</p>
              </div>
              <p className="text-[11px] text-muted-foreground leading-relaxed pl-6">{step.d}</p>
            </div>
          ))}
        </div>
      </footer>
    </A4Page>
  );
};