import { Metadata } from "next";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.title.toLowerCase().replace(/\s+/g, "-"),
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const project = projects.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, "-") === params.slug
  );

  if (!project) {
    return {
      title: "Projeto não encontrado",
    };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, "-") === params.slug
  );

  if (!project) {
    return (
      <div className="container px-4 md:px-6 py-12">
        <h1 className="text-2xl font-bold text-red-600">
          Projeto não encontrado
        </h1>
      </div>
    );
  }

  return (
    <div className="container px-4 md:px-6 py-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-indigo-600">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-2">
            {project.badges.map((badge, i) => (
              <Badge
                key={i}
                variant="outline"
                className="border-indigo-200 text-indigo-700"
              >
                {badge}
              </Badge>
            ))}
            {project.status && (
              <Badge
                variant="secondary"
                className="bg-indigo-100 text-indigo-700"
              >
                {project.status}
              </Badge>
            )}
          </div>
        </div>

        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-indigo max-w-none">
          <p className="text-lg text-gray-600">{project.description}</p>

          {(project.title === "ISO 9001" || project.title === "Ortobank") && (
            <div className="mt-8 space-y-4">
              <h2 className="text-2xl font-semibold text-indigo-600">
                Responsabilidades
              </h2>
              {project.title === "ISO 9001" && (
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>
                    Coordenação do processo de implementação do sistema de
                    gestão da qualidade
                  </li>
                  <li>
                    Desenvolvimento e documentação de procedimentos e processos
                  </li>
                  <li>Treinamento e capacitação da equipe</li>
                  <li>
                    Gestão de melhorias contínuas e monitoramento de indicadores
                  </li>
                </ul>
              )}
              {project.title === "Ortobank" && (
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>
                    Organização e priorização do fluxo de trabalho da equipe
                  </li>
                  <li>
                    Definição e acompanhamento de metas e prazos do projeto
                  </li>
                  <li>
                    Comunicação efetiva com stakeholders e membros da equipe
                  </li>
                  <li>Monitoramento e relatórios de progresso do projeto</li>
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
