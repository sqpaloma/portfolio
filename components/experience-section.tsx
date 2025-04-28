import { AnimatedSection } from "@/components/animated-section";
import { AnimatedList } from "@/components/animated-list";
import { Badge } from "@/components/ui/badge";

interface ExperienceItem {
  title: string;
  status: "current" | "previous";
  description: string[];
  skills: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Consultora de Serviços",
    status: "current",
    description: [
      "Coordeno uma equipe de 8 mecânicos em duas linhas de produção: bombas e motores de engrenagem, e bombas e motores de pistões (circuito aberto e hidrostático).",
      "Responsável por toda a jornada do componente, da análise técnica/comercial até a entrega. Uso sistema ERP e aplicativo interno para programar serviços com eficiência.",
      "Membro do comitê de implantação da ISO 9001 na empresa.",
    ],
    skills: ["Gestão de Equipes", "Análise Técnica", "ISO 9001", "ERP"],
  },
  {
    title: "Assistente Técnico",
    status: "previous",
    description: [
      "Responsável pela gestão de contratos de manutenção de sistemas de refrigeração e predial em quatro estados do Brasil.",
      "Planejamento e execução de manutenções preventivas, com definição de escopo, cronograma, recursos necessários e gestão de equipes terceirizadas.",
      "Atendimento a SLAs críticos de até 2 horas para resolução de problemas extremos, seguido pela coordenação de manutenções corretivas, envolvendo programação de técnicos, orçamentos, alocação de recursos, tempo e custos.",
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
];

function ExperienceTimeline() {
  return (
    <div className="relative flex justify-center">
      <div className="absolute left-0 top-0 h-full w-1 bg-indigo-200 hidden md:block" />
      <div className="space-y-8 relative w-full">
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
      className="relative pl-0 md:pl-8 w-full"
    >
      <div className="absolute -left-3 top-7 h-6 w-6 rounded-full border-4 border-white bg-indigo-600 hidden md:block" />
      <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm w-full">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-indigo-600">
              {experience.title}
            </h3>
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
        <div className="space-y-4">
          {experience.description.map((paragraph, index) => (
            <p key={index} className="text-base">
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
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-50"
    >
      <div className="container mx-auto px-4 md:px-8 flex flex-col items-center">
        <div className="flex flex-col items-center justify-center space-y-4 text-center w-full">
          <AnimatedSection animation="slideUp" className="space-y-2 w-full">
            <div className="inline-block rounded-lg bg-indigo-100 px-6 py-2 text-2xl text-indigo-600">
              Experiência
            </div>
          </AnimatedSection>
          <div className="w-full max-w-4xl space-y-8">
            <ExperienceTimeline />
          </div>
        </div>
      </div>
    </section>
  );
}
