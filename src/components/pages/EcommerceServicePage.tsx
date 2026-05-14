import React from 'react';
import { A4Page } from '@/components/A4Page';
import { Box, Check, Zap, Menu, MessageSquare } from 'lucide-react';

export const EcommerceServicePage = ({ pageNumber, totalPageCount }: { pageNumber: number, totalPageCount: number }) => {
  return (
    <A4Page pageNumber={pageNumber} totalPageCount={totalPageCount} className="p-0">
      {/* El componente A4Page ya incluye el fondo y la estructura base. 
          Aquí personalizamos el contenido interno para que coincida con el diseño solicitado. */}
      <div className="relative h-full flex flex-col p-[12mm] px-[15mm]">
        
        {/* BEGIN: Header Section */}
        <header className="flex justify-between items-center mb-10 pb-4 border-b border-primary/20">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-black rounded-sm flex items-center justify-center border border-white/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-gray-800 opacity-50 text-[8px] flex items-center justify-center text-center font-mono uppercase leading-tight">
                ENVIOS<br/>DOSRUEDAS
              </div>
            </div>
            <h1 className="font-headline text-xl font-bold italic tracking-wide text-white uppercase">
              ENVIOS <span className="text-primary">DOSRUEDAS</span>
            </h1>
          </div>
          <div className="border border-primary px-4 py-1.5 rounded-sm text-primary text-sm font-black tracking-wider uppercase shadow-[0_0_15px_rgba(255,193,7,0.2)]">
            E-Commerce 3PL
          </div>
        </header>

        {/* BEGIN: Main Title */}
        <section className="mb-8 flex items-start gap-5">
          <Box className="w-12 h-12 text-white mt-1 shrink-0" strokeWidth={1.5} />
          <div>
            <h2 className="font-headline text-4xl font-black italic tracking-tight leading-none text-white uppercase">PLAN E-COMMERCE</h2>
            <h2 className="font-headline text-4xl font-black italic tracking-tight leading-none text-primary uppercase drop-shadow-[0_0_10px_rgba(255,193,7,0.5)]">SAME DAY</h2>
          </div>
        </section>

        {/* BEGIN: WhatsApp Banner */}
        <div className="bg-card/80 backdrop-blur-md border border-primary/20 rounded-sm mb-8 px-6 py-3 flex items-center justify-center gap-3 w-max shadow-xl">
          <MessageSquare className="w-6 h-6 text-primary fill-primary/10" />
          <p className="font-headline font-bold text-lg text-white">Gestión 100% por WhatsApp. ¡Nosotros somos su depósito!</p>
        </div>

        {/* BEGIN: Description */}
        <p className="font-body text-base leading-relaxed text-[#d4c5ab] mb-10 w-11/12 font-medium">
          Impulsá tu tienda online con una solución logística integral. Con nuestro plan Fulfillment (3PL) podés dejar un stock operativo de tus productos con nosotros; cada venta es preparada y despachada el mismo día, permitiéndote concentrarte en lo más importante: vender y hacer crecer tu negocio.
        </p>

        {/* BEGIN: Main Grid Section */}
        <div className="grid grid-cols-2 gap-6 mb-8 flex-grow">
          {/* Left Column: Pricing */}
          <div className="bg-card/80 backdrop-blur-md border border-primary/20 rounded-sm flex flex-col justify-center items-center p-8 text-center shadow-xl">
            <h3 className="text-primary font-black uppercase tracking-widest text-xs mb-2">TARIFA PLANA INTEGRAL</h3>
            <div className="font-headline text-7xl font-black text-primary drop-shadow-[0_0_15px_rgba(255,193,7,0.4)] mb-2">$6.000</div>
            <p className="text-[#d4c5ab] font-mono font-bold uppercase tracking-[0.3em] text-[10px]">TODO MAR DEL PLATA</p>
          </div>

          {/* Right Column: Features List */}
          <div className="bg-card/80 backdrop-blur-md border border-primary/20 rounded-sm p-8 flex flex-col justify-center shadow-xl">
            <ul className="space-y-5">
              {[
                { t: "Almacenamiento", s: "(Stock operativo)" },
                { t: "Preparación (Picking)", s: "y embalaje básico" },
                { t: "Entrega Same Day", s: "(Mismo día)" },
                { t: "Cobranza contra", s: "entrega GRATIS" }
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" strokeWidth={3} />
                  <div>
                    <span className="font-headline font-bold text-white block leading-tight">{item.t}</span>
                    <span className="text-[#d4c5ab] text-sm font-medium">{item.s}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom Left: Dinamica Operativa */}
          <div className="bg-card/80 backdrop-blur-md border border-primary/20 rounded-sm p-6 shadow-xl">
            <h4 className="text-primary font-black uppercase tracking-widest text-xs mb-4 flex items-center gap-2">
              <Zap className="w-4 h-4 fill-primary/20" />
              DINÁMICA OPERATIVA
            </h4>
            <p className="text-[#d4c5ab] text-sm leading-relaxed font-medium">
              Corte de pedidos: <span className="text-white font-bold">15:00hs.</span><br/>
              Ventas hasta las 15hs se entregan en el día.<br/>
              Post 15hs pasan al día siguiente.<br/>
              Entregas en franja abierta de 9 a 20hs.
            </p>
          </div>

          {/* Bottom Right: Reglas de Stock */}
          <div className="bg-card/80 backdrop-blur-md border border-primary/20 rounded-sm p-6 shadow-xl">
            <h4 className="text-primary font-black uppercase tracking-widest text-xs mb-4 flex items-center gap-2">
              <Menu className="w-4 h-4" />
              REGLAS DE STOCK
            </h4>
            <p className="text-[#d4c5ab] text-sm leading-relaxed font-medium">
              Incluye bolsa y film estándar. El stock se ajusta a la rotación real. Admite ropa, calzado, tecnología chica. No admite voluminosos, líquidos ni frágiles.
            </p>
          </div>
        </div>

        {/* BEGIN: Bottom Stats Banner */}
        <div className="bg-card/80 backdrop-blur-md border border-primary/20 rounded-sm p-5 mb-6 shadow-xl">
          <div className="grid grid-cols-3 divide-x divide-white/10">
            <div className="text-center px-4">
              <h5 className="text-primary text-[10px] font-black tracking-widest uppercase mb-1">2DA VISITA</h5>
              <p className="text-white font-headline font-bold">100% Bonificada</p>
            </div>
            <div className="text-center px-4">
              <h5 className="text-primary text-[10px] font-black tracking-widest uppercase mb-1">DEVOLUCIONES</h5>
              <p className="text-white font-headline font-bold">50% valor original</p>
            </div>
            <div className="text-center px-4">
              <h5 className="text-primary text-[10px] font-black tracking-widest uppercase mb-1">CLIMA (LLUVIA)</h5>
              <p className="text-white font-headline font-bold">Recargo del 30%</p>
            </div>
          </div>
        </div>

        {/* BEGIN: Footer */}
        <footer className="mt-auto pt-4 border-t border-white/5 flex justify-between items-center text-[#d4c5ab] font-mono text-[10px] font-bold uppercase tracking-widest">
          <p>Fulfillment y Entrega en el Día</p>
          <p>{pageNumber} / {totalPageCount}</p>
        </footer>
      </div>
    </A4Page>
  );
};