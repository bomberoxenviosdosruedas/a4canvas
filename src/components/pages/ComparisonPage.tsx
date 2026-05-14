import React from 'react';
import { A4Page } from '@/components/A4Page';
import Image from 'next/image';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const LOGO_URL = "https://xnarosypsowmisjcevsi.supabase.co/storage/v1/object/public/enviosadmindosruedas/logo.png";

export const ComparisonPage = ({ pageNumber, totalPageCount }: { pageNumber: number, totalPageCount: number }) => {
  return (
    <A4Page pageNumber={pageNumber} totalPageCount={totalPageCount}>
      {/* Header */}
      <header className="flex justify-between items-center w-full pb-8 border-b border-white/5 mb-10">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full border border-white/10 p-1 bg-background relative flex items-center justify-center">
            <Image src={LOGO_URL} alt="Logo" fill className="object-contain p-1.5" />
          </div>
          <h1 className="text-2xl font-black italic tracking-tighter text-white uppercase">ENVÍOS <span className="text-primary">DOSRUEDAS</span></h1>
        </div>
        <div className="border border-primary text-primary px-5 py-2 rounded-full text-[10px] font-black tracking-[0.2em] uppercase box-glow">
          RESUMEN EJECUTIVO
        </div>
      </header>

      {/* Main Content */}
      <div className="space-y-12">
        {/* Cobranzas Section */}
        <section className="bg-card/50 backdrop-blur-xl rounded-2xl p-10 border border-primary/20 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-primary/5 to-transparent pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-3xl font-black text-white flex items-center gap-5 mb-3 uppercase tracking-tighter italic">
              <span className="w-12 h-12 rounded-full border-2 border-primary text-primary flex items-center justify-center text-2xl font-black not-italic">$</span>
              GESTIÓN DE COBRANZAS EN DESTINO
            </h2>
            <p className="text-primary font-black tracking-[0.2em] mb-8 uppercase text-xs italic">
              (SERVICIO DE CONTRAREMBOLSO INTEGRADO)
            </p>
            <div className="space-y-6 text-gray-300 leading-relaxed text-base font-medium italic">
              <p>
                Para potenciar sus canales de venta, nos encargamos de recaudar el valor de sus productos al momento de la entrega en la puerta de su cliente. Garantizamos una transacción <strong className="text-white not-italic">profesional, ágil y segura</strong>.
              </p>
              <p>
                La rendición de los fondos se realiza con la agilidad que su caja requiere (en el día, a las 24hs o semanalmente) mediante transferencia bancaria o efectivo, siempre acompañada de un <strong className="text-white not-italic">arqueo detallado</strong>.
              </p>
              <p className="text-muted-foreground text-xs border-l-2 border-primary/40 pl-4 mt-8 not-italic">
                * Nota de seguridad: El valor físico transportado corre por cuenta y orden del cliente solicitante.
              </p>
            </div>
          </div>
        </section>

        {/* Table Section */}
        <section>
          <h3 className="text-xl font-black text-primary text-center mb-8 uppercase tracking-[0.3em] italic">
            TABLA COMPARATIVA DE MODELOS
          </h3>
          <div className="rounded-2xl border border-white/5 overflow-hidden bg-card/30 shadow-2xl">
            <Table>
              <TableHeader>
                <TableRow className="border-white/10 hover:bg-transparent bg-background/50">
                  <TableHead className="text-primary font-black text-[10px] uppercase text-center border-r border-white/5 px-4 h-14">CARACTERÍSTICA</TableHead>
                  <TableHead className="text-white font-black text-[10px] uppercase text-center border-r border-white/5 px-4 h-14">EXPRESS</TableHead>
                  <TableHead className="text-white font-black text-[10px] uppercase text-center border-r border-white/5 px-4 h-14">LOWCOST</TableHead>
                  <TableHead className="text-primary font-black text-[10px] uppercase text-center border-r border-white/5 px-4 h-14 bg-primary/5 italic">CTA. CORRIENTE</TableHead>
                  <TableHead className="text-white font-black text-[10px] uppercase text-center border-r border-white/5 px-4 h-14">FLEX (ML)</TableHead>
                  <TableHead className="text-[#4ade80] font-black text-[10px] uppercase text-center px-4 h-14">E-COMMERCE 3PL</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="text-center font-medium">
                {[
                  { char: "Estructura Tarifa", exp: "Zonificada", low: "Zonificada", cta: "Tarifa LowCost", flex: "Por Nivel", ecom: "Tarifa Plana" },
                  { char: "Rango Horario", exp: "Sí (Elección)", low: "No (Abierto)", cta: "Sí (Beneficio)", flex: "No (Hasta 20h)", ecom: "No (Abierto)" },
                  { char: "Corte Pedidos", exp: "15:00hs", low: "13:00hs", cta: "15:00hs", flex: "15:00hs", ecom: "15:00hs" },
                  { char: "Anticipación", exp: "2 Horas", low: "2 Horas", cta: "2 Horas", flex: "N/A", ecom: "Fulfillment" },
                  { char: "Pago Destino", exp: "Sí (Gratis)", low: "Sí (Gratis)", cta: "Sí (Gratis)", flex: "N/A", ecom: "Sí (Gratis)" },
                  { char: "2da Visita", exp: "100%", low: "100%", cta: "50% Valor", flex: "Según Nivel", ecom: "100% Bonif." }
                ].map((row, i) => (
                  <TableRow key={i} className="border-white/5 hover:bg-white/[0.02]">
                    <TableCell className="font-black text-white text-[9px] uppercase border-r border-white/5 text-left px-6 py-4">{row.char}</TableCell>
                    <TableCell className="text-muted-foreground text-[10px] border-r border-white/5">{row.exp}</TableCell>
                    <TableCell className="text-muted-foreground text-[10px] border-r border-white/5">{row.low}</TableCell>
                    <TableCell className="text-primary text-[10px] border-r border-white/5 font-black bg-primary/5 italic">{row.cta}</TableCell>
                    <TableCell className="text-muted-foreground text-[10px] border-r border-white/5">{row.flex}</TableCell>
                    <TableCell className="text-[#4ade80] text-[10px] font-black italic">{row.ecom}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>
      </div>
    </A4Page>
  );
};
