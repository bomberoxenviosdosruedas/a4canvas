import React from 'react';
import { A4Page } from '@/components/A4Page';
import Image from 'next/image';
import { Truck, Clock } from 'lucide-react';

const LOGO_URL = "https://xnarosypsowmisjcevsi.supabase.co/storage/v1/object/public/enviosadmindosruedas/logo.png";

export const Ecommerce24Page = ({ pageNumber, totalPageCount }: { pageNumber: number, totalPageCount: number }) => {
  return (
    <A4Page pageNumber={pageNumber} totalPageCount={totalPageCount} className="p-0">
      <div className="relative h-full flex flex-col items-center bg-gradient-to-b from-[#0f2c23] to-background">
        
        {/* Header */}
        <header className="flex items-center justify-between w-full p-12 pb-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center border border-white/10 relative overflow-hidden">
              <Image src={LOGO_URL} alt="Logo" fill className="object-contain p-1.5" />
            </div>
            <h1 className="text-2xl font-black italic tracking-tighter uppercase text-white">
              Envios <span className="text-primary">DosRuedas</span>
            </h1>
            <div className="relative w-12 h-12 ml-4 flex items-center justify-center border-2 border-[#4ade80] rounded-full">
              <div className="text-center leading-none">
                <div className="text-lg font-black text-[#4ade80]">24</div>
                <div className="text-[8px] font-bold text-[#4ade80]">H</div>
              </div>
            </div>
          </div>
          <div className="border border-[#4ade80] text-[#4ade80] px-5 py-2 rounded-full text-[10px] font-black tracking-[0.2em] uppercase shadow-[0_0_15px_rgba(74,222,128,0.2)]">
            E-COMMERCE DISTRIBUCIÓN
          </div>
        </header>

        {/* Content */}
        <main className="flex-grow flex flex-col gap-10 px-12 w-full max-w-3xl">
          {/* Title Section */}
          <div className="space-y-4">
            <h2 className="text-5xl font-black italic tracking-tighter flex items-center gap-5 uppercase text-white leading-none">
              <Truck className="w-12 h-12 text-primary" strokeWidth={2.5} />
              PLAN E-COMMERCE <span className="text-[#4ade80] ml-2">24HS</span>
            </h2>
            <p className="text-gray-300 text-base leading-relaxed font-medium max-w-2xl">
              Escale su tienda online con una tarifa plana a todo Mar del Plata. Usted prepara los paquetes, nosotros retiramos hoy y entregamos mañana. <br/>
              <span className="text-primary font-black italic uppercase tracking-wider text-sm mt-2 block">Costos fijos y máxima rentabilidad garantizada.</span>
            </p>
          </div>

          {/* Table */}
          <div className="w-full bg-black/20 rounded-2xl border border-white/5 overflow-hidden shadow-2xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-[#4ade80] bg-[#4ade80]/5">
                  <th className="p-6 text-primary text-xs font-black uppercase tracking-[0.2em]">Nivel Comercial</th>
                  <th className="p-6 text-white/60 text-xs font-black uppercase tracking-[0.2em] text-center">Volumen Mensual</th>
                  <th className="p-6 text-primary text-xs font-black uppercase tracking-[0.2em] text-right">Valor Unitario</th>
                </tr>
              </thead>
              <tbody className="text-base font-semibold">
                {[
                  { level: "INICIAL", range: "1 a 199 envíos", price: "$3.800" },
                  { level: "PRO", range: "200 a 1.199 envíos", price: "$3.500" },
                  { level: "ELITE", range: "1.200 a 1.999 envíos", price: "$3.200" },
                  { level: "PARTNER", range: "+2.000 envíos", price: "$3.000" }
                ].map((row, i) => (
                  <tr key={i} className={`border-b border-white/5 hover:bg-white/5 transition-colors ${i % 2 === 0 ? 'bg-white/[0.02]' : ''}`}>
                    <td className="p-6 font-black text-[#4ade80] tracking-tight">{row.level}</td>
                    <td className="p-6 text-center text-gray-300 font-mono text-sm">{row.range}</td>
                    <td className="p-6 text-right font-black text-[#4ade80] text-xl tracking-tighter">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Drop-Off Offer */}
          <div className="bg-[#4ade80] text-background rounded-2xl p-8 text-center shadow-[0_0_40px_rgba(74,222,128,0.3)] group hover:scale-[1.01] transition-transform relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/20 rounded-full -mr-12 -mt-12 blur-2xl" />
            <h3 className="font-black text-xl mb-2 tracking-tighter uppercase italic">OPCIÓN DROP-OFF (AHORRO INTELIGENTE)</h3>
            <p className="text-base font-bold leading-relaxed">
              Traiga sus paquetes a nuestro depósito y obtenga un 
              <span className="inline-block bg-background text-[#4ade80] px-3 py-1 rounded-sm font-black mx-2 shadow-lg">20% DE DESCUENTO</span>
              directo sobre la tarifa y evite costos de retiro.
            </p>
          </div>

          {/* Bento Details */}
          <div className="grid grid-cols-2 gap-6 pb-4">
            <div className="bg-card/40 border border-white/5 rounded-2xl p-8 shadow-inner">
              <h4 className="text-primary font-black mb-6 border-b border-primary/20 pb-3 text-[11px] uppercase tracking-[0.3em]">DINÁMICA DE SERVICIO</h4>
              <ul className="space-y-5 text-[13px] text-gray-300 font-medium">
                <li className="flex gap-3"><span className="text-primary font-black">•</span><span><strong className="text-white">Next Day:</strong> Retiro hoy, entrega mañana.</span></li>
                <li className="flex gap-3"><span className="text-primary font-black">•</span><span><strong className="text-white">Franja Abierta:</strong> 9 a 20 hs (Sin horario fijo).</span></li>
                <li className="flex gap-3"><span className="text-[#4ade80] font-black">•</span><span className="text-[#4ade80] font-bold">2da Visita GRATIS (Bonificada).</span></li>
                <li className="flex gap-3"><span className="text-primary font-black">•</span><span><strong className="text-white">Cobranza en Destino GRATIS.</strong></span></li>
              </ul>
            </div>
            <div className="bg-card/40 border border-white/5 rounded-2xl p-8 shadow-inner">
              <h4 className="text-primary font-black mb-6 border-b border-primary/20 pb-3 text-[11px] uppercase tracking-[0.3em]">EXCEPCIONES Y COSTOS</h4>
              <ul className="space-y-5 text-[13px] text-gray-300 font-medium">
                <li className="flex gap-3"><span className="text-primary font-black">•</span><span><strong className="text-white">Log. Inversa:</strong> Cambios al 50% del valor.</span></li>
                <li className="flex gap-3"><span className="text-primary font-black">•</span><span><strong className="text-white">Lluvia:</strong> Recargo 50% (u opción posponer).</span></li>
                <li className="flex gap-3"><span className="text-primary font-black">•</span><span><strong className="text-white">Bulto:</strong> &gt;5kg o 40x40x30cm. Adic. $1.800.</span></li>
                <li className="flex gap-3"><span className="text-primary font-black">•</span><span><strong className="text-primary font-black uppercase">Retiro Diario:</strong> GRATIS (+10 paq).</span></li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </A4Page>
  );
};
