import React from 'react';
import { A4Page } from '@/components/A4Page';
import Image from 'next/image';
import { Zap, Clock, CloudRain, Timer, Package, RotateCcw } from 'lucide-react';

const LOGO_URL = "https://xnarosypsowmisjcevsi.supabase.co/storage/v1/object/public/enviosadmindosruedas/logo.png";

export const ExpressServicePage = ({ pageNumber, totalPageCount }: { pageNumber: number, totalPageCount: number }) => {
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
        <div className="px-4 py-1.5 border border-primary text-primary font-mono text-[9px] font-bold uppercase tracking-[0.2em] rounded shadow-[0_0_15px_rgba(255,193,7,0.1)]">
          POR DEMANDA
        </div>
      </header>

      {/* Title */}
      <section className="flex items-center gap-5 mb-8">
        <Zap className="text-primary w-12 h-12 fill-primary/10" />
        <div>
          <h1 className="font-headline text-5xl font-black italic text-white uppercase tracking-tighter leading-none">
            ENVÍOS <span className="text-primary">EXPRESS</span>
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <div className="space-y-10">
        <section className="bg-card/50 rounded-xl p-8 border-l-4 border-l-primary border border-white/5 shadow-2xl relative overflow-hidden">
          <h2 className="font-headline text-2xl text-white font-bold mb-4 uppercase tracking-tight">Entregas con Elección de Rango Horario.</h2>
          <p className="font-body text-base text-muted-foreground mb-6 leading-relaxed">
            La principal ventaja es la personalización. Usted nos indica el rango o límite horario y nosotros cumplimos, ideal para ventas exigentes y compromisos inmediatos.
          </p>
          <div className="bg-background/80 border border-primary/20 rounded-lg p-4 flex gap-4 items-center">
            <Clock className="text-primary w-5 h-5 shrink-0" />
            <p className="font-body text-xs text-primary font-bold uppercase tracking-widest">
              Importante: Se requiere un mínimo de 2 horas de anticipación.
            </p>
          </div>
        </section>

        {/* Pricing */}
        <section className="space-y-4">
          <h3 className="font-mono text-[10px] text-primary font-bold uppercase tracking-[0.4em] px-2">ZONIFICACIÓN DE ENTREGA</h3>
          <div className="bg-card/30 rounded-xl overflow-hidden border border-white/5">
            {[
              { label: "Zona 1 (Hasta 3 km)", price: "$3.700" },
              { label: "Zona 2 (3 a 5 km)", price: "$4.600" },
              { label: "Zona 3 (5 a 7 km)", price: "$6.100" },
              { label: "Zona 4 (7 a 10 km)", price: "$8.200" },
              { label: "Zona 5 (Más de 10 km)", price: "$1.000 x km" },
            ].map((row, i) => (
              <div key={i} className="flex justify-between items-center py-4 px-6 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                <span className="font-body text-sm text-foreground font-semibold">{row.label}</span>
                <span className="font-mono text-lg text-primary font-black tracking-tighter">{row.price}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Operational Grid */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { title: "CLIMA ADVERSO", icon: <CloudRain className="w-5 h-5" />, desc: "Recargo del 50% sobre valor base." },
            { title: "DEMORA ESPERA", icon: <Timer className="w-5 h-5" />, desc: "Tolerancia 10 min. Luego +$2.200 c/10 min." },
            { title: "BULTO EXCEDENTE", icon: <Package className="w-5 h-5" />, desc: "Mayor a 5kg o 40x40x30cm." },
            { title: "RETORNO / VUELTA", icon: <RotateCcw className="w-5 h-5" />, desc: "Factura al 50% del valor original." },
          ].map((item, i) => (
            <div key={i} className="bg-card/50 border border-white/5 rounded-xl p-5 flex items-start gap-4">
              <div className="text-primary mt-1">{item.icon}</div>
              <div>
                <h4 className="font-headline text-[12px] font-bold text-white mb-1 uppercase tracking-widest">{item.title}</h4>
                <p className="font-body text-[10px] text-muted-foreground leading-snug">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </A4Page>
  );
};
