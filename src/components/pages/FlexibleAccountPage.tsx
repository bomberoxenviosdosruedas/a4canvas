import React from 'react';
import { A4Page } from '@/components/A4Page';
import Image from 'next/image';
import { CheckCircle2, Calendar, Star } from 'lucide-react';

const LOGO_URL = "https://xnarosypsowmisjcevsi.supabase.co/storage/v1/object/public/enviosadmindosruedas/logo.png";

export const FlexibleAccountPage = ({ pageNumber, totalPageCount }: { pageNumber: number, totalPageCount: number }) => {
  return (
    <A4Page pageNumber={pageNumber} totalPageCount={totalPageCount} className="p-0 text-white font-['Montserrat']">
      <div className="relative h-full flex flex-col p-8 sm:p-12 bg-[#0b1528] bg-pattern">
        
        {/* BEGIN: Header Section */}
        <header className="flex justify-between items-start mb-10 relative z-10">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-1 relative overflow-hidden">
              <Image src={LOGO_URL} alt="Logo EDR" fill className="object-contain p-2" />
            </div>
            <h1 className="font-headline font-black text-xl tracking-wider text-white italic">ENVIOS <span className="text-[#dfb967]">DOSRUEDAS</span></h1>
          </div>
          <div className="border border-[#dfb967] text-[#dfb967] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase shadow-[0_0_10px_rgba(223,185,103,0.3)]">
            Pymes y Emprendedores
          </div>
        </header>

        {/* BEGIN: Main Title */}
        <section className="mb-8 relative z-10">
          <h2 className="font-headline font-black text-4xl sm:text-5xl text-white mb-2 uppercase tracking-tight">Cuenta Corriente <span className="text-[#dfb967]">Flexible</span></h2>
          <h3 className="font-headline font-bold text-lg text-gray-300 uppercase tracking-widest">Simplicidad para negocios sin volumen fijo</h3>
        </section>

        {/* BEGIN: Description Panel */}
        <section className="bg-panel rounded-xl p-6 sm:p-8 mb-10 border-l-4 border-[#dfb967] shadow-lg relative z-10">
          <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
            Diseñado especialmente para emprendedores y empresas que buscan simplificar y profesionalizar sus envíos, pero que no cuentan con un volumen fijo o este es muy variable. <strong className="text-white">Al trabajar de forma exclusiva con nosotros, accede a los mejores beneficios logísticos.</strong>
          </p>
        </section>

        {/* BEGIN: Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 relative z-10 flex-grow">
          {/* Left Column: Beneficios */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Star className="w-8 h-8 text-[#dfb967]" />
              <h4 className="font-headline font-bold text-lg text-[#dfb967] uppercase tracking-wider">Beneficios Exclusivos</h4>
            </div>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-sm sm:text-base">
                <CheckCircle2 className="w-6 h-6 text-[#dfb967] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block mb-1">Valor LowCost, Servicio Express:</strong>
                  <p className="text-gray-300 leading-snug">
                    Aboná la tarifa económica (LowCost), pero gozá de las condiciones de envío Express: <span className="text-[#dfb967] font-medium">elección de rango horario</span>, límite de recepción hasta <span className="text-[#dfb967] font-medium">15:00hs</span>, y un mínimo de <span className="text-[#dfb967] font-medium">2hs de anticipación</span>.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4 text-sm sm:text-base">
                <CheckCircle2 className="w-6 h-6 text-[#dfb967] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block mb-1">Flexibilidad Total en Pagos:</strong>
                  <p className="text-gray-300 leading-snug">
                    El envío puede ser abonado por usted (quien lo solicita) o por el cliente que recibe en destino.
                  </p>
                </div>
              </li>
            </ul>
          </section>

          {/* Right Column: Frecuencias */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="w-8 h-8 text-[#dfb967]" />
              <h4 className="font-headline font-bold text-lg text-[#dfb967] uppercase tracking-wider">Frecuencia de Cierre</h4>
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
                  className={`bg-panel border rounded-xl p-4 flex flex-col items-center justify-center text-center h-28 transition-all ${
                    opt.active ? 'border-2 border-[#dfb967] shadow-[0_0_10px_rgba(223,185,103,0.3)]' : 'border-gray-700 hover:border-gray-500'
                  }`}
                >
                  <span className={`font-bold text-sm ${opt.active ? 'text-[#dfb967]' : 'text-white'}`}>{opt.label}</span>
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">{opt.sub}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* BEGIN: Condiciones Operativas Panel */}
        <section className="bg-panel border border-gray-800 rounded-xl p-6 sm:p-8 relative z-10 mb-8 mt-auto">
          <h4 className="font-headline font-bold text-base sm:text-lg text-[#dfb967] uppercase tracking-wider mb-6 text-center">Condiciones Operativas Adicionales</h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {[
              { l: "Lluvia:", v: "+50%" },
              { l: "Bulto:", v: "+$1.800" },
              { l: "Demora:", v: "+$2.200" },
              { l: "Vuelta:", v: "50%" }
            ].map((c, i) => (
              <div key={i} className="bg-[#0b1528] rounded-lg p-3 text-center border border-gray-800">
                <span className="block font-bold text-[#dfb967] text-xs mb-1 uppercase tracking-wide">{c.l}</span>
                <span className="text-white font-semibold">{c.v}</span>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-[#134e3a] to-[#0c2b20] border border-green-700/50 rounded-xl p-6 text-center shadow-lg">
            <h5 className="font-headline font-bold text-lg sm:text-xl text-green-300 uppercase tracking-widest flex items-center justify-center gap-2 mb-2">
              <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              2DA Visita Bonificada
            </h5>
            <p className="text-sm sm:text-base text-gray-200">
              Si el cliente final está ausente, la 2da visita se cobra solo <strong className="text-[#dfb967] font-semibold">al 50%</strong> del valor original.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-auto pt-6 flex justify-between items-center text-gray-500 text-sm font-medium relative z-10 border-t border-gray-800/50">
          <p>Envíos por Cuenta Corriente Exclusiva</p>
          <p className="font-headline font-bold text-gray-400">{pageNumber} / {totalPageCount}</p>
        </footer>
      </div>
    </A4Page>
  );
};
