import React from 'react';
import { A4Page } from '@/components/A4Page';
import { AILayoutOptimizerOutput } from '@/ai/flows/ai-layout-optimizer';
import Image from 'next/image';

interface ContentPageProps {
  pageNumber: number;
  totalPageCount: number;
  layout?: AILayoutOptimizerOutput;
}

export const ContentPage = ({ pageNumber, totalPageCount, layout }: ContentPageProps) => {
  // Simple fallback if no AI layout is provided
  if (!layout) {
    return (
      <A4Page pageNumber={pageNumber} totalPageCount={totalPageCount}>
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-primary/10 w-1/3 rounded" />
          <div className="h-4 bg-muted w-full rounded" />
          <div className="h-4 bg-muted w-full rounded" />
          <div className="h-4 bg-muted w-2/3 rounded" />
          <div className="h-64 bg-primary/5 w-full rounded" />
        </div>
      </A4Page>
    );
  }

  return (
    <A4Page pageNumber={pageNumber} totalPageCount={totalPageCount}>
      <div className="flex flex-col gap-6">
        {layout.pageElements.map((el, i) => {
          if (el.type === 'text') {
            const isHeading = el.content.length < 100 && i === 0;
            return (
              <div 
                key={i} 
                className={isHeading ? "mb-4 border-b border-primary/20 pb-4" : ""}
                style={{
                  gridArea: el.placement.includes('top') ? 'top' : el.placement.includes('bottom') ? 'bottom' : 'auto'
                }}
              >
                {isHeading ? (
                  <h2 className="font-headline text-3xl font-bold uppercase tracking-tight text-primary">
                    {el.content}
                  </h2>
                ) : (
                  <div className="font-body text-sm leading-relaxed text-foreground/80 space-y-4" dangerouslySetInnerHTML={{ __html: el.content.replace(/\n/g, '<br/>') }} />
                )}
              </div>
            );
          }
          
          if (el.type === 'image') {
            return (
              <div 
                key={i} 
                className="relative rounded-lg overflow-hidden border border-primary/20 shadow-lg min-h-[250px]"
                style={{ width: el.size === 'full-page-width' ? '100%' : 'auto' }}
              >
                <Image 
                  src={el.content.startsWith('data:') ? el.content : `https://picsum.photos/seed/${i + pageNumber}/1200/800`} 
                  alt="AI Layout Suggested Content"
                  fill
                  className="object-cover"
                />
              </div>
            );
          }
          return null;
        })}
      </div>
      
      {layout.layoutReasoning && (
        <div className="mt-auto pt-8 border-t border-dashed border-primary/10 no-print">
          <p className="text-[10px] text-primary/40 font-mono italic">
            AI Layout Reasoning: {layout.layoutReasoning}
          </p>
        </div>
      )}
    </A4Page>
  );
};
