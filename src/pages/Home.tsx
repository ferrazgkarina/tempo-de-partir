
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MOCK_ARTICLES } from '../constants';
import { Category } from '../types';
import { ArrowRight, Plus, Minus, Map, BookOpen, Sparkles, PenLine } from 'lucide-react';

export const Home: React.FC = () => {
  // State to manage which sidebar article is expanded
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Highlight the first article as main feature
  const mainArticle = MOCK_ARTICLES[0];
  // Use the next 3 articles for the sidebar
  const sidebarArticles = MOCK_ARTICLES.slice(1, 4);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // Helper para formatar o título principal
  const getMainTitleParts = (title: string) => {
    return title.includes(':') ? title.split(/:(.+)/) : [title, ''];
  }

  const [mainHeroTitle, mainHeroSubtitle] = getMainTitleParts(mainArticle.title);

  return (
    <div className="animate-fade-in">
      {/* Hero Section: Split Layout (Featured + Sidebar) */}
      <section className="flex flex-col lg:flex-row min-h-[calc(100vh-6rem)]">
        
        {/* Left: Main Featured Article */}
        <div className="relative w-full lg:w-[70%] min-h-[60vh] lg:min-h-auto group overflow-hidden">
             {/* Background Image with Zoom Effect */}
             <div className="absolute inset-0 overflow-hidden">
               <img 
                 src={mainArticle.imageUrl} 
                 alt={mainArticle.title}
                 className="w-full h-full object-cover transition-transform duration-[3s] ease-out group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-ink/20 transition-colors duration-700 mix-blend-multiply" />
               <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent opacity-80" />
             </div>
             
             {/* Main Content */}
             <div className="relative h-full flex flex-col justify-end p-8 md:p-16 lg:p-24 max-w-6xl">
               {/* Magazine Style Label */}
               <div className="mb-8 flex items-center gap-3">
                 <span className="inline-block px-3 py-1 bg-accent text-white text-[10px] font-bold tracking-[0.2em] uppercase">
                   Matéria de Capa
                 </span>
                 <span className="text-white/90 text-[10px] tracking-[0.2em] uppercase hidden md:inline-block">
                   | Edição #01
                 </span>
               </div>

               <h1 className="font-serif text-paper mb-6 md:mb-8 leading-tight drop-shadow-xl max-w-3xl">
                 <span className="block text-3xl md:text-5xl lg:text-6xl mb-2">{mainHeroTitle}</span>
                 {mainHeroSubtitle && (
                   <span className="block text-xl md:text-3xl font-light italic opacity-90">{mainHeroSubtitle.trim()}</span>
                 )}
               </h1>

               <p className="font-sans text-xl text-paper/95 mb-10 max-w-2xl font-light leading-relaxed hidden md:block border-l border-accent pl-8">
                 {mainArticle.excerpt}
               </p>
               <Link 
                 to={`/artigo/${mainArticle.id}`}
                 className="inline-flex items-center text-white hover:text-accent transition-colors tracking-[0.2em] uppercase text-xs font-bold gap-4 group/link"
               >
                 <span className="border-b border-white group-hover/link:border-accent pb-2 transition-colors">Ler Ensaio Completo</span>
                 <ArrowRight className="h-4 w-4 transform group-hover/link:translate-x-2 transition-transform" />
               </Link>
             </div>
        </div>

        {/* Right: Sidebar List - Cleaner Look */}
        <div className="w-full lg:w-[30%] bg-paper flex flex-col border-l border-earth/10 relative z-10">
           
           <div className="flex-1 overflow-y-auto custom-scrollbar pt-8">
             {sidebarArticles.map((article) => {
               const isExpanded = expandedId === article.id;
               const [sideTitle, sideSubtitle] = getMainTitleParts(article.title);
               
               return (
                 <div 
                   key={article.id} 
                   className={`border-b border-earth/10 transition-all duration-300 cursor-pointer group 
                     ${isExpanded ? 'bg-earth/5' : 'hover:bg-accent'}`}
                   onClick={() => toggleExpand(article.id)}
                 >
                   <div className="p-8 flex gap-6 items-start">
                      {/* Content Column */}
                      <div className="flex-1 flex flex-col">
                        <div className="flex justify-between items-center mb-3">
                          {/* Label Category */}
                          <span className={`text-xs font-bold uppercase tracking-[0.2em] transition-colors 
                            ${isExpanded ? 'text-earth' : 'text-earth group-hover:text-paper'}`}>
                            {article.category}
                          </span>
                          
                          {/* Ícone +/- */}
                          {isExpanded ? 
                            <Minus className="h-3 w-3 text-accent transition-colors" strokeWidth={1} /> : 
                            <Plus className={`h-3 w-3 text-earth/60 transition-colors ${isExpanded ? '' : 'group-hover:text-paper'}`} strokeWidth={1} />
                          }
                        </div>
                        
                        {/* Title Split */}
                        <h3 className={`font-serif leading-tight mb-2 transition-colors duration-300 
                          ${isExpanded ? 'text-accent' : 'text-ink group-hover:text-paper'}`}>
                          <span className="block text-lg md:text-xl font-bold">{sideTitle}</span>
                          {sideSubtitle && (
                            <span className="block text-base font-light italic mt-1 opacity-90">{sideSubtitle.trim()}</span>
                          )}
                        </h3>

                        <div className={`overflow-hidden transition-all duration-700 ease-in-out ${isExpanded ? 'max-h-96 opacity-100 mt-5 mb-4' : 'max-h-0 opacity-0'}`}>
                          <p className="font-sans text-base text-ink leading-relaxed mb-6 font-normal transition-colors">
                            {article.excerpt}
                          </p>
                          
                          <Link 
                            to={`/artigo/${article.id}`} 
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center px-5 py-3 bg-ink text-paper hover:bg-accent transition-colors text-[10px] font-bold uppercase tracking-[0.25em] shadow-sm group/btn"
                          >
                            Ler Artigo 
                            <ArrowRight className="ml-3 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                          </Link>
                        </div>

                        {/* Date */}
                        <span className={`text-[9px] font-sans mt-3 block uppercase tracking-widest transition-colors
                           ${isExpanded ? 'text-earth/80' : 'text-earth/70 group-hover:text-paper/70'}`}>
                           {article.date}
                        </span>
                      </div>

                      {/* Image Column */}
                      <div className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0 pt-2">
                          <img 
                              src={article.imageUrl} 
                              alt={article.title} 
                              className="w-full h-full object-cover transition-all duration-1000 ease-out"
                          />
                      </div>
                   </div>
                 </div>
               );
             })}
           </div>
           
           {/* Sidebar Footer Link */}
           <Link to="/editorial" className="p-8 bg-ink text-paper group hover:bg-ink/90 transition-colors flex justify-between items-center mt-auto">
               <span className="font-serif text-xl italic pl-2 group-hover:pl-4 transition-all duration-500">Explorar Editorial</span>
               <ArrowRight className="h-5 w-5 text-gold transform group-hover:translate-x-2 transition-transform duration-500" strokeWidth={1} />
           </Link>
        </div>

      </section>

      {/* Manifesto Teaser - Adjusted Padding for Mobile */}
      <section className="py-16 md:py-32 bg-accent px-4 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Increased opacity for label */}
          <span className="text-paper/85 text-[10px] font-bold tracking-[0.3em] uppercase mb-6 md:mb-8 block">
            Uma revista digital sobre desacelerar
          </span>
          <h2 className="font-serif text-3xl md:text-6xl text-paper leading-tight mb-8 md:mb-12 font-medium">
            Viajar é mudar de ritmo, <br/>não apenas de lugar.
          </h2>
          <div className="w-px h-12 md:h-16 bg-gold mx-auto mb-8 md:mb-12" />
          <p className="font-sans text-paper/95 text-lg md:text-xl leading-[1.8] md:leading-[2] mb-10 md:mb-16 font-light max-w-2xl mx-auto">
            Acreditamos que as memórias mais bonitas são aquelas que a gente constrói no nosso próprio tempo.
          </p>
          <Link 
            to="/manifesto" 
            className="inline-block px-8 py-4 md:px-12 md:py-5 border-[0.5px] border-paper text-paper hover:bg-paper hover:text-accent transition-all duration-500 text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold"
          >
            Ler Manifesto
          </Link>
        </div>
      </section>

      {/* Categories Highlights - Updated with new Titles and Subtitles */}
      <section className="pt-16 md:pt-32 pb-0 bg-paper border-t border-earth/10">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 md:mb-20">
           <div className="text-center">
             <h3 className="font-serif text-3xl md:text-4xl text-ink mb-4">Caminhos para a sua próxima jornada</h3>
           </div>
         </div>
         
         {/* Full width Grid */}
         <div className="w-full">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-earth/10 border-y border-earth/10">
              {[
                { 
                  title: Category.ROTA_RITMO, 
                  desc: "Destinos para a sua lista.", 
                  icon: Map,
                  bg: "bg-paper", hoverBg: "hover:bg-earth", textColor: "text-ink", hoverText: "group-hover:text-paper" 
                },
                { 
                  title: Category.BAGAGEM, 
                  desc: "A cultura como viagem.", 
                  icon: BookOpen,
                  // ATUALIZADO: hoverBg para Ink e hoverText para Paper (branco) para contraste
                  bg: "bg-paper", hoverBg: "hover:bg-ink", textColor: "text-ink", hoverText: "group-hover:text-paper" 
                },
                { 
                  title: Category.MAPA_TEMPO, 
                  desc: "Astrologia para o dia a dia.", 
                  icon: Sparkles,
                  bg: "bg-paper", hoverBg: "hover:bg-plum", textColor: "text-ink", hoverText: "group-hover:text-white" 
                },
                { 
                  title: Category.VIAGENS_QUEM_VIAJA, 
                  desc: "Histórias compartilhadas.", 
                  icon: PenLine,
                  bg: "bg-paper", hoverBg: "hover:bg-accent", textColor: "text-ink", hoverText: "group-hover:text-white" 
                }
              ].map((cat, idx) => (
                <Link to="/editorial" key={idx} className={`${cat.bg} ${cat.hoverBg} py-10 px-6 md:p-12 flex flex-col items-center justify-center text-center aspect-auto md:h-[500px] group cursor-pointer transition-colors duration-700`}>
                   
                   {/* Icon */}
                   <cat.icon strokeWidth={0.5} className={`h-10 w-10 md:h-12 md:w-12 mb-6 md:mb-8 ${cat.textColor} ${cat.hoverText} transition-colors duration-500`} />
                   
                   <h3 className={`font-serif text-2xl md:text-3xl mb-4 md:mb-6 ${cat.textColor} ${cat.hoverText} transition-colors duration-500`}>
                     {cat.title}
                   </h3>
                   
                   {/* Increased opacity from 60 to 80/90 */}
                   <p className={`font-sans text-xs font-medium tracking-[0.1em] uppercase opacity-80 group-hover:opacity-100 transition-opacity duration-500 ${cat.textColor} ${cat.hoverText}`}>
                     {cat.desc}
                   </p>
                   
                   <div className={`mt-6 md:mt-10 opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-4 group-hover:translate-y-0 ${cat.hoverText}`}>
                     <ArrowRight className="h-5 w-5 md:h-6 md:w-6" strokeWidth={1} />
                   </div>
                </Link>
              ))}
           </div>
         </div>
      </section>
    </div>
  );
};
