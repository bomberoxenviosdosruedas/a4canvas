import React from 'react';
import { A4Page } from '@/components/A4Page';
import { Truck, Clock, Repeat, MapPin, Info, Zap } from 'lucide-react';

export const EcommerceServicePage = ({ pageNumber, totalPageCount }: { pageNumber: number, totalPageCount: number }) => {
  return (
    <A4Page pageNumber={pageNumber} totalPageCount={totalPageCount} className="p-0">
      <div className="relative h-full flex flex-col">
        {/* TopAppBar */}
        <header className="border-b border-white/10 px-12 py-6 flex justify-between items-center bg-[#011525]/80 backdrop-blur-sm relative z-20">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#0c2131] flex items-center justify-center border border-white/10">
              <Truck className="text-[#ffc107] w-5 h-5" />
            </div>
            <span className="font-headline text-xl font-black text-white italic tracking-tighter uppercase">ENVÍOS DOSRUEDAS</span>
          </div>
          <div className="px-4 py-1.5 border-2 border-[#ffc107] text-[#ffc107] font-mono text-[10px] font-bold uppercase tracking-[0.2em] rounded">
            E-COMMERCE DISTRIBUCIÓN
          </div>
        </header>

        {/* Main Content */}
        <main className="relative z-10 flex-1 px-12 py-8 flex flex-col gap-6">
          {/* Header Section */}
          <div className="flex flex-col gap-4 border-b border-white/10 pb-6">
            <div className="flex items-center gap-4">
              <Repeat className="text-[#ffc107] w-12 h-12" />
              <h1 className="font-headline text-5xl font-black italic text-white uppercase tracking-tighter">
                PLAN E-COMMERCE <span className="text-[#ffc107]">24HS</span>
              </h1>
            </div>
            <p className="font-body text-base text-[#d4c5ab] leading-relaxed max-w-3xl">
              Escale su tienda online con una tarifa plana a todo Mar del Plata. Usted prepara los paquetes, nosotros retiramos hoy y entregamos mañana en toda la ciudad. <strong className="text-[#ffc107] uppercase tracking-tight">Costos fijos y máxima rentabilidad.</strong>
            </p>
          </div>

          {/* Pricing Table */}
          <section className="flex flex-col gap-4">
            <div className="grid grid-cols-3 gap-4 border-b-2 border-[#ffc107] pb-3 px-4">
              <span className="font-mono text-[10px] text-[#ffc107] font-bold uppercase tracking-[0.3em]">NIVEL COMERCIAL</span>
              <span className="font-mono text-[10px] text-[#ffc107] font-bold uppercase tracking-[0.3em] text-center">VOLUMEN MENSUAL</span>
              <span className="font-mono text-[10px] text-[#ffc107] font-bold uppercase tracking-[0.3em] text-right">VALOR X ENVÍO</span>
            </div>
            <div className="flex flex-col">
              {[
                { level: "INICIAL", vol: "1 a 199 envíos", price: "$3.800" },
                { level: "PRO", vol: "200 a 1.199 envíos", price: "$3.500" },
                { level: "ELITE", vol: "1.200 a 1.999 envíos", price: "$3.200" },
                { level: "PARTNER", vol: "+2.000 envíos", price: "$3.000" },
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-3 gap-4 py-4 px-4 border-b border-white/5 hover:bg-white/5 transition-colors group">
                  <span className="font-headline text-sm text-[#ffc107] font-black tracking-wider group-hover:scale-105 transition-transform origin-left">{row.level}</span>
                  <span className="font-body text-sm text-white text-center font-medium">{row.vol}</span>
                  <span className="font-mono text-xl text-[#ffc107] font-black text-right">{row.price}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Drop-off Banner */}
          <div className="bg-[#ffc107] rounded-xl p-6 text-center shadow-[0_0_30px_rgba(255,193,7,0.2)] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
            <h3 className="font-headline text-xl font-black text-[#011525] uppercase tracking-tighter mb-1">Opción Drop-Off (Ahorro Inteligente)</h3>
            <p className="font-body text-sm text-[#011525] font-bold">
              Traiga sus paquetes a nuestro depósito (Friuli 1972) y obtenga <span className="bg-[#011525] text-[#ffc107] px-3 py-1 rounded shadow-md mx-1">20% DE DESCUENTO</span> directo sobre la tarifa.
            </p>
          </div>

          {/* Info Cards Grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-[#0c2131] border border-white/5 rounded-xl p-6 space-y-4">
              <h4 className="font-headline text-xs font-black text-[#ffc107] uppercase tracking-[0.4em] border-b border-white/5 pb-2">DINÁMICA DE SERVICIO</h4>
              <ul className="space-y-3 text-[11px] text-[#d4c5ab] font-medium">
                <li className="flex items-start gap-3">
                  <Clock className="w-3.5 h-3.5 text-[#ffc107] shrink-0" />
                  <span><strong className="text-white uppercase tracking-tight">Next Day:</strong> Retiro hoy, entrega mañana.</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-3.5 h-3.5 text-[#ffc107] shrink-0" />
                  <span><strong className="text-white uppercase tracking-tight">Franja Abierta:</strong> 9 a 20 hs (Sin horario fijo).</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-3.5 h-3.5 text-[#ffc107] shrink-0" />
                  <span className="text-white font-black">2da Visita GRATIS (Bonificada).</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#0c2131] border border-white/5 rounded-xl p-6 space-y-4">
              <h4 className="font-headline text-xs font-black text-[#ffc107] uppercase tracking-[0.4em] border-b border-white/5 pb-2">EXCEPCIONES Y COSTOS</h4>
              <ul className="space-y-3 text-[11px] text-[#d4c5ab] font-medium">
                <li className="flex items-start gap-3">
                  <Info className="w-3.5 h-3.5 text-[#ffc107] shrink-0" />
                  <span><strong className="text-white uppercase tracking-tight">Log. Inversa:</strong> Cambios al 50% del valor.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Info className="w-3.5 h-3.5 text-[#ffc107] shrink-0" />
                  <span><strong className="text-white uppercase tracking-tight">Retiro Diario:</strong> GRATIS (+10 paq). Menos: $4.000.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Info className="w-3.5 h-3.5 text-[#ffc107] shrink-0" />
                  <span><strong className="text-white uppercase tracking-tight">Lluvia:</strong> Recargo 50% (u opción posponer).</span>
                </li>
              </ul>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="mt-auto px-12 py-6 border-t border-white/5 flex justify-between items-center bg-[#011525]/80">
          <span className="font-mono text-[10px] text-[#d4c5ab] uppercase tracking-[0.2em] font-bold">Escalabilidad para Tiendas Online</span>
          <span className="font-mono text-[10px] text-white font-black tracking-[0.4em]">{pageNumber} / {totalPageCount}</span>
        </footer>
      </div>
    </A4Page>
  );
};
