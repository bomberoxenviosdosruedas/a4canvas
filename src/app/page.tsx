
"use client";

import React, { useState } from 'react';
import { CoverPage } from '@/components/pages/CoverPage';
import { LogisticsInfoPage } from '@/components/pages/LogisticsInfoPage';
import { PricingPage } from '@/components/pages/PricingPage';
import { Button } from '@/components/ui/button';
import { Printer, Sparkles, Layers, FileText } from 'lucide-react';
import { PhilosophyPage } from '@/components/pages/PhilosophyPage';
import { InfrastructurePage } from '@/components/pages/InfrastructurePage';
import { TechnologyPage } from '@/components/pages/TechnologyPage';
import { TimelinePage } from '@/components/pages/TimelinePage';
import { ClosurePage } from '@/components/pages/ClosurePage';

type PageType = 'cover' | 'philosophy' | 'info' | 'nodes' | 'tech' | 'pricing' | 'timeline' | 'closure';

interface ProposalPage {
  id: string;
  type: PageType;
  title: string;
}

export default function A4CanvasApp() {
  const [pages] = useState<ProposalPage[]>([
    { id: 'p1', type: 'cover', title: 'Portada' },
    { id: 'p2', type: 'philosophy', title: 'Filosofía' },
    { id: 'p3', type: 'info', title: 'Propuesta de Valor' },
    { id: 'p4', type: 'nodes', title: 'Infraestructura' },
    { id: 'p5', type: 'info', title: 'Metodología' },
    { id: 'p6', type: 'tech', title: 'Tecnología' },
    { id: 'p7', type: 'info', title: 'Calidad y SLA' },
    { id: 'p8', type: 'pricing', title: 'Inversión' },
    { id: 'p9', type: 'timeline', title: 'Cronograma' },
    { id: 'p10', type: 'info', title: 'Beneficios' },
    { id: 'p11', type: 'closure', title: 'Cierre' }
  ]);

  const handlePrint = () => {
    window.print();
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
            <h1 className="font-headline font-black text-xl tracking-tighter">A4 CANVAS <span className="text-primary italic">CORE</span></h1>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <p className="text-[10px] text-primary/80 uppercase tracking-[0.3em] font-black">Propuesta Integral 11 Páginas</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button 
            variant="default" 
            size="sm" 
            className="bg-primary hover:bg-primary/90 text-background font-black shadow-2xl shadow-primary/30 px-6 h-10 uppercase tracking-widest text-xs"
            onClick={handlePrint}
          >
            <Printer className="w-4 h-4 mr-3" />
            Imprimir Propuesta
          </Button>
        </div>
      </nav>

      {/* Pages Container */}
      <main className="pt-32 flex flex-col items-center gap-20">
        {pages.map((page, index) => (
          <div key={page.id} className="relative group/page">
            {page.type === 'cover' && <CoverPage pageNumber={index + 1} totalPageCount={pages.length} />}
            {page.type === 'philosophy' && <PhilosophyPage pageNumber={index + 1} totalPageCount={pages.length} />}
            {page.type === 'info' && <LogisticsInfoPage pageNumber={index + 1} totalPageCount={pages.length} />}
            {page.type === 'nodes' && <InfrastructurePage pageNumber={index + 1} totalPageCount={pages.length} />}
            {page.type === 'tech' && <TechnologyPage pageNumber={index + 1} totalPageCount={pages.length} />}
            {page.type === 'pricing' && <PricingPage pageNumber={index + 1} totalPageCount={pages.length} />}
            {page.type === 'timeline' && <TimelinePage pageNumber={index + 1} totalPageCount={pages.length} />}
            {page.type === 'closure' && <ClosurePage pageNumber={index + 1} totalPageCount={pages.length} />}
          </div>
        ))}
      </main>

      <div className="fixed bottom-10 left-10 no-print pointer-events-none opacity-50">
        <div className="text-[10px] font-headline font-black text-primary border border-primary/30 px-6 py-3 rounded-full translucent-slate shadow-2xl flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span>PROYECTO: CORPORATIVO EXPRESS S.A. | VERSIÓN FINAL</span>
        </div>
      </div>
    </div>
  );
}
