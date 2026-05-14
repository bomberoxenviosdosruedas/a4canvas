import React from 'react';
import { A4Page } from '@/components/A4Page';
import Image from 'next/image';
import { Check, Zap, MessageSquare, Box } from 'lucide-react';

const LOGO_URL = "https://xnarosypsowmisjcevsi.supabase.co/storage/v1/object/public/enviosadmindosruedas/logo.png";

export const EcommerceServicePage = ({ pageNumber, totalPageCount }: { pageNumber: number, totalPageCount: number }) => {
  return (
    <A4Page pageNumber={pageNumber} totalPageCount={totalPageCount} className="p-0 text-white font-['Montserrat']">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-tech-pattern opacity-10 z-0 pointer-events-none" />
      
      <div className="relative z-10 flex flex-col h-full p-[12mm] px-[15mm]">
        {/* Header Section */}
        <header className="flex justify-between items-center mb-10 pb-4 border-b border-gray-700">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-black rounded-sm flex items-center justify-center border border-gray-600 relative overflow-hidden">
              <Image src={LOGO_URL} alt="Logo EDR" fill className="object-contain p-1" />
            </div>
            <h1 className="text-xl font-bold italic tracking-wide">ENVIOS <span className="text-[#ffc107]">DOSRUEDAS</span></h1>
          </div>
          <div className="border border-[#ffc107] px-4 py-1.5 rounded-sm text-[#ffc107] text-sm font-semibold tracking-wider uppercase shadow-[0_0_15px_rgba(255,193,7,0.2)]">
            E-Commerce 3PL
          </div>
        </header>

        {/* Main Title */}
        <section className="mb-8 flex items-start gap-4">
          <Box className="w-12 h-12 text-white mt-1" strokeWidth={1.5} />
          <div>
            <h2 className="text-4xl font-black italic tracking-tight leading-none text-white">PLAN E-COMMERCE</h2>
            <h2 className="text-4xl font-black italic tracking-tight leading-none text-[#ffc107] drop-shadow-[0_0_10px_rgba(255,193,7,0.5)]">SAME DAY</h2>
          </div>
        </section>

        {/* WhatsApp Banner */}
        <div className="bg-[#081d2d]/80 backdrop-blur-md border border-[#ffc107]/20 rounded-sm mb-8 px-6 py-3 flex items-center justify-center gap-3 w-max shadow-lg">
          <MessageSquare className="w-6 h-6 text-[#ffc107]" />
          <p className="font-semibold text-lg">Gestión 100% por WhatsApp. ¡Nosotros somos su depósito!</p>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-base leading-relaxed mb-10 w-11/12">
          Impulsá tu tienda online con una solución logística integral. Con nuestro plan Fulfillment (3PL) podés dejar un stock operativo de tus productos con nosotros; cada venta es preparada y despachada el mismo día, permitiéndote concentrarte en lo más importante: vender y hacer crecer tu negocio.
        </p>

        {/* Main Grid Section */}
        <div className="grid grid-cols-2 gap-6 mb-8 flex-grow">
          {/* Left Column: Pricing */}
          <div className="bg-[#081d2d]/80 backdrop-blur-md border border-[#ffc107]/20 rounded-sm flex flex-col justify-center items-center p-8 text-center shadow-lg">
            <h3 className="text-[#ffc107] font-bold uppercase tracking-wider mb-2">TARIFA PLANA INTEGRAL</h3>
            <div className="text-6xl font-black text-[#ffc107] drop-shadow-[0_0_10px_rgba(255,193,7,0.5)] mb-2">$6.000</div>
            <p className="text-gray-300 font-semibold uppercase tracking-widest text-sm">TODO MAR DEL PLATA</p>
          </div>

          {/* Right Column: Features List */}
          <div className="bg-[#081d2d]/80 backdrop-blur-md border border-[#ffc107]/20 rounded-sm p-8 flex flex-col justify-center shadow-lg">
            <ul className="space-y-5">
              {[
                { t: "Almacenamiento", s: "(Stock operativo)" },
                { t: "Preparación (Picking)", s: "y embalaje básico" },
                { t: "Entrega Same Day", s: "(Mismo día)" },
                { t: "Cobranza contra", s: "entrega GRATIS" }
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#ffc107] mt-0.5 flex-shrink-0" strokeWidth={3} />
                  <div>
                    <span className="font-bold text-white block">{item.t}</span>
                    <span className="text-gray-400 text-sm">{item.s}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom Left: Dinamica Operativa */}
          <div className="bg-[#081d2d]/80 backdrop-blur-md border border-[#ffc107]/20 rounded-sm p-6 shadow-lg">
            <h4 className="text-[#ffc107] font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 fill-[#ffc107]/20" />
              DINÁMICA OPERATIVA
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              Corte de pedidos: <span className="text-white font-bold">15:00hs.</span><br/>
              Ventas hasta las 15hs se entregan en el día.<br/>
              Post 15hs pasan al día siguiente.<br/>
              Entregas en franja abierta de 9 a 20hs.
            </p>
          </div>

          {/* Bottom Right: Reglas de Stock */}
          <div className="bg-[#081d2d]/80 backdrop-blur-md border border-[#ffc107]/20 rounded-sm p-6 shadow-lg">
            <h4 className="text-[#ffc107] font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
              <Box className="w-5 h-5" />
              REGLAS DE STOCK
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              Incluye bolsa y film estándar. El stock se ajusta a la rotación real. Admite ropa, calzado, tecnología chica. No admite voluminosos, líquidos ni frágiles.
            </p>
          </div>
        </div>

        {/* Bottom Stats Banner */}
        <div className="bg-[#081d2d]/80 backdrop-blur-md border border-[#ffc107]/20 rounded-sm p-5 mb-auto shadow-lg">
          <div className="grid grid-cols-3 divide-x divide-gray-700">
            <div className="text-center px-4">
              <h5 className="text-[#ffc107] text-sm font-bold tracking-wider mb-1">2DA VISITA</h5>
              <p className="text-white font-semibold">100% Bonificada</p>
            </div>
            <div className="text-center px-4">
              <h5 className="text-[#ffc107] text-sm font-bold tracking-wider mb-1">DEVOLUCIONES</h5>
              <p className="text-white font-semibold">50% valor original</p>
            </div>
            <div className="text-center px-4">
              <h5 className="text-[#ffc107] text-sm font-bold tracking-wider mb-1">CLIMA (LLUVIA)</h5>
              <p className="text-white font-semibold">Recargo del 30%</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-8 pt-4 border-t border-gray-700 flex justify-between items-center text-gray-400 text-sm">
          <p>Fulfillment y Entrega en el Día</p>
          <p>{pageNumber} / {totalPageCount}</p>
        </footer>
      </div>
    </A4Page>
  );
};
