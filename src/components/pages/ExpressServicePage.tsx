import React from 'react';
import { A4Page } from '@/components/A4Page';
import { Compass, Zap, Clock, CloudRain, Timer, Package, RotateCcw } from 'lucide-react';

export const ExpressServicePage = ({ pageNumber, totalPageCount }: { pageNumber: number, totalPageCount: number }) => {
  return (
    <A4Page pageNumber={pageNumber} totalPageCount={totalPageCount} className="p-0">
      <div className="relative h-full flex flex-col">
        {/* Pattern Overlay */}
        <div className="geometric-bg-overlay" />
        
        {/* Top Header */}
        <header className="relative z-10 border-b border-white/10 px-12 py-6 flex justify-between items-center bg-[#011525]/80 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <Compass className="text-[#ffc107] w-8 h-8" />
            <span className="font-headline text-xl font-black text-white italic tracking-tighter uppercase">ENVÍOS DOSRUEDAS</span>
          </div>
          <div className="px-4 py-1.5 border border-[#ffc107] text-[#ffc107] font-mono text-[10px] font-bold uppercase tracking-widest rounded shadow-[0_0_10px_rgba(255,193,7,0.2)]">
            POR DEMANDA
          </div>
        </header>

        {/* Content Body */}
        <main className="relative z-10 flex-1 px-12 py-10 flex flex-col gap-8">
          {/* Title Section */}
          <section className="flex items-center gap-4">
            <Zap className="text-[#ffc107] w-10 h-10 fill-[#ffc107]/20" />
            <h1 className="font-headline text-5xl font-black italic text-white uppercase tracking-tighter">
              ENVÍOS <span className="text-[#ffc107]">EXPRESS</span>
            </h1>
          </section>

          {/* Highlight Card */}
          <section className="bg-[#0c2131] rounded-xl p-8 border-l-4 border-l-[#ffc107] border border-white/5 shadow-2xl relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#ffc107]/5 rounded-full blur-3xl pointer-events-none" />
            <h2 className="font-headline text-2xl text-white font-bold mb-4 uppercase tracking-tight">Entregas con Elección de Rango Horario.</h2>
            <p className="font-body text-base text-[#d4c5ab] mb-6 leading-relaxed font-medium">
              La principal ventaja de este servicio es la personalización y la certeza. Usted nos indica el rango o límite horario (por ejemplo, 'entregar antes de las 17:00hs') y nosotros cumplimos, ideal para ventas exigentes.
            </p>
            {/* Warning Box */}
            <div className="bg-[#182c3c] border border-white/5 rounded-lg p-4 flex gap-4 items-center">
              <Clock className="text-[#ffc107] w-5 h-5 shrink-0" />
              <p className="font-body text-xs text-[#ffc107] font-bold uppercase tracking-wide">
                <span className="opacity-60">Importante:</span> Se requiere solicitar con un mínimo de 2 horas de anticipación.
              </p>
            </div>
          </section>

          {/* Pricing Table */}
          <section className="flex flex-col gap-3">
            <div className="flex justify-between items-end border-b border-white/10 pb-2 px-2">
              <h3 className="font-mono text-[10px] text-[#ffc107] font-bold uppercase tracking-[0.3em]">ZONIFICACIÓN DE ENTREGA</h3>
              <span className="font-mono text-[10px] text-[#ffc107] font-bold uppercase tracking-[0.3em]">VALOR FINAL</span>
            </div>
            <div className="flex flex-col">
              {[
                { label: "Zona 1 (Hasta 3 km)", price: "$3.700" },
                { label: "Zona 2 (3 a 5 km)", price: "$4.600" },
                { label: "Zona 3 (5 a 7 km)", price: "$6.100" },
                { label: "Zona 4 (7 a 10 km)", price: "$8.200" },
                { label: "Zona 5 (Más de 10 km)", price: "$1.000 x km" },
              ].map((row, i) => (
                <div key={i} className="flex justify-between items-center py-3.5 border-b border-white/5 hover:bg-white/5 transition-colors px-4 group">
                  <span className="font-body text-sm text-white font-semibold group-hover:text-[#ffc107] transition-colors">{row.label}</span>
                  <span className="font-mono text-lg text-[#ffc107] font-black group-hover:scale-105 transition-transform">{row.price}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Operational Bento Grid */}
          <section className="flex flex-col gap-4">
            <h3 className="font-mono text-[10px] text-[#ffc107] font-bold uppercase tracking-[0.3em]">CONDICIONES ADICIONALES OPERATIVAS</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "CLIMA ADVERSO", icon: <CloudRain className="w-6 h-6" />, desc: "(Lluvia/calzada mojada): Recargo del 50% sobre el valor." },
                { title: "DEMORA EN DOMICILIO", icon: <Timer className="w-6 h-6" />, desc: "Tolerancia 10 min. Luego, +$2.200 cada 10 min." },
                { title: "BULTO EXCEDENTE", icon: <Package className="w-6 h-6" />, desc: "Mayor a 5kg o 40x40x30cm." },
                { title: "RETORNO / VUELTA", icon: <RotateCcw className="w-6 h-6" />, desc: "Inmediata o 2da visita: Se factura al 50% del original." },
              ].map((item, i) => (
                <div key={i} className="bg-[#182c3c] border border-white/5 rounded-xl p-5 flex items-start gap-4 hover:border-[#ffc107]/30 transition-all group hover:bg-[#1f3243]">
                  <div className="text-[#ffc107] group-hover:scale-110 transition-transform">{item.icon}</div>
                  <div>
                    <h4 className="font-headline text-[13px] font-bold text-white mb-1 uppercase tracking-wider">{item.title}</h4>
                    <p className="font-body text-[11px] text-[#d4c5ab] leading-tight font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </A4Page>
  );
};