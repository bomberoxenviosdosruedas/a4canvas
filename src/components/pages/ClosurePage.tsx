
import React from 'react';
import { A4Page } from '@/components/A4Page';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

export const ClosurePage = ({ pageNumber, totalPageCount }: { pageNumber: number, totalPageCount: number }) => {
  const closureImg = PlaceHolderImages.find(img => img.id === 'corporate-meeting');

  return (
    <A4Page pageNumber={pageNumber} totalPageCount={totalPageCount} className="p-0 tech-pattern overflow-hidden">
      <div className="relative h-full flex flex-col">
        <div className="h-[45%] relative overflow-hidden group">
          {closureImg && (
            <Image 
              src={closureImg.imageUrl} 
              alt="Cierre" 
              fill 
              className="object-cover opacity-30 grayscale group-hover:grayscale-0 transition-all duration-1000" 
              data-ai-hint={closureImg.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          <div className="absolute inset-0 bg-primary/10 pointer-events-none" />
          
          <div className="absolute bottom-12 left-16 right-16">
             <h2 className="font-headline text-7xl font-black tracking-tighter text-white">CONSTRUYAMOS <br/><span className="text-primary italic">EL FUTURO</span></h2>
          </div>
        </div>

        <div className="flex-1 p-16 flex flex-col justify-between">
          <div className="grid grid-cols-2 gap-20">
            <div className="space-y-12">
              <p className="text-lg text-foreground/80 leading-relaxed font-medium">
                Esta propuesta representa el inicio de una alianza estratégica diseñada para elevar el estándar logístico de Corporativo Express S.A. Estamos listos para comenzar.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-muted-foreground">
                  <Mail className="text-primary w-5 h-5" />
                  <span className="text-sm font-bold">contacto@enviosdosruedas.com</span>
                </div>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <Phone className="text-primary w-5 h-5" />
                  <span className="text-sm font-bold">+52 (55) 8899-2233</span>
                </div>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <MapPin className="text-primary w-5 h-5" />
                  <span className="text-sm font-bold">Av. Insurgentes Sur 1234, CDMX, México</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-end items-center">
              <div className="w-full h-40 border-b border-primary/40 flex items-center justify-center relative mb-4">
                 <p className="text-[10px] text-primary/30 font-headline font-bold uppercase tracking-widest absolute top-0">Firma Autorizada EDR</p>
                 <div className="font-headline text-4xl text-primary/60 italic font-black">DosRuedas Core</div>
              </div>
              <p className="text-[9px] font-headline font-bold text-muted-foreground uppercase tracking-widest">DIRECCIÓN GENERAL DE OPERACIONES</p>
            </div>
          </div>

          <div className="mt-20 border-t border-white/5 pt-12 flex justify-between items-end">
            <div>
              <div className="flex items-center gap-3 mb-4">
                 <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center font-headline font-black text-background text-xl">EDR</div>
                 <h4 className="font-headline font-black text-xl tracking-tighter">ENVÍOS DOSRUEDAS</h4>
              </div>
              <p className="text-[9px] text-muted-foreground uppercase tracking-[0.4em]">LOGISTICS INTELLIGENCE v4.0.2</p>
            </div>
            
            <div className="text-right">
              <div className="flex items-center gap-4 mb-4">
                <Globe className="text-primary w-5 h-5" />
                <span className="font-headline font-black text-sm">www.enviosdosruedas.com</span>
              </div>
              <p className="text-[10px] text-primary font-bold uppercase tracking-widest">© 2025 TODOS LOS DERECHOS RESERVADOS</p>
            </div>
          </div>
        </div>
      </div>
    </A4Page>
  );
};
