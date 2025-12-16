
import React from 'react';

export const Manifesto: React.FC = () => {
  return (
    <div className="min-h-screen bg-paper animate-fade-in">
      
      {/* 
          Banner Topo (Ink)
          - Altura Reduzida: Ajustado py-24/32 para py-12/20.
          - Mantém a identidade visual, mas ocupa menos espaço vertical.
      */}
      <div className="w-full bg-ink flex flex-col items-center justify-center py-12 md:py-20 relative z-0 px-4">
          <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase mb-4 md:mb-6 opacity-80">
            Manifesto
          </span>
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-paper tracking-wide text-center drop-shadow-lg leading-tight max-w-5xl">
            Para ler, guardar e partir.
          </h1>
      </div>

      {/* Hero Image Area */}
      <div className="w-full h-[50vh] md:h-[60vh] relative overflow-hidden">
        <div className="absolute inset-0 bg-ink/20 mix-blend-multiply z-10" />
        <img 
          src="https://picsum.photos/seed/mountain/1920/800" 
          alt="Paisagem serena" 
          className="w-full h-full object-cover grayscale-[20%]"
        />
      </div>

      {/* 
          Container de Texto
          - Mantido o overlap elegante sobre a imagem
      */}
      <div className="max-w-4xl mx-auto px-8 md:px-24 py-16 md:py-24 bg-[#f4efe7] relative -mt-24 md:-mt-32 z-30 shadow-2xl">
        
        <div className="mx-auto">
          
          {/* 
             Corpo do Texto
          */}
          <div className="space-y-10 font-sans text-[19px] md:text-[21px] leading-[1.8] text-justify font-light text-ink">
            
            <p>
              O <strong className="text-accent font-bold">Tempo de Partir</strong> fala sobre viagens de um jeito sensível, curioso e humano. Aqui, viajar não é só mudar de lugar — é mudar de ritmo, de olhar, de estado interno. Nossa voz nasce dessa mistura: um pouco poética, um pouco prática, sempre leve.
            </p>

            <p>
              Recuperamos o espírito das boas revistas de antigamente: aquelas feitas para educar, entreter e inspirar, sem prazo de validade. Somos uma revista digital desenhada para estar acessível a qualquer momento, servindo como seu manual de bolso para o mundo.
            </p>

            <p>
              Nosso tema central é viajar, mas não seguimos o ritmo frenético das redes. Enquanto o algoritmo premia o conteúdo rápido e a repetição exaustiva do "lugar da moda", nós escolhemos a pausa e a profundidade. Não estamos aqui para te vender o destino óbvio onde "todo mundo vai" ou resumir uma cultura em 15 segundos. Estamos aqui para revelar o inédito e o autêntico, onde as histórias de verdade acontecem e a viagem se torna conhecimento.
            </p>

            <p>
              Acreditamos que <strong className="text-accent font-bold">viajar melhor é uma questão de repertório.</strong> Por isso, nossas páginas virtuais cruzam fronteiras: falamos de roteiros, mas também de cinema, literatura, comportamento e cultura. Tudo isso é ferramenta de viagem. Um filme pode ensinar mais sobre um país do que um guia turístico padrão; um livro pode ser o melhor mapa de uma cidade.
            </p>

            <p>
              Nosso compromisso é com a qualidade da sua experiência. Seja para planejar a próxima partida ou apenas para descobrir algo novo numa terça-feira comum, este é o seu espaço.
            </p>

          </div>

          {/* Box de Citação Final */}
          <div className="mt-24 p-10 md:p-12 bg-paper border-l-4 border-gold shadow-sm">
            <p className="font-serif text-2xl md:text-3xl text-ink italic m-0 leading-relaxed text-left">
              Informação que fica.<br/>
              Histórias que marcam.<br/>
              Viagens que valem a pena.<br/>
              <br/>
              Seja bem-vindo ao Tempo de Partir.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};
