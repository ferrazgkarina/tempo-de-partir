import { useState, FC, FormEvent } from "react";
import { Mail, Instagram, CheckCircle, AlertCircle } from "lucide-react";

export const Footer: FC = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    setTimeout(() => {
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <footer className="bg-ink text-paper pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mb-16">
          {/* Brand & Manifesto Snippet */}
          <div className="space-y-6">
            <h3 className="font-serif text-4xl text-paper">Tempo de Partir</h3>
            <p className="font-sans text-paper/70 leading-relaxed max-w-md font-light">
              Uma revista digital para quem viaja para dentro, tanto quanto para
              fora. Acreditamos que o ritmo de um lugar é mais importante que o
              seu mapa.
            </p>
            <div className="flex space-x-6 pt-4">
              <a
                href="https://instagram.com/tempodepartir"
                target="_blank"
                rel="noopener noreferrer"
                className="text-paper/60 hover:text-gold transition-colors flex items-center gap-2"
              >
                <Instagram className="h-5 w-5" />
                <span className="text-sm font-sans tracking-widest">
                  @tempodepartir
                </span>
              </a>
            </div>
          </div>

          {/* Newsletter CTA */}
          <div className="bg-white/5 p-8 border border-white/10 rounded-sm">
            {/* Título em Zain (font-serif) */}
            <h4 className="font-serif text-2xl mb-3 text-gold flex items-center gap-2">
              <Mail className="h-5 w-5" />
              Carta de Partida
            </h4>

            {/* Texto em Urbanist (font-sans) */}
            <p className="text-sm text-paper/70 mb-6 font-sans font-light leading-relaxed">
              Nossa conversa quinzenal na sua caixa de entrada. Enviamos
              ensaios, curadorias de livros, previsões do céu e segredos que não
              postamos no Instagram. Sem spam, apenas pausas boas para ler com
              café.
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 relative"
            >
              {status === "success" ? (
                <div className="w-full bg-earth/20 border border-earth/40 p-3 flex items-center gap-3 text-paper animate-fade-in">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-sm font-sans">
                    Inscrição confirmada. Bem-vindo a bordo!
                  </span>
                </div>
              ) : (
                <>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Seu melhor e-mail"
                    disabled={status === "loading"}
                    required
                    className="flex-1 px-4 py-3 bg-ink border border-paper/20 text-paper placeholder-paper/30 focus:outline-none focus:border-gold transition-all font-sans disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="px-6 py-3 bg-gold text-ink font-bold hover:bg-white transition-colors uppercase tracking-wider text-xs whitespace-nowrap disabled:bg-paper/20 disabled:text-paper/50"
                  >
                    {status === "loading" ? "Enviando..." : "Quero receber"}
                  </button>
                </>
              )}
            </form>
            {status === "error" && (
              <div className="mt-2 text-red-400 text-xs flex items-center gap-1">
                <AlertCircle className="h-3 w-3" />
                <span>Ocorreu um erro. Tente novamente.</span>
              </div>
            )}
          </div>
        </div>

        <div className="border-t border-paper/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-paper/40 font-sans uppercase tracking-widest">
          <p>
            &copy; {new Date().getFullYear()} Tempo de Partir. Todos os direitos
            reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gold">
              Privacidade
            </a>
            <a href="#" className="hover:text-gold">
              Termos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
