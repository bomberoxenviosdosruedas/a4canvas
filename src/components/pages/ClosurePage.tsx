import React from 'react';
import { A4Page } from '@/components/A4Page';
import { MessageSquare, Globe, Mail, MapPin, CheckCircle2 } from 'lucide-react';

export const ClosurePage = ({ pageNumber, totalPageCount }: { pageNumber: number, totalPageCount: number }) => {
  return (
    <A4Page pageNumber={pageNumber} totalPageCount={totalPageCount} className="p-0">
      <div className="relative h-full flex flex-col items-center py-16 px-12 text-center">
        {/* Logo Central */}
        <div className="w-32 h-32 rounded-full border-4 border-primary flex flex-col items-center justify-center bg-card shadow-[0_0_40px_rgba(255,193,7,0.3)] mb-10 p-2 group transition-all duration-700 hover:scale-110">
          <span className="text-[10px] uppercase text-muted-foreground font-bold tracking-widest">Envíos</span>
          <span className="text-sm font-black text-white tracking-wide italic">DosRuedas</span>
          <span className="text-[10px] text-primary mt-1 font-mono">223-6602699</span>
        </div>

        {/* Hero Title */}
        <div className="mb-12">
          <h1 className="text-6xl font-black text-white uppercase tracking-tighter mb-2 drop-shadow-2xl">
            ESCALEMOS <span className="text-primary italic">JUNTOS</span>
          </h1>
          <h2 className="text-2xl font-bold text-primary/80 uppercase tracking-[0.3em]">
            EL MOTOR DE SU ÚLTIMA MILLA
          </h2>
        </div>

        {/* Operation Steps */}
        <section className="bg-card/40 backdrop-blur-xl rounded-3xl p-10 border border-primary/20 w-full max-w-2xl mb-12 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-tech-pattern opacity-5 pointer-events-none" />
          <h3 className="text-lg font-black uppercase tracking-widest text-white/60 mb-10">
            COMENZAR A OPERAR ES MUY SIMPLE:
          </h3>
          <div className="space-y-8 text-left">
            {[
              { n: "1", t: "Nos escribe por WhatsApp", d: "y nos pasa la información de su envío de forma directa." },
              { n: "2", t: "Coordinamos el retiro", d: "de la mercadería por su domicilio de forma ágil y rápida." },
              { n: "3", t: "¡Y listo!", d: "Un cadete estará entregando felicidad a sus clientes en tiempo y forma." }
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-6 group">
                <div className="w-10 h-10 rounded-full bg-primary flex-shrink-0 flex items-center justify-center text-background font-black text-xl shadow-[0_0_15px_rgba(255,193,7,0.5)] group-hover:scale-110 transition-transform">
                  {step.n}
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg leading-none mb-1">{step.t}</h4>
                  <p className="text-[#d4c5ab] text-base font-medium">{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action Button */}
        <a 
          href="https://wa.me/5492236602699" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-4 bg-green-600 hover:bg-green-500 text-white px-10 py-5 rounded-full text-3xl font-black transition-all shadow-[0_0_30px_rgba(22,163,74,0.4)] hover:-translate-y-1 active:scale-95 mb-16"
        >
          <MessageSquare className="w-10 h-10 fill-white/20" />
          223-6602699
        </a>

        {/* Founder Card */}
        <footer className="w-full max-w-2xl mt-auto">
          <div className="bg-card/60 backdrop-blur-md rounded-2xl p-10 border border-primary/20 shadow-2xl relative">
            <div className="flex flex-col items-center mb-8">
              <h4 className="text-2xl font-black tracking-tight text-white uppercase italic">Matias Nicolas Cejas</h4>
              <p className="text-primary font-black tracking-[0.4em] text-xs mt-1 uppercase">Fundador & CEO</p>
              <div className="h-px w-1/2 bg-gradient-to-r from-transparent via-primary/30 to-transparent mt-6" />
            </div>
            
            <div className="grid grid-cols-1 gap-4 text-sm font-medium">
              <div className="flex items-center justify-center gap-4 text-[#d4c5ab]">
                <Globe className="text-primary w-5 h-5" />
                <span>www.enviosdosruedas.com</span>
              </div>
              <div className="flex items-center justify-center gap-4 text-[#d4c5ab]">
                <Mail className="text-primary w-5 h-5" />
                <span>MatiasCejas@enviosdosruedas.com</span>
              </div>
              <div className="flex items-center justify-center gap-4 text-[#d4c5ab]">
                <MapPin className="text-primary w-5 h-5" />
                <span>Mar del Plata, Buenos Aires, Argentina</span>
              </div>
            </div>
          </div>
          <p className="text-[10px] text-white/20 font-bold uppercase tracking-[0.6em] mt-8">
            ENVÍOS DOS RUEDAS © 2026
          </p>
        </footer>
      </div>
    </A4Page>
  );
};
