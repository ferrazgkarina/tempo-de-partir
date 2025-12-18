
import { useEffect, FC } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { MOCK_ARTICLES } from '../constants.ts';
import { ArrowLeft } from 'lucide-react';
import { AudioPlayer } from '../components/AudioPlayer.tsx';
import { PullQuote } from '../components/PullQuote.tsx';
import { ReadingProgress } from '../components/ReadingProgress.tsx';
import { ArticleCard } from '../components/ArticleCard.tsx';
import { ImageGallery } from '../components/ImageGallery.tsx';

export const ArticleDetail: FC = () => {
  const { id } = useParams<any>();
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  
  const article = MOCK_ARTICLES.find(a => a.id === id);

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-paper text-ink">
        <h2 className="font-serif text-4xl mb-4">Artigo não encontrado</h2>
        <button onClick={() => navigate('/editorial')} className="text-accent hover:text-ink transition-colors underline uppercase tracking-widest text-xs font-bold">Voltar para o Editorial</button>
      </div>
    );
  }

  const [mainTitle, subTitle] = article.title.includes(':') ? article.title.split(/:(.+)/) : [article.title, ''];
  const relatedArticles = MOCK_ARTICLES.filter(a => a.category === article.category && a.id !== article.id).slice(0, 3);
  const paragraphs = article.content.split(/\n\s*\n/);
  const firstParagraph = paragraphs[0];
  const remainingParagraphs = paragraphs.slice(1);

  return (
    <div className="bg-paper min-h-screen animate-fade-in pb-32">
      <ReadingProgress />
      <div className="w-full h-[60vh] md:h-[80vh] relative">
        <div className="absolute inset-0 bg-ink/10 mix-blend-multiply z-10" />
        <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover" />
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-20 z-20 bg-gradient-to-t from-ink/90 via-ink/50 to-transparent">
           <div className="max-w-5xl mx-auto">
             <span className="inline-block mb-6 text-gold text-xs font-bold tracking-[0.3em] uppercase border-b border-gold pb-2">{article.category}</span>
             <h1 className="font-serif text-paper leading-[0.9] drop-shadow-lg max-w-4xl">
                <span className="block text-5xl md:text-7xl lg:text-8xl mb-2 md:mb-4">{mainTitle}</span>
                {subTitle && <span className="block text-2xl md:text-4xl lg:text-5xl font-light opacity-90 italic">{subTitle.trim()}</span>}
             </h1>
           </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-0 md:px-6 -mt-8 relative z-30">
        <div className="flex flex-col md:flex-row shadow-2xl mb-20">
          <div className="bg-ink flex-1 p-6 md:px-10 flex flex-col justify-center border-r border-white/5">
             <div className="flex flex-row gap-8 items-center text-[10px] md:text-xs font-sans uppercase tracking-[0.2em] font-medium opacity-80">
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
          <div className="bg-accent md:w-96 hover:bg-accent/90 transition-colors flex items-center justify-center min-h-[90px]">
             <AudioPlayer title={article.title} text={article.content} />
          </div>
        </div>
        <div className="px-8 md:px-24 bg-[#f4efe7] max-w-4xl mx-auto">
          <PullQuote text={article.excerpt} />
          <article className="font-sans text-ink">
            <p className="text-[19px] md:text-[21px] leading-[1.8] text-justify mb-10 first-letter:float-left first-letter:text-[5.5rem] first-letter:pr-4 first-letter:font-serif first-letter:font-normal first-letter:text-accent first-letter:leading-[0.8] first-letter:mt-2 font-light">{firstParagraph}</p>
            <div className="space-y-10 text-[19px] md:text-[21px] leading-[1.8] text-justify font-light text-ink/95">
              {remainingParagraphs.map((paragraph, index) => {
                const trimmed = paragraph.trim();
                if (trimmed.startsWith('GALLERY:')) {
                  const [urlsPart, caption] = trimmed.replace('GALLERY:', '').split('|');
                  const urls = urlsPart ? urlsPart.split(',').map(u => u.trim()) : [];
                  return <ImageGallery key={index} images={urls} caption={caption?.trim()} />;
                }
                if (trimmed.startsWith('>')) return <PullQuote key={index} text={trimmed.replace(/^>\s?/, '').trim()} />;
                if (trimmed.startsWith('###')) {
                   const lines = trimmed.replace(/^###\s?/, '').split('\n');
                   return (
                      <div key={index} className="mt-14 mb-6">
                         <h3 className="font-serif text-2xl md:text-3xl text-ink mb-2 leading-tight">{lines[0]}</h3>
                         {lines.length > 1 && <p className="font-sans text-accent text-xs font-bold tracking-[0.2em] uppercase mb-4 opacity-90">{lines.slice(1).join(' ')}</p>}
                         <div className="w-12 h-px bg-earth/20 mt-4 mb-2" />
                      </div>
                   );
                }
                if (trimmed.startsWith('##')) return <h2 key={index} className="font-serif text-3xl md:text-4xl text-ink mt-16 mb-8 border-l-4 border-gold pl-6 leading-tight">{trimmed.replace(/^##\s?/, '')}</h2>;
                return <p key={index}>{paragraph}</p>;
              })}
            </div>
          </article>
          <div className="mt-24 pt-12 border-t border-earth/20">
             <p className="font-serif text-2xl text-center italic text-earth mb-16">"Viajar é trocar a roupa da alma."</p>
             {relatedArticles.length > 0 && (
               <div className="mb-20">
                 <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-ink mb-8 text-center">Continue sua jornada em {article.category}</h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                   {relatedArticles.map(rel => <ArticleCard key={rel.id} article={rel} />)}
                 </div>
               </div>
             )}
             <div className="flex justify-center">
                <Link to="/editorial" className="group flex items-center gap-3 px-8 py-4 bg-ink text-paper hover:bg-accent transition-all duration-300">
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