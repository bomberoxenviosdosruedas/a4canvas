import React from 'react';
import { A4Page } from '@/components/A4Page';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Wallet, Info, FileCheck, ShieldCheck, Landmark } from 'lucide-react';

export const PricingPage = ({ pageNumber, totalPageCount }: { pageNumber: number, totalPageCount: number }) => {
  const chartData = [
    { name: 'Transporte', value: 4500 },
    { name: 'Tecnología', value: 2000 },
    { name: 'Seguros', value: 1500 },
    { name: 'Admin', value: 800 },
  ];

  const COLORS = ['#F59E0B', '#B45309', '#78350F', '#451A03'];

  return (
    <A4Page pageNumber={pageNumber} totalPageCount={totalPageCount} className="tech-pattern">
      <div className="scanline opacity-5" />
      
      <header className="mb-12 border-b-2 border-primary/30 pb-10 flex justify-between items-end">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="h-0.5 w-16 bg-primary" />
            <p className="text-[10px] font-headline font-bold text-primary uppercase tracking-[0.4em]">Propuesta Final: Página de Inversión</p>
          </div>
          <h2 className="font-headline text-6xl font-black tracking-tighter leading-none">RESUMEN DE <br/><span className="text-primary italic">INVERSIÓN</span></h2>
        </div>
        <div className="text-right flex flex-col items-end gap-2">
           <div className="bg-secondary p-3 rounded-lg border border-white/5 flex items-center gap-4">
              <Landmark className="text-primary w-5 h-5" />
              <div>
                <p className="text-[8px] font-headline text-muted-foreground uppercase font-bold tracking-widest">Moneda</p>
                <p className="text-sm font-black font-headline">USD / DÓLARES</p>
              </div>
           </div>
        </div>
      </header>

      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-8">
          <div className="bg-secondary/30 border border-white/10 rounded-2xl overflow-hidden shadow-2xl relative">
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-[60px] pointer-events-none" />
            <div className="px-8 py-6 bg-primary flex justify-between items-center">
              <h3 className="font-headline font-black text-sm uppercase tracking-[0.2em] text-background flex items-center gap-3">
                <Wallet className="w-5 h-5" /> Estructura de Costos Operativos
              </h3>
              <div className="px-3 py-1 bg-background/20 rounded-full font-headline font-bold text-[9px] text-background">Q4 - 2025</div>
            </div>
            <Table>
              <TableHeader>
                <TableRow className="border-white/10 hover:bg-transparent">
                  <TableHead className="text-foreground/60 text-[10px] uppercase font-black tracking-widest px-8">CONCEPTO ESTRATÉGICO</TableHead>
                  <TableHead className="text-foreground/60 text-[10px] uppercase font-black tracking-widest text-right px-8">INVERSIÓN MENSUAL</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { c: "Distribución 'Last Mile'", v: "$4,500.00", d: "Flota ágil dedicada 100% al servicio." },
                  { c: "Soporte Tecnológico IA", v: "$2,000.00", d: "Dashboard de analítica en tiempo real." },
                  { c: "Pólizas de Seguro Integral", v: "$1,500.00", d: "Cobertura total de carga ante siniestros." },
                  { c: "Gestión Administrativa", v: "$800.00", d: "Soporte operativo y atención 24/7." }
                ].map((row, i) => (
                  <TableRow key={i} className="border-white/5 hover:bg-white/5 group">
                    <TableCell className="py-6 px-8">
                      <p className="font-headline font-black text-base text-foreground group-hover:text-primary transition-colors">{row.c}</p>
                      <p className="text-[10px] text-muted-foreground mt-1 font-medium italic opacity-70">{row.d}</p>
                    </TableCell>
                    <TableCell className="text-right font-headline font-black text-xl text-primary px-8">{row.v}</TableCell>
                  </TableRow>
                ))}
                <TableRow className="bg-primary/5 hover:bg-primary/10 border-t-4 border-primary">
                  <TableCell className="py-8 px-8">
                    <p className="font-headline font-black text-2xl uppercase tracking-tighter">TOTAL ESTIMADO</p>
                    <p className="text-[9px] text-primary font-bold uppercase tracking-widest">Inversión neta mensual</p>
                  </TableCell>
                  <TableCell className="text-right py-8 px-8">
                    <div className="font-headline font-black text-4xl text-primary drop-shadow-[0_0_10px_rgba(245,158,11,0.3)]">$8,800.00</div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>

        <div className="col-span-4 flex flex-col gap-6">
          <div className="p-8 bg-card border border-white/5 rounded-3xl flex-1 flex flex-col items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/5 opacity-50" />
            <h4 className="text-[10px] font-headline font-black uppercase tracking-[0.3em] text-primary mb-8 text-center relative z-10">Análisis Presupuestario</h4>
            <div className="h-48 w-full relative z-10">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    innerRadius={55}
                    outerRadius={85}
                    paddingAngle={6}
                    dataKey="value"
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex items-center justify-center flex-col pointer-events-none">
                <p className="text-[9px] font-headline font-black text-muted-foreground uppercase">Mix</p>
                <p className="text-lg font-headline font-black text-primary">EDR</p>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-4 w-full relative z-10">
              {chartData.map((entry, i) => (
                <div key={i} className="flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full" style={{backgroundColor: COLORS[i]}} />
                    <span className="text-[9px] font-headline font-black uppercase text-foreground/60 group-hover:text-foreground transition-colors">{entry.name}</span>
                  </div>
                  <span className="text-[10px] font-mono text-primary font-bold">{Math.round((entry.value/8800)*100)}%</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 bg-primary rounded-3xl text-background relative overflow-hidden group">
            <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-500" />
            <div className="flex items-start gap-5 relative z-10">
              <div className="bg-background/20 p-3 rounded-xl">
                <Info className="w-6 h-6" />
              </div>
              <div>
                <p className="font-headline font-black text-sm uppercase tracking-widest mb-2">Cláusula de Validez</p>
                <p className="text-[11px] font-body leading-relaxed font-medium opacity-90">
                  Precios sujetos a revisión trimestral según fluctuación de costos de combustible y volumen operativo garantizado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-auto space-y-8">
        <div className="p-10 border-2 border-dashed border-primary/30 rounded-[40px] bg-secondary/10 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl group-hover:bg-primary/10 transition-colors" />
          <div className="flex items-center justify-between gap-16 relative z-10">
            <div className="max-w-xl">
              <h3 className="font-headline text-3xl font-black mb-4 flex items-center gap-4">
                <ShieldCheck className="text-primary w-8 h-8" /> Compromiso de Calidad SLA
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                Nuestra propuesta técnica y financiera garantiza un cumplimiento del <span className="text-primary font-bold">98% en entregas urbanas</span> para Corporativo Express S.A. Estamos preparados para el despliegue operativo inmediato en Fase 1.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center bg-card p-6 rounded-2xl border border-white/10 shadow-xl">
              <div className="p-4 bg-primary/10 rounded-full mb-3">
                <FileCheck className="w-10 h-10 text-primary" />
              </div>
              <p className="text-[10px] font-headline font-black uppercase tracking-[0.3em] text-primary text-center">APROBACIÓN REQUERIDA</p>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center px-6">
          <div className="flex items-center gap-6">
            <div className="text-[10px] text-muted-foreground uppercase font-black tracking-[0.3em]">Envíos DosRuedas © 2025</div>
            <div className="h-px w-20 bg-white/10" />
            <div className="text-[9px] text-primary font-mono">HASH: F892-X12-09</div>
          </div>
          <div className="flex gap-2">
             <div className="w-2 h-2 rounded-full bg-primary" />
             <div className="w-2 h-2 rounded-full bg-primary/40" />
             <div className="w-2 h-2 rounded-full bg-primary/20" />
          </div>
        </div>
      </div>
    </A4Page>
  );
};