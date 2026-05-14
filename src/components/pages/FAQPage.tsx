import React from 'react';
import { A4Page } from '@/components/A4Page';
import Image from 'next/image';
import { MessageCircle, CreditCard, Bike, TrendingUp, Package } from 'lucide-react';

const LOGO_URL = "https://xnarosypsowmisjcevsi.supabase.co/storage/v1/object/public/enviosadmindosruedas/logo.png";

export const FAQPage = ({ pageNumber, totalPageCount }: { pageNumber: number, totalPageCount: number }) => {
  const faqs = [
    {
      q: "¿Cómo se solicitan los envíos y el seguimiento?",
      a: "La gestión es ágil y directa vía WhatsApp. Si bien no contamos con seguimiento GPS en tiempo real para el cliente, le avisaremos inmediatamente apenas el paquete haya sido entregado.",
      icon: <MessageCircle className="w-6 h-6 text-[#dcb35f]" />
    },
    {
      q: "¿Cuáles son las modalidades de pago?",
      a: "Nos adaptamos a su ritmo: liquidación diaria, semanal, quincenal o mensual. Para todos nuestros servicios emitimos Factura C.",
      icon: <CreditCard className="w-6 h-6 text-[#dcb35f]" />
    },
    {
      q: "¿Qué tamaño máximo de paquetes transportan?",
      a: "Nuestra flota es de motos. Llevamos paquetes que puedan ser trasladados de forma segura. Se aplica recargo por 'Bulto' (+5kg o 40x40x30cm).",
      icon: <Bike className="w-6 h-6 text-[#dcb35f]" />
    },
    {
      q: "¿Cómo se actualizan los niveles de descuento?",
      a: "Depende del corte de facturación. Recomendamos el cierre Mensual para promediar sus ventas y garantizar una mejor escala tarifaria.",
      icon: <TrendingUp className="w-6 h-6 text-[#dcb35f]" />
    },
    {
      q: "¿Qué ocurre con los retiros de bajo volumen?",
      a: "En E-Commerce, el retiro es GRATIS superando 10 paquetes. Si es menor, el costo es de $4.000. Opcional: Modalidad 'Drop-Off' en Friuli 1972 sin cargo.",
      icon: <Package className="w-6 h-6 text-[#dcb35f]" />
    }
  ];

  return (
    <A4Page pageNumber={pageNumber} totalPageCount={totalPageCount} className="p-0 text-white font-['Montserrat']">
      <div className="relative h-full flex flex-col p-10 bg-[#0a1122] bg-gradient-to-b from-[#111d38] to-[#0a1122]">
        <header className="flex justify-between items-center mb-8 relative z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center bg-[#0a1122] relative overflow-hidden">
              <Image src={LOGO_URL} alt="Logo EDR" fill className="object-contain p-2" />
            </div>
            <h1 className="text-lg font-extrabold italic tracking-wider flex gap-1.5 uppercase">
              <span className="text-white">ENVIOS</span>
              <span className="text-[#dcb35f]">DOSRUEDAS</span>
            </h1>
          </div>
          <div className="border border-[#dcb35f] text-[#dcb35f] rounded-full px-4 py-1 text-[10px] font-semibold tracking-wide uppercase">
            Soporte y Condiciones
          </div>
        </header>

        <main className="flex-grow flex flex-col relative z-10 overflow-hidden">
          <h2 className="text-3xl font-extrabold italic tracking-wide mb-6 uppercase">
            PREGUNTAS FRECUENTES <span className="text-gray-400 text-xl font-normal not-italic tracking-normal ml-2">(1/2)</span>
          </h2>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <article 
                key={i} 
                className="bg-[#151e32] border border-[#243250] rounded-xl p-5 shadow-xl relative overflow-hidden group"
              >
                <header className="flex justify-between items-start gap-4 mb-2">
                  <h3 className="text-[#dcb35f] font-bold text-[13px] leading-snug uppercase tracking-wide">
                    {faq.q}
                  </h3>
                  <div className="flex-shrink-0 text-[#dcb35f]">
                    {faq.icon}
                  </div>
                </header>
                <p className="text-gray-300 text-[12px] leading-relaxed font-medium">
                  {faq.a}
                </p>
              </article>
            ))}
          </div>
        </main>
      </div>
    </A4Page>
  );
};