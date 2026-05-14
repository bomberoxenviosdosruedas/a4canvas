import React from 'react';
import { cn } from '@/lib/utils';

interface A4PageProps {
  children: React.ReactNode;
  pageNumber: number;
  totalPageCount: number;
  className?: string;
}

export const A4Page = ({ children, pageNumber, totalPageCount, className }: A4PageProps) => {
  return (
    <div className={cn("a4-page font-body", className)}>
      {/* Background Decor */}
      <div className="absolute inset-0 bg-tech-pattern opacity-[0.03] z-0 pointer-events-none" />
      <div className="map-bg pointer-events-none opacity-10" />
      
      {/* Industrial Accents */}
      <div className="absolute top-8 left-8 w-8 h-8 border-l border-t border-primary/20 z-20 pointer-events-none" />
      <div className="absolute top-8 right-8 w-8 h-8 border-r border-t border-primary/20 z-20 pointer-events-none" />
      <div className="absolute bottom-16 left-8 w-8 h-8 border-l border-b border-primary/20 z-20 pointer-events-none" />
      <div className="absolute bottom-16 right-8 w-8 h-8 border-r border-b border-primary/20 z-20 pointer-events-none" />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col relative z-10 h-full overflow-hidden p-12 pt-10">
        {children}
      </div>

      {/* Persistent Page Footer */}
      <footer className="mt-auto px-12 py-5 flex justify-between items-center text-[9px] font-mono text-muted-foreground uppercase tracking-[0.3em] border-t border-white/5 z-20 bg-background/90 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse shadow-[0_0_8px_rgba(255,193,7,0.8)]" />
          <span>Propuesta Operativa 2026 - Envíos DosRuedas</span>
        </div>
        <div className="font-bold text-foreground tracking-[0.5em]">
          {pageNumber.toString().padStart(2, '0')} / {totalPageCount.toString().padStart(2, '0')}
        </div>
      </footer>
    </div>
  );
};
