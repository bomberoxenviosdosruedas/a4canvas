import React from 'react';
import { A4Page } from '@/components/A4Page';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { Wallet, Info, FileCheck } from 'lucide-react';

export const PricingPage = ({ pageNumber, totalPageCount }: { pageNumber: number, totalPageCount: number }) => {
  const data = [
    { name: 'Transporte', value: 4500 },
    { name: 'Tecnología', value: 2000 },
    { name: 'Seguros', value: 1500 },
    { name: 'Admin', value: 800 },
  ];

  const COLORS = ['#F59E0B', '#B45309', '#78350F', '#451A03'];

  return (
    <A4Page pageNumber={pageNumber} totalPageCount={totalPageCount} className="tech-pattern">
      <header className="mb-8">
        <div className="flex items-center gap-4 mb-2">
          <div className="h-1 w-12 bg-primary" />
          <p className="text-[10px] font-headline font-bold text-primary uppercase tracking-[0.3em]">Página 08 | Conclusión</p>
        </div>
        <h2 className="font-headline text-4xl font-bold tracking-tight">RESUMEN DE <span className="text-primary">INVERSIÓN</span></h2>
      </header>

      <div className="grid grid-cols-12 gap-8 mb-8">
        <div className="col-span-7">
          <div className="bg-secondary/40 border border-white/5 rounded-2xl overflow-hidden">
            <div className="p-4 bg-primary text-background flex justify-between items-center">
              <h3 className="font-headline font-bold text-sm uppercase tracking-wider flex items-center gap-2">
                <Wallet className="w-4 h-4" /> Detalle de Costos Operativos
              </h3>
              <span className="text-[10px] font-bold">PROPUESTA Q4-2025</span>
            </div>
            <Table>
              <TableHeader>
                <TableRow className="border-white/5 hover:bg-transparent">
                  <TableHead className="text-muted-foreground text-[10px] uppercase font-bold">Concepto</TableHead>
                  <TableHead className="text-muted-foreground text-[10px] uppercase font-bold text-right">Inversión Mensual</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { c: "Distribución 'Last Mile'", v: "$4,500.00", d: "Flota ágil dedicada" },
                  { c: "Soporte Tecnológico IA", v: "$2,000.00", d: "Dashboard en tiempo real" },
                  { c: "Pólizas de Seguro Integral", v: "$1,500.00", d: "Cobertura total de carga" },
                  { c: "Gestión Administrativa", v: "$800.00", d: "Atención 24/7" }
                ].map((row, i) => (
                  <TableRow key={i} className="border-white/5 hover:bg-primary/5">
                    <TableCell className="py-4">
                      <p className="font-headline font-bold text-sm text-foreground">{row.c}</p>
                      <p className="text-[9px] text-muted-foreground italic">{row.d}</p>
                    </TableCell>
                    <TableCell className="text-right font-headline font-bold text-primary">{row.v}</TableCell>
                  </TableRow>
                ))}
                <TableRow className="bg-primary/10 hover:bg-primary/20 border-t-2 border-primary">
                  <TableCell className="py-4 font-headline font-black text-lg">TOTAL ESTIMADO</TableCell>
                  <TableCell className="text-right font-headline font-black text-2xl text-primary">$8,800.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>

        <div className="col-span-5 flex flex-col gap-6">
          <div className="p-6 bg-secondary/30 border border-white/5 rounded-2xl flex-1 flex flex-col items-center justify-center">
            <h4 className="text-[10px] font-headline font-bold uppercase tracking-widest text-primary mb-6">Distribución Presupuestaria</h4>
            <div className="h-40 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    innerRadius={45}
                    outerRadius={70}
                    paddingAngle={8}
                    dataKey="value"
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2">
              {data.map((entry, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{backgroundColor: COLORS[i]}} />
                  <span className="text-[9px] font-headline font-bold uppercase text-muted-foreground">{entry.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-5 bg-primary rounded-2xl text-background">
            <div className="flex items-start gap-4">
              <div className="bg-background/20 p-2 rounded-lg">
                <Info className="w-5 h-5" />
              </div>
              <div>
                <p className="font-headline font-black text-xs uppercase tracking-wider mb-1">Nota Importante</p>
                <p className="text-[10px] font-body leading-relaxed opacity-90">
                  Valores expresados en USD. Sujetos a revisión semestral basada en el volumen de envíos proyectado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-auto space-y-6">
        <div className="p-8 border-2 border-dashed border-primary/20 rounded-3xl bg-secondary/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16" />
          <div className="flex items-center justify-between gap-12 relative z-10">
            <div className="max-w-md">
              <h3 className="font-headline text-xl font-bold mb-2">Compromiso de Calidad</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Nuestra propuesta garantiza un SLA del 98% en todas las entregas urbanas para Corporativo Express S.A. Estamos listos para iniciar la fase de implementación inmediata.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-3 bg-primary/20 rounded-2xl mb-2">
                <FileCheck className="w-8 h-8 text-primary" />
              </div>
              <p className="text-[10px] font-headline font-black uppercase tracking-widest text-primary">Listo para firma</p>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center px-4">
          <div className="text-[9px] text-muted-foreground uppercase font-bold tracking-[0.2em]">Envíos DosRuedas © 2025</div>
          <div className="flex gap-1">
             <div className="w-1.5 h-1.5 rounded-full bg-primary" />
             <div className="w-4 h-1.5 rounded-full bg-primary/30" />
          </div>
        </div>
      </div>
    </A4Page>
  );
};