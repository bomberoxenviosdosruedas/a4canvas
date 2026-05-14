import React from 'react';
import { A4Page } from '@/components/A4Page';
import Image from 'next/image';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const LOGO_URL = "https://xnarosypsowmisjcevsi.supabase.co/storage/v1/object/public/enviosadmindosruedas/logo.png";

export const ComparisonPage = ({ pageNumber, totalPageCount }: { pageNumber: number, totalPageCount: number }) => {
  return (
    <A4Page pageNumber={pageNumber} totalPageCount={totalPageCount} className="p-0 text-[#e2e8f0] font-['Inter']">
      <div className="relative h-full flex flex-col p-8 md:p-12 bg-[#0f172a]">
        {/* Header */}
        <header className="flex justify-between items-center mb-10 pb-4 border-b border-gray-700">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center border border-gray-600 relative overflow-hidden">
              <Image src={LOGO_URL} alt="Logo EDR" fill className="object-contain p-2" />
            </div>
            <h1 className="text-2xl font-extrabold tracking-wider italic text-white flex items-center gap-2">
              ENVÍOS <span className="text-[#f6e05e]">DOSRUEDAS</span>
            </h1>
          </div>
          <div className="border border-[#f6e05e] text-[#f6e05e] px-4 py-2 rounded font-semibold text-sm uppercase">
            RESUMEN EJECUTIVO
          </div>
        </header>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Cobranzas Section */}
          <section className="bg-[#1a202c]/80 backdrop-blur-sm rounded-xl p-8 border border-[#48bb78]/50 shadow-[0_0_15px_rgba(72,187,120,0.2)] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#48bb78]/10 to-transparent pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3 mb-2">
                <span className="w-10 h-10 rounded-full border-2 border-[#48bb78] text-[#48bb78] flex items-center justify-center text-xl font-bold">$</span>
                GESTIÓN DE COBRANZAS EN DESTINO
              </h2>
              <p className="text-[#48bb78] font-semibold tracking-wide mb-6 uppercase text-sm">
                (SERVICIO DE CONTRAREMBOLSO EN COSTO)
              </p>
              <div className="space-y-4 text-gray-300 leading-relaxed text-sm md:text-base font-medium">
                <p>
                  Para potenciar sus canales de venta, nos encargamos de recaudar el valor de sus productos al momento de la entrega en la puerta de su cliente. Garantizamos una transacción profesional y segura.
                </p>
                <p>
                  La rendición de los fondos se realiza con la agilidad que su caja requiere (en el día, a las 24hs o semanalmente) mediante transferencia bancaria o efectivo, siempre acompañada de un arqueo detallado.
                </p>
                <p className="text-gray-400 italic text-sm mt-6">
                  * Nota de seguridad: El valor físico transportado corre por cuenta y orden del cliente solicitante.
                </p>
              </div>
            </div>
          </section>

          {/* Table Section */}
          <section>
            <h3 className="text-xl md:text-2xl font-bold text-[#f6e05e] text-center mb-8 uppercase tracking-wider italic">
              TABLA COMPARATIVA DE MODELOS
            </h3>
            <div className="rounded-xl border border-gray-600 overflow-hidden bg-[#1a202c]/80">
              <Table>
                <TableHeader>
                  <TableRow className="border-gray-600 hover:bg-transparent">
                    <TableHead className="text-[#f6e05e] font-bold text-xs uppercase text-center border-r border-gray-600">CARACTERÍSTICA</TableHead>
                    <TableHead className="text-[#f6e05e] font-bold text-xs uppercase text-center border-r border-gray-600">EXPRESS</TableHead>
                    <TableHead className="text-[#f6e05e] font-bold text-xs uppercase text-center border-r border-gray-600">LOWCOST</TableHead>
                    <TableHead className="text-[#f6e05e] font-bold text-xs uppercase text-center border-r border-gray-600">CTA. CORRIENTE</TableHead>
                    <TableHead className="text-[#f6e05e] font-bold text-xs uppercase text-center border-r border-gray-600">FLEX (ML)</TableHead>
                    <TableHead className="text-[#f6e05e] font-bold text-xs uppercase text-center">E-COMMERCE 3PL</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="text-center font-medium">
                  {[
                    { char: "Estructura Tarifa", exp: "Zonificada", low: "Zonificada", cta: "Tarifa LowCost", flex: "Por Nivel", ecom: "Tarifa Plana" },
                    { char: "Rango Horario", exp: "Sí (Elección)", low: "No (Abierto)", cta: "Sí (Beneficio)", flex: "No (Hasta 20h)", ecom: "No (Abierto)" },
                    { char: "Corte Pedidos", exp: "Hasta 15hs", low: "Hasta 13hs", cta: "Hasta 15hs", flex: "Hasta 15hs", ecom: "Hasta 15hs" },
                    { char: "Anticipación", exp: "2 Horas", low: "2 Horas", cta: "2 Horas", flex: "N/A", ecom: "Fulfillment" },
                    { char: "Pago Destino", exp: "Sí (Gratis)", low: "Sí (Gratis)", cta: "Sí (Gratis)", flex: "N/A", ecom: "Sí (Gratis)" },
                    { char: "2da Visita", exp: "100%", low: "100%", cta: "50% Valor", flex: "50% a S/C", ecom: "100% Bonif." }
                  ].map((row, i) => (
                    <TableRow key={i} className="border-gray-700/50 hover:bg-white/5">
                      <TableCell className="font-bold text-white text-[10px] uppercase border-r border-gray-600 text-left px-4">{row.char}</TableCell>
                      <TableCell className="text-gray-300 text-[11px] border-r border-gray-600">{row.exp}</TableCell>
                      <TableCell className="text-gray-300 text-[11px] border-r border-gray-600">{row.low}</TableCell>
                      <TableCell className="text-[#f6e05e] text-[11px] border-r border-gray-600 font-bold">{row.cta}</TableCell>
                      <TableCell className="text-gray-300 text-[11px] border-r border-gray-600">{row.flex}</TableCell>
                      <TableCell className="text-[#48bb78] text-[11px] font-bold">{row.ecom}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="mt-auto pt-6 flex justify-between items-center text-gray-500 text-[11px] font-bold uppercase tracking-widest border-t border-gray-700/50">
          <p>Modelos Operativos Comparados</p>
          <p>{pageNumber} / {totalPageCount}</p>
        </footer>
      </div>
    </A4Page>
  );
};
