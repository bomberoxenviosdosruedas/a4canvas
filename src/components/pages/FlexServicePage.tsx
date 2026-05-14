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
        <header className="border-b border-white/10 px-10 py-4 flex justify-between items-center bg-[#011525]/80 backdrop-blur-sm relative z-20">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 relative bg-surface-container rounded-full border border-white/10 flex items-center justify-center p-1 overflow-hidden">
              <Image src={LOGO_URL} alt="Logo EDR" fill className="object-contain p-1.5" />
            </div>
            <span className="font-headline text-lg font-black text-white italic tracking-tighter uppercase">ENVÍOS DOSRUEDAS</span>
          </div>
          <div className="px-3 py-1 border-2 border-[#ffc107] text-[#ffc107] font-mono text-[9px] font-bold uppercase tracking-[0.2em] rounded">
            MÓDULO PLATAFORMAS
          </div>
        </header>

        {/* Main Content */}
        <main className="relative z-10 flex-1 px-10 py-6 flex flex-col gap-4 overflow-hidden">
          {/* Header Section */}
          <div className="flex items-end justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-[#ffc107] w-8 h-8" />
              <h1 className="font-headline text-4xl font-black italic text-white uppercase tracking-tighter">
                ENVÍOS <span className="text-[#ffc107]">FLEX</span>
              </h1>
            </div>
            <div className="bg-[#ffc107] text-[#3f2e00] px-3 py-1 rounded-sm font-headline text-[9px] font-black uppercase tracking-widest">
              MERCADOLIBRE
            </div>
          </div>

          {/* SLA and Info Banners */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#182c3c] border border-white/10 rounded-lg p-3 flex items-center gap-3">
              <MapPin className="text-[#ffc107] w-4 h-4 shrink-0" />
              <p className="font-body text-[11px] text-[#d4c5ab]">
                Retiro por domicilio <span className="text-[#ffc107] font-bold">SIN CARGO</span>.
              </p>
            </div>
            <div className="border-l-4 border-[#ffc107] pl-4 py-1 flex items-center">
              <p className="font-body text-[11px] text-[#d4c5ab]">
                <strong className="text-white">SLA:</strong> Ventas hasta <strong className="text-white">15:00hs</strong> se entregan en el día.
              </p>
            </div>
          </div>

          {/* Levels Grid - Compacted */}
          <div className="flex flex-col gap-3">
            {/* Nivel 1 */}
            <div className="bg-[#0c2131] rounded-lg p-4 border border-white/5 space-y-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Package className="text-[#ffc107] w-5 h-5" />
                  <h3 className="font-headline text-sm font-black text-[#ffc107] uppercase">N1: VOLUMEN INICIAL</h3>
                </div>
                <div className="bg-[#182c3c] px-2 py-0.5 rounded text-[9px] text-[#d4c5ab] font-mono border border-white/5">1-4 env / día</div>
              </div>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1 font-mono text-[11px] text-white border-t border-white/5 pt-2">
                <div className="flex justify-between border-b border-white/5 pb-1"><span>Z1:</span><span className="font-bold">$3.000</span></div>
                <div className="flex justify-between border-b border-white/5 pb-1"><span>Z2:</span><span className="font-bold">$4.000</span></div>
                <div className="flex justify-between border-b border-white/5 pb-1"><span>Z3:</span><span className="font-bold">$5.300</span></div>
                <div className="flex justify-between border-b border-white/5 pb-1"><span>Z4:</span><span className="font-bold">$7.000</span></div>
              </div>
              <p className="font-mono text-[9px] text-[#ffc107]/80 text-center uppercase">2DA VISITA: 50% VALOR</p>
            </div>

            {/* Nivel 2 */}
            <div className="bg-[#0c2131] rounded-lg p-4 border-l-4 border-l-[#4ade80] border border-white/5 space-y-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Star className="text-[#4ade80] w-5 h-5 fill-[#4ade80]/20" />
                  <h3 className="font-headline text-sm font-black text-[#4ade80] uppercase">N2: VENDEDOR FRECUENTE</h3>
                </div>
                <div className="bg-[#182c3c] px-2 py-0.5 rounded text-[9px] text-[#d4c5ab] font-mono border border-white/5">+5 env / día</div>
              </div>
              <div className="grid grid-cols-3 gap-x-4 font-mono text-[11px] text-white border-t border-white/5 pt-2">
                <div className="flex justify-between"><span>Z1:</span><span>$3.000</span></div>
                <div className="flex justify-between"><span>Z2:</span><span>$4.000</span></div>
                <div className="flex justify-between"><span>Z3:</span><span>$5.300</span></div>
              </div>
              <div className="bg-[#182c3c] rounded p-1.5 border border-[#4ade80]/30 text-center">
                <span className="text-[#4ade80] text-[10px] font-black uppercase italic">Zonas 4 y 5: Fijo $6.500</span>
              </div>
            </div>

            {/* Nivel 3 */}
            <div className="bg-[#ffc107] rounded-lg p-4 border border-white/10 space-y-3 shadow-lg">
              <div className="flex justify-between items-center text-[#3f2e00]">
                <div className="flex items-center gap-2">
                  <Scale className="w-5 h-5" />
                  <h3 className="font-headline text-sm font-black uppercase">N3: GRANDES CUENTAS</h3>
                </div>
                <div className="bg-[#3f2e00] px-2 py-0.5 rounded text-[9px] text-[#ffc107] font-mono">+10 env / día</div>
              </div>
              <div className="flex justify-between items-center pt-1">
                <div className="text-[#3f2e00] font-headline text-[11px] uppercase font-black leading-none">TARIFA PLANA <br/> TODO MDQ</div>
                <div className="font-headline text-3xl font-black text-[#3f2e00]">$4.500</div>
              </div>
              <div className="bg-[#3f2e00] rounded p-2">
                <p className="font-headline text-[9px] text-white text-center font-black uppercase">2DA VISITA / REPROG: ¡SIN CARGO!</p>
              </div>
            </div>
          </div>

          {/* Warning Banner */}
          <div className="bg-[#0c2131] border border-white/10 rounded-lg p-3 mt-auto flex items-center gap-3">
            <CloudRain className="text-[#ffc107] w-5 h-5" />
            <p className="font-body text-[10px] text-[#d4c5ab] font-medium italic">
              <strong className="text-[#ffc107] font-black uppercase not-italic mr-2">CLIMA / LLUVIA:</strong> 
              Recargo operativo exclusivo para Flex reducido al <strong className="text-white font-bold">30%</strong>.
            </p>
          </div>
        </main>
      </div>
    </A4Page>
  );
};