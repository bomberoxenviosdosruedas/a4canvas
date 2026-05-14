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
      <div className="map-bg pointer-events-none" />
      
      {/* Decorative Accents */}
      <div className="absolute top-6 left-6 w-6 h-6 border-l border-t border-[#ffc107]/30 z-20 pointer-events-none" />
      <div className="absolute top-6 right-6 w-6 h-6 border-r border-t border-[#ffc107]/30 z-20 pointer-events-none" />
      <div className="absolute bottom-16 left-6 w-6 h-6 border-l border-b border-[#ffc107]/30 z-20 pointer-events-none" />
      <div className="absolute bottom-16 right-6 w-6 h-6 border-r border-b border-[#ffc107]/30 z-20 pointer-events-none" />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col relative z-10 h-full overflow-hidden">
        {children}
      </div>

      {/* Persistent Page Footer */}
      <footer className="mt-auto px-12 py-4 flex justify-between items-center text-[10px] font-mono text-[#d4c5ab] uppercase tracking-[0.2em] border-t border-white/5 z-20 bg-[#011525]/80 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 bg-[#ffc107] rounded-full animate-pulse shadow-[0_0_8px_rgba(255,193,7,0.8)]" />
          <span>Propuesta Operativa Envíos DosRuedas 2026</span>
        </div>
        <div className="font-bold text-white tracking-[0.4em]">
          {pageNumber} / {totalPageCount}
        </div>
      </footer>
    </div>
  );
};