import { AnimatedSection } from "@/components/animated-section";
import { AnimatedList } from "@/components/animated-list";

export function AboutSection() {
  return (
    <section id="sobre" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <AnimatedSection animation="slideUp" className="space-y-2">
            <div className="inline-block rounded-lg bg-indigo-100 px-3 py-1 text-sm text-indigo-600">
              Sobre Mim
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Quem Sou
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              Profissional com experiência no setor industrial
            </p>
          </AnimatedSection>
          <AnimatedSection
            animation="fadeIn"
            delay={0.2}
            className="mx-auto max-w-3xl space-y-4 text-left"
          >
            <p className="text-base md:text-lg">
              Engenheira com sólida experiência no setor industrial, MBA em
              Engenharia e Gestão da Manutenção (em andamento), atuando na área
              comercial com foco técnico. Coordena equipe de 8 mecânicos e atua
              desde o diagnóstico técnico até a entrega final ao cliente.
              Participa do comitê de implantação da ISO 9001.
            </p>
            <p className="text-base md:text-lg">
              Apaixonada por resolver problemas, liderar times e otimizar
              processos com foco em resultados e inovação. Atua com gestão
              estratégica e busca desafios em ambientes colaborativos,
              inovadores e com impacto real.
            </p>
          </AnimatedSection>
          <AnimatedList
            className="w-full max-w-md grid grid-cols-2 gap-4 sm:grid-cols-3 md:max-w-xl mt-8"
            delay={0.4}
          >
            <div className="flex flex-col items-center space-y-2 rounded-lg border border-indigo-100 bg-white p-4 shadow-sm">
              <div className="rounded-full bg-indigo-100 p-2 text-indigo-600">
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
              </div>
              <h3 className="text-center text-base font-medium">Engenharia</h3>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border border-indigo-100 bg-white p-4 shadow-sm">
              <div className="rounded-full bg-indigo-100 p-2 text-indigo-600">
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
              </div>
              <h3 className="text-center text-base font-medium">Liderança</h3>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border border-indigo-100 bg-white p-4 shadow-sm">
              <div className="rounded-full bg-indigo-100 p-2 text-indigo-600">
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
              </div>
              <h3 className="text-center text-base font-medium">Gestão</h3>
            </div>
          </AnimatedList>
        </div>
      </div>
    </section>
  );
}
