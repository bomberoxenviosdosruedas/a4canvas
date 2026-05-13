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
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none" />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col relative z-10 h-full">
        {children}
      </div>

      {/* Persistent Page Footer */}
      <footer className="mt-auto pt-4 flex justify-between items-center text-[10px] text-muted-foreground uppercase tracking-widest border-t border-primary/20">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-primary rounded-full logistics-glow" />
          <span>Envíos DosRuedas - Propuesta Logística 2025</span>
        </div>
        <div className="font-headline font-bold text-primary/80">
          {pageNumber} / {totalPageCount}
        </div>
      </footer>
    </div>
  );
};
