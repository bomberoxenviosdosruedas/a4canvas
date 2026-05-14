import React from 'react';
import { A4Page } from '@/components/A4Page';
import Image from 'next/image';
import { MessageCircle, CreditCard, Bike, TrendingUp, Package } from 'lucide-react';

const LOGO_URL = "https://xnarosypsowmisjcevsi.supabase.co/storage/v1/object/public/enviosadmindosruedas/logo.png";

export const FAQPage = ({ pageNumber, totalPageCount }: { pageNumber: number, totalPageCount: number }) => {
  const faqs = [
    {
      q: "¿Cómo se solicitan los envíos y cómo es el seguimiento?",
      a: "La gestión es ágil y directa vía WhatsApp. Si bien por el momento no contamos con seguimiento GPS en tiempo real para el cliente, le avisaremos inmediatamente apenas el paquete haya sido entregado.",
      icon: <MessageCircle className="w-6 h-6 text-primary" />
    },
    {
      q: "¿Cuáles son las modalidades de pago y facturación?",
      a: "Nos adaptamos a su ritmo: liquidación diaria, semanal, quincenal o mensual. Frecuencia personalizada con cada cliente. Para todos nuestros servicios emitimos Factura C.",
      icon: <CreditCard className="w-6 h-6 text-primary" />
    },
    {
      q: "¿Qué tamaño máximo de paquetes transportan?",
      a: "Nuestra flota es exclusivamente de motos. Llevamos paquetes que puedan ser trasladados de forma segura. Se aplica recargo por 'Bulto' si supera los 5kg o 40x40x30cm.",
      icon: <Bike className="w-6 h-6 text-primary" />
    },
    {
      q: "¿Cómo se actualizan los niveles de descuento en E-commerce?",
      a: "Depende del corte de facturación elegido. Recomendamos el cierre Mensual para promediar sus ventas y garantizar una mejor escala tarifaria en toda la ciudad.",
      icon: <TrendingUp className="w-6 h-6 text-primary" />
    },
    {
      q: "¿Qué ocurre con los retiros (colectas) de bajo volumen?",
      a: "En E-Commerce, el retiro es GRATIS superando 10 paquetes. Si es menor, el costo es de $4.000. Opcional: Modalidad 'Drop-Off' en nuestro depósito sin cargo adicional.",
      icon: <Package className="w-6 h-6 text-primary" />
    }
  ];

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
        PREGUNTAS FRECUENTES <span className="text-muted-foreground text-2xl font-medium not-italic ml-2 tracking-normal">(1/2)</span>
      </h2>

      {/* List */}
      <div className="flex flex-col gap-5 flex-grow">
        {faqs.map((faq, i) => (
          <article key={i} className="bg-card/50 border border-white/5 rounded-2xl p-6 shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12 blur-2xl group-hover:bg-primary/10 transition-colors" />
            <header className="flex justify-between items-start gap-4 mb-3 relative z-10">
              <h3 className="text-primary font-black text-[14px] leading-snug uppercase tracking-wide italic pr-6">
                {faq.q}
              </h3>
              <div className="flex-shrink-0">{faq.icon}</div>
            </header>
            <p className="text-muted-foreground text-xs leading-relaxed font-medium italic relative z-10 max-w-2xl">
              {faq.a}
            </p>
          </article>
        ))}
      </div>
    </A4Page>
  );
};
