import React from 'react';
import { A4Page } from '@/components/A4Page';
import { Shield, Zap, Globe, Target } from 'lucide-react';

export const LogisticsInfoPage = ({ pageNumber, totalPageCount }: { pageNumber: number, totalPageCount: number }) => {
  return (
    <A4Page pageNumber={pageNumber} totalPageCount={totalPageCount}>
      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-1 bg-primary" />
          <p className="text-[10px] font-mono font-bold text-primary uppercase tracking-[0.5em]">Módulo 03 / Estrategia</p>
        </div>
        <h2 className="font-headline text-5xl font-black italic tracking-tighter leading-none text-white uppercase">
          PROPUESTA DE <span className="text-primary">VALOR</span>
        </h2>
      </header>

      <div className="grid grid-cols-2 gap-8 flex-grow">
        <div className="space-y-8">
          <div className="industrial-card-glow p-8 space-y-4">
            <Zap className="text-primary w-8 h-8" />
            <h3 className="font-headline font-bold text-lg text-white uppercase tracking-wider">Agilidad Urbana</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Optimizamos cada ruta mediante algoritmos de tráfico en tiempo real, garantizando que el tráfico de la ciudad no sea un obstáculo para su negocio.
            </p>
          </div>
          <div className="industrial-card-glow p-8 space-y-4">
            <Shield className="text-primary w-8 h-8" />
            <h3 className="font-headline font-bold text-lg text-white uppercase tracking-wider">Seguridad Total</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Protocolos de custodia nivel 4 y trazabilidad GPS constante para cada paquete. Su confianza es nuestro mayor activo.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center p-8 bg-primary/5 rounded-3xl border border-primary/10">
          <h4 className="font-headline font-black text-primary text-xs uppercase tracking-[0.3em] mb-8 text-center">Métricas de Rendimiento</h4>
          <div className="space-y-10">
            {[
              { label: "Cumplimiento SLA", value: "99.8%", color: "primary" },
              { label: "Entregas en Tiempo", value: "98.5%", color: "white" },
              { label: "Satisfacción Usuario", value: "4.9/5", color: "primary" }
            ].map((m, i) => (
              <div key={i} className="flex justify-between items-end border-b border-white/5 pb-4">
                <span className="text-[10px] font-mono uppercase text-muted-foreground font-bold tracking-widest">{m.label}</span>
                <span className={`font-headline font-black text-3xl ${m.color === 'primary' ? 'text-primary' : 'text-white'}`}>{m.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="mt-12 bg-card p-6 border-l-4 border-primary">
        <p className="text-[11px] text-muted-foreground italic leading-relaxed">
          "Nuestra infraestructura logística está diseñada para escalar junto a su volumen de ventas, manteniendo siempre la calidad que sus clientes esperan."
        </p>
      </footer>
    </A4Page>
  );
};