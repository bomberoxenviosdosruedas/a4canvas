import React from 'react';
import { A4Page } from '@/components/A4Page';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { TrendingUp, Shield, Zap, Globe } from 'lucide-react';

export const LogisticsInfoPage = ({ pageNumber, totalPageCount }: { pageNumber: number, totalPageCount: number }) => {
  const warehouseImg = PlaceHolderImages.find(img => img.id === 'warehouse');

  const stats = [
    { icon: <Zap className="text-primary" />, label: "Velocidad", value: "98.5%", desc: "Entregas en tiempo" },
    { icon: <Shield className="text-primary" />, label: "Seguridad", value: "0.02%", desc: "Incidencias reportadas" },
    { icon: <Globe className="text-primary" />, label: "Cobertura", value: "24/7", desc: "Monitoreo en tiempo real" },
    { icon: <TrendingUp className="text-primary" />, label: "Crecimiento", value: "45%", desc: "Eficiencia mejorada" },
  ];

  return (
    <A4Page pageNumber={pageNumber} totalPageCount={totalPageCount}>
      <header className="mb-12">
        <h2 className="font-headline text-3xl font-bold tracking-tight mb-2 flex items-center gap-3">
          <span className="bg-primary text-background px-2 py-1 rounded">01</span>
          EFICIENCIA OPERATIVA
        </h2>
        <div className="h-[2px] w-full bg-gradient-to-r from-primary to-transparent" />
      </header>

      <div className="grid grid-cols-12 gap-8 mb-12">
        <div className="col-span-7 space-y-6">
          <div className="translucent-slate p-6 rounded-lg border border-primary/10">
            <h3 className="font-headline text-lg font-semibold text-primary mb-3 uppercase tracking-wider">Nuestra Visión</h3>
            <p className="font-body text-sm leading-relaxed text-foreground/90">
              En Envíos DosRuedas, redefinimos la logística urbana mediante el uso de inteligencia predictiva y una flota ágil que desafía la congestión citadina. Nuestra infraestructura permite una trazabilidad total, garantizando que cada envío no sea solo un paquete, sino una promesa cumplida.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="p-4 bg-secondary/50 rounded border border-white/5">
                <div className="mb-2">{stat.icon}</div>
                <div className="font-headline text-2xl font-bold text-primary">{stat.value}</div>
                <div className="text-xs font-headline uppercase tracking-widest text-muted-foreground">{stat.label}</div>
                <div className="text-[10px] text-muted-foreground/60">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-5 relative">
          <div className="h-full w-full rounded-lg overflow-hidden border-2 border-primary/20 shadow-xl relative group">
            {warehouseImg && (
              <Image 
                src={warehouseImg.imageUrl} 
                alt="Logistics Hub" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                data-ai-hint={warehouseImg.imageHint}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
               <p className="text-[10px] uppercase font-headline tracking-[0.2em] text-primary/80">Centro de Distribución</p>
               <p className="text-xs font-body font-medium italic">"Optimización en cada metro cuadrado"</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-auto space-y-6">
        <div className="flex gap-4 items-center">
          <div className="flex-1 h-px bg-primary/20" />
          <span className="font-headline text-xs font-bold text-primary/50 uppercase tracking-[0.3em]">Protocolo de Acción</span>
          <div className="flex-1 h-px bg-primary/20" />
        </div>
        
        <div className="grid grid-cols-3 gap-6">
          {[
            { t: "Recolección Ágil", d: "Sistemas de asignación por proximidad GPS." },
            { t: "Ruta Dinámica", d: "Cálculo en tiempo real basado en tráfico urbano." },
            { t: "Entrega Final", d: "Validación digital biométrica al receptor." }
          ].map((step, i) => (
            <div key={i} className="text-center">
              <p className="font-headline text-sm font-bold mb-1">{step.t}</p>
              <p className="text-xs text-muted-foreground leading-snug">{step.d}</p>
            </div>
          ))}
        </div>
      </div>
    </A4Page>
  );
};
