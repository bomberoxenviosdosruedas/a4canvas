import React from 'react';
import { A4Page } from '@/components/A4Page';
import Image from 'next/image';
import { RefreshCw, Info, CloudRain, Package, Timer, Truck } from 'lucide-react';

const LOGO_URL = "https://xnarosypsowmisjcevsi.supabase.co/storage/v1/object/public/enviosadmindosruedas/logo.png";

export const LowcostServicePage = ({ pageNumber, totalPageCount }: { pageNumber: number, totalPageCount: number }) => {
  return (
    <A4Page pageNumber={pageNumber} totalPageCount={totalPageCount} className="p-0">
      <div className="relative h-full flex flex-col">
        {/* TopAppBar */}
        <header className="border-b border-white/10 px-12 py-6 flex justify-between items-center bg-[#011525]/80 backdrop-blur-sm relative z-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 relative">
              <Image src={LOGO_URL} alt="Logo EDR" fill className="object-contain" />
            </div>
            <span className="font-headline text-xl font-black text-white italic tracking-tighter uppercase">ENVÍOS DOSRUEDAS</span>
          </div>
          <div className="px-4 py-1.5 border border-[#ffc107] text-[#ffc107] font-mono text-[10px] font-bold uppercase tracking-widest rounded shadow-[0_0_10px_rgba(255,193,7,0.2)]">
            LOGÍSTICA URBANA
          </div>
        </header>

        {/* Main Content Canvas */}
        <main className="relative z-10 flex-1 px-12 py-10 flex flex-col gap-8">
          {/* Page Title Section */}
          <section className="flex items-center gap-4">
            <RefreshCw className="text-[#ffc107] w-10 h-10 animate-spin-slow" />
            <h1 className="font-headline text-5xl font-black italic text-[#ffc107] uppercase tracking-tighter">
              ENVÍOS <span className="text-white">LOWCOST</span>
            </h1>
          </section>

          {/* Main Info Card */}
          <section className="bg-transparent border border-[#ffc107] rounded-xl p-8 relative overflow-hidden group hover:bg-white/5 transition-all duration-500">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#ffc107]/5 rounded-full blur-3xl pointer-events-none" />
            <h2 className="font-headline text-2xl font-bold text-white mb-4">Eficiencia en Ruteo Diario</h2>
            <p className="font-body text-lg text-[#d4c5ab] mb-6 leading-relaxed font-medium">
              La modalidad LowCost prioriza la eficiencia de nuestras rutas. Son entregas en el transcurso del día, <strong className="text-white">sin elección de rango horario</strong>. Todos los pedidos solicitados antes de las 13:00hs, serán entregados de forma garantizada antes de las 19:00hs.
            </p>
            <div className="bg-[#ffc107]/10 rounded-lg p-4 flex gap-4 items-start border border-[#ffc107]/30">
              <Info className="text-[#ffc107] w-5 h-5 mt-1 shrink-0" />
              <p className="font-body text-sm text-white">
                <strong className="text-[#ffc107]">Importante:</strong> Al igual que en envíos Express, se requiere un mínimo de 2 horas de anticipación en la solicitud para organizar el retiro y la ruta del cadete.
              </p>
            </div>
          </section>

          {/* Pricing Table Section */}
          <section className="flex flex-col gap-4">
            <h3 className="font-headline text-xl font-bold text-white text-center uppercase tracking-wider">TARIFARIO ZONIFICADO LOWCOST</h3>
            <div className="rounded-xl overflow-hidden border border-white/5 bg-white/5 backdrop-blur-sm">
              <div className="grid grid-cols-2 bg-white/5 p-4 border-b border-white/10">
                <div className="font-mono text-[10px] font-bold text-[#ffc107] uppercase tracking-widest">ZONIFICACIÓN DE ENTREGA</div>
                <div className="font-mono text-[10px] font-bold text-[#ffc107] uppercase tracking-widest text-right">VALOR FINAL</div>
              </div>
              <div className="flex flex-col">
                {[
                  { zone: "Zona 1 (Hasta 3 km)", price: "$3.000" },
                  { zone: "Zona 2 (3 a 5 km)", price: "$4.000" },
                  { zone: "Zona 3 (5 a 7 km)", price: "$5.300" },
                  { zone: "Zona 4 (7 a 10 km)", price: "$7.000" },
                  { zone: "Zona 5 (Más de 10 km)", price: "$700 x km" },
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-2 p-4 border-b border-white/5 items-center hover:bg-white/10 transition-colors group">
                    <div className="font-body text-base text-white font-semibold group-hover:text-[#ffc107] transition-colors">{row.zone}</div>
                    <div className="font-mono text-xl font-black text-[#ffc107] text-right group-hover:scale-105 transition-transform">{row.price}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Additional Conditions Section */}
          <section className="flex flex-col gap-4">
            <h3 className="font-mono text-[10px] text-[#ffc107] font-bold uppercase tracking-wider">CONDICIONES ADICIONALES ESTÁNDAR</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "LLUVIA", icon: <CloudRain className="w-8 h-8" />, detail: "Recargo +50%", sub: "Recargo +50% s/ valor base" },
                { title: "BULTO", icon: <Package className="w-8 h-8" />, detail: "Adicional +$1.800", sub: "Adicional p/ bulto extra" },
                { title: "DEMORA", icon: <Timer className="w-8 h-8" />, detail: "+ $2.200 c/10min", sub: "Tolerancia 10 minutos" },
                { title: "2DA VISITA", icon: <Truck className="w-8 h-8" />, detail: "50% del valor", sub: "Retorno o re-intento" },
              ].map((item, i) => (
                <div key={i} className="bg-[#0c2131] border border-white/10 rounded-xl p-5 flex items-center gap-6 group hover:bg-[#182c3c] transition-all duration-300">
                  <div className="text-white group-hover:scale-110 group-hover:text-[#ffc107] transition-all duration-300">{item.icon}</div>
                  <div className="flex flex-col">
                    <h4 className="font-headline text-[13px] font-bold text-white uppercase tracking-wider">{item.title}</h4>
                    <div className="font-mono text-base font-black text-[#ffc107] leading-none my-1">{item.detail}</div>
                    <div className="text-[10px] text-[#d4c5ab] font-medium opacity-60 italic">{item.sub}</div>
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
