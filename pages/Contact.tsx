import { FC } from "react";
import { Mail, MapPin } from "lucide-react";

export const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-paper py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
            Fale Conosco
          </span>
          <h1 className="font-serif text-6xl text-ink mb-6">
            Contato & Parcerias
          </h1>
          <p className="font-sans text-ink/90 max-w-xl mx-auto font-light text-lg">
            Quer sugerir uma pauta, propor uma parceria comercial ou apenas
            compartilhar uma história de viagem? Escreva para nós.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Contact Info */}
          <div className="md:col-span-1 space-y-10">
            <div>
              <h3 className="font-serif text-2xl text-ink mb-4">Redação</h3>
              <div className="flex items-start space-x-3 text-ink/90 font-sans text-sm font-light">
                <MapPin className="h-5 w-5 mt-1 text-accent" />
                <p>
                  Av. Paulista, 1000 - Bela Vista
                  <br />
                  São Paulo, SP - Brasil
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-2xl text-ink mb-4">Email</h3>
              <div className="flex items-center space-x-3 text-ink/90 font-sans text-sm font-light">
                <Mail className="h-5 w-5 text-accent" />
                <a
                  href="mailto:contato@tempodepartir.com"
                  className="hover:text-accent transition-colors"
                >
                  contato@tempodepartir.com
                </a>
              </div>
            </div>

            <div className="pt-10 border-t border-earth/20">
              <p className="font-serif text-xl text-ink italic">
                "A resposta chega para quem sabe perguntar."
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-2 bg-white p-8 md:p-12 shadow-sm border border-earth/10">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-bold uppercase tracking-widest text-earth mb-2"
                  >
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-paper/50 border border-earth/20 px-4 py-3 text-ink focus:outline-none focus:border-accent transition-colors font-sans"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-bold uppercase tracking-widest text-earth mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-paper/50 border border-earth/20 px-4 py-3 text-ink focus:outline-none focus:border-accent transition-colors font-sans"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs font-bold uppercase tracking-widest text-earth mb-2"
                >
                  Assunto
                </label>
                <select
                  id="subject"
                  className="w-full bg-paper/50 border border-earth/20 px-4 py-3 text-ink focus:outline-none focus:border-accent transition-colors font-sans"
                >
                  <option>Sugestão de Pauta</option>
                  <option>Parceria Comercial</option>
                  <option>Feedback</option>
                  <option>Outros</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-bold uppercase tracking-widest text-earth mb-2"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full bg-paper/50 border border-earth/20 px-4 py-3 text-ink focus:outline-none focus:border-accent transition-colors font-sans"
                ></textarea>
              </div>

              <div className="text-right">
                <button
                  type="button"
                  className="inline-block px-10 py-4 bg-ink text-gold font-bold uppercase tracking-widest text-xs hover:bg-accent hover:text-white transition-colors duration-300"
                >
                  Enviar Mensagem
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
