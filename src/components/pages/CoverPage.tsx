import React from 'react';
import { A4Page } from '@/components/A4Page';
import { Truck, Package, TrendingUp } from 'lucide-react';
import Image from 'next/image';

const LOGO_URL = "https://xnarosypsowmisjcevsi.supabase.co/storage/v1/object/public/enviosadmindosruedas/logo.png";

export const CoverPage = ({ pageNumber, totalPageCount }: { pageNumber: number, totalPageCount: number }) => {
  return (
    <A4Page pageNumber={pageNumber} totalPageCount={totalPageCount} className="p-0">
      <div className="relative h-full flex flex-col px-12 md:px-16 overflow-hidden">
        
        {/* Header Ribbon */}
        <header className="flex justify-between items-center w-full py-10 border-b border-white/5">
          <div className="flex items-center gap-5">
            <div className="w-20 h-20 rounded-full border-2 border-[#ffc107] p-1 bg-[#011525] flex items-center justify-center relative shadow-[0_0_15px_rgba(255,193,7,0.3)]">
              <Image 
                src={LOGO_URL}
                alt="Logo Envíos DosRuedas"
                fill
                className="object-contain p-2"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="font-headline text-3xl font-black italic tracking-tighter text-white leading-none">ENVÍOS</h1>
              <h1 className="font-headline text-3xl font-black italic tracking-tighter text-[#ffc107] leading-none">DOSRUEDAS</h1>
              <div className="mt-2 bg-[#ffc107] text-[#3f2e00] font-bold px-4 py-1 rounded-sm text-[11px] tracking-wider uppercase self-start shadow-lg">
                LOGÍSTICA CORPORATIVA
              </div>
            </div>
          </div>
          <Truck className="text-[#ffc107] w-12 h-12 opacity-80" />
        </header>

        {/* Hero Section */}
        <main className="flex-grow flex flex-col items-center justify-center text-center mt-6">
          <div className="mb-2">
            <h2 className="font-headline text-[48px] font-black text-white uppercase tracking-tight leading-none">PARTNER LOGÍSTICO</h2>
            <h2 className="font-headline text-[48px] font-black text-[#ffc107] uppercase tracking-tight leading-none drop-shadow-2xl">ESPECIALIZADO</h2>
          </div>
          <p className="font-body text-xl text-[#d4c5ab] italic mb-10">El Motor de su Última Milla</p>
          
          <div className="border-2 border-[#ffc107] rounded-full px-8 py-2.5 bg-[#011525]/50 backdrop-blur-md mb-12 shadow-[0_0_15px_rgba(255,193,7,0.2)]">
            <span className="text-[#ffc107] font-body text-xs font-bold tracking-widest uppercase">Cobertura Integral en Mar del Plata</span>
          </div>

          <div className="w-full industrial-card-glow p-10 text-left relative overflow-hidden group">
            {/* Card Inner Border Glow */}
            <div className="absolute inset-0 border border-[#ffc107]/10 rounded-xl pointer-events-none" />
            
            <h3 className="font-headline text-2xl text-[#ffc107] font-bold uppercase mb-10 text-center tracking-widest border-b border-[#ffc107]/10 pb-4">
              7 AÑOS INNOVANDO EN LA CIUDAD
            </h3>
            
            <div className="space-y-10">
              <div className="flex gap-6 items-start">
                <div className="p-3 bg-[#ffc107]/10 rounded-lg text-[#ffc107]">
                  <Truck className="w-6 h-6" />
                </div>
                <p className="font-body text-[15px] leading-relaxed text-[#d4c5ab]">
                  Nacimos en Mar del Plata y llevamos más de 7 años operando, creciendo e innovando de manera constante. Desde nuestros inicios, nos guía un único propósito: brindar un servicio logístico de excelencia y confianza.
                </p>
              </div>
              <div className="flex gap-6 items-start">
                <div className="p-3 bg-[#ffc107]/10 rounded-lg text-[#ffc107]">
                  <Package className="w-6 h-6" />
                </div>
                <p className="font-body text-[15px] leading-relaxed text-[#d4c5ab]">
                  Hoy nos especializamos en la logística de última milla para <strong className="text-white font-bold">E-Commerce, plataformas y pymes</strong>, posicionándonos como el <strong className="text-white font-bold">partner logístico de referencia</strong> en la ciudad.
                </p>
              </div>
              <div className="flex gap-6 items-start">
                <div className="p-3 bg-[#ffc107]/10 rounded-lg text-[#ffc107]">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <p className="font-body text-[15px] leading-relaxed text-[#d4c5ab]">
                  Nos integramos a su operación comercial como un aliado estratégico, para que usted se enfoque exclusivamente en escalar sus ventas con la seguridad de especialistas.
                </p>
              </div>
            </div>
          </div>
        </main>

        {/* Spacer for Page Footer */}
        <div className="h-12" />
      </div>
    </A4Page>
  );
};
