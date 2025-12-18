import { useState, FC } from "react";
import { MOCK_ARTICLES } from "../constants.ts";
import { ArticleCard } from "../components/ArticleCard.tsx";
import { Category } from "../types.ts";

export const Editorial: FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Todas");
  const categories = ["Todas", ...Object.values(Category)];

  const filteredArticles =
    activeCategory === "Todas"
      ? MOCK_ARTICLES
      : MOCK_ARTICLES.filter((art) => art.category === activeCategory);

  return (
    <div className="min-h-screen bg-paper pb-32 animate-fade-in">
      <div className="w-full bg-earth pt-32 pb-20 px-4 border-b border-paper/10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-serif text-3xl md:text-5xl text-paper mb-6 leading-tight drop-shadow-sm font-light">
            Nossa coleção completa de ensaios, guias literários e mapas astrais.
          </h1>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-20 border-b border-earth/20 pb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-sm uppercase tracking-widest transition-all duration-300 pb-2 ${
                activeCategory === cat
                  ? "text-accent font-bold border-b-2 border-accent"
                  : "text-earth hover:text-ink hover:border-b-2 hover:border-earth/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-x-12 md:gap-y-20">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <p className="font-serif text-2xl text-earth/50">
                Nenhum artigo encontrado nesta categoria.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
