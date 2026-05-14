import React from 'react';
import { A4Page } from '@/components/A4Page';
import { ShieldCheck, Calendar, Clock, Package, Timer, RotateCcw, CheckCircle2, Star } from 'lucide-react';

export const FlexibleAccountPage = ({ pageNumber, totalPageCount }: { pageNumber: number, totalPageCount: number }) => {
  return (
    <A4Page pageNumber={pageNumber} totalPageCount={totalPageCount} className="p-0">
      <div className="relative h-full flex flex-col p-[12mm] px-[15mm]">
        
        {/* BEGIN: Header Section */}
        <header className="flex justify-between items-center mb-10 pb-4 border-b border-primary/20">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-1 shadow-[0_0_15px_rgba(255,255,255,0.2)]">
               <ShieldCheck className="text-[#011525] w-8 h-8" />
            </div>
            <h1 className="font-headline text-xl font-black italic tracking-wide text-white uppercase">
              ENVÍOS <span className="text-primary">DOSRUEDAS</span>
            </h1>
          </div>
          <div className="border border-primary px-4 py-1.5 rounded-full text-primary text-[10px] font-black tracking-wider uppercase shadow-[0_0_15px_rgba(255,193,7,0.2)]">
            Pymes y Emprendedores
          </div>
        </header>

        {/* BEGIN: Main Title */}
        <section className="mb-8">
          <h2 className="font-headline text-5xl font-black italic tracking-tight leading-none text-white uppercase mb-2">
            CUENTA CORRIENTE <span className="text-primary">FLEXIBLE</span>
          </h2>
          <h3 className="font-headline text-lg font-bold text-[#d4c5ab] uppercase tracking-[0.2em]">
            Simplicidad para negocios sin volumen fijo
          </h3>
        </section>

        {/* BEGIN: Description Panel */}
        <section className="bg-card/60 backdrop-blur-md rounded-xl p-8 mb-10 border-l-4 border-primary shadow-2xl">
          <p className="font-body text-base leading-relaxed text-[#d4c5ab] font-medium">
            Diseñado especialmente para emprendedores y empresas que buscan simplificar y profesionalizar sus envíos, pero que no cuentan con un volumen fijo o este es muy variable. <strong className="text-white">Al trabajar de forma exclusiva con nosotros, accede a los mejores beneficios logísticos del mercado.</strong>
          </p>
        </section>

        {/* BEGIN: Two Column Layout */}
        <div className="grid grid-cols-2 gap-10 mb-10 flex-grow">
          
          {/* Left Column: Beneficios */}
          <section className="space-y-8">
            <div className="flex items-center gap-3">
              <Star className="text-primary w-8 h-8 fill-primary/10" />
              <h4 className="font-headline font-black text-lg text-primary uppercase tracking-wider">Beneficios Exclusivos</h4>
            </div>
            
            <ul className="space-y-8">
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <strong className="text-white block mb-1 font-headline uppercase text-sm tracking-wide">Valor LowCost, Servicio Express:</strong>
                  <p className="text-[#d4c5ab] text-sm leading-relaxed font-medium">
                    Aboná la tarifa económica (LowCost), pero gozá de las condiciones de envío Express: <span className="text-primary font-bold italic">elección de rango horario</span>, límite de recepción hasta <span className="text-primary font-bold italic">15:00hs</span>, y un mínimo de <span className="text-primary font-bold italic">2hs de anticipación</span>.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <strong className="text-white block mb-1 font-headline uppercase text-sm tracking-wide">Flexibilidad Total en Pagos:</strong>
                  <p className="text-[#d4c5ab] text-sm leading-relaxed font-medium">
                    El envío puede ser abonado por usted (quien lo solicita) o por el cliente que recibe en destino, facilitando su flujo de caja.
                  </p>
                </div>
              </li>
            </ul>
          </section>

          {/* Right Column: Frecuencias */}
          <section className="space-y-8">
            <div className="flex items-center gap-3">
              <Calendar className="text-primary w-8 h-8" />
              <h4 className="font-headline font-black text-lg text-primary uppercase tracking-wider">Frecuencia de Cierre</h4>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "DIARIO", sub: "(x Envío)", active: false },
                { label: "SEMANAL", sub: "Corte Viernes", active: false },
                { label: "QUINCENAL", sub: "Días 15 y 30", active: false },
                { label: "MENSUAL", sub: "Corte Fin Mes", active: true }
              ].map((opt, i) => (
                <div 
                  key={i} 
                  className={`border p-6 rounded-xl flex flex-col items-center justify-center text-center transition-all duration-300 ${
                    opt.active 
                    ? 'bg-primary/10 border-primary shadow-[0_0_20px_rgba(255,193,7,0.2)]' 
                    : 'bg-card/40 border-white/5 hover:border-white/20'
                  }`}
                >
                  <span className={`font-headline font-black text-sm mb-1 ${opt.active ? 'text-primary' : 'text-white'}`}>{opt.label}</span>
                  <span className="text-[10px] text-[#d4c5ab] font-mono font-bold uppercase tracking-widest">{opt.sub}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* BEGIN: Condiciones Operativas Panel */}
        <section className="bg-card/40 border border-white/5 rounded-xl p-8 mb-6 mt-auto">
          <h4 className="font-headline font-bold text-sm text-primary uppercase tracking-[0.3em] mb-8 text-center">Condiciones Operativas Adicionales</h4>
          <div className="grid grid-cols-4 gap-6 mb-8">
            <div className="bg-[#011525] rounded-lg p-4 text-center border border-white/5">
              <span className="block font-bold text-primary text-[10px] mb-1 uppercase tracking-widest">Lluvia:</span>
              <span className="text-white font-headline font-black text-lg">+50%</span>
            </div>
            <div className="bg-[#011525] rounded-lg p-4 text-center border border-white/5">
              <span className="block font-bold text-primary text-[10px] mb-1 uppercase tracking-widest">Bulto:</span>
              <span className="text-white font-headline font-black text-lg">+$1.800</span>
            </div>
            <div className="bg-[#011525] rounded-lg p-4 text-center border border-white/5">
              <span className="block font-bold text-primary text-[10px] mb-1 uppercase tracking-widest">Demora:</span>
              <span className="text-white font-headline font-black text-lg">+$2.200</span>
            </div>
            <div className="bg-[#011525] rounded-lg p-4 text-center border border-white/5">
              <span className="block font-bold text-primary text-[10px] mb-1 uppercase tracking-widest">Vuelta:</span>
              <span className="text-white font-headline font-black text-lg">50%</span>
            </div>
          </div>

          {/* Bonificación Banner */}
          <div className="bg-gradient-to-r from-[#134e3a] to-[#0c2b20] border border-green-700/50 rounded-xl p-6 text-center shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <h5 className="font-headline font-black text-xl text-green-300 uppercase tracking-widest flex items-center justify-center gap-3 mb-2">
              <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              2DA VISITA BONIFICADA
            </h5>
            <p className="text-sm text-gray-200 font-medium italic">
              Si el cliente final está ausente, la 2da visita se cobra solo <strong className="text-primary font-black not-italic">al 50%</strong> del valor original.
            </p>
          </div>
        </section>

        {/* BEGIN: Footer */}
        <footer className="mt-auto pt-4 border-t border-white/5 flex justify-between items-center text-[#d4c5ab] font-mono text-[10px] font-bold uppercase tracking-widest">
          <p>Envíos por Cuenta Corriente Exclusiva</p>
          <p>{pageNumber} / {totalPageCount}</p>
        </footer>
      </div>
    </A4Page>
  );
};
