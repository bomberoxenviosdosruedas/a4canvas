import React from 'react';
import { A4Page } from '@/components/A4Page';
import Image from 'next/image';
import { MessageSquare, Globe, Mail, MapPin } from 'lucide-react';

const LOGO_URL = "https://xnarosypsowmisjcevsi.supabase.co/storage/v1/object/public/enviosadmindosruedas/logo.png";

export const ClosurePage = ({ pageNumber, totalPageCount }: { pageNumber: number, totalPageCount: number }) => {
  return (
    <A4Page pageNumber={pageNumber} totalPageCount={totalPageCount} className="p-0">
      <div className="relative h-full flex flex-col items-center bg-[#0f172a] bg-carbon-pattern pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 to-background/95 pointer-events-none" />
        
        {/* Header */}
        <header className="w-full flex flex-col items-center z-10 mb-16">
          <div className="w-36 h-32 rounded-full border-4 border-primary flex flex-col items-center justify-center bg-background shadow-[0_0_50px_rgba(255,193,7,0.2)] mb-10 p-2 relative">
             <Image src={LOGO_URL} alt="Logo" fill className="object-contain p-4" />
          </div>
          <h1 className="text-6xl font-black text-white text-center uppercase tracking-tighter mb-4 text-glow leading-none">
            ESCALEMOS <span className="text-primary italic">JUNTOS</span>
          </h1>
          <h2 className="text-xl font-bold text-primary text-center tracking-[0.5em] uppercase opacity-80">
            El Motor de su Última Milla
          </h2>
        </header>

        {/* Steps */}
        <section className="bg-card/60 backdrop-blur-2xl w-full max-w-2xl rounded-[2rem] p-10 z-10 mb-12 border border-primary/20 shadow-2xl">
          <h3 className="text-center text-sm font-black uppercase tracking-[0.4em] text-muted-foreground mb-12 italic">
            Comenzar a operar es muy simple:
          </h3>
          <div className="space-y-10">
            {[
              { n: "1", d: "Nos escribe por WhatsApp y nos pasa la información de su envío." },
              { n: "2", d: "Coordinamos el retiro de la mercadería por su domicilio de forma ágil." },
              { n: "3", d: "¡Y listo! Un cadete estará entregando felicidad a sus clientes en tiempo y forma." }
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#22c55e] to-[#16a34a] shrink-0 flex items-center justify-center text-white font-black text-lg shadow-[0_0_20px_rgba(34,197,94,0.4)]">
                  {step.n}
                </div>
                <p className="text-gray-200 text-lg leading-tight font-medium italic">
                  {step.d}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <div className="z-10 mb-20">
          <a 
            className="flex items-center gap-5 px-12 py-6 rounded-full text-white font-black text-4xl tracking-tighter border-2 border-[#25d366]/40 bg-gradient-to-r from-[#128c7e] to-[#25d366] shadow-[0_0_40px_rgba(37,211,102,0.3)] hover:scale-105 transition-all duration-300" 
            href="https://wa.me/5492236602699" 
            rel="noopener noreferrer" 
            target="_blank"
          >
            <MessageSquare className="h-10 w-10 fill-white/20" />
            223-6602699
          </a>
        </div>

        {/* Footer Contact Card */}
        <footer className="w-full max-w-2xl mt-auto z-10 pb-8">
          <div className="bg-card/40 backdrop-blur-md rounded-2xl p-10 border border-primary/20 shadow-2xl relative">
            <div className="text-center mb-8">
              <h4 className="text-3xl font-black tracking-tighter text-white uppercase italic">Matias Nicolas Cejas</h4>
              <p className="text-primary font-black tracking-[0.5em] text-xs mt-2 uppercase opacity-80">Fundador & CEO</p>
            </div>
            
            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8 w-3/4 mx-auto" />
            
            <div className="grid grid-cols-2 gap-6 px-4">
              <div className="flex items-center gap-4 text-gray-300">
                <Globe className="h-5 w-5 text-primary" />
                <span className="text-xs font-bold tracking-tight">www.enviosdosruedas.com</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-[10px] font-bold tracking-tight">MatiasCejas@enviosdosruedas.com</span>
              </div>
              <div className="col-span-2 flex items-center justify-center gap-4 text-gray-300 text-center border-t border-white/5 pt-6 mt-2">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span className="text-xs font-bold tracking-wide">Mar del Plata, Buenos Aires, Argentina</span>
              </div>
            </div>
          </div>
          <div className="text-center mt-10 text-muted-foreground text-[10px] font-black tracking-[0.8em] uppercase opacity-30">
            ENVÍOS DOS RUEDAS © 2026
          </div>
        </footer>
      </div>
    </A4Page>
  );
};
