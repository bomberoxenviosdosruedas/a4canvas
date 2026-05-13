
import React from 'react';
import { A4Page } from '@/components/A4Page';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Cpu, Zap, Lock, BarChart3 } from 'lucide-react';

export const TechnologyPage = ({ pageNumber, totalPageCount }: { pageNumber: number, totalPageCount: number }) => {
  const techImg = PlaceHolderImages.find(img => img.id === 'tech-platform');

  return (
    <A4Page pageNumber={pageNumber} totalPageCount={totalPageCount} className="tech-pattern">
      <header className="mb-12">
        <p className="text-[10px] font-headline font-bold text-primary uppercase tracking-[0.5em] mb-4">Módulo 06 / Digital</p>
        <h2 className="font-headline text-6xl font-black tracking-tighter leading-none">PLATAFORMA <br/><span className="text-primary italic">PREDICTIVA</span></h2>
      </header>

      <div className="grid grid-cols-2 gap-16 flex-1 items-center">
        <div className="space-y-10">
          <p className="text-lg font-body text-foreground/80 leading-relaxed border-l-4 border-primary pl-8">
            Utilizamos algoritmos de aprendizaje profundo para predecir patrones de tráfico y optimizar rutas antes de que el vehículo inicie el motor.
          </p>
          
          <div className="grid grid-cols-1 gap-6">
            {[
              { t: "Algoritmos Genéticos", i: <Cpu className="w-6 h-6" />, d: "Optimización de rutas multi-variable en ms." },
              { t: "Blockchain Tracking", i: <Lock className="w-6 h-6" />, d: "Libro mayor inmutable para trazabilidad de carga." },
              { t: "Analítica Proactiva", i: <BarChart3 className="w-6 h-6" />, d: "Dashboards con insights de eficiencia operativa." }
            ].map((tech, i) => (
              <div key={i} className="flex items-center gap-6 p-6 bg-secondary/20 rounded-2xl border border-white/5 group hover:bg-primary/5 transition-colors">
                <div className="text-primary group-hover:scale-110 transition-transform">{tech.i}</div>
                <div>
                  <h4 className="font-headline font-bold text-lg">{tech.t}</h4>
                  <p className="text-xs text-muted-foreground">{tech.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative aspect-[9/12] w-full max-w-sm mx-auto group">
          <div className="absolute -inset-4 bg-primary/20 blur-3xl opacity-50 group-hover:opacity-100 transition-opacity" />
          <div className="relative h-full w-full rounded-[3rem] overflow-hidden border-8 border-secondary shadow-2xl">
            {techImg && (
              <Image 
                src={techImg.imageUrl} 
                alt="App Interface" 
                fill 
                className="object-cover" 
                data-ai-hint={techImg.imageHint}
              />
            )}
            <div className="absolute top-12 left-0 right-0 flex justify-center">
              <div className="w-1/3 h-6 bg-secondary rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </A4Page>
  );
};
