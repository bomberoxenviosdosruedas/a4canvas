import React from 'react';
import { A4Page } from '@/components/A4Page';
import Image from 'next/image';
import { ShieldCheck, MapPin, Package, Star, Scale, CloudRain } from 'lucide-react';

const LOGO_URL = "https://xnarosypsowmisjcevsi.supabase.co/storage/v1/object/public/enviosadmindosruedas/logo.png";

export const FlexServicePage = ({ pageNumber, totalPageCount }: { pageNumber: number, totalPageCount: number }) => {
  return (
    <A4Page pageNumber={pageNumber} totalPageCount={totalPageCount} className="p-0">
      <div className="relative h-full flex flex-col">
        {/* TopAppBar */}
        <header className="border-b border-white/10 px-12 py-6 flex justify-between items-center bg-[#011525]/80 backdrop-blur-sm relative z-20">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 relative">
              <Image src={LOGO_URL} alt="Logo EDR" fill className="object-contain" />
            </div>
            <span className="font-headline text-xl font-black text-white italic tracking-tighter uppercase">ENVÍOS DOSRUEDAS</span>
          </div>
          <div className="px-4 py-1.5 border-2 border-[#ffc107] text-[#ffc107] font-mono text-[10px] font-bold uppercase tracking-[0.2em] rounded">
            MÓDULO PLATAFORMAS
          </div>
        </header>

        {/* Main Content */}
        <main className="relative z-10 flex-1 px-12 py-8 flex flex-col gap-6">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-[#ffc107] w-10 h-10" />
              <h1 className="font-headline text-5xl font-black italic text-white uppercase tracking-tighter">
                ENVÍOS <span className="text-[#ffc107]">FLEX</span>
              </h1>
            </div>
            <div className="bg-[#ffc107] text-[#3f2e00] px-4 py-1.5 rounded-sm font-headline text-[10px] font-black uppercase tracking-widest">
              MERCADOLIBRE
            </div>
          </div>

          {/* Info Banner */}
          <div className="bg-[#182c3c] border border-white/10 rounded-lg p-4 flex items-center gap-3">
            <MapPin className="text-[#ffc107] w-5 h-5" />
            <p className="font-body text-sm text-[#d4c5ab]">
              Retiro por domicilio (Colecta) <span className="text-[#ffc107] font-bold uppercase tracking-tight">SIN CARGO</span> en todo Mar del Plata.
            </p>
          </div>

          {/* SLA Banner */}
          <div className="border-l-4 border-[#ffc107] pl-6 py-2">
            <p className="font-body text-base text-[#d4c5ab]">
              <strong className="text-white text-lg">SLA Garantizado:</strong> Ventas concretadas hasta las <strong className="text-white">15:00hs</strong> serán entregadas en el día antes de las 20:00hs.
            </p>
          </div>

          {/* Levels Grid */}
          <div className="flex flex-col gap-5">
            {/* Nivel 1 */}
            <div className="bg-[#0c2131] rounded-xl p-5 border border-white/5 space-y-4">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <Package className="text-[#ffc107] w-6 h-6" />
                  <h3 className="font-headline text-lg font-black text-[#ffc107] uppercase tracking-tight">NIVEL 1: VOLUMEN INICIAL</h3>
                </div>
                <div className="bg-[#182c3c] px-3 py-1 rounded-sm text-[10px] text-[#d4c5ab] font-mono font-bold uppercase tracking-widest border border-white/5">1 a 4 envíos / día</div>
              </div>
              <p className="text-[#d4c5ab] text-[11px] border-b border-white/5 pb-4 italic font-medium">Tarifa clásica zonificada. Ideal para garantizar entregas en el día con la seguridad de Flex.</p>
              <div className="grid grid-cols-2 gap-x-8 gap-y-2 font-mono text-sm text-white">
                <div className="flex justify-between border-b border-white/5 pb-1">
                  <span className="text-[#d4c5ab] text-[10px] uppercase font-bold">Z1 (Hasta 3 km):</span>
                  <span className="font-bold">$3.000</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1">
                  <span className="text-[#d4c5ab] text-[10px] uppercase font-bold">Z2 (3 a 5 km):</span>
                  <span className="font-bold">$4.000</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1">
                  <span className="text-[#d4c5ab] text-[10px] uppercase font-bold">Z3 (5 a 7 km):</span>
                  <span className="font-bold">$5.300</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1">
                  <span className="text-[#d4c5ab] text-[10px] uppercase font-bold">Z4 (7 a 10 km):</span>
                  <span className="font-bold">$7.000</span>
                </div>
                <div className="flex justify-between pt-2 col-span-2">
                  <span className="text-[#ffc107] text-[10px] uppercase font-black">Z5 (&gt; 10 km):</span>
                  <span className="text-[#ffc107] font-black">$700 x km</span>
                </div>
              </div>
              <div className="bg-[#182c3c] rounded-md p-2 mt-4 border border-white/5">
                <p className="font-mono text-[9px] text-[#ffc107] text-center font-bold uppercase tracking-widest">2DA VISITA: 50% DEL VALOR EN TODAS LAS ZONAS.</p>
              </div>
            </div>

            {/* Nivel 2 */}
            <div className="bg-[#0c2131] rounded-xl p-5 border-l-4 border-l-[#4ade80] border-t border-r border-b border-white/5 space-y-4">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <Star className="text-[#4ade80] w-6 h-6 fill-[#4ade80]/20" />
                  <h3 className="font-headline text-lg font-black text-[#4ade80] uppercase tracking-tight">NIVEL 2: VENDEDOR FRECUENTE</h3>
                </div>
                <div className="bg-[#182c3c] px-3 py-1 rounded-sm text-[10px] text-[#d4c5ab] font-mono font-bold uppercase tracking-widest border border-white/5">+5 envíos / día</div>
              </div>
              <p className="text-[#d4c5ab] text-[11px] border-b border-white/5 pb-4 italic font-medium">Tarifa Híbrida. Mantiene costos bajos en zonas cercanas y establece un tope fijo para largas distancias.</p>
              <div className="grid grid-cols-2 gap-x-8 gap-y-2 font-mono text-sm text-white">
                <div className="flex justify-between border-b border-white/5 pb-1">
                  <span className="text-[#d4c5ab] text-[10px] uppercase font-bold">Z1 (Hasta 3 km):</span>
                  <span>$3.000</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1">
                  <span className="text-[#d4c5ab] text-[10px] uppercase font-bold">Z2 (3 a 5 km):</span>
                  <span>$4.000</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1">
                  <span className="text-[#d4c5ab] text-[10px] uppercase font-bold">Z3 (5 a 7 km):</span>
                  <span>$5.300</span>
                </div>
                <div className="flex justify-center items-center bg-[#182c3c] rounded-md border border-[#4ade80]/30 py-1">
                  <span className="text-[#4ade80] text-[11px] font-black uppercase tracking-widest italic">Zonas 4 y 5: Fijo $6.500</span>
                </div>
              </div>
              <div className="bg-[#182c3c] rounded-md p-2 mt-4 border border-white/5">
                <p className="font-mono text-[9px] text-[#4ade80] text-center font-bold uppercase tracking-widest">2DA VISITA: ZONA 1 SIN CARGO. (Z2 A Z5 AL 50%).</p>
              </div>
            </div>

            {/* Nivel 3 */}
            <div className="bg-[#ffc107] rounded-xl p-5 border-2 border-white/10 space-y-4 shadow-[0_0_30px_rgba(255,193,7,0.2)]">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3 text-[#3f2e00]">
                  <Scale className="w-6 h-6" />
                  <h3 className="font-headline text-lg font-black uppercase tracking-tight">NIVEL 3: GRANDES CUENTAS</h3>
                </div>
                <div className="bg-[#3f2e00] px-3 py-1 rounded-sm text-[10px] text-[#ffc107] font-mono font-bold uppercase tracking-widest">+10 envíos / día</div>
              </div>
              <p className="text-[#3f2e00] text-[11px] border-b border-[#3f2e00]/20 pb-4 font-bold">Solución de costo fijo a cualquier punto de la ciudad, diseñada para MercadoLideres que requieren escalar volumen previsiblemente.</p>
              <div className="flex flex-col md:flex-row justify-between items-center gap-2 pt-2">
                <div className="text-[#3f2e00] font-headline text-lg uppercase font-black tracking-tight leading-none text-center md:text-left">
                  TARIFA PLANA A TODO <br/> MAR DEL PLATA
                </div>
                <div className="font-headline text-5xl font-black tracking-tighter text-[#3f2e00]">
                  $4.500
                </div>
              </div>
              <div className="bg-[#3f2e00] rounded-md p-3 mt-4 shadow-lg">
                <p className="font-headline text-xs text-white text-center font-black uppercase tracking-[0.1em]">2DA VISITA / REPROGRAMACIÓN: ¡SIN CARGO A TODAS LAS ZONAS!</p>
              </div>
            </div>
          </div>

          {/* Warning Banner */}
          <div className="bg-[#0c2131] border border-white/10 rounded-lg p-4 flex items-center gap-3">
            <CloudRain className="text-[#ffc107] w-6 h-6" />
            <p className="font-body text-xs text-[#d4c5ab] font-medium italic">
              <strong className="text-[#ffc107] font-black uppercase not-italic tracking-wider mr-2">CLIMA ADVERSO / LLUVIA:</strong> 
              Recargo operativo exclusivo para Flex reducido al <strong className="text-white font-bold">30%</strong>.
            </p>
          </div>
        </main>

        {/* Footer */}
        <footer className="mt-auto px-12 py-6 border-t border-white/5 flex justify-between items-center bg-[#011525]/80">
          <span className="font-mono text-[10px] text-[#d4c5ab] uppercase tracking-[0.2em] font-bold">El Motor de su MercadoLider</span>
          <span className="font-mono text-[10px] text-white font-black tracking-[0.4em]">4 / 11</span>
        </footer>
      </div>
    </A4Page>
  );
};
