"use client";

import React, { useState, useEffect } from 'react';
import { CoverPage } from '@/components/pages/CoverPage';
import { LogisticsInfoPage } from '@/components/pages/LogisticsInfoPage';
import { ContentPage } from '@/components/pages/ContentPage';
import { Button } from '@/components/ui/button';
import { FileText, Printer, Sparkles, Plus, Trash2 } from 'lucide-react';
import { aiLayoutOptimizer, AILayoutOptimizerOutput } from '@/ai/flows/ai-layout-optimizer';

export default function A4CanvasApp() {
  const [pages, setPages] = useState<{ id: string, type: 'cover' | 'info' | 'ai', layout?: AILayoutOptimizerOutput }[]>([
    { id: '1', type: 'cover' },
    { id: '2', type: 'info' }
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
        designGoals: ["Professional", "Image-centric", "High contrast"],
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
      <nav className="fixed top-0 left-0 right-0 h-16 translucent-slate z-50 border-b border-white/10 px-6 flex items-center justify-between no-print">
        <div className="flex items-center gap-4">
          <div className="bg-primary p-2 rounded-lg">
            <FileText className="text-background w-5 h-5" />
          </div>
          <div>
            <h1 className="font-headline font-bold text-lg tracking-tight">A4 CANVAS</h1>
            <p className="text-[10px] text-primary/80 uppercase tracking-widest font-bold">Logistics Theme Engine</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button 
            variant="outline" 
            size="sm" 
            className="border-primary/20 hover:bg-primary/10"
            onClick={addAIPage}
            disabled={optimizing}
          >
            {optimizing ? (
              <Sparkles className="w-4 h-4 mr-2 animate-spin text-primary" />
            ) : (
              <Sparkles className="w-4 h-4 mr-2 text-primary" />
            )}
            Optimizar con AI
          </Button>
          <Button 
            variant="default" 
            size="sm" 
            className="bg-primary hover:bg-primary/90 text-background font-bold shadow-lg shadow-primary/20"
            onClick={handlePrint}
          >
            <Printer className="w-4 h-4 mr-2" />
            Exportar PDF
          </Button>
        </div>
      </nav>

      {/* Pages Container */}
      <main className="pt-24 flex flex-col items-center gap-12">
        {pages.map((page, index) => (
          <div key={page.id} className="relative group/page">
            {/* Page Controls Overlay */}
            <div className="absolute -left-16 top-0 flex flex-col gap-2 no-print opacity-0 group-hover/page:opacity-100 transition-opacity">
              <Button 
                variant="destructive" 
                size="icon" 
                className="rounded-full w-10 h-10 shadow-xl"
                onClick={() => removePage(page.id)}
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>

            {page.type === 'cover' && <CoverPage pageNumber={index + 1} totalPageCount={pages.length} />}
            {page.type === 'info' && <LogisticsInfoPage pageNumber={index + 1} totalPageCount={pages.length} />}
            {page.type === 'ai' && <ContentPage pageNumber={index + 1} totalPageCount={pages.length} layout={page.layout} />}
          </div>
        ))}
        
        {/* Add Page Button */}
        <div className="py-8 no-print">
           <Button 
            variant="ghost" 
            className="text-muted-foreground hover:text-primary transition-all flex flex-col gap-4 h-auto py-8"
            onClick={() => setPages([...pages, { id: Date.now().toString(), type: 'info' }])}
           >
              <Plus className="w-12 h-12 stroke-[1px] border-2 border-dashed border-current rounded-full p-2" />
              <span className="font-headline uppercase tracking-[0.2em] text-xs font-bold">Añadir Página Manual</span>
           </Button>
        </div>
      </main>

      {/* Corporate Badge Overlay */}
      <div className="fixed bottom-8 left-8 no-print pointer-events-none opacity-40 hover:opacity-100 transition-opacity">
        <div className="text-[10px] font-headline font-bold text-primary border border-primary/20 px-4 py-2 rounded-full translucent-slate">
          ENVÍOS DOSRUEDAS © 2025 | SISTEMA DE PROPUESTAS
        </div>
      </div>
    </div>
  );
}
