"use client";

import React, { useState } from 'react';
import { CoverPage } from '@/components/pages/CoverPage';
import { LogisticsInfoPage } from '@/components/pages/LogisticsInfoPage';
import { PricingPage } from '@/components/pages/PricingPage';
import { ContentPage } from '@/components/pages/ContentPage';
import { Button } from '@/components/ui/button';
import { FileText, Printer, Sparkles, Plus, Trash2, Layout, Wallet, Layers } from 'lucide-react';
import { aiLayoutOptimizer, AILayoutOptimizerOutput } from '@/ai/flows/ai-layout-optimizer';

type PageType = 'cover' | 'info' | 'pricing' | 'ai';

interface ProposalPage {
  id: string;
  type: PageType;
  layout?: AILayoutOptimizerOutput;
}

export default function A4CanvasApp() {
  const [pages, setPages] = useState<ProposalPage[]>([
    { id: '1', type: 'cover' },
    { id: '2', type: 'info' },
    { id: '3', type: 'info' }, // Duplicate info to simulate page 2 and 3
    { id: '4', type: 'pricing' }
  ]);
  const [optimizing, setOptimizing] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const addAIPage = async () => {
    setOptimizing(true);
    try {
      const suggested = await aiLayoutOptimizer({
        proposalText: "RESUMEN EJECUTIVO: Nuestra red logística 'DosRuedas' ha implementado nuevos nodos de distribución en el área metropolitana. Esto reduce el tiempo de 'last mile' en un 25%. \n\n BENEFICIOS CLAVE:\n 1. Menor huella de carbono.\n 2. Entregas en menos de 45 minutos.\n 3. Seguro integral incluido por paquete hasta $1,000 USD.",
        pageNumber: pages.length + 1,
        totalPageCount: pages.length + 1,
        documentType: "Logistics Proposal for Envíos DosRuedas",
        designGoals: ["Professional", "High contrast", "Executive summary"],
        attachedImages: []
      });

      setPages([...pages, { id: Date.now().toString(), type: 'ai', layout: suggested }]);
    } catch (error) {
      console.error("AI Layout Failed", error);
    } finally {
      setOptimizing(false);
    }
  };

  const removePage = (id: string) => {
    if (pages.length <= 1) return;
    setPages(pages.filter(p => p.id !== id));
  };

  return (
    <div className="min-h-screen bg-background pb-20 overflow-x-hidden">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 h-20 translucent-slate z-50 border-b border-white/10 px-8 flex items-center justify-between no-print">
        <div className="flex items-center gap-6">
          <div className="bg-primary p-2.5 rounded-xl logistics-glow">
            <Layers className="text-background w-6 h-6" />
          </div>
          <div>
            <h1 className="font-headline font-black text-xl tracking-tighter">A4 CANVAS <span className="text-primary italic">V4</span></h1>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <p className="text-[10px] text-primary/80 uppercase tracking-[0.3em] font-black">Sistema de Propuestas Dinámicas</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button 
            variant="outline" 
            size="sm" 
            className="border-primary/30 hover:bg-primary/10 text-xs font-bold uppercase tracking-widest px-6 h-10"
            onClick={addAIPage}
            disabled={optimizing}
          >
            {optimizing ? (
              <Sparkles className="w-4 h-4 mr-3 animate-spin text-primary" />
            ) : (
              <Sparkles className="w-4 h-4 mr-3 text-primary" />
            )}
            Generar con AI
          </Button>
          <Button 
            variant="default" 
            size="sm" 
            className="bg-primary hover:bg-primary/90 text-background font-black shadow-2xl shadow-primary/30 px-6 h-10 uppercase tracking-widest text-xs"
            onClick={handlePrint}
          >
            <Printer className="w-4 h-4 mr-3" />
            Exportar Proposal
          </Button>
        </div>
      </nav>

      {/* Pages Container */}
      <main className="pt-32 flex flex-col items-center gap-20">
        {pages.map((page, index) => (
          <div key={page.id} className="relative group/page">
            {/* Page Controls Overlay */}
            <div className="absolute -left-20 top-0 flex flex-col gap-4 no-print opacity-0 group-hover/page:opacity-100 transition-all duration-300 transform translate-x-4 group-hover/page:translate-x-0">
              <Button 
                variant="destructive" 
                size="icon" 
                className="rounded-xl w-12 h-12 shadow-2xl border border-white/10"
                onClick={() => removePage(page.id)}
              >
                <Trash2 className="w-5 h-5" />
              </Button>
            </div>

            {/* Render proper page component based on type */}
            {page.type === 'cover' && <CoverPage pageNumber={index + 1} totalPageCount={pages.length} />}
            {page.type === 'info' && <LogisticsInfoPage pageNumber={index + 1} totalPageCount={pages.length} />}
            {page.type === 'pricing' && <PricingPage pageNumber={index + 1} totalPageCount={pages.length} />}
            {page.type === 'ai' && <ContentPage pageNumber={index + 1} totalPageCount={pages.length} layout={page.layout} />}
          </div>
        ))}
        
        {/* Add Page Button */}
        <div className="py-12 no-print flex gap-8">
           <Button 
            variant="ghost" 
            className="text-muted-foreground hover:text-primary transition-all flex flex-col gap-6 h-auto py-12 px-16 border-2 border-dashed border-white/5 hover:border-primary/50 bg-white/[0.02] hover:bg-primary/[0.03] rounded-3xl"
            onClick={() => setPages([...pages, { id: Date.now().toString(), type: 'info' }])}
           >
              <Plus className="w-16 h-16 stroke-[1px] rounded-full p-4 border-2 border-dashed border-current transition-transform group-hover:rotate-90" />
              <span className="font-headline uppercase tracking-[0.4em] text-xs font-black">Añadir Módulo Operativo</span>
           </Button>
           
           <Button 
            variant="ghost" 
            className="text-muted-foreground hover:text-primary transition-all flex flex-col gap-6 h-auto py-12 px-16 border-2 border-dashed border-white/5 hover:border-primary/50 bg-white/[0.02] hover:bg-primary/[0.03] rounded-3xl"
            onClick={() => setPages([...pages, { id: Date.now().toString(), type: 'pricing' }])}
           >
              <Wallet className="w-16 h-16 stroke-[1px] rounded-full p-4 border-2 border-dashed border-current transition-transform group-hover:scale-110" />
              <span className="font-headline uppercase tracking-[0.4em] text-xs font-black">Añadir Módulo Inversión</span>
           </Button>
        </div>
      </main>

      {/* Corporate Badge Overlay */}
      <div className="fixed bottom-10 left-10 no-print pointer-events-none opacity-50 hover:opacity-100 transition-all">
        <div className="text-[10px] font-headline font-black text-primary border border-primary/30 px-6 py-3 rounded-full translucent-slate shadow-2xl flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span>ENVÍOS DOSRUEDAS © 2025 | LOGISTICS CORE V4</span>
        </div>
      </div>
    </div>
  );
}
