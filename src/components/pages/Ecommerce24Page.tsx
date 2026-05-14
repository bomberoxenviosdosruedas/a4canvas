import React from 'react';
import { A4Page } from '@/components/A4Page';
import Image from 'next/image';
import { Truck } from 'lucide-react';

const LOGO_URL = "https://xnarosypsowmisjcevsi.supabase.co/storage/v1/object/public/enviosadmindosruedas/logo.png";

export const Ecommerce24Page = ({ pageNumber, totalPageCount }: { pageNumber: number, totalPageCount: number }) => {
  return (
    <A4Page pageNumber={pageNumber} totalPageCount={totalPageCount} className="p-0 text-white font-['Inter']">
      <div className="relative h-full flex flex-col p-8 md:p-12 bg-gradient-to-bottom from-[#0f2c23] to-[#0a1f18]">
        {/* Header */}
        <header className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center border border-gray-600 relative overflow-hidden">
              <Image src={LOGO_URL} alt="Logo EDR" fill className="object-contain p-1" />
            </div>
            <h1 className="text-xl md:text-2xl font-bold tracking-wider italic uppercase">
              Envios <span className="text-[#ffc107]">DosRuedas</span>
            </h1>
            <div className="relative w-12 h-12 ml-2 flex items-center justify-center">
              <svg className="absolute inset-0 w-full h-full text-[#4ade80]" viewBox="0 0 100 100">
                <path d="M50 10 A40 40 0 1 1 10 50" fill="none" stroke="currentColor" strokeWidth="4"></path>
              </svg>
              <div className="text-center leading-none">
                <div className="text-lg font-bold">24</div>
                <div className="text-[10px]">H</div>
              </div>
            </div>
          </div>
          <div className="border border-[#4ade80] text-[#4ade80] px-4 py-1 rounded-full text-xs md:text-sm font-semibold tracking-wider uppercase">
            E-COMMERCE DISTRIBUCIÓN
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow flex flex-col gap-8">
          {/* Section Title */}
          <div>
            <h2 className="text-3xl md:text-4xl font-black italic flex items-center gap-4 mb-4">
              <Truck className="w-8 h-8 text-white" />
              PLAN E-COMMERCE <span className="text-[#4ade80] ml-2">24HS</span>
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Escale su tienda online con una tarifa plana a todo Mar del Plata. Usted prepara los paquetes, nosotros retiramos hoy y entregamos mañana en toda la ciudad. <br/>
              <span className="text-[#ffc107] font-semibold">Costos fijos y máxima rentabilidad.</span>
            </p>
          </div>

          {/* Pricing Table */}
          <div className="w-full">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-[#4ade80] text-[#ffc107] text-xs md:text-sm font-bold uppercase tracking-wider">
                  <th className="pb-3 w-1/3">Nivel Comercial</th>
                  <th className="pb-3 text-center w-1/3">Volumen Mensual</th>
                  <th className="pb-3 text-right w-1/3">Valor X Envío (Plano)</th>
                </tr>
              </thead>
              <tbody className="text-sm md:text-base">
                {[
                  { level: "INICIAL", range: "1 a 199 envíos", price: "$3.800" },
                  { level: "PRO", range: "200 a 1.199 envíos", price: "$3.500" },
                  { level: "ELITE", range: "1.200 a 1.999 envíos", price: "$3.200" },
                  { level: "PARTNER", range: "+2.000 envíos", price: "$3.000" }
                ].map((row, i) => (
                  <tr key={i} className={`border-b border-gray-700/50 ${i % 2 === 0 ? 'bg-black/10' : ''}`}>
                    <td className="py-4 font-bold text-[#4ade80]">{row.level}</td>
                    <td className="py-4 text-center text-gray-200">{row.range}</td>
                    <td className="py-4 text-right font-bold text-[#4ade80]">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Drop-Off Offer */}
          <div className="bg-[#4ade80] text-[#011525] rounded-xl p-6 text-center shadow-lg transform hover:scale-[1.02] transition-transform">
            <h3 className="font-bold text-lg mb-2">OPCIÓN DROP-OFF (AHORRO INTELIGENTE)</h3>
            <p className="text-sm md:text-base font-medium">
              Traiga sus paquetes a nuestro depósito (Friuli 1972) y obtenga 
              <span className="inline-block bg-gradient-to-r from-yellow-300 to-yellow-600 text-black px-2 py-1 rounded font-bold shadow-md mx-1">20% DE DESCUENTO</span>
              directo sobre la tarifa y evite costos de retiro.
            </p>
          </div>

          {/* Details Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            {/* Column 1 */}
            <div className="bg-[#14362b] border border-[#1e4c3d] rounded-xl p-6 shadow-inner">
              <h4 className="text-[#ffc107] font-bold mb-4 border-b border-[#1e4c3d] pb-2">DINÁMICA DE SERVICIO</h4>
              <ul className="space-y-4 text-sm text-gray-300">
                <li className="flex gap-2">
                  <span className="text-[#ffc107] font-bold">•</span>
                  <span><strong className="text-white">Next Day:</strong> Retiro hoy, entrega mañana.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#ffc107] font-bold">•</span>
                  <span><strong className="text-white">Franja Abierta:</strong> 9 a 20 hs (Sin horario fijo).</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#4ade80] font-bold">•</span>
                  <span className="text-[#4ade80] font-semibold">2da Visita GRATIS (Bonificada).</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#ffc107] font-bold">•</span>
                  <span><strong className="text-white">Cobranza en Destino GRATIS.</strong></span>
                </li>
              </ul>
            </div>
            {/* Column 2 */}
            <div className="bg-[#14362b] border border-[#1e4c3d] rounded-xl p-6 shadow-inner">
              <h4 className="text-[#ffc107] font-bold mb-4 border-b border-[#1e4c3d] pb-2">EXCEPCIONES Y COSTOS</h4>
              <ul className="space-y-4 text-sm text-gray-300">
                <li className="flex gap-2">
                  <span className="text-[#ffc107] font-bold">•</span>
                  <span><strong className="text-white">Log. Inversa:</strong> Cambios a 50% del valor.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#ffc107] font-bold">•</span>
                  <span><strong className="text-white">Lluvia:</strong> Recargo 50% (u opción posponer).</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#ffc107] font-bold">•</span>
                  <span><strong className="text-white">Bulto</strong> &gt;5kg o 40x40x30cm. Adic. desde $1.800.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#ffc107] font-bold">•</span>
                  <span><strong className="text-[#ffc107]">Retiro Diario:</strong> GRATIS (+10 paq). Menos: $4.000.</span>
                </li>
              </ul>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="mt-auto pt-8 flex justify-between items-center text-gray-400 text-sm">
          <span>Escalabilidad para Tiendas Online</span>
          <span>{pageNumber} / {totalPageCount}</span>
        </footer>
      </div>
    </A4Page>
  );
};
