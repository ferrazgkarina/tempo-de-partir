
export enum Category {
  ROTA_RITMO = "Lugares para Estar",
  BAGAGEM = "Para Ler e Ver",
  MAPA_TEMPO = "O Tempo e o Céu",
  VIAGENS_QUEM_VIAJA = "Viagens de quem viaja"
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string; // Novo campo para o texto completo do artigo
  category: Category;
  imageUrl: string;
  author: string;
  date: string;
  readTime: string;
}

export interface NavLink {
  label: string;
  path: string;
}
