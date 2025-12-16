
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { MOCK_ARTICLES } from '../constants';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { AudioPlayer } from '../components/AudioPlayer';
import { PullQuote } from '../components/PullQuote';
import { ReadingProgress } from '../components/ReadingProgress';
import { ArticleCard } from '../components/ArticleCard';
import { ImageGallery } from '../components/ImageGallery';

export const ArticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  // Scroll to top when article ID changes (important for Related Articles navigation)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  
  const article = MOCK_ARTICLES.find(a => a.id === id);

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-paper text-ink">
        <h2 className="font-serif text-4xl mb-4">Artigo não encontrado</h2>
        <button 
          onClick={() => navigate('/editorial')}
          className="text-accent hover:text-ink transition-colors underline uppercase tracking-widest text-xs font-bold"
        >
          Voltar para o Editorial
        </button>
      </div>
    );
  }

  // Lógica de Título e Subtítulo (Split automático por ":")
  const [mainTitle, subTitle] = article.title.includes(':') 
    ? article.title.split(/:(.+)/) 
    : [article.title, ''];

  // Related Articles Logic: Same category, excluding current
  const relatedArticles = MOCK_ARTICLES
    .filter(a => a.category === article.category && a.id !== article.id)
    .slice(0, 3); // Take up to 3

  // Split content by flexible newlines (handles spaces in empty lines)
  const paragraphs = article.content.split(/\n\s*\n/);
  const firstParagraph = paragraphs[0];
  const remainingParagraphs = paragraphs.slice(1);

  return (
    <div className="bg-paper min-h-screen animate-fade-in pb-32">
      <ReadingProgress />
      
      {/* Hero Image - Full bleed but with refined overlay */}
      <div className="w-full h-[60vh] md:h-[80vh] relative">
        <div className="absolute inset-0 bg-ink/10 mix-blend-multiply z-10" />
        <img 
          src={article.imageUrl} 
          alt={article.title} 
          className="w-full h-full object-cover"
        />
        {/* Title Overlay - More magazine-like positioning */}
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-20 z-20 bg-gradient-to-t from-ink/90 via-ink/50 to-transparent">
           <div className="max-w-5xl mx-auto">
             <span className="inline-block mb-6 text-gold text-xs font-bold tracking-[0.3em] uppercase border-b border-gold pb-2">
                {article.category}
             </span>
             
             {/* Título Formatado com Quebra de Linha Automática */}
             <h1 className="font-serif text-paper leading-[0.9] drop-shadow-lg max-w-4xl">
                <span className="block text-5xl md:text-7xl lg:text-8xl mb-2 md:mb-4">
                  {mainTitle}
                </span>
                {subTitle && (
                  <span className="block text-2xl md:text-4xl lg:text-5xl font-light opacity-90 italic">
                    {subTitle.trim()}
                  </span>
                )}
             </h1>

           </div>
        </div>
      </div>

      {/* Container Principal */}
      <div className="max-w-5xl mx-auto px-0 md:px-6 -mt-8 relative z-30">
        
        {/* Meta Info Banner - Luxurious Bicolor */}
        <div className="flex flex-col md:flex-row shadow-2xl mb-20">
          
          {/* Left Side: Meta Info (Ink Background) - Reduced padding and removed Author */}
          <div className="bg-ink flex-1 p-6 md:px-10 flex flex-col justify-center border-r border-white/5">
             <div className="flex flex-row gap-8 md:gap-12 items-center text-[10px] md:text-xs font-sans uppercase tracking-[0.2em] font-medium opacity-80">
                <div className="flex items-center gap-3">
                   <span className="text-gold">Data</span>
                   <span className="text-white">{article.date}</span>
                </div>
                <div className="flex items-center gap-3">
                   <span className="text-gold">Tempo</span>
                   <span className="text-white">{article.readTime}</span>
                </div>
             </div>
          </div>
          
          {/* Right Side: Audio Player (Accent Background) - Reduced min-height */}
          <div className="bg-accent md:w-96 hover:bg-accent/90 transition-colors flex items-center justify-center min-h-[90px]">
             <AudioPlayer title={article.title} text={article.content} />
          </div>

        </div>

        {/* --- ARTICLE CONTENT AREA --- 
            Tipografia & Padding Ajustados: 
            - max-w-4xl (aumentado para permitir padding)
            - px-8 (mobile) e md:px-24 (desktop) -> Muito mais respiro lateral
            - text-[21px] e leading-[1.8] mantidos
        */}
        <div className="px-8 md:px-24 bg-[#f4efe7] max-w-4xl mx-auto">
          
          {/* Excerpt replaced with PullQuote component */}
          <PullQuote text={article.excerpt} />
          
          <article className="font-sans text-ink">
            {/* First Paragraph with Drop Cap */}
            <p className="text-[19px] md:text-[21px] leading-[1.8] text-justify mb-10 first-letter:float-left first-letter:text-[5.5rem] first-letter:pr-4 first-letter:font-serif first-letter:font-normal first-letter:text-accent first-letter:leading-[0.8] first-letter:mt-2 font-light">
              {firstParagraph}
            </p>

            {/* Remaining Paragraphs Loop */}
            <div className="space-y-10 text-[19px] md:text-[21px] leading-[1.8] text-justify font-light text-ink/95">
              {remainingParagraphs.map((paragraph, index) => {
                const trimmed = paragraph.trim();

                // 1. GALLERY / MOSAIC (Starts with GALLERY:)
                if (trimmed.startsWith('GALLERY:')) {
                  const [urlsPart, caption] = trimmed.replace('GALLERY:', '').split('|');
                  const urls = urlsPart ? urlsPart.split(',').map(u => u.trim()) : [];
                  const cleanCaption = caption ? caption.trim() : undefined;
                  
                  return <ImageGallery key={index} images={urls} caption={cleanCaption} />;
                }

                // 2. PULL QUOTE (Starts with >)
                if (trimmed.startsWith('>')) {
                  const quoteText = trimmed.replace(/^>\s?/, '').trim();
                  return <PullQuote key={index} text={quoteText} />;
                }

                // 3. LIST ITEM WITH SUBTITLE (Starts with ###)
                // Checked BEFORE '##' to avoid conflict, as ### also starts with ##
                if (trimmed.startsWith('###')) {
                   const content = trimmed.replace(/^###\s?/, '');
                   const lines = content.split('\n');
                   const title = lines[0];
                   const subtitle = lines.length > 1 ? lines.slice(1).join(' ') : null;

                   return (
                      <div key={index} className="mt-14 mb-6">
                         <h3 className="font-serif text-2xl md:text-3xl text-ink mb-2 leading-tight">
                           {title}
                         </h3>
                         {subtitle && (
                           <p className="font-sans text-accent text-xs font-bold tracking-[0.2em] uppercase mb-4 opacity-90">
                             {subtitle}
                           </p>
                         )}
                         <div className="w-12 h-px bg-earth/20 mt-4 mb-2" />
                      </div>
                   );
                }
                
                // 4. SECTION TITLE (Starts with ##)
                // Relaxed check: allows '##Title' or '## Title'
                if (trimmed.startsWith('##')) {
                  return (
                    <h2 key={index} className="font-serif text-3xl md:text-4xl text-ink mt-16 mb-8 border-l-4 border-gold pl-6 leading-tight">
                      {trimmed.replace(/^##\s?/, '')}
                    </h2>
                  );
                }
                
                // 5. NORMAL PARAGRAPH
                return <p key={index}>{paragraph}</p>;
              })}
            </div>
          </article>

          {/* FIM DO ARTIGO - Navegação e Footer */}
          <div className="mt-24 pt-12 border-t border-earth/20">
             
             {/* Tagline Final */}
             <p className="font-serif text-2xl text-center italic text-earth mb-16">
               "Viajar é trocar a roupa da alma."
             </p>

             {/* Seção de Artigos Relacionados */}
             {relatedArticles.length > 0 && (
               <div className="mb-20">
                 <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-ink mb-8 text-center">
                   Continue sua jornada em {article.category}
                 </h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                   {relatedArticles.map(relArticle => (
                     <ArticleCard key={relArticle.id} article={relArticle} />
                   ))}
                 </div>
               </div>
             )}

             {/* Botão Voltar */}
             <div className="flex justify-center">
                <Link 
                  to="/editorial" 
                  className="group flex items-center gap-3 px-8 py-4 bg-ink text-paper hover:bg-accent transition-all duration-300"
                >
                  <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                  <span className="text-[10px] uppercase tracking-[0.25em] font-bold">Voltar ao Acervo</span>
                </Link>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
};
