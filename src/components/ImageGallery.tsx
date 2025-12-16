
import React from 'react';

interface ImageGalleryProps {
  images: string[];
  caption?: string;
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({ images, caption }) => {
  const count = images.length;

  if (count === 0) return null;

  return (
    <figure className="my-16 md:my-20 w-full">
      {/* Container de Imagens - Lógica de Grid Inteligente */}
      <div className={`grid gap-2 md:gap-4 w-full ${
        count === 1 ? 'grid-cols-1' :
        count === 2 ? 'grid-cols-1 md:grid-cols-2' :
        'grid-cols-1 md:grid-cols-3 grid-rows-2' // Layout Bento para 3+
      }`}>
        
        {images.map((img, idx) => {
          // Lógica de Classes para Mosaico de 3 imagens
          // Imagem 0: Ocupa 2 linhas na primeira coluna (Destaque Vertical)
          // Imagem 1 e 2: Ocupam 1 linha cada na segunda coluna
          let mosaicClass = 'aspect-[4/3] md:aspect-auto'; // Default
          
          if (count === 1) {
            mosaicClass = 'aspect-video md:aspect-[21/9] shadow-lg';
          } else if (count === 2) {
            mosaicClass = 'aspect-[3/4] shadow-md';
          } else if (count >= 3) {
            if (idx === 0) mosaicClass = 'md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto h-full shadow-md';
            else mosaicClass = 'aspect-[3/2] md:aspect-auto h-full shadow-sm';
          }

          return (
            <div key={idx} className={`relative overflow-hidden group ${mosaicClass}`}>
               <img 
                 src={img} 
                 alt={caption || `Imagem ${idx + 1}`}
                 className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
               />
               <div className="absolute inset-0 border border-ink/5 pointer-events-none" />
            </div>
          );
        })}
      </div>

      {/* Legenda Visível - Estilo Editorial */}
      {caption && (
        <figcaption className="mt-4 flex items-start justify-center gap-2 text-center px-4">
           {/* Ícone ou detalhe opcional, aqui usando apenas tipografia */}
           <span className="font-serif text-sm md:text-base text-ink/60 italic leading-relaxed max-w-2xl">
             <span className="text-accent not-italic font-bold text-xs tracking-widest uppercase mr-2">Figura.</span>
             {caption}
           </span>
        </figcaption>
      )}
    </figure>
  );
};
