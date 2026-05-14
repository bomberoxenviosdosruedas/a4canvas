import React from 'react';
import { A4Page } from '@/components/A4Page';
import Image from 'next/image';
import { MessageCircle, CreditCard, Bike, TrendingUp, Package } from 'lucide-react';

const LOGO_URL = "https://xnarosypsowmisjcevsi.supabase.co/storage/v1/object/public/enviosadmindosruedas/logo.png";

export const FAQPage = ({ pageNumber, totalPageCount }: { pageNumber: number, totalPageCount: number }) => {
  const faqs = [
    {
      q: "¿Cómo se solicitan los envíos y cómo es el seguimiento?",
      a: "La gestión es ágil y directa: los envíos se solicitan vía WhatsApp. Si bien por el momento no contamos con seguimiento en tiempo real (GPS), si usted lo requiere, le avisaremos inmediatamente apenas el paquete haya sido entregado en destino.",
      icon: <MessageCircle className="w-7 h-7 text-[#dcb35f]" />
    },
    {
      q: "¿Cuáles son las modalidades de pago y facturación?",
      a: "Nos adaptamos a su ritmo. No tenemos días fijos inflexibles; la frecuencia de liquidación (diaria, semanal, quincenal o mensual) se organiza de forma personalizada con cada cliente. Para todos nuestros servicios emitimos Factura C.",
      icon: <CreditCard className="w-7 h-7 text-[#dcb35f]" />
    },
    {
      q: "¿Qué tamaño máximo de paquetes transportan?",
      a: "Nuestra flota está compuesta exclusivamente por motos. Llevamos paquetes que puedan ser trasladados de forma segura en este medio. Se aplica recargo por 'Bulto' si supera los 5kg o 40x40x30cm, pero el límite último definitivo lo marca la capacidad física y segura de la moto.",
      icon: <Bike className="w-7 h-7 text-[#dcb35f]" />
    },
    {
      q: "¿Cómo se actualizan los niveles de descuento e E-commerce?",
      a: "Su nivel dependerá de corte de facturación. Si elige liquidación semanal, el nivel varía semana a semana. Recomendamos el cierre Mensual para promediar los días bajos con sus picos de ventas y garantizare una mejor escala tarifaria en toda la ciudad.",
      icon: <TrendingUp className="w-7 h-7 text-[#dcb35f]" />
    },
    {
      q: "¿Qué ocurre con los retiros (colectas) de bajo volumen?",
      a: "En planes E-Commerce, el retiro es diario y gratuito superando la cuota de 10 paquetes listos. Si el volumen es menor, el costo de pase de la moto es de $4.000. Alternativa: Puede despachar en nuestra modalidad 'Drop-Off' en Friuli 1972 y evitar este costo.",
      icon: <Package className="w-7 h-7 text-[#dcb35f]" />
    }
  ];

  return (
    <A4Page pageNumber={pageNumber} totalPageCount={totalPageCount} className="p-0 text-white font-['Montserrat']">
      <div className="relative h-full flex flex-col p-8 sm:p-12 bg-[#0a1122] bg-gradient-to-b from-[#111d38] to-[#0a1122]">
        {/* Header Section */}
        <header className="flex justify-between items-center mb-10 w-full relative z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center bg-[#0a1122] shadow-[0_0_10px_rgba(255,255,255,0.1)] relative overflow-hidden">
              <Image src={LOGO_URL} alt="Logo EDR" fill className="object-contain p-2" />
            </div>
            <h1 className="text-xl font-extrabold italic tracking-wider flex gap-1.5 uppercase">
              <span className="text-white">ENVIOS</span>
              <span className="text-[#dcb35f]">DOSRUEDAS</span>
            </h1>
          </div>
          <div className="border border-[#dcb35f] text-[#dcb35f] rounded-full px-5 py-1.5 text-xs font-semibold tracking-wide uppercase">
            Soporte y Condiciones
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow flex flex-col relative z-10">
          <h2 className="text-4xl font-extrabold italic tracking-wide mb-8 uppercase">
            PREGUNTAS FRECUENTES <span className="text-gray-400 text-2xl font-normal not-italic tracking-normal ml-2">(1/2)</span>
          </h2>

          <div className="flex flex-col gap-5">
            {faqs.map((faq, i) => (
              <article 
                key={i} 
                className="bg-[#151e32] border border-[#243250] rounded-2xl p-6 shadow-xl relative overflow-hidden group hover:border-[#dcb35f]/30 transition-all duration-300"
              >
                <header className="flex justify-between items-start gap-6 mb-3">
                  <h3 className="text-[#dcb35f] font-bold text-[15px] leading-snug uppercase tracking-wide">
                    {faq.q}
                  </h3>
                  <div className="flex-shrink-0 text-[#dcb35f] group-hover:scale-110 transition-transform">
                    {faq.icon}
                  </div>
                </header>
                <p className="text-gray-300 text-[14px] leading-relaxed font-medium">
                  {faq.a}
                </p>
              </article>
            ))}
          </div>
        </main>

        {/* Footer */}
        <footer className="mt-auto pt-6 border-t border-[#1e2d4a]/50 flex justify-between items-center text-gray-500 text-[11px] font-bold uppercase tracking-widest">
          <p>Operativa Diaria y Pagos</p>
          <p>{pageNumber} / {totalPageCount}</p>
        </footer>
      </div>
    </A4Page>
  );
};
