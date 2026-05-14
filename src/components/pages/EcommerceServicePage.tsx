import React from 'react';
import { A4Page } from '@/components/A4Page';
import Image from 'next/image';
import { Check, Zap, MessageSquare, Box } from 'lucide-react';

const LOGO_URL = "https://xnarosypsowmisjcevsi.supabase.co/storage/v1/object/public/enviosadmindosruedas/logo.png";

export const EcommerceServicePage = ({ pageNumber, totalPageCount }: { pageNumber: number, totalPageCount: number }) => {
  return (
    <A4Page pageNumber={pageNumber} totalPageCount={totalPageCount}>
      {/* Header Section */}
      <header className="flex justify-between items-center mb-10 pb-4 border-b border-white/5">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-background rounded-full border border-white/10 p-1 relative flex items-center justify-center">
            <Image src={LOGO_URL} alt="Logo" fill className="object-contain p-1.5" />
          </div>
          <h1 className="text-xl font-bold italic tracking-tighter uppercase">ENVIOS <span className="text-primary">DOSRUEDAS</span></h1>
        </div>
        <div className="border border-primary px-4 py-1.5 rounded-sm text-primary text-[10px] font-black tracking-[0.3em] uppercase box-glow">
          E-Commerce 3PL
        </div>
      </header>

      {/* Main Title */}
      <section className="mb-10 flex items-start gap-6">
        <Box className="w-14 h-14 text-white mt-1 stroke-[1]" />
        <div>
          <h2 className="text-5xl font-black italic tracking-tighter leading-[0.9] text-white uppercase">PLAN E-COMMERCE</h2>
          <h2 className="text-5xl font-black italic tracking-tighter leading-[0.9] text-primary uppercase text-glow">SAME DAY</h2>
        </div>
      </section>

      {/* WhatsApp Banner */}
      <div className="glass-card mb-8 px-8 py-4 flex items-center gap-4 w-max border-primary/20">
        <MessageSquare className="w-6 h-6 text-primary" />
        <p className="font-bold text-lg tracking-tight">Gestión 100% por WhatsApp. ¡Nosotros somos su depósito!</p>
      </div>

      {/* Description */}
      <p className="text-muted-foreground text-[15px] leading-relaxed mb-10 max-w-2xl font-medium">
        Impulsá tu tienda online con una solución logística integral. Con nuestro plan <strong className="text-white">Fulfillment (3PL)</strong> podés dejar un stock operativo con nosotros; cada venta es preparada y despachada el mismo día. Concentráte en vender, nosotros entregamos felicidad.
      </p>

      {/* Main Grid Section */}
      <div className="grid grid-cols-2 gap-6 mb-10 flex-grow">
        {/* Left Column: Pricing */}
        <div className="glass-card flex flex-col justify-center items-center p-10 text-center border-primary/30 shadow-2xl">
          <h3 className="text-primary font-black uppercase tracking-[0.2em] text-[11px] mb-4">TARIFA PLANA INTEGRAL</h3>
          <div className="text-7xl font-black text-primary text-glow leading-none mb-3">$6.000</div>
          <p className="text-foreground/60 font-black uppercase tracking-[0.4em] text-[10px]">TODO MAR DEL PLATA</p>
        </div>

        {/* Right Column: Features List */}
        <div className="glass-card p-10 flex flex-col justify-center gap-6">
          {[
            { t: "Almacenamiento", s: "(Stock operativo)" },
            { t: "Preparación (Picking)", s: "y embalaje básico" },
            { t: "Entrega Same Day", s: "(Mismo día)" },
            { t: "Cobranza contra entrega", s: "TOTALMENTE GRATIS" }
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4">
              <Check className="w-5 h-5 text-primary mt-1 shrink-0 stroke-[3]" />
              <div>
                <span className="font-bold text-white block leading-tight text-sm uppercase tracking-wide">{item.t}</span>
                <span className="text-muted-foreground text-xs font-medium italic">{item.s}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Left: Dinamica Operativa */}
        <div className="glass-card p-8 bg-card/60">
          <h4 className="text-primary font-black uppercase tracking-[0.2em] text-[11px] mb-6 flex items-center gap-3">
            <Zap className="w-4 h-4 fill-primary/20" />
            DINÁMICA OPERATIVA
          </h4>
          <p className="text-muted-foreground text-xs leading-loose">
            Corte de pedidos: <span className="text-white font-bold">15:00hs.</span><br/>
            Ventas hasta las 15hs se entregan en el día.<br/>
            Post 15hs pasan al día siguiente.<br/>
            Entregas en franja abierta de 9 a 20hs.
          </p>
        </div>

        {/* Bottom Right: Reglas de Stock */}
        <div className="glass-card p-8 bg-card/60">
          <h4 className="text-primary font-black uppercase tracking-[0.2em] text-[11px] mb-6 flex items-center gap-3">
            <Box className="w-4 h-4" />
            REGLAS DE STOCK
          </h4>
          <p className="text-muted-foreground text-xs leading-loose">
            Incluye bolsa y film estándar. Stock ajustado a rotación real. Admite ropa, calzado, tecnología chica. No admite voluminosos, líquidos ni frágiles.
          </p>
        </div>
      </div>

      {/* Bottom Stats Banner */}
      <div className="glass-card p-6 mb-4 bg-primary/5 border-primary/10">
        <div className="grid grid-cols-3 divide-x divide-primary/20">
          <div className="text-center px-4">
            <h5 className="text-primary text-[10px] font-black tracking-[0.2em] mb-2 uppercase">2DA VISITA</h5>
            <p className="text-white font-bold text-sm italic">100% Bonificada</p>
          </div>
          <div className="text-center px-4">
            <h5 className="text-primary text-[10px] font-black tracking-[0.2em] mb-2 uppercase">DEVOLUCIONES</h5>
            <p className="text-white font-bold text-sm italic">50% valor original</p>
          </div>
          <div className="text-center px-4">
            <h5 className="text-primary text-[10px] font-black tracking-[0.2em] mb-2 uppercase">CLIMA (LLUVIA)</h5>
            <p className="text-white font-bold text-sm italic">Recargo del 30%</p>
          </div>
        </div>
      </div>
    </A4Page>
  );
};
