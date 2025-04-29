import { AnimatedSection } from "@/components/animated-section";
import { AnimatedList } from "@/components/animated-list";
import { Badge } from "@/components/ui/badge";

interface ExperienceItem {
  title: string;
  status: "current" | "previous";
  description: string[];
  skills: string[];
  year: string;
}

const experiences: ExperienceItem[] = [
  {
    title: "Assistente Técnico",
    status: "previous",
    year: "2020",
    description: [
      "Responsável pela gestão, planejamento e execução de manutenções preventivas, com definição de escopo, cronograma, recursos necessários e gestão de equipes terceirizadas.",
      "Atendimento a SLAs críticos de até 2 horas para resolução de problemas extremos, seguido pela manutenções corretivas, envolvendo programação de técnicos, orçamentos, alocação de recursos, tempo e custos.",
      "Desenvolvimento e apresentação de dashboards gerenciais com indicadores por estado para diretoria, além de realização de análises de risco e lucratividade.",
    ],
    skills: [
      "Gestão de Contratos",
      "Manutenção Preventiva",
      "Gestão de SLAs",
      "Análise de Dados",
      "Gestão de Equipes",
    ],
  },
  {
    title: "Consultora de Serviços",
    status: "current",
    year: "2025",
    description: [
      "Atuo na coordenação de uma equipe de 8 mecânicos especializados, distribuídos em duas linhas de produção: motores e bombas de engrenagem, e sistemas de pistões (circuito aberto e hidrostático). Sou responsável por toda a jornada dos componentes, desde a análise técnica e viabilidade comercial até a entrega final ao cliente, garantindo qualidade e eficiência em cada etapa.",
      "Responsável por toda a jornada do componente, da análise técnica/comercial até a entrega. Uso sistema ERP e aplicativo interno para programar serviços com eficiência.",
      "Membro do comitê de implantação da ISO 9001 na empresa.",
    ],
    skills: [
      "Gestão de Equipes",
      "Análise Técnica",
      "Comitê ISO 9001",
      "Negociação",
      "ERP",
    ],
  },
];

function ExperienceTimeline() {
  return (
    <div className="relative w-full">
      <div className="absolute top-0 left-0 right-0 h-1 bg-indigo-200 hidden md:block" />
      <div className="flex flex-col md:flex-row md:justify-between md:items-start md:space-x-8 relative w-full">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </div>
    </div>
  );
}

function ExperienceCard({ experience }: { experience: ExperienceItem }) {
  return (
    <AnimatedSection
      animation="fadeInRight"
      className="relative w-full md:w-[45%]"
    >
      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 h-6 w-6 rounded-full border-4 border-white bg-indigo-600 hidden md:block" />
      <div className="text-center mt-4 mb-8 hidden md:block">
        <span className="text-sm font-medium text-indigo-600">
          {experience.year}
        </span>
      </div>
      <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm w-full h-full flex flex-col">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex-1 text-center">
              <h3 className="text-xl font-bold text-indigo-600 inline-block">
                {experience.title}
              </h3>
            </div>
            <Badge
              className={
                experience.status === "current"
                  ? "bg-indigo-600"
                  : "bg-gray-600"
              }
            >
              {experience.status === "current" ? "Atual" : "Anterior"}
            </Badge>
          </div>
        </div>
        <div className="space-y-4 flex-grow">
          {experience.description.map((paragraph, index) => (
            <p key={index} className="text-base text-justify">
              {paragraph}
            </p>
          ))}
        </div>
        <AnimatedList
          className="flex flex-wrap gap-2 justify-center"
          delay={0.3}
          staggerDelay={0.05}
        >
          {experience.skills.map((skill, index) => (
            <Badge
              key={index}
              variant="outline"
              className="border-indigo-200 text-indigo-700"
            >
              {skill}
            </Badge>
          ))}
        </AnimatedList>
      </div>
    </AnimatedSection>
  );
}

export function ExperienceSection() {
  return (
    <section
      id="experiencia"
      className="w-full py-2 md:py-24 lg:py-24 bg-gray-50"
    >
      <div className="container mx-auto px-4 md:px-8 flex flex-col items-center">
        <div className="flex flex-col items-center justify-center space-y-14 text-center w-full">
          <AnimatedSection animation="slideUp" className="space-y-2 w-full">
            <div className="inline-block rounded-lg bg-indigo-100 px-6 py-2 text-2xl text-indigo-600">
              Experiência Profissional
            </div>
          </AnimatedSection>
          <div className="w-full max-w-6xl space-y-8">
            <ExperienceTimeline />
          </div>
        </div>
      </div>
    </section>
  );
}
