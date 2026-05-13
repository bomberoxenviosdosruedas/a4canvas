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
    <div className={cn("a4-page", className)}>
      {/* Background Map Overlay */}
      <div className="map-bg" />
      
      {/* Decorative Accents */}
      <div className="absolute top-4 left-4 w-4 h-4 border-l-2 border-t-2 border-primary/40 z-20" />
      <div className="absolute top-4 right-4 w-4 h-4 border-r-2 border-t-2 border-primary/40 z-20" />
      <div className="absolute bottom-16 left-4 w-4 h-4 border-l-2 border-b-2 border-primary/40 z-20" />
      <div className="absolute bottom-16 right-4 w-4 h-4 border-r-2 border-b-2 border-primary/40 z-20" />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col relative z-10 h-full">
        {children}
      </div>

      {/* Persistent Page Footer */}
      <footer className="mt-auto pt-4 flex justify-between items-center text-[10px] font-mono text-muted-foreground uppercase tracking-[0.2em] border-t border-outline-variant/20 z-10">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse shadow-[0_0_5px_rgba(250,189,0,0.8)]" />
          <span>Propuesta Operativa Envíos DosRuedas 2026</span>
        </div>
        <div className="font-bold text-foreground tracking-[0.4em]">
          {pageNumber} / {totalPageCount}
        </div>
      </footer>
    </div>
  );
};