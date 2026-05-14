import React from 'react';
import { A4Page } from '@/components/A4Page';
import Image from 'next/image';
import { MapPin, Box, Home, CloudRain, ShieldAlert } from 'lucide-react';

const LOGO_URL = "https://xnarosypsowmisjcevsi.supabase.co/storage/v1/object/public/enviosadmindosruedas/logo.png";

export const FAQPage2 = ({ pageNumber, totalPageCount }: { pageNumber: number, totalPageCount: number }) => {
  return (
    <A4Page pageNumber={pageNumber} totalPageCount={totalPageCount} className="p-0 text-white font-['Montserrat']">
      <div className="relative h-full flex flex-col p-8 sm:p-12 bg-[#0a192f] bg-gradient-to-tr from-[#0a192f] to-[#132c4f]">
        {/* Header Section */}
        <header className="flex justify-between items-center mb-10 w-full relative z-10">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center bg-[#0a192f] relative overflow-hidden">
              <Image src={LOGO_URL} alt="Logo EDR" fill className="object-contain p-2" />
            </div>
            <h1 className="text-xl font-extrabold italic tracking-wider flex gap-1.5 uppercase">
              <span className="text-white">ENVIOS</span>
              <span className="text-[#fcd34d]">DOSRUEDAS</span>
            </h1>
          </div>
          <div className="bg-[#fcd34d] text-[#0a192f] rounded-md px-5 py-1.5 text-xs font-bold uppercase tracking-wide">
            SOPORTE Y CONDICIONES
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow flex flex-col relative z-10">
          <h2 className="text-4xl font-extrabold tracking-tight mb-8 uppercase italic">
            PREGUNTAS FRECUENTES <span className="text-gray-400 text-2xl font-medium not-italic ml-2">(2/2)</span>
          </h2>

          <div className="flex flex-col gap-4">
            {/* FAQ 1 */}
            <article className="bg-[#1e3a5f]/80 backdrop-blur-sm border border-[#2a4d7a] rounded-xl p-6 flex gap-6 items-start shadow-lg">
              <MapPin className="text-[#b0c4de] w-12 h-12 flex-shrink-0" />
              <div>
                <h3 className="text-[#fcd34d] font-bold text-sm md:text-base mb-2 uppercase leading-snug">
                  ¿QUÉ PASA SI EL COMPRADOR BRINDÓ UNA DIRECCIÓN INCORRECTA?
                </h3>
                <p className="text-[#e2e8f0] text-sm md:text-base leading-relaxed font-medium">
                  Si el cadete ya llegó al domicilio y la dirección era errónea o incompleta, <strong className="text-white">el viaje se abona igual</strong>. Si en ese momento se aporta la dirección correcta, se cobra un adicional proporcional por el tramo extra hasta el nuevo destino.
                </p>
              </div>
            </article>

            {/* FAQ 2 */}
            <article className="bg-[#1e3a5f]/80 backdrop-blur-sm border border-[#2a4d7a] rounded-xl p-6 flex gap-6 items-start shadow-lg">
              <Box className="text-[#b0c4de] w-12 h-12 flex-shrink-0" />
              <div>
                <h3 className="text-[#fcd34d] font-bold text-sm md:text-base mb-2 uppercase leading-snug">
                  ¿QUÉ SUCEDE SI EL CLIENTE FINAL RECHAZA LA COMPRA EN LA PUERTA?
                </h3>
                <p className="text-[#e2e8f0] text-sm md:text-base leading-relaxed font-medium">
                  En caso de que el comprador se arrepienta al recibirlo o rechace el producto en la puerta, el costo del envío de ida se abona normalmente, pero el viaje de retorno (devolución del paquete a su local) se realiza totalmente <strong className="text-white font-bold uppercase">SIN CARGO</strong>.
                </p>
              </div>
            </article>

            {/* FAQ 3 */}
            <article className="bg-[#1e3a5f]/80 backdrop-blur-sm border border-[#2a4d7a] rounded-xl p-6 flex gap-6 items-start shadow-lg">
              <Home className="text-[#b0c4de] w-12 h-12 flex-shrink-0" />
              <div>
                <h3 className="text-[#fcd34d] font-bold text-sm md:text-base mb-2 uppercase leading-snug">
                  ¿CÓMO SE GESTIONA EL FRACASO DE UNA ENTREGA POR "AUSENTE"?
                </h3>
                <div className="text-[#e2e8f0] text-sm md:text-base leading-relaxed font-medium">
                  <p className="mb-2">El protocolo de 2da Visita depende de su contrato:</p>
                  <ul className="space-y-1">
                    <li><strong className="text-white">• Express/LowCost:</strong> Se cobra como un viaje nuevo.</li>
                    <li><strong className="text-white">• Cuentas Corrientes:</strong> Se cobra el 50% de la tarifa original.</li>
                    <li><strong className="text-white">• Flex ML:</strong> N1 (50%), N2 (ZI Sin Cargo, resto 50%), N3 (Sin Cargo).</li>
                    <li><strong className="text-white">• E-Commerce:</strong> La 2da visita es 100% Bonificada (Sin Cargo).</li>
                  </ul>
                </div>
              </div>
            </article>

            {/* FAQ 4 */}
            <article className="bg-[#1e3a5f]/80 backdrop-blur-sm border border-[#2a4d7a] rounded-xl p-6 flex gap-6 items-start shadow-lg">
              <CloudRain className="text-[#b0c4de] w-12 h-12 flex-shrink-0" />
              <div>
                <h3 className="text-[#fcd34d] font-bold text-sm md:text-base mb-2 uppercase leading-snug">
                  ¿CUÁNDO SE APLICA RECARGO POR "LLUVIA" Y "DEMORAS"?
                </h3>
                <p className="text-[#e2e8f0] text-sm md:text-base leading-relaxed font-medium">
                  El recargo por clima (50% en planes normales, 30% en Flex) se activa si llueve o la calle está mojada en cualquier punto del servicio. Brindamos 10 min de tolerancia; pasado ese tiempo se adicionan <strong className="text-white font-bold">$2.200 cada 10 min.</strong>
                </p>
              </div>
            </article>

            {/* FAQ 5 - Critical Accent */}
            <article className="bg-[#451a24] border border-[#7f1d1d] rounded-xl p-6 flex gap-6 items-start shadow-lg relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#7f1d1d]/20 to-transparent pointer-events-none" />
              <ShieldAlert className="text-[#ff8a8a] w-12 h-12 flex-shrink-0 relative z-10" />
              <div className="relative z-10">
                <h3 className="text-[#ffcc80] font-bold text-sm md:text-base mb-2 uppercase leading-snug">
                  ¿QUÉ SUCEDE ANTE EVENTUALIDADES O SINIESTROS EN CALLE?
                </h3>
                <p className="text-[#e2e8f0] text-sm md:text-base leading-relaxed font-medium">
                  Cuidamos el esfuerzo de su negocio. Ante cualquier eventualidad, extravío o accidente, analizamos cada caso de forma <strong className="text-white font-bold uppercase">directa y personalizada</strong> con el comercio para definir los pasos a seguir.
                </p>
              </div>
            </article>
          </div>
        </main>

        {/* Footer */}
        <footer className="mt-auto pt-6 border-t border-[#1e3a5f] flex justify-between items-center text-gray-500 text-[11px] font-bold uppercase tracking-widest">
          <p>Resolución de Excepciones</p>
          <p>{pageNumber} / {totalPageCount}</p>
        </footer>
      </div>
    </A4Page>
  );
};
