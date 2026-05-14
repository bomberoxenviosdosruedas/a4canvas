import React from 'react';
import { A4Page } from '@/components/A4Page';
import { MessageCircle, CreditCard, Bike, TrendingUp, Package } from 'lucide-react';

export const FAQPage = ({ pageNumber, totalPageCount }: { pageNumber: number, totalPageCount: number }) => {
  const faqs = [
    {
      q: "¿Cómo se solicitan los envíos y cómo es el seguimiento?",
      a: "La gestión es ágil y directa: los envíos se solicitan vía WhatsApp. Si bien por el momento no contamos con seguimiento en tiempo real (GPS), si usted lo requiere, le avisaremos inmediatamente apenas el paquete haya sido entregado en destino.",
      icon: <MessageCircle className="w-7 h-7 text-[#ffc107]" />
    },
    {
      q: "¿Cuáles son las modalidades de pago y facturación?",
      a: "Nos adaptamos a su ritmo. No tenemos días fijos inflexibles; la frecuencia de liquidación (diaria, semanal, quincenal o mensual) se organiza de forma personalizada con cada cliente. Para todos nuestros servicios emitimos Factura C.",
      icon: <CreditCard className="w-7 h-7 text-[#ffc107]" />
    },
    {
      q: "¿Qué tamaño máximo de paquetes transportan?",
      a: "Nuestra flota está compuesta exclusivamente por motos. Llevamos paquetes que puedan ser trasladados de forma segura en este medio. Se aplica recargo por 'Bulto' si supera los 5kg o 40x40x30cm, pero el límite último definitivo lo marca la capacidad física y segura de la moto.",
      icon: <Bike className="w-7 h-7 text-[#ffc107]" />
    },
    {
      q: "¿Cómo se actualizan los niveles de descuento e E-commerce?",
      a: "Su nivel dependerá de corte de facturación. Si elige liquidación semanal, el nivel varía semana a semana. Recomendamos el cierre Mensual para promediar los días bajos con sus picos de ventas y garantizare una mejor escala tarifaria en toda la ciudad.",
      icon: <TrendingUp className="w-7 h-7 text-[#ffc107]" />
    },
    {
      q: "¿Qué ocurre con los retiros (colectas) de bajo volumen?",
      a: "En planes E-Commerce, el retiro es diario y gratuito superando la cuota de 10 paquetes listos. Si el volumen es menor, el costo de pase de la moto es de $4.000. Alternativa: Puede despachar en nuestra modalidad 'Drop-Off' en Friuli 1972 y evitar este costo.",
      icon: <Package className="w-7 h-7 text-[#ffc107]" />
    }
  ];

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
            PREGUNTAS FRECUENTES <span className="text-white/40 text-2xl font-normal not-italic tracking-normal ml-2">(1/2)</span>
          </h2>
        </div>

        {/* BEGIN: FAQ List */}
        <div className="flex flex-col gap-5 flex-grow">
          {faqs.map((faq, i) => (
            <article 
              key={i} 
              className="bg-card/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl relative overflow-hidden group hover:border-primary/30 transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-3xl -mr-12 -mt-12 opacity-0 group-hover:opacity-100 transition-opacity" />
              <header className="flex justify-between items-start gap-6 mb-3">
                <h3 className="text-primary font-black text-[14px] leading-snug uppercase tracking-wider">
                  {faq.q}
                </h3>
                <div className="flex-shrink-0 text-primary opacity-80 group-hover:scale-110 transition-transform">
                  {faq.icon}
                </div>
              </header>
              <p className="text-[#d4c5ab] text-[13px] leading-relaxed font-medium">
                {faq.a}
              </p>
            </article>
          ))}
        </div>

        {/* BEGIN: Footer */}
        <footer className="mt-auto pt-6 border-t border-white/5 flex justify-between items-center text-[#d4c5ab] font-mono text-[10px] font-bold uppercase tracking-widest">
          <p>Operativa Diaria y Pagos</p>
          <p>{pageNumber} / {totalPageCount}</p>
        </footer>
      </div>
    </A4Page>
  );
};
