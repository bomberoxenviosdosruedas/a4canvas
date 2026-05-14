import React from 'react';
import { A4Page } from '@/components/A4Page';
import Image from 'next/image';
import { RefreshCw, Info, CloudRain, Package, Timer, Truck } from 'lucide-react';

const LOGO_URL = "https://xnarosypsowmisjcevsi.supabase.co/storage/v1/object/public/enviosadmindosruedas/logo.png";

export const LowcostServicePage = ({ pageNumber, totalPageCount }: { pageNumber: number, totalPageCount: number }) => {
  return (
    <A4Page pageNumber={pageNumber} totalPageCount={totalPageCount}>
      {/* Header */}
      <header className="flex justify-between items-center w-full pb-8 border-b border-white/5 mb-10">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full border border-white/10 p-1 bg-background relative flex items-center justify-center">
            <Image src={LOGO_URL} alt="Logo" fill className="object-contain p-1.5" />
          </div>
          <span className="font-headline text-lg font-black text-white italic tracking-tighter uppercase">ENVÍOS DOSRUEDAS</span>
        </div>
        <div className="px-4 py-1.5 border border-primary text-primary font-mono text-[9px] font-bold uppercase tracking-[0.2em] rounded">
          LOGÍSTICA URBANA
        </div>
      </header>

      {/* Title */}
      <section className="flex items-center gap-5 mb-8">
        <RefreshCw className="text-primary w-12 h-12" />
        <div>
          <h1 className="font-headline text-5xl font-black italic text-primary uppercase tracking-tighter leading-none">
            ENVÍOS <span className="text-white">LOWCOST</span>
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <div className="space-y-10">
        <section className="bg-card/50 rounded-xl p-8 border border-primary/20 shadow-2xl relative overflow-hidden">
          <h2 className="font-headline text-2xl text-white font-bold mb-4 uppercase tracking-tight">Eficiencia en Ruteo Diario</h2>
          <p className="font-body text-base text-muted-foreground mb-6 leading-relaxed">
            La modalidad LowCost prioriza la optimización de rutas. Son entregas en el transcurso del día, <strong className="text-white">sin elección de rango horario</strong>. Pedidos antes de las 13:00hs se entregan antes de las 19:00hs.
          </p>
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 flex gap-4 items-start">
            <Info className="text-primary w-5 h-5 mt-1 shrink-0" />
            <p className="font-body text-xs text-foreground font-medium">
              <strong className="text-primary">Nota:</strong> Se requiere un mínimo de 2 horas de anticipación para organizar el retiro y la logística del cadete.
            </p>
          </div>
        </section>

        {/* Pricing */}
        <section className="space-y-4">
          <h3 className="font-mono text-[10px] text-primary font-bold uppercase tracking-[0.4em] px-2">TARIFARIO ZONIFICADO</h3>
          <div className="bg-card/30 rounded-xl overflow-hidden border border-white/5">
            {[
              { label: "Zona 1 (Hasta 3 km)", price: "$3.000" },
              { label: "Zona 2 (3 a 5 km)", price: "$4.000" },
              { label: "Zona 3 (5 a 7 km)", price: "$5.300" },
              { label: "Zona 4 (7 a 10 km)", price: "$7.000" },
              { label: "Zona 5 (Más de 10 km)", price: "$700 x km" },
            ].map((row, i) => (
              <div key={i} className="flex justify-between items-center py-4 px-6 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                <span className="font-body text-sm text-foreground font-semibold">{row.label}</span>
                <span className="font-mono text-lg text-primary font-black tracking-tighter">{row.price}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Grid Standard Conditions */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { title: "LLUVIA", icon: <CloudRain className="w-6 h-6" />, val: "Recargo +50%", sub: "S/ valor base" },
            { title: "BULTO", icon: <Package className="w-6 h-6" />, val: "+$1.800", sub: "Adicional p/ bulto" },
            { title: "DEMORA", icon: <Timer className="w-6 h-6" />, val: "+$2.200", sub: "Cada 10 minutos" },
            { title: "2DA VISITA", icon: <Truck className="w-6 h-6" />, val: "50% VALOR", sub: "Retorno o re-intento" },
          ].map((item, i) => (
            <div key={i} className="bg-card/50 border border-white/5 rounded-xl p-5 flex items-center gap-6">
              <div className="text-primary">{item.icon}</div>
              <div className="flex flex-col">
                <h4 className="font-headline text-[12px] font-bold text-white uppercase tracking-widest leading-none mb-1">{item.title}</h4>
                <div className="font-mono text-base font-black text-primary leading-none">{item.val}</div>
                <div className="text-[9px] text-muted-foreground font-medium uppercase mt-1 tracking-wider">{item.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </A4Page>
  );
};
