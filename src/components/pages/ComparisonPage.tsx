import React from 'react';
import { A4Page } from '@/components/A4Page';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { DollarSign, AlertCircle } from 'lucide-react';

export const ComparisonPage = ({ pageNumber, totalPageCount }: { pageNumber: number, totalPageCount: number }) => {
  return (
    <A4Page pageNumber={pageNumber} totalPageCount={totalPageCount} className="p-0">
      <div className="relative h-full flex flex-col p-[12mm] px-[15mm]">
        {/* Header */}
        <header className="flex justify-between items-center mb-10 pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center border border-white/20">
               <span className="text-[8px] text-white/40 font-bold uppercase leading-tight text-center">envíos<br/>dosruedas</span>
            </div>
            <h1 className="text-2xl font-black italic tracking-wider text-white uppercase">
              ENVÍOS <span className="text-primary">DOSRUEDAS</span>
            </h1>
          </div>
          <div className="border border-primary text-primary px-4 py-1.5 rounded-sm text-[10px] font-black tracking-wider uppercase shadow-[0_0_15px_rgba(255,193,7,0.2)]">
            RESUMEN EJECUTIVO
          </div>
        </header>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Cobranzas Section */}
          <section className="bg-card/40 backdrop-blur-md rounded-xl p-8 border border-green-500/30 relative overflow-hidden shadow-[0_0_20px_rgba(34,197,94,0.1)]">
            <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-green-500/10 to-transparent pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-black text-white flex items-center gap-4 mb-2 uppercase italic tracking-tight">
                <div className="w-10 h-10 rounded-full border-2 border-green-500 text-green-500 flex items-center justify-center text-xl font-black shadow-[0_0_10px_rgba(34,197,94,0.4)]">
                  $
                </div>
                GESTIÓN DE COBRANZAS EN DESTINO
              </h2>
              <p className="text-green-500 font-black tracking-[0.2em] mb-6 uppercase text-[10px]">
                (SERVICIO DE CONTRAREMBOLSO EN COSTO)
              </p>
              <div className="space-y-4 text-[#d4c5ab] leading-relaxed text-sm font-medium">
                <p>
                  Para potenciar sus canales de venta, nos encargamos de recaudar el valor de sus productos al momento de la entrega en la puerta de su cliente. Garantizamos una transacción profesional y segura.
                </p>
                <p>
                  La rendición de los fondos se realiza con la agilidad que su caja requiere (en el día, a las 24hs o semanalmente) mediante transferencia bancaria o efectivo, siempre acompañada de un arqueo detallado.
                </p>
                <p className="text-white/40 italic text-[11px] mt-6 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
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
            <div className="rounded-sm border border-white/10 overflow-hidden bg-card/20 backdrop-blur-sm shadow-2xl">
              <Table>
                <TableHeader>
                  <TableRow className="border-white/10 hover:bg-transparent bg-white/5">
                    <TableHead className="text-primary text-[10px] font-black uppercase tracking-widest text-center border-r border-white/10">CARACTERÍSTICA</TableHead>
                    <TableHead className="text-primary text-[10px] font-black uppercase tracking-widest text-center border-r border-white/10">EXPRESS</TableHead>
                    <TableHead className="text-primary text-[10px] font-black uppercase tracking-widest text-center border-r border-white/10">LOWCOST</TableHead>
                    <TableHead className="text-primary text-[10px] font-black uppercase tracking-widest text-center border-r border-white/10">CTA. CORRIENTE</TableHead>
                    <TableHead className="text-primary text-[10px] font-black uppercase tracking-widest text-center border-r border-white/10">FLEX (ML)</TableHead>
                    <TableHead className="text-primary text-[10px] font-black uppercase tracking-widest text-center">E-COMMERCE 3PL</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="text-center">
                  {[
                    { char: "Estructura Tarifa", exp: "Zonificada", low: "Zonificada", cta: "Tarifa LowCost", flex: "Por Nivel", ecom: "Tarifa Plana" },
                    { char: "Rango Horario", exp: "Sí (Elección)", low: "No (Abierto)", cta: "Sí (Beneficio)", flex: "No (Hasta 20h)", ecom: "No (Abierto)" },
                    { char: "Corte Pedidos", exp: "Hasta 15hs", low: "Hasta 13hs", cta: "Hasta 15hs", flex: "Hasta 15hs", ecom: "Hasta 15hs" },
                    { char: "Anticipación", exp: "2 Horas", low: "2 Horas", cta: "2 Horas", flex: "N/A", ecom: "N/A" },
                    { char: "Pago Destino", exp: "Sí (Gratis)", low: "Sí (Gratis)", cta: "Sí (Gratis)", flex: "N/A", ecom: "Sí (Gratis)" },
                    { char: "2da Visita", exp: "100% (Nuevo)", low: "100% (Nuevo)", cta: "50% Valor", flex: "50% a Bonif.", ecom: "100% Bonif." }
                  ].map((row, i) => (
                    <TableRow key={i} className="border-white/5 hover:bg-white/5 transition-colors">
                      <TableCell className="font-bold text-white text-[10px] uppercase border-r border-white/10 text-left px-4">{row.char}</TableCell>
                      <TableCell className="text-[#d4c5ab] text-[11px] border-r border-white/10 font-medium">{row.exp}</TableCell>
                      <TableCell className="text-[#d4c5ab] text-[11px] border-r border-white/10 font-medium">{row.low}</TableCell>
                      <TableCell className="text-primary text-[11px] border-r border-white/10 font-black">{row.cta}</TableCell>
                      <TableCell className="text-[#d4c5ab] text-[11px] border-r border-white/10 font-medium">{row.flex}</TableCell>
                      <TableCell className="text-green-500 text-[11px] font-black">{row.ecom}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="mt-auto pt-4 border-t border-white/5 flex justify-between items-center text-[#d4c5ab] font-mono text-[10px] font-bold uppercase tracking-widest">
          <p>Modelos Operativos Comparados</p>
          <p>{pageNumber} / {totalPageCount}</p>
        </footer>
      </div>
    </A4Page>
  );
};
