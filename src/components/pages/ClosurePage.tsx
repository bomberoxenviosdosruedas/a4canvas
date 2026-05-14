import React from 'react';
import { A4Page } from '@/components/A4Page';
import Image from 'next/image';
import { MessageSquare, Globe, Mail, MapPin } from 'lucide-react';

const LOGO_URL = "https://xnarosypsowmisjcevsi.supabase.co/storage/v1/object/public/enviosadmindosruedas/logo.png";

export const ClosurePage = ({ pageNumber, totalPageCount }: { pageNumber: number, totalPageCount: number }) => {
  return (
    <A4Page pageNumber={pageNumber} totalPageCount={totalPageCount} className="p-0 text-white font-['Montserrat']">
      <div className="relative h-full flex flex-col items-center py-16 px-8 bg-[#0f172a] bg-carbon-pattern">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1e293b]/80 to-[#0f172a]/95 pointer-events-none" />
        
        {/* BEGIN: Header Section */}
        <header className="w-full flex flex-col items-center z-10 mb-12">
          {/* Logo Central */}
          <div className="w-32 h-32 rounded-full border-4 border-[#ffc107] flex items-center justify-center bg-[#011525] shadow-[0_0_30px_rgba(212,175,55,0.4)] mb-8 p-1 relative overflow-hidden">
            <Image src={LOGO_URL} alt="Logo EDR" fill className="object-contain p-4" />
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white text-center uppercase tracking-wider mb-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
            Escalemos Juntos
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-[#ffc107] text-center drop-shadow-[0_0_10px_rgba(212,175,55,0.3)] uppercase tracking-[0.2em]">
            El Motor de su Última Milla
          </h2>
        </header>

        {/* BEGIN: Steps Section */}
        <section className="bg-[#1e293b]/60 backdrop-blur-xl w-full max-w-2xl rounded-2xl p-8 z-10 mb-10 border border-[#ffc107]/30 shadow-2xl relative">
          <h3 className="text-center text-lg font-bold uppercase tracking-widest text-gray-200 mb-8">
            Comenzar a operar es muy simple:
          </h3>
          <div className="space-y-8">
            {[
              { n: "1", d: "Nos escribe por WhatsApp y nos pasa la información de su envío." },
              { n: "2", d: "Coordinamos el retiro de la mercadería por su domicilio de forma ágil y rápida." },
              { n: "3", d: "¡Y listo! Un cadete estará entregando en tiempo y forma felicidad a sus clientes." }
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#22c55e] to-[#16a34a] flex-shrink-0 flex items-center justify-center text-white font-bold text-lg shadow-[0_0_15px_rgba(34,197,94,0.6)]">
                  {step.n}
                </div>
                <p className="text-gray-200 text-lg leading-relaxed font-medium">
                  {step.d}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* BEGIN: Call to Action */}
        <div className="z-10 mb-16">
          <a 
            className="flex items-center gap-4 px-10 py-5 rounded-full text-white font-black text-3xl tracking-wide border border-green-400 border-opacity-50 bg-gradient-to-r from-[#128c7e] to-[#25d366] shadow-[0_0_20px_rgba(37,211,102,0.5)] hover:scale-105 transition-all" 
            href="https://wa.me/5492236602699" 
            rel="noopener noreferrer" 
            target="_blank"
          >
            <MessageSquare className="h-10 w-10 fill-white/20" />
            223-6602699
          </a>
        </div>

        {/* BEGIN: Contact Card Section */}
        <footer className="w-full max-w-2xl mt-auto z-10">
          <div className="bg-[#1e293b]/60 backdrop-blur-md rounded-2xl p-10 border border-[#ffc107]/40 shadow-2xl relative">
            <div className="text-center mb-8">
              <h4 className="text-2xl font-bold tracking-wide text-white uppercase italic">Matias Nicolas Cejas</h4>
              <p className="text-[#ffc107] font-bold tracking-[0.4em] text-sm mt-1 uppercase">Fundador & CEO</p>
            </div>
            
            <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8 w-3/4 mx-auto" />
            
            <div className="space-y-4 px-4 sm:px-12">
              <div className="flex items-center justify-center gap-4 text-gray-200">
                <Globe className="h-5 w-5 text-[#ffc107]" />
                <a className="hover:text-white transition-colors text-sm sm:text-base font-medium" href="https://www.enviosdosruedas.com">www.enviosdosruedas.com</a>
              </div>
              <div className="flex items-center justify-center gap-4 text-gray-200">
                <Mail className="h-5 w-5 text-[#ffc107]" />
                <a className="hover:text-white transition-colors text-sm sm:text-base font-medium break-all" href="mailto:MatiasCejas@enviosdosruedas.com">MatiasCejas@enviosdosruedas.com</a>
              </div>
              <div className="flex items-center justify-center gap-4 text-gray-200 text-center">
                <MapPin className="h-5 w-5 text-[#ffc107] shrink-0" />
                <span className="text-sm sm:text-base font-medium">Mar del Plata, Buenos Aires, Argentina</span>
              </div>
            </div>
          </div>
          <div className="text-center mt-8 text-gray-500 text-[10px] font-bold tracking-[0.6em] uppercase">
            ENVÍOS DOS RUEDAS © 2026
          </div>
        </footer>
      </div>
    </A4Page>
  );
};
