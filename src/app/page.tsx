"use client";

import React, { useState } from 'react';
import { CoverPage } from '@/components/pages/CoverPage';
import { ExpressServicePage } from '@/components/pages/ExpressServicePage';
import { LowcostServicePage } from '@/components/pages/LowcostServicePage';
import { FlexServicePage } from '@/components/pages/FlexServicePage';
import { EcommerceServicePage } from '@/components/pages/EcommerceServicePage';
import { Ecommerce24Page } from '@/components/pages/Ecommerce24Page';
import { FlexibleAccountPage } from '@/components/pages/FlexibleAccountPage';
import { ComparisonPage } from '@/components/pages/ComparisonPage';
import { Button } from '@/components/ui/button';
import { Printer, Package } from 'lucide-react';

export default function A4CanvasApp() {
  const [pages] = useState([
    { id: 'p1', type: 'cover' },
    { id: 'p2', type: 'express' },
    { id: 'p3', type: 'lowcost' },
    { id: 'p4', type: 'flex' },
    { id: 'p5', type: 'ecommerce' },
    { id: 'p6', type: 'ecommerce24' },
    { id: 'p7', type: 'flexible-account' },
    { id: 'p8', type: 'comparison' },
  ]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#000f1d] pb-20 overflow-x-hidden selection:bg-[#ffc107] selection:text-[#011525]">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 h-20 bg-[#011525]/80 backdrop-blur-xl z-50 border-b border-[#ffc107]/20 px-8 flex items-center justify-between no-print">
        <div className="flex items-center gap-6">
          <div className="bg-[#ffc107] p-2.5 rounded-lg shadow-[0_0_20px_rgba(255,193,7,0.3)]">
            <Package className="text-[#011525] w-6 h-6" />
          </div>
          <div>
            <h1 className="font-headline font-black text-xl tracking-tighter text-white uppercase italic">
              EDR <span className="text-[#ffc107]">CORE</span>
            </h1>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#ffc107] animate-pulse" />
              <p className="text-[10px] text-[#ffc107]/80 uppercase tracking-[0.4em] font-bold font-mono">Página {pages.length} de 11 / 2026</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <Button 
            variant="default" 
            size="lg" 
            className="bg-[#ffc107] hover:bg-[#ffc107]/90 text-[#011525] font-black shadow-2xl shadow-[#ffc107]/30 px-8 h-11 uppercase tracking-[0.2em] text-xs rounded-none transition-all"
            onClick={handlePrint}
          >
            <Printer className="w-4 h-4 mr-3" />
            Exportar Propuesta
          </Button>
        </div>
      </nav>

      {/* Pages Container */}
      <main className="flex flex-col items-center pt-32">
        {pages.map((page, index) => (
          <div key={page.id} className="relative mb-10">
            {page.type === 'cover' && <CoverPage pageNumber={index + 1} totalPageCount={11} />}
            {page.type === 'express' && <ExpressServicePage pageNumber={index + 1} totalPageCount={11} />}
            {page.type === 'lowcost' && <LowcostServicePage pageNumber={index + 1} totalPageCount={11} />}
            {page.type === 'flex' && <FlexServicePage pageNumber={index + 1} totalPageCount={11} />}
            {page.type === 'ecommerce' && <EcommerceServicePage pageNumber={index + 1} totalPageCount={11} />}
            {page.type === 'ecommerce24' && <Ecommerce24Page pageNumber={index + 1} totalPageCount={11} />}
            {page.type === 'flexible-account' && <FlexibleAccountPage pageNumber={index + 1} totalPageCount={11} />}
            {page.type === 'comparison' && <ComparisonPage pageNumber={index + 1} totalPageCount={11} />}
          </div>
        ))}
      </main>

      {/* Global Status Float (No-Print) */}
      <div className="fixed bottom-10 left-10 no-print pointer-events-none opacity-80 z-50">
        <div className="text-[10px] font-mono font-bold text-[#ffc107] border border-[#ffc107]/40 px-6 py-3 bg-[#011525]/90 backdrop-blur-lg shadow-2xl flex items-center gap-4">
          <div className="w-2 h-2 rounded-full bg-[#ffc107] animate-ping" />
          <span className="uppercase tracking-[0.2em]">EDR v4.0 - SISTEMA CANVAS</span>
        </div>
      </div>
    </div>
  );
}
