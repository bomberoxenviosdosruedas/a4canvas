import React from 'react';
import { A4Page } from '@/components/A4Page';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Wallet, Landmark, FileCheck } from 'lucide-react';

export const PricingPage = ({ pageNumber, totalPageCount }: { pageNumber: number, totalPageCount: number }) => {
  return (
    <A4Page pageNumber={pageNumber} totalPageCount={totalPageCount}>
      <header className="mb-12 border-b border-primary/20 pb-8 flex justify-between items-end">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-1 bg-primary" />
            <p className="text-[10px] font-mono font-bold text-primary uppercase tracking-[0.5em]">Módulo 08 / Inversión</p>
          </div>
          <h2 className="font-headline text-5xl font-black italic tracking-tighter leading-none text-white uppercase">
            RESUMEN DE <span className="text-primary">INVERSIÓN</span>
          </h2>
        </div>
        <div className="text-right">
          <div className="bg-muted px-4 py-2 rounded-lg flex items-center gap-3">
            <Landmark className="text-primary w-4 h-4" />
            <span className="font-mono text-[10px] font-bold tracking-widest uppercase">Moneda: ARS / PESOS</span>
          </div>
        </div>
      </header>

      <div className="industrial-card-glow overflow-hidden mb-12">
        <div className="bg-primary px-8 py-4 flex justify-between items-center">
          <h3 className="font-headline font-black text-xs uppercase tracking-[0.3em] text-background flex items-center gap-3">
            <Wallet className="w-4 h-4" /> Estructura Operativa Mensual
          </h3>
          <span className="text-[9px] font-mono font-bold text-background opacity-80 uppercase tracking-widest">Periodo 2026</span>
        </div>
        <Table>
          <TableHeader>
            <TableRow className="border-white/5 hover:bg-transparent">
              <TableHead className="text-primary/60 text-[10px] uppercase font-black tracking-widest px-8">CONCEPTO ESTRATÉGICO</TableHead>
              <TableHead className="text-primary/60 text-[10px] uppercase font-black tracking-widest text-right px-8">INVERSIÓN ESTIMADA</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              { c: "Distribución Last-Mile (Zona Centro)", v: "$1.450.000", d: "Flota dedicada con monitoreo 24/7." },
              { c: "Gestión de Micro-Hubs Urbanos", v: "$850.000", d: "Almacenamiento dinámico y cross-docking." },
              { c: "Soporte Tecnológico y API Sync", v: "$320.000", d: "Integración directa con sus sistemas." },
              { c: "Seguro de Carga y Contingencias", v: "$180.000", d: "Cobertura total ante cualquier incidencia." }
            ].map((row, i) => (
              <TableRow key={i} className="border-white/5 hover:bg-white/5 transition-colors group">
                <TableCell className="py-6 px-8">
                  <p className="font-headline font-bold text-base text-white group-hover:text-primary transition-colors">{row.c}</p>
                  <p className="text-[10px] text-muted-foreground mt-1 font-medium italic">{row.d}</p>
                </TableCell>
                <TableCell className="text-right font-headline font-black text-xl text-primary px-8">{row.v}</TableCell>
              </TableRow>
            ))}
            <TableRow className="bg-primary/5 hover:bg-primary/10 border-t-2 border-primary">
              <TableCell className="py-8 px-8">
                <p className="font-headline font-black text-2xl uppercase tracking-tight text-white">INVERSIÓN NETA TOTAL</p>
                <p className="text-[9px] text-primary font-bold uppercase tracking-widest">Cálculo basado en volumen base</p>
              </TableCell>
              <TableCell className="text-right py-8 px-8">
                <div className="font-headline font-black text-4xl text-primary text-shadow-gold">$2.800.000</div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div className="p-10 border-2 border-dashed border-primary/30 rounded-[2rem] bg-card/40 flex items-center justify-between gap-12">
        <div className="flex-1 space-y-4">
          <h4 className="font-headline text-2xl font-black text-white flex items-center gap-4">
            <FileCheck className="text-primary w-6 h-6" /> COMPROMISO DE CALIDAD
          </h4>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Esta propuesta técnica y financiera garantiza un cumplimiento del <span className="text-primary font-bold">98.5% en entregas efectivas</span>. Los valores están sujetos a revisión trimestral según variables de mercado y escala operativa.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center p-6 border border-primary/20 rounded-xl bg-background/60 w-48">
          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-3">
             <div className="w-6 h-6 border-2 border-primary rounded-full animate-ping" />
          </div>
          <span className="text-[8px] font-mono font-bold text-primary uppercase tracking-[0.3em] text-center leading-tight">ESPERANDO APROBACIÓN</span>
        </div>
      </div>
    </A4Page>
  );
};