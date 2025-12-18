import { FC } from "react";

interface PullQuoteProps {
  text: string;
}

export const PullQuote: React.FC<PullQuoteProps> = ({ text }) => {
  return (
    <div className="relative my-16 md:my-20 max-w-[110%] w-[100vw] md:w-full left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] md:static md:ml-auto md:mr-auto md:max-w-4xl px-6 md:px-0">
      <div className="flex flex-col items-center justify-center relative py-10 md:py-12">
        {/* Linha Decorativa Superior */}
        <div className="w-16 md:w-24 h-px bg-accent/50 mb-8" />

        <div className="relative max-w-3xl mx-auto text-center">
          {/* Aspas Gigantes no Fundo (Efeito Visual) */}
          <span className="hidden md:block absolute -top-8 left-1/2 -translate-x-1/2 text-[10rem] leading-none font-serif text-earth/5 select-none pointer-events-none z-0">
            “
          </span>

          {/* Texto da Citação */}
          <blockquote className="relative z-10 font-serif text-2xl md:text-4xl md:leading-[1.4] text-ink italic font-medium drop-shadow-sm">
            {text}
          </blockquote>
        </div>

        {/* Linha Decorativa Inferior */}
        <div className="w-16 md:w-24 h-px bg-accent/50 mt-8" />
      </div>
    </div>
  );
};
