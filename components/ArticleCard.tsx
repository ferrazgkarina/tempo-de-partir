import { FC } from "react";
import { Article, Category } from "../types";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ArticleCardProps {
  article: Article;
}

export const ArticleCard: FC<ArticleCardProps> = ({ article }) => {
  const getCategoryColor = (category: Category) => {
    switch (category) {
      case Category.ROTA_RITMO:
        return "bg-earth/95";
      case Category.BAGAGEM:
        return "bg-ink/95";
      case Category.MAPA_TEMPO:
        return "bg-plum/95";
      case Category.VIAGENS_QUEM_VIAJA:
        return "bg-accent/95";
      default:
        return "bg-accent/95";
    }
  };

  const overlayColorClass = getCategoryColor(article.category);
  const [mainTitle, subTitle] = article.title.includes(":")
    ? article.title.split(/:(.+)/)
    : [article.title, ""];

  return (
    <Link
      to={`/artigo/${article.id}`}
      className="group relative block w-full aspect-[3/4] md:aspect-[4/5] overflow-hidden bg-earth/10 cursor-pointer shadow-sm"
    >
      <div className="absolute inset-0 w-full h-full">
        <img
          src={article.imageUrl}
          alt={article.title}
          className="object-cover w-full h-full transition-transform duration-[1.5s] ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-0" />
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex flex-col justify-end transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4">
          <span className="text-[8px] md:text-[9px] font-bold tracking-[0.25em] uppercase text-paper/80 mb-2 md:mb-3">
            {article.category}
          </span>
          <h3 className="font-serif text-2xl md:text-3xl text-paper leading-none drop-shadow-md line-clamp-3">
            <span className="block">{mainTitle}</span>
            {subTitle && (
              <span className="block font-light text-lg md:text-xl mt-1 opacity-90">
                {subTitle.trim()}
              </span>
            )}
          </h3>
        </div>
      </div>
      <div
        className={`absolute inset-0 ${overlayColorClass} backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out flex flex-col justify-center items-center text-center p-6`}
      >
        <div className="absolute inset-3 md:inset-4 border border-paper/40 pointer-events-none transition-all duration-700 group-hover:inset-4 md:group-hover:inset-5" />
        <div className="relative z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-out w-full">
          <span className="inline-block text-[8px] font-bold tracking-[0.3em] uppercase text-paper/70 mb-3 md:mb-4">
            {article.date}
          </span>
          <h3 className="font-serif text-lg md:text-xl text-paper leading-tight mb-3 md:mb-4 px-2 line-clamp-3">
            <span className="block font-medium">{mainTitle}</span>
            {subTitle && (
              <span className="block text-sm mt-1 italic opacity-90">
                {subTitle.trim()}
              </span>
            )}
          </h3>
          <div className="w-6 h-px bg-paper/40 mx-auto mb-4" />
          <p className="font-sans text-xs text-paper/95 leading-relaxed font-light mb-6 line-clamp-4 md:line-clamp-5 px-1">
            {article.excerpt}
          </p>
          <div className="inline-flex items-center gap-2 text-[8px] md:text-[9px] font-bold uppercase tracking-[0.2em] text-paper group/btn">
            <span className="border-b border-transparent group-hover/btn:border-paper transition-all">
              Ler Ensaio
            </span>
            <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
};
