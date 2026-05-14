import React from 'react';
import { A4Page } from '@/components/A4Page';
import Image from 'next/image';
import { MapPin, Box, Home, CloudRain, ShieldAlert } from 'lucide-react';

const LOGO_URL = "https://xnarosypsowmisjcevsi.supabase.co/storage/v1/object/public/enviosadmindosruedas/logo.png";

export const FAQPage2 = ({ pageNumber, totalPageCount }: { pageNumber: number, totalPageCount: number }) => {
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
        <div className="border border-primary text-primary px-5 py-2 rounded-full text-[10px] font-black tracking-[0.2em] uppercase box-glow">
          Soporte y Condiciones
        </div>
      </header>

      {/* Title */}
      <h2 className="text-4xl font-black italic tracking-tighter mb-8 uppercase text-white leading-none">
        PREGUNTAS FRECUENTES <span className="text-muted-foreground text-2xl font-medium not-italic ml-2 tracking-normal">(2/2)</span>
      </h2>

      {/* Grid Cases */}
      <div className="flex flex-col gap-4 flex-grow">
        <article className="bg-card/50 border border-white/5 rounded-2xl p-6 flex gap-6 items-start shadow-lg">
          <div className="p-3 bg-primary/10 rounded-xl"><MapPin className="text-primary w-8 h-8" /></div>
          <div>
            <h3 className="text-primary font-black text-sm mb-2 uppercase leading-snug tracking-widest italic">¿DIRECCIÓN INCORRECTA?</h3>
            <p className="text-muted-foreground text-xs leading-relaxed font-medium">
              Si el cadete llegó al domicilio y la dirección era errónea, <span className="text-white font-bold">el viaje se abona igual</span>. El tramo extra hasta el nuevo destino se cobra proporcional a la distancia.
            </p>
          </div>
        </article>

        <article className="bg-card/50 border border-white/5 rounded-2xl p-6 flex gap-6 items-start shadow-lg">
          <div className="p-3 bg-primary/10 rounded-xl"><Box className="text-primary w-8 h-8" /></div>
          <div>
            <h3 className="text-primary font-black text-sm mb-2 uppercase leading-snug tracking-widest italic">¿RECHAZO EN PUERTA?</h3>
            <p className="text-muted-foreground text-xs leading-relaxed font-medium">
              Si el comprador rechaza el producto en la puerta, el costo de ida se abona normalmente pero la devolución del paquete a su local se realiza <span className="text-[#4ade80] font-black italic">TOTALMENTE SIN CARGO</span>.
            </p>
          </div>
        </article>

        <article className="bg-card/50 border border-white/5 rounded-2xl p-6 flex gap-6 items-start shadow-lg">
          <div className="p-3 bg-primary/10 rounded-xl"><Home className="text-primary w-8 h-8" /></div>
          <div>
            <h3 className="text-primary font-black text-sm mb-2 uppercase leading-snug tracking-widest italic">2DA VISITA POR AUSENTE</h3>
            <div className="text-muted-foreground text-xs leading-relaxed font-medium space-y-1">
              <p>- <strong className="text-white">Express/LowCost:</strong> Se liquida como un viaje nuevo.</p>
              <p>- <strong className="text-white">Cta Corriente:</strong> Se cobra solo el 50% de la tarifa.</p>
              <p>- <strong className="text-[#4ade80]">E-Commerce 3PL:</strong> La 2da visita es <span className="font-black italic">100% BONIFICADA</span>.</p>
            </div>
          </div>
        </article>

        <article className="bg-card/50 border border-white/5 rounded-2xl p-6 flex gap-6 items-start shadow-lg">
          <div className="p-3 bg-primary/10 rounded-xl"><CloudRain className="text-primary w-8 h-8" /></div>
          <div>
            <h3 className="text-primary font-black text-sm mb-2 uppercase leading-snug tracking-widest italic">LLUVIA Y DEMORAS</h3>
            <p className="text-muted-foreground text-xs leading-relaxed font-medium italic">
              Recargo clima: 50% (30% Flex). Tolerancia espera: 10 min en domicilio, luego se adicionan <span className="text-white font-bold">$2.200 cada 10 min.</span>
            </p>
          </div>
        </article>

        <article className="bg-destructive/10 border border-destructive/30 rounded-2xl p-8 flex gap-6 items-start shadow-2xl mt-auto border-dashed">
          <div className="p-3 bg-destructive/20 rounded-xl"><ShieldAlert className="text-destructive w-10 h-10" /></div>
          <div>
            <h3 className="text-destructive font-black text-base mb-2 uppercase leading-tight tracking-widest italic">SINIESTROS EN CALLE</h3>
            <p className="text-muted-foreground text-xs leading-relaxed font-medium italic">
              Cuidamos su esfuerzo. Ante cualquier eventualidad, extravío o accidente, analizamos cada caso de forma <strong className="text-white not-italic">personalizada y directa</strong> con el comercio para definir los pasos a seguir de forma justa.
            </p>
          </div>
        </article>
      </div>
    </A4Page>
  );
};
