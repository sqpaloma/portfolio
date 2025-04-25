import { AnimatedSection } from "@/components/animated-section";
import { AnimatedList } from "@/components/animated-list";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function SkillsSection() {
  return (
    <section
      id="habilidades"
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-50"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <AnimatedSection animation="slideUp" className="space-y-2">
            <div className="inline-block rounded-lg bg-indigo-100 px-3 py-1 text-sm text-indigo-600">
              Habilidades
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Habilidades Técnicas
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              Ferramentas e tecnologias que domino
            </p>
          </AnimatedSection>
          <div className="mx-auto w-full max-w-4xl">
            <Tabs defaultValue="sistemas" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-3">
                <TabsTrigger value="sistemas">Sistemas</TabsTrigger>
                <TabsTrigger value="desenvolvimento">
                  Desenvolvimento
                </TabsTrigger>
                <TabsTrigger value="gestao">Gestão</TabsTrigger>
              </TabsList>
              <TabsContent value="sistemas" className="mt-6 space-y-4">
                <AnimatedList
                  className="grid grid-cols-2 md:grid-cols-4 gap-4"
                  delay={0.2}
                  staggerDelay={0.1}
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
                        <rect width="18" height="18" x="3" y="3" rx="2" />
                        <path d="M7 7h10" />
                        <path d="M7 12h10" />
                        <path d="M7 17h10" />
                      </svg>
                    </div>
                    <h3 className="text-center text-base font-medium">ERP</h3>
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
                        <path d="M3 3v18h18" />
                        <path d="m19 9-5 5-4-4-3 3" />
                      </svg>
                    </div>
                    <h3 className="text-center text-base font-medium">
                      Excel Avançado
                    </h3>
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
                        <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                        <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                        <path d="M9 17h6" />
                        <path d="M9 13h6" />
                      </svg>
                    </div>
                    <h3 className="text-center text-base font-medium">Word</h3>
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
                        <path d="M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8" />
                        <line x1="16" x2="16" y1="2" y2="6" />
                        <line x1="8" x2="8" y1="2" y2="6" />
                        <line x1="3" x2="21" y1="10" y2="10" />
                        <path d="m16 16 2 2 4-4" />
                      </svg>
                    </div>
                    <h3 className="text-center text-base font-medium">
                      MS Project
                    </h3>
                  </div>
                </AnimatedList>
              </TabsContent>
              <TabsContent value="desenvolvimento" className="mt-6 space-y-4">
                <AnimatedList
                  className="grid grid-cols-2 md:grid-cols-4 gap-4"
                  delay={0.2}
                  staggerDelay={0.1}
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
                        <path d="m18 16 4-4-4-4" />
                        <path d="m6 8-4 4 4 4" />
                        <path d="m14.5 4-5 16" />
                      </svg>
                    </div>
                    <h3 className="text-center text-base font-medium">HTML</h3>
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
                        <path d="M3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2z" />
                        <path d="M12 12h.01" />
                        <path d="M8 12h.01" />
                        <path d="M16 12h.01" />
                      </svg>
                    </div>
                    <h3 className="text-center text-base font-medium">CSS</h3>
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
                        <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5l6.74-6.76z" />
                        <line x1="16" x2="19" y1="8" y2="5" />
                        <line x1="2" x2="5" y1="22" y2="19" />
                      </svg>
                    </div>
                    <h3 className="text-center text-base font-medium">
                      JavaScript
                    </h3>
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
                        <path d="M12 2H2v10h10V2z" />
                        <path d="M12 12H2v10h10V12z" />
                        <path d="M22 2h-10v10h10V2z" />
                        <path d="M12 12h10v10H12V12z" />
                      </svg>
                    </div>
                    <h3 className="text-center text-base font-medium">
                      React/Next.js
                    </h3>
                  </div>
                </AnimatedList>
              </TabsContent>
              <TabsContent value="gestao" className="mt-6 space-y-4">
                <AnimatedList
                  className="grid grid-cols-2 md:grid-cols-3 gap-4"
                  delay={0.2}
                  staggerDelay={0.1}
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
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                    </div>
                    <h3 className="text-center text-base font-medium">
                      Gestão de Equipes
                    </h3>
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
                        <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
                        <path d="M17 18h1"></path>
                        <path d="M12 18h1"></path>
                        <path d="M7 18h1"></path>
                      </svg>
                    </div>
                    <h3 className="text-center text-base font-medium">
                      ISO 9001
                    </h3>
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
                        <path d="M12 20h9"></path>
                        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                      </svg>
                    </div>
                    <h3 className="text-center text-base font-medium">
                      Gestão de Processos
                    </h3>
                  </div>
                </AnimatedList>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}
