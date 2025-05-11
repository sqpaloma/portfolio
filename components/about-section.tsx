import React from "react";
import { AnimatedSection } from "@/components/animated-section";
import { AnimatedList } from "@/components/animated-list";
import { skills, Skill } from "@/components/skills-section";

function SkillCard({ title, icon }: Skill) {
  return (
    <div className="group flex flex-col items-center space-y-2 rounded-lg border border-indigo-100 bg-white p-4 shadow-sm transition-all duration-300 hover:bg-indigo-100 hover:border-indigo-200 hover:shadow-md">
      <div className="rounded-full bg-indigo-100 p-2 text-indigo-600 transition-colors duration-300 group-hover:bg-white group-hover:text-indigo-600">
        {icon}
      </div>
      <h3 className="text-center text-base font-medium text-gray-700 transition-colors duration-300 group-hover:text-indigo-600">
        {title}
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
              <SkillCard key={index} {...skill} />
            ))}
          </AnimatedList>
        </div>
      </div>
    </section>
  );
}
