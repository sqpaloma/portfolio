export interface Project {
  title: string;
  description: string;
  image: string;
  badges: string[];
  status?: string;
  carousel?: string[];
}

export const projects: Project[] = [
  {
    title: "ISO 9001",
    description:
      "Liderança na implementação do sistema de gestão da qualidade ISO 9001 no setor de Consultoria de Engenharia. Responsável pela coordenação do processo, desenvolvimento de procedimentos, treinamento da equipe e gestão de melhorias contínuas.",
    image: "/iso-project.png",
    badges: ["Gestão da Qualidade", "Consultoria"],
    status: "Em andamento",
  },
  {
    title: "Ortobank",
    description:
      "Gestão do projeto de desenvolvimento do aplicativo web, utilizando Basecamp para rastreamento de tarefas e comunicação com a equipe. Responsável pela organização do fluxo de trabalho, definição de prioridades e acompanhamento do desempenho da equipe.",
    image: "/webapp-project.png",
    badges: ["Gestão de Projetos", "Basecamp", "Comunicação"],
  },
  {
    title: "Site da RLP",
    description:
      "Projeto desenvolvido com Next.js, React e Vercel. Fui responsável pela estrutura, organização de conteúdo e identidade visual.",
    image: "/corporate-website.png",
    badges: ["Next.js", "React"],
  },
  {
    title: "Divina Flor",
    description:
      "E-commerce de produtos de beleza, joias, skincare e lingerie desenvolvido com Next.js, React e integração com Shopify. Projeto em fase de desenvolvimento.",
    image: "/beauty-ecommerce-1.png",
    badges: ["Next.js", "React", "Shopify"],
    status: "Em andamento",
    carousel: [
      "/beauty-ecommerce-1.png",
      "/beauty-ecommerce-2.png",
      "/beauty-ecommerce-3.jpg",
    ],
  },
];
