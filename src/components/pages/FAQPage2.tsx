import React from 'react';
import { A4Page } from '@/components/A4Page';
import Image from 'next/image';
import { MapPin, Box, Home, CloudRain, ShieldAlert } from 'lucide-react';

const LOGO_URL = "https://xnarosypsowmisjcevsi.supabase.co/storage/v1/object/public/enviosadmindosruedas/logo.png";

export const FAQPage2 = ({ pageNumber, totalPageCount }: { pageNumber: number, totalPageCount: number }) => {
  return (
    <A4Page pageNumber={pageNumber} totalPageCount={totalPageCount} className="p-0 text-white font-['Montserrat']">
      <div className="relative h-full flex flex-col p-10 bg-[#0a192f] bg-gradient-to-tr from-[#0a192f] to-[#132c4f]">
        <header className="flex justify-between items-center mb-8 relative z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center bg-[#0a192f] relative overflow-hidden">
              <Image src={LOGO_URL} alt="Logo EDR" fill className="object-contain p-2" />
            </div>
            <h1 className="text-lg font-extrabold italic tracking-wider flex gap-1.5 uppercase">
              <span className="text-white">ENVIOS</span>
              <span className="text-[#fcd34d]">DOSRUEDAS</span>
            </h1>
          </div>
          <div className="bg-[#fcd34d] text-[#0a192f] rounded-md px-4 py-1 text-[10px] font-bold uppercase tracking-wide">
            SOPORTE Y CONDICIONES
          </div>
        </header>

        <main className="flex-grow flex flex-col relative z-10 overflow-hidden">
          <h2 className="text-3xl font-extrabold tracking-tight mb-6 uppercase italic">
            PREGUNTAS FRECUENTES <span className="text-gray-400 text-xl font-medium not-italic ml-2">(2/2)</span>
          </h2>

          <div className="flex flex-col gap-4">
            <article className="bg-[#1e3a5f]/80 backdrop-blur-sm border border-[#2a4d7a] rounded-xl p-5 flex gap-5 items-start shadow-lg">
              <MapPin className="text-[#b0c4de] w-10 h-10 flex-shrink-0" />
              <div>
                <h3 className="text-[#fcd34d] font-bold text-[13px] mb-1 uppercase leading-snug">DIRECCIÓN INCORRECTA</h3>
                <p className="text-[#e2e8f0] text-[12px] leading-relaxed">Si el cadete ya llegó al domicilio y la dirección era errónea, el viaje se abona igual. El tramo extra se cobra proporcional.</p>
              </div>
            </article>

            <article className="bg-[#1e3a5f]/80 backdrop-blur-sm border border-[#2a4d7a] rounded-xl p-5 flex gap-5 items-start shadow-lg">
              <Box className="text-[#b0c4de] w-10 h-10 flex-shrink-0" />
              <div>
                <h3 className="text-[#fcd34d] font-bold text-[13px] mb-1 uppercase leading-snug">RECHAZO EN PUERTA</h3>
                <p className="text-[#e2e8f0] text-[12px] leading-relaxed">Si el comprador rechaza el producto, el costo de ida se abona pero la devolución al local es <strong className="text-white">SIN CARGO</strong>.</p>
              </div>
            </article>

            <article className="bg-[#1e3a5f]/80 backdrop-blur-sm border border-[#2a4d7a] rounded-xl p-5 flex gap-5 items-start shadow-lg">
              <Home className="text-[#b0c4de] w-10 h-10 flex-shrink-0" />
              <div>
                <h3 className="text-[#fcd34d] font-bold text-[13px] mb-1 uppercase leading-snug">2DA VISITA POR AUSENTE</h3>
                <div className="text-[#e2e8f0] text-[12px] leading-relaxed">
                  <p>Express/LowCost: Viaje nuevo. Cta Corriente: 50%. Flex ML: Según Nivel. E-Commerce: <strong className="text-white italic">100% Bonificada.</strong></p>
                </div>
              </div>
            </article>

            <article className="bg-[#1e3a5f]/80 backdrop-blur-sm border border-[#2a4d7a] rounded-xl p-5 flex gap-5 items-start shadow-lg">
              <CloudRain className="text-[#b0c4de] w-10 h-10 flex-shrink-0" />
              <div>
                <h3 className="text-[#fcd34d] font-bold text-[13px] mb-1 uppercase leading-snug">LLUVIA Y DEMORAS</h3>
                <p className="text-[#e2e8f0] text-[12px] leading-relaxed">Recargo clima: 50% (30% Flex). Tolerancia espera: 10 min, luego <strong className="text-white">$2.200 c/10 min.</strong></p>
              </div>
            </article>

            <article className="bg-[#451a24] border border-[#7f1d1d] rounded-xl p-5 flex gap-5 items-start shadow-lg relative overflow-hidden">
              <ShieldAlert className="text-[#ff8a8a] w-10 h-10 flex-shrink-0 relative z-10" />
              <div className="relative z-10">
                <h3 className="text-[#ffcc80] font-bold text-[13px] mb-1 uppercase leading-snug">SINIESTROS EN CALLE</h3>
                <p className="text-[#e2e8f0] text-[12px] leading-relaxed">Ante eventualidades o extravíos, analizamos cada caso de forma <strong className="text-white">personalizada</strong> con el comercio para definir pasos a seguir.</p>
              </div>
            </article>
          </div>
        </main>
      </div>
    </A4Page>
  );
};