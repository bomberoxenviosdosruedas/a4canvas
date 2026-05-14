import React from 'react';
import { A4Page } from '@/components/A4Page';
import { Truck, Timer, Percent, Box, Check, AlertCircle } from 'lucide-react';

export const Ecommerce24Page = ({ pageNumber, totalPageCount }: { pageNumber: number, totalPageCount: number }) => {
  return (
    <A4Page pageNumber={pageNumber} totalPageCount={totalPageCount} className="p-0">
      <div className="relative h-full flex flex-col p-[12mm] px-[15mm]">
        {/* BEGIN: Header Section */}
        <header className="flex justify-between items-center mb-10 pb-4 border-b border-primary/20">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-black rounded-sm flex items-center justify-center border border-white/10 relative overflow-hidden text-center">
              <span className="text-[8px] text-white/40 font-bold uppercase leading-tight">ENVIOS<br/>DOSRUEDAS</span>
            </div>
            <h1 className="font-headline text-xl font-bold italic tracking-wide text-white uppercase">
              ENVIOS <span className="text-primary">DOSRUEDAS</span>
            </h1>
          </div>
          <div className="border border-primary px-4 py-1.5 rounded-sm text-primary text-sm font-black tracking-wider uppercase shadow-[0_0_15px_rgba(255,193,7,0.2)]">
            E-Commerce Distribución
          </div>
        </header>

        {/* BEGIN: Main Title */}
        <section className="mb-8 flex items-start gap-5">
          <Truck className="w-12 h-12 text-white mt-1 shrink-0" strokeWidth={1.5} />
          <div>
            <h2 className="font-headline text-4xl font-black italic tracking-tight leading-none text-white uppercase">PLAN E-COMMERCE</h2>
            <h2 className="font-headline text-4xl font-black italic tracking-tight leading-none text-primary uppercase drop-shadow-[0_0_10px_rgba(255,193,7,0.5)]">24HS (DISTRIBUCIÓN)</h2>
          </div>
        </section>

        {/* BEGIN: Description */}
        <p className="font-body text-base leading-relaxed text-[#d4c5ab] mb-10 w-11/12 font-medium">
          Escale su tienda online con una tarifa plana a todo Mar del Plata. Usted prepara los paquetes, nosotros retiramos hoy y entregamos mañana en toda la ciudad. <span className="text-primary font-bold">Costos fijos y máxima rentabilidad.</span>
        </p>

        {/* BEGIN: Pricing Table Section */}
        <div className="bg-card/80 backdrop-blur-md border border-primary/20 rounded-sm mb-8 overflow-hidden shadow-xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-primary text-primary text-[10px] font-black uppercase tracking-[0.2em] bg-primary/5">
                <th className="py-4 px-6">Nivel Comercial</th>
                <th className="py-4 px-6 text-center">Volumen Mensual</th>
                <th className="py-4 px-6 text-right">Valor X Envío (Plano)</th>
              </tr>
            </thead>
            <tbody className="font-headline">
              {[
                { level: "INICIAL", range: "1 a 199 envíos", price: "$3.800" },
                { level: "PRO", range: "200 a 1.199 envíos", price: "$3.500" },
                { level: "ELITE", range: "1.200 a 1.999 envíos", price: "$3.200" },
                { level: "PARTNER", range: "+2.000 envíos", price: "$3.000" }
              ].map((row, i) => (
                <tr key={i} className={`border-b border-white/5 hover:bg-white/5 transition-colors ${i % 2 === 0 ? 'bg-white/[0.02]' : ''}`}>
                  <td className="py-4 px-6 font-bold text-primary italic">{row.level}</td>
                  <td className="py-4 px-6 text-center text-white/80 text-sm font-medium">{row.range}</td>
                  <td className="py-4 px-6 text-right font-black text-primary text-xl drop-shadow-sm">{row.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* BEGIN: Drop-Off Offer */}
        <div className="bg-primary text-background rounded-sm p-6 text-center mb-8 shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <h3 className="font-headline font-black text-lg mb-2 uppercase tracking-tight flex items-center justify-center gap-3">
            <Percent className="w-6 h-6" />
            OPCIÓN DROP-OFF (AHORRO INTELIGENTE)
          </h3>
          <p className="font-body text-base font-bold">
            Traiga sus paquetes a nuestro depósito (Friuli 1972) y obtenga 
            <span className="bg-background text-primary px-3 py-1 rounded-sm shadow-md mx-2 italic">20% DE DESCUENTO</span>
            directo sobre la tarifa y evite costos de retiro.
          </p>
        </div>

        {/* BEGIN: Details Columns */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="bg-card/80 backdrop-blur-md border border-primary/20 rounded-sm p-6 shadow-xl">
            <h4 className="text-primary font-black uppercase tracking-widest text-xs mb-4 flex items-center gap-2 border-b border-white/5 pb-2">
              <Timer className="w-4 h-4" />
              DINÁMICA DE SERVICIO
            </h4>
            <ul className="space-y-4 text-sm font-medium text-[#d4c5ab]">
              <li className="flex gap-2">
                <span className="text-primary font-black">•</span>
                <span><strong className="text-white">Next Day:</strong> Retiro hoy, entrega mañana.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-black">•</span>
                <span><strong className="text-white">Franja Abierta:</strong> 9 a 20 hs (Sin horario fijo).</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-black">•</span>
                <span className="text-white font-black">2da Visita GRATIS (Bonificada).</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-black">•</span>
                <span><strong className="text-white">Cobranza en Destino GRATIS.</strong></span>
              </li>
            </ul>
          </div>

          <div className="bg-card/80 backdrop-blur-md border border-primary/20 rounded-sm p-6 shadow-xl">
            <h4 className="text-primary font-black uppercase tracking-widest text-xs mb-4 flex items-center gap-2 border-b border-white/5 pb-2">
              <AlertCircle className="w-4 h-4" />
              EXCEPCIONES Y COSTOS
            </h4>
            <ul className="space-y-4 text-sm font-medium text-[#d4c5ab]">
              <li className="flex gap-2">
                <span className="text-primary font-black">•</span>
                <span><strong className="text-white">Log. Inversa:</strong> Cambios a 50% del valor.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-black">•</span>
                <span><strong className="text-white">Lluvia:</strong> Recargo 50% (u opción posponer).</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-black">•</span>
                <span><strong className="text-white">Bulto</strong> &gt;5kg o 40x40x30cm. Adic. desde $1.800.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-black">•</span>
                <span><strong className="text-primary">Retiro Diario:</strong> GRATIS (+10 paq). Menos: $4.000.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* BEGIN: Footer */}
        <footer className="mt-auto pt-4 border-t border-white/5 flex justify-between items-center text-[#d4c5ab] font-mono text-[10px] font-bold uppercase tracking-widest">
          <p>Escalabilidad para Tiendas Online</p>
          <p>{pageNumber} / {totalPageCount}</p>
        </footer>
      </div>
    </A4Page>
  );
};
