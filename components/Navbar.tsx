import { useState, FC } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "../types";
import { Link, useLocation } from "react-router-dom";
import { LogoIcon } from "./LogoIcon";

const navLinks: NavLink[] = [
  { label: "Início", path: "/" },
  { label: "Editorial", path: "/editorial" },
  { label: "Manifesto", path: "/manifesto" },
  { label: "Contato", path: "/contato" },
];

export const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className="sticky top-0 z-50 bg-paper/95 backdrop-blur-md border-b border-earth/20"
      aria-label="Navegação Principal"
    >
      <div className="w-full px-[30px]">
        <div className="relative flex items-center justify-between h-24">
          {/* Logo Icon Left */}
          <div className="flex-shrink-0 z-10 flex items-center">
            <Link
              to="/"
              className="group p-2 -ml-2"
              aria-label="Voltar para a página inicial"
            >
              <LogoIcon className="h-12 w-12 text-ink group-hover:text-accent transition-colors duration-500 ease-out" />
            </Link>
          </div>

          {/* Central Title and Tagline */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 text-center flex flex-col items-center">
            <Link
              to="/"
              className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-ink hover:text-accent transition-colors whitespace-nowrap leading-none"
            >
              Tempo de Partir
            </Link>
            <span className="text-[8px] md:text-[9px] tracking-[0.25em] uppercase text-earth font-sans mt-1.5 border-t border-earth/20 pt-1 w-full hidden sm:block">
              Revista Digital de Viagens & Cultura
            </span>
          </div>

          {/* Desktop Navigation / Mobile Toggle */}
          <div className="flex-shrink-0 z-10 flex items-center">
            <div
              className="hidden md:flex space-x-10 items-center"
              role="menubar"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  role="menuitem"
                  aria-current={isActive(link.path) ? "page" : undefined}
                  className={`text-xs tracking-[0.2em] uppercase font-bold transition-colors duration-300 ${
                    isActive(link.path)
                      ? "text-accent"
                      : "text-earth hover:text-ink"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <button
              onClick={toggleMenu}
              className="md:hidden p-2 text-ink hover:text-accent transition-colors"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-paper border-b border-earth/20 shadow-2xl transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-4 invisible pointer-events-none"
        }`}
      >
        <div className="px-8 py-10 flex flex-col space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-lg tracking-[0.1em] font-serif transition-colors ${
                isActive(link.path)
                  ? "text-accent font-bold"
                  : "text-ink hover:text-accent"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
