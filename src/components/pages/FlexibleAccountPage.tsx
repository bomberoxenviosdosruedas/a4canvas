import React from 'react';
import { A4Page } from '@/components/A4Page';
import Image from 'next/image';
import { CheckCircle2, Calendar, Star, Info } from 'lucide-react';

const LOGO_URL = "https://xnarosypsowmisjcevsi.supabase.co/storage/v1/object/public/enviosadmindosruedas/logo.png";

export const FlexibleAccountPage = ({ pageNumber, totalPageCount }: { pageNumber: number, totalPageCount: number }) => {
  return (
    <A4Page pageNumber={pageNumber} totalPageCount={totalPageCount}>
      {/* Header */}
      <header className="flex justify-between items-center w-full pb-8 border-b border-white/5 mb-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full border border-white/10 p-1 bg-background relative flex items-center justify-center">
            <Image src={LOGO_URL} alt="Logo" fill className="object-contain p-1.5" />
          </div>
          <h1 className="text-xl font-bold italic tracking-tighter uppercase text-white">ENVIOS <span className="text-primary">DOSRUEDAS</span></h1>
        </div>
        <div className="border border-primary text-primary px-5 py-2 rounded-full text-[10px] font-black tracking-[0.2em] uppercase shadow-[0_0_15px_rgba(255,193,7,0.2)]">
          Pymes y Emprendedores
        </div>
      </header>

      {/* Main Title */}
      <section className="mb-10">
        <h2 className="font-headline font-black text-5xl text-white mb-3 uppercase tracking-tighter leading-none">
          Cuenta Corriente <span className="text-primary italic">Flexible</span>
        </h2>
        <h3 className="font-headline font-bold text-lg text-muted-foreground uppercase tracking-[0.3em]">Simplicidad para negocios sin volumen fijo</h3>
      </section>

      {/* Description Panel */}
      <section className="bg-card/40 rounded-xl p-8 mb-10 border-l-4 border-primary shadow-2xl relative">
        <p className="text-gray-300 leading-relaxed text-[15px] font-medium italic">
          Diseñado especialmente para emprendedores y empresas que buscan profesionalizar sus envíos sin volumen fijo. <strong className="text-white not-italic">Al trabajar de forma exclusiva con nosotros, accede a los mejores beneficios logísticos del mercado.</strong>
        </p>
      </section>

      {/* Two Column Layout */}
      <div className="grid grid-cols-2 gap-10 mb-10 flex-grow">
        {/* Left Column: Beneficios */}
        <section className="space-y-8">
          <div className="flex items-center gap-4 mb-2">
            <div className="p-2 bg-primary/10 rounded-lg"><Star className="w-8 h-8 text-primary" /></div>
            <h4 className="font-headline font-black text-base text-primary uppercase tracking-widest leading-tight">Beneficios <br/>Exclusivos</h4>
          </div>
          <ul className="space-y-8">
            <li className="flex items-start gap-5">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <strong className="text-white block mb-2 text-sm uppercase tracking-wide">Valor LowCost, Servicio Express:</strong>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  Aboná la tarifa económica (LowCost), pero gozá de condiciones Express: <span className="text-primary font-bold italic">elección de rango horario</span>, recepción hasta <span className="text-primary font-bold italic">15:00hs</span>, y respuesta ágil.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-5">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <strong className="text-white block mb-2 text-sm uppercase tracking-wide">Flexibilidad Total en Pagos:</strong>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  El costo operativo puede ser liquidado por su empresa o directamente por el cliente que recibe en domicilio, según su conveniencia comercial.
                </p>
              </div>
            </li>
          </ul>
        </section>

        {/* Right Column: Frecuencias */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <div className="p-2 bg-primary/10 rounded-lg"><Calendar className="w-8 h-8 text-primary" /></div>
            <h4 className="font-headline font-black text-base text-primary uppercase tracking-widest leading-tight">Frecuencia <br/>de Cierre</h4>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Diario", sub: "(x Envío)", active: false },
              { label: "Semanal", sub: "Corte Viernes", active: false },
              { label: "Quincenal", sub: "Días 15 y 30", active: false },
              { label: "Mensual", sub: "Corte Fin Mes", active: true }
            ].map((opt, i) => (
              <div 
                key={i} 
                className={`bg-card/40 border rounded-2xl p-5 flex flex-col items-center justify-center text-center h-32 transition-all relative ${
                  opt.active ? 'border-2 border-primary shadow-[0_0_20px_rgba(255,193,7,0.2)] bg-primary/5' : 'border-white/10 grayscale opacity-40'
                }`}
              >
                {opt.active && <div className="absolute top-2 right-2"><Info className="w-3 h-3 text-primary" /></div>}
                <span className={`font-black text-sm uppercase tracking-widest ${opt.active ? 'text-primary' : 'text-white'}`}>{opt.label}</span>
                <span className="text-[8px] text-muted-foreground font-black uppercase tracking-[0.2em] mt-2 italic">{opt.sub}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Conditions Panel */}
      <section className="bg-card/60 border border-white/5 rounded-2xl p-8 mt-auto">
        <h4 className="font-headline font-black text-xs text-primary uppercase tracking-[0.4em] mb-8 text-center">Condiciones Operativas Adicionales</h4>
        <div className="grid grid-cols-4 gap-4 mb-10">
          {[
            { l: "Lluvia:", v: "+50%" },
            { l: "Bulto:", v: "+$1.800" },
            { l: "Demora:", v: "+$2.200" },
            { l: "Vuelta:", v: "50%" }
          ].map((c, i) => (
            <div key={i} className="bg-background rounded-xl p-4 text-center border border-white/5 shadow-inner">
              <span className="block font-black text-primary text-[10px] mb-1 uppercase tracking-widest">{c.l}</span>
              <span className="text-white font-black text-lg tracking-tighter">{c.v}</span>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#134e3a] to-[#0c2b20] border border-[#1e4c3d] rounded-2xl p-6 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-white/5 pointer-events-none" />
          <h5 className="font-headline font-black text-xl text-[#4ade80] uppercase tracking-[0.2em] flex items-center justify-center gap-3 mb-2">
            <Star className="w-6 h-6 text-primary fill-primary" />
            2DA Visita Bonificada
          </h5>
          <p className="text-sm text-gray-200 font-medium italic">
            Si el cliente está ausente, la 2da visita se liquida solo <strong className="text-primary font-black not-italic">al 50%</strong> del valor base.
          </p>
        </div>
      </section>
    </A4Page>
  );
};
