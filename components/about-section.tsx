import React from "react";
import { AnimatedSection } from "@/components/animated-section";
import { AnimatedList } from "@/components/animated-list";

interface Skill {
  title: string;
  icon: React.ReactNode;
}

const skills: Skill[] = [
  {
    title: "Engenharia",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
        <circle cx="12" cy="12" r="3"></circle>
      </svg>
    ),
  },
  {
    title: "Liderança",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
  },
  {
    title: "Comunicação",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z"></path>
      </svg>
    ),
  },
  {
    title: "Estratégia",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M5 3v4"></path>
        <path d="M19 17v4"></path>
        <path d="M3 5h4"></path>
        <path d="M17 19h4"></path>
        <path d="m5 21 14-14"></path>
      </svg>
    ),
  },
  {
    title: "Gestão",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
        <path d="M13 5v2"></path>
        <path d="M13 17v2"></path>
        <path d="M13 11v2"></path>
      </svg>
    ),
  },
  {
    title: "Análise Técnica",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M2.5 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
        <path d="M6 10.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
        <path d="M15 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
        <path d="M8.5 15a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
        <path d="M12 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
        <path d="M19 15.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
        <path d="M15 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
        <path d="M4 16l4.5-3"></path>
        <path d="M15 17.5l-3-2"></path>
        <path d="M13.5 12l5 2"></path>
        <path d="M10.5 12l-2.5-2"></path>
        <path d="M7.5 9l5-6"></path>
        <path d="M13.5 9l2.5-4"></path>
      </svg>
    ),
  },
];

function SkillCard({ skill }: { skill: Skill }) {
  return (
    <div className="group flex flex-col items-center space-y-2 rounded-lg border border-indigo-100 bg-white p-4 shadow-sm transition-all duration-300 hover:bg-indigo-100 hover:border-indigo-200 hover:shadow-md">
      <div className="rounded-full bg-indigo-100 p-2 text-indigo-600 transition-colors duration-300 group-hover:bg-white group-hover:text-indigo-600">
        {skill.icon}
      </div>
      <h3 className="text-center text-base font-medium text-gray-700 transition-colors duration-300 group-hover:text-indigo-600">
        {skill.title}
      </h3>
    </div>
  );
}

export function AboutSection() {
  return (
    <section id="sobre" className="w-full py-12 pb-48 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <AnimatedSection animation="slideUp" className="space-y-12 w-full">
            <div className="flex justify-center mb-8">
              <div className="inline-block rounded-lg bg-indigo-100 px-6 py-2 text-2xl text-center text-indigo-600">
                Sobre Mim
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-base md:text-lg text-justify">
                Engenheira com sólida experiência no setor industrial, MBA em
                Engenharia e Gestão da Manutenção (em andamento), atuando na
                área comercial com foco técnico. Coordeno equipe de mecânicos e
                atuo desde o diagnóstico técnico até a entrega final ao cliente.
                Participo do comitê de implantação da ISO 9001.
              </p>
              <p className="text-base md:text-lg text-justify">
                Apaixonada por resolver problemas, liderar times e otimizar
                processos com foco em resultados e inovação. Atuo com gestão
                estratégica e busco desafios em ambientes colaborativos,
                inovadores e com impacto real.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedList className="w-full grid grid-cols-2 gap-4" delay={0.4}>
            {skills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </AnimatedList>
        </div>
      </div>
    </section>
  );
}
