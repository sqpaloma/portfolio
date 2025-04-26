import { AnimatedSection } from "@/components/animated-section";
import { AnimatedList } from "@/components/animated-list";
import { Badge } from "@/components/ui/badge";

export function ExperienceSection() {
  return (
    <section
      id="experiencia"
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-50"
    >
      <div className="container mx-auto px-4 md:px-8 flex flex-col items-center">
        <div className="flex flex-col items-center justify-center space-y-4 text-center w-full">
          <AnimatedSection animation="slideUp" className="space-y-2 w-full">
            <div className="inline-block rounded-lg bg-indigo-100 px-3 py-1 text-sm text-indigo-600">
              Experiência
            </div>
            <p className="text-gray-500 md:text-xl w-full">
              Minha experiência no setor industrial
            </p>
          </AnimatedSection>
          <div className="w-full max-w-4xl space-y-8">
            <div className="relative flex justify-center">
              <div className="absolute left-0 top-0 h-full w-1 bg-indigo-200 hidden md:block"></div>
              <div className="space-y-8 relative w-full">
                <AnimatedSection
                  animation="fadeInRight"
                  className="relative pl-0 md:pl-8 w-full"
                >
                  <div className="absolute -left-3 top-7 h-6 w-6 rounded-full border-4 border-white bg-indigo-600 hidden md:block"></div>
                  <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm w-full">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-indigo-600">
                          Consultora de Serviços
                        </h3>
                        <Badge className="bg-indigo-600">Atual</Badge>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <p className="text-base">
                        Coordeno uma equipe de 8 mecânicos em duas linhas de
                        produção: bombas e motores de engrenagem, e bombas e
                        motores de pistões (circuito aberto e hidrostático).
                      </p>
                      <p className="text-base">
                        Responsável por toda a jornada do componente, da análise
                        técnica/comercial até a entrega. Uso sistema ERP e
                        aplicativo interno para programar serviços com
                        eficiência.
                      </p>
                      <p className="text-base">
                        Membro do comitê de implantação da ISO 9001 na empresa.
                      </p>
                    </div>
                    <AnimatedList
                      className="flex flex-wrap gap-2 justify-center"
                      delay={0.3}
                      staggerDelay={0.05}
                    >
                      <Badge
                        variant="outline"
                        className="border-indigo-200 text-indigo-700"
                      >
                        Gestão de Equipes
                      </Badge>
                      <Badge
                        variant="outline"
                        className="border-indigo-200 text-indigo-700"
                      >
                        Análise Técnica
                      </Badge>
                      <Badge
                        variant="outline"
                        className="border-indigo-200 text-indigo-700"
                      >
                        ISO 9001
                      </Badge>
                      <Badge
                        variant="outline"
                        className="border-indigo-200 text-indigo-700"
                      >
                        ERP
                      </Badge>
                    </AnimatedList>
                  </div>
                </AnimatedSection>

                <AnimatedSection
                  animation="fadeInRight"
                  className="relative pl-0 md:pl-8 w-full"
                >
                  <div className="absolute -left-3 top-7 h-6 w-6 rounded-full border-4 border-white bg-indigo-600 hidden md:block"></div>
                  <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm w-full">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-indigo-600">
                          Assistente Técnico
                        </h3>
                        <Badge className="bg-gray-600">Anterior</Badge>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <p className="text-base">
                        Responsável pela gestão de contratos de manutenção de
                        sistemas de refrigeração e predial em quatro estados do
                        Brasil.
                      </p>
                      <p className="text-base">
                        Planejamento e execução de manutenções preventivas, com
                        definição de escopo, cronograma, recursos necessários e
                        gestão de equipes terceirizadas.
                      </p>
                      <p className="text-base">
                        Atendimento a SLAs críticos de até 2 horas para
                        resolução de problemas extremos, seguido pela
                        coordenação de manutenções corretivas, envolvendo
                        programação de técnicos, orçamentos, alocação de
                        recursos, tempo e custos.
                      </p>
                      <p className="text-base">
                        Desenvolvimento e apresentação de dashboards gerenciais
                        com indicadores por estado para diretoria, além de
                        realização de análises de risco e lucratividade.
                      </p>
                    </div>
                    <AnimatedList
                      className="flex flex-wrap gap-2 justify-center"
                      delay={0.3}
                      staggerDelay={0.05}
                    >
                      <Badge
                        variant="outline"
                        className="border-indigo-200 text-indigo-700"
                      >
                        Gestão de Contratos
                      </Badge>
                      <Badge
                        variant="outline"
                        className="border-indigo-200 text-indigo-700"
                      >
                        Manutenção Preventiva
                      </Badge>
                      <Badge
                        variant="outline"
                        className="border-indigo-200 text-indigo-700"
                      >
                        Gestão de SLAs
                      </Badge>
                      <Badge
                        variant="outline"
                        className="border-indigo-200 text-indigo-700"
                      >
                        Análise de Dados
                      </Badge>
                      <Badge
                        variant="outline"
                        className="border-indigo-200 text-indigo-700"
                      >
                        Gestão de Equipes
                      </Badge>
                    </AnimatedList>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
