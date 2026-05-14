import React from 'react';
import { A4Page } from '@/components/A4Page';
import Image from 'next/image';
import { ShieldCheck, MapPin, Package, Star, Scale, CloudRain } from 'lucide-react';

const LOGO_URL = "https://xnarosypsowmisjcevsi.supabase.co/storage/v1/object/public/enviosadmindosruedas/logo.png";

export const FlexServicePage = ({ pageNumber, totalPageCount }: { pageNumber: number, totalPageCount: number }) => {
  return (
    <A4Page pageNumber={pageNumber} totalPageCount={totalPageCount}>
      {/* Header */}
      <header className="flex justify-between items-center w-full pb-8 border-b border-white/5 mb-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full border border-white/10 p-1 bg-background relative flex items-center justify-center">
            <Image src={LOGO_URL} alt="Logo" fill className="object-contain p-1.5" />
          </div>
          <span className="font-headline text-lg font-black text-white italic tracking-tighter uppercase">ENVÍOS DOSRUEDAS</span>
        </div>
        <div className="px-4 py-1.5 border border-primary text-primary font-mono text-[9px] font-bold uppercase tracking-[0.2em] rounded">
          MÓDULO PLATAFORMAS
        </div>
      </header>

      {/* Title Section */}
      <div className="flex items-end justify-between border-b border-white/10 pb-4 mb-6">
        <div className="flex items-center gap-4">
          <ShieldCheck className="text-primary w-10 h-10" />
          <h1 className="font-headline text-4xl font-black italic text-white uppercase tracking-tighter">
            ENVÍOS <span className="text-primary">FLEX</span>
          </h1>
        </div>
        <div className="bg-primary text-background px-4 py-1.5 rounded-sm font-headline text-[10px] font-black uppercase tracking-widest shadow-lg">
          MERCADOLIBRE
        </div>
      </div>

      {/* Info Banners */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-card/40 border border-white/10 rounded-xl p-4 flex items-center gap-4">
          <MapPin className="text-primary w-5 h-5 shrink-0" />
          <p className="font-body text-xs text-muted-foreground">Retiro por domicilio (Colecta) <span className="text-primary font-bold italic">SIN CARGO</span>.</p>
        </div>
        <div className="border-l-4 border-primary bg-primary/5 pl-5 py-3 flex items-center rounded-r-xl">
          <p className="font-body text-xs text-muted-foreground leading-relaxed">
            <strong className="text-white">SLA:</strong> Ventas hasta <strong className="text-white">15:00hs</strong> se entregan en el día (antes de las 20:00hs).
          </p>
        </div>
      </div>

      {/* Levels Column - Compact for A4 */}
      <div className="space-y-4 flex-grow">
        {/* Nivel 1 */}
        <div className="bg-card/50 rounded-xl p-5 border border-white/5 shadow-xl">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-3">
              <Package className="text-primary w-5 h-5" />
              <h3 className="font-headline text-sm font-black text-primary uppercase tracking-wider">N1: VOLUMEN INICIAL</h3>
            </div>
            <div className="bg-background/60 px-3 py-1 rounded text-[10px] text-muted-foreground font-mono border border-white/5 italic">1-4 env / día</div>
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-2 font-mono text-[12px] text-white">
            <div className="flex justify-between border-b border-white/5 pb-1"><span>Z1:</span><span className="font-bold text-primary">$3.000</span></div>
            <div className="flex justify-between border-b border-white/5 pb-1"><span>Z2:</span><span className="font-bold text-primary">$4.000</span></div>
            <div className="flex justify-between border-b border-white/5 pb-1"><span>Z3:</span><span className="font-bold text-primary">$5.300</span></div>
            <div className="flex justify-between border-b border-white/5 pb-1"><span>Z4:</span><span className="font-bold text-primary">$7.000</span></div>
          </div>
          <p className="font-mono text-[9px] text-primary/60 text-center uppercase tracking-widest mt-4">2DA VISITA: 50% DEL VALOR ORIGINAL</p>
        </div>

        {/* Nivel 2 */}
        <div className="bg-card/50 rounded-xl p-5 border-l-4 border-l-[#4ade80] border border-white/5 shadow-xl">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-3">
              <Star className="text-[#4ade80] w-5 h-5" />
              <h3 className="font-headline text-sm font-black text-[#4ade80] uppercase tracking-wider">N2: VENDEDOR FRECUENTE</h3>
            </div>
            <div className="bg-background/60 px-3 py-1 rounded text-[10px] text-muted-foreground font-mono border border-white/5 italic">+5 env / día</div>
          </div>
          <div className="grid grid-cols-3 gap-6 font-mono text-[12px] text-white mb-4">
            <div className="flex justify-between border-b border-white/5 pb-1"><span>Z1:</span><span className="font-bold">$3.000</span></div>
            <div className="flex justify-between border-b border-white/5 pb-1"><span>Z2:</span><span className="font-bold">$4.000</span></div>
            <div className="flex justify-between border-b border-white/5 pb-1"><span>Z3:</span><span className="font-bold">$5.300</span></div>
          </div>
          <div className="bg-[#4ade80]/10 rounded-lg p-2.5 border border-[#4ade80]/20 text-center">
            <span className="text-[#4ade80] text-[11px] font-black uppercase italic tracking-widest">Zonas 4 y 5: Tarifa Fija $6.500</span>
          </div>
        </div>

        {/* Nivel 3 */}
        <div className="bg-primary rounded-xl p-6 border border-white/10 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-2 opacity-20"><Scale className="w-12 h-12" /></div>
          <div className="flex justify-between items-center text-background mb-4 relative z-10">
             <h3 className="font-headline text-base font-black uppercase tracking-widest">N3: GRANDES CUENTAS</h3>
             <div className="bg-background/20 px-3 py-1 rounded text-[10px] font-mono font-bold">+10 env / día</div>
          </div>
          <div className="flex justify-between items-center relative z-10">
            <div className="text-background font-headline text-[13px] uppercase font-black leading-none">TARIFA PLANA <br/>TODO MDQ</div>
            <div className="font-headline text-5xl font-black text-background tracking-tighter">$4.500</div>
          </div>
          <div className="bg-background rounded p-3 mt-4 relative z-10">
            <p className="font-headline text-[10px] text-white text-center font-black uppercase tracking-widest italic">2DA VISITA / REPROGRAMACIÓN: ¡SIN CARGO!</p>
          </div>
        </div>
      </div>

      {/* Warning Banner */}
      <div className="bg-card/30 border border-white/10 rounded-xl p-4 mt-8 flex items-center gap-4">
        <CloudRain className="text-primary w-6 h-6 shrink-0" />
        <p className="font-body text-[11px] text-muted-foreground font-medium">
          <strong className="text-primary font-black uppercase mr-2 tracking-widest">CLIMA / LLUVIA:</strong> 
          Recargo operativo reducido al <strong className="text-white font-black italic">30%</strong> exclusivo para envíos Flex.
        </p>
      </div>
    </A4Page>
  );
};
