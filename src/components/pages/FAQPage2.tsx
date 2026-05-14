import React from 'react';
import { A4Page } from '@/components/A4Page';
import { MapPin, Box, Home, CloudRain, ShieldAlert } from 'lucide-react';

export const FAQPage2 = ({ pageNumber, totalPageCount }: { pageNumber: number, totalPageCount: number }) => {
  return (
    <A4Page pageNumber={pageNumber} totalPageCount={totalPageCount} className="p-0">
      <div className="relative h-full flex flex-col p-[12mm] px-[15mm]">
        {/* BEGIN: Header Section */}
        <header className="flex justify-between items-center mb-10 pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center bg-black shadow-[0_0_10px_rgba(255,193,7,0.2)]">
               <span className="text-[6px] text-white/40 leading-none text-center uppercase font-bold">ENVÍOS<br/>DOSRUEDAS</span>
            </div>
            <h1 className="text-xl font-black italic tracking-wider flex gap-1.5 uppercase">
              <span className="text-white">ENVIOS</span>
              <span className="text-primary">DOSRUEDAS</span>
            </h1>
          </div>
          <div className="border border-primary text-primary rounded-full px-5 py-1.5 text-[10px] font-black tracking-widest hover:bg-primary hover:text-black transition-colors uppercase">
            SOPORTE Y CONDICIONES
          </div>
        </header>

        {/* BEGIN: Page Title */}
        <div className="mb-8">
          <h2 className="font-headline text-4xl font-black italic tracking-wide text-white uppercase leading-none">
            PREGUNTAS FRECUENTES <span className="text-white/40 text-2xl font-normal not-italic tracking-normal ml-2">(2/2)</span>
          </h2>
        </div>

        {/* BEGIN: FAQ List */}
        <div className="flex flex-col gap-4 flex-grow">
          {/* FAQ 1 */}
          <article className="bg-card/40 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-xl group hover:border-primary/30 transition-all">
            <header className="flex justify-between items-start gap-6 mb-3">
              <h3 className="text-primary font-black text-[14px] leading-snug uppercase tracking-wider">
                ¿QUÉ PASA SI EL COMPRADOR BRINDÓ UNA DIRECCIÓN INCORRECTA?
              </h3>
              <MapPin className="text-primary w-8 h-8 opacity-60 group-hover:scale-110 transition-transform" />
            </header>
            <p className="text-[#d4c5ab] text-[13px] leading-relaxed font-medium">
              Si el cadete ya llegó al domicilio y la dirección era errónea o incompleta, <strong className="text-white">el viaje se abona igual</strong>. Si en ese momento se aporta la dirección correcta, se cobra un adicional proporcional por el tramo extra hasta el nuevo destino.
            </p>
          </article>

          {/* FAQ 2 */}
          <article className="bg-card/40 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-xl group hover:border-primary/30 transition-all">
            <header className="flex justify-between items-start gap-6 mb-3">
              <h3 className="text-primary font-black text-[14px] leading-snug uppercase tracking-wider">
                ¿QUÉ SUCEDE SI EL CLIENTE FINAL RECHAZA LA COMPRA EN LA PUERTA?
              </h3>
              <Box className="text-primary w-8 h-8 opacity-60 group-hover:scale-110 transition-transform" />
            </header>
            <p className="text-[#d4c5ab] text-[13px] leading-relaxed font-medium">
              En caso de que el comprador se arrepienta al recibirlo o rechace el producto en la puerta, el costo del envío de ida se abona normalmente, pero el viaje de retorno (devolución del paquete a su local) se realiza totalmente <strong className="text-white">SIN CARGO</strong>.
            </p>
          </article>

          {/* FAQ 3 */}
          <article className="bg-card/40 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-xl group hover:border-primary/30 transition-all">
            <header className="flex justify-between items-start gap-6 mb-3">
              <h3 className="text-primary font-black text-[14px] leading-snug uppercase tracking-wider">
                ¿CÓMO SE GESTIONA EL FRACASO DE UNA ENTREGA POR "AUSENTE"?
              </h3>
              <Home className="text-primary w-8 h-8 opacity-60 group-hover:scale-110 transition-transform" />
            </header>
            <div className="text-[#d4c5ab] text-[13px] leading-relaxed font-medium">
              <p className="mb-2">El protocolo de 2da Visita depende de su contrato:</p>
              <ul className="space-y-1">
                <li><strong className="text-white">• Express/LowCost:</strong> Se cobra como un viaje nuevo.</li>
                <li><strong className="text-white">• Cuentas Corrientes:</strong> Se cobra el 50% de la tarifa original.</li>
                <li><strong className="text-white">• Flex ML:</strong> N1 (50%), N2 (ZI Sin Cargo, resto 50%), N3 (Sin Cargo).</li>
                <li><strong className="text-white">• E-Commerce:</strong> La 2da visita es 100% Bonificada (Sin Cargo).</li>
              </ul>
            </div>
          </article>

          {/* FAQ 4 */}
          <article className="bg-card/40 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-xl group hover:border-primary/30 transition-all">
            <header className="flex justify-between items-start gap-6 mb-3">
              <h3 className="text-primary font-black text-[14px] leading-snug uppercase tracking-wider">
                ¿CUÁNDO SE APLICA RECARGO POR "LLUVIA" Y "DEMORAS"?
              </h3>
              <CloudRain className="text-primary w-8 h-8 opacity-60 group-hover:scale-110 transition-transform" />
            </header>
            <p className="text-[#d4c5ab] text-[13px] leading-relaxed font-medium">
              El recargo por clima (50% en planes normales, 30% en Flex) se activa si llueve o la calle está mojada en cualquier punto del servicio. Brindamos 10 min de tolerancia; pasado ese tiempo se adicionan <strong className="text-white">$2.200 cada 10 min.</strong>
            </p>
          </article>

          {/* FAQ 5 - Critical Accent */}
          <article className="bg-destructive/10 backdrop-blur-md border border-destructive/30 rounded-xl p-6 shadow-xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-destructive/10 to-transparent pointer-events-none" />
            <header className="flex justify-between items-start gap-6 mb-3 relative z-10">
              <h3 className="text-white font-black text-[14px] leading-snug uppercase tracking-wider">
                ¿QUÉ SUCEDE ANTE EVENTUALIDADES O SINIESTROS EN CALLE?
              </h3>
              <ShieldAlert className="text-destructive w-8 h-8 group-hover:animate-pulse transition-transform" />
            </header>
            <p className="text-[#d4c5ab] text-[13px] leading-relaxed font-medium relative z-10">
              Cuidamos el esfuerzo de su negocio. Ante cualquier eventualidad, extravío o accidente, no aplicamos reglas genéricas de rechazo. Analizamos cada caso de forma <strong className="text-white">directa y personalizada</strong> con el comercio para definir los pasos a seguir.
            </p>
          </article>
        </div>

        {/* BEGIN: Footer */}
        <footer className="mt-auto pt-6 border-t border-white/5 flex justify-between items-center text-[#d4c5ab] font-mono text-[10px] font-bold uppercase tracking-widest">
          <p>Resolución de Excepciones</p>
          <p>{pageNumber} / {totalPageCount}</p>
        </footer>
      </div>
    </A4Page>
  );
};
