import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/animated-section";
import { AnimatedList } from "@/components/animated-list";
import { Card, CardContent } from "@/components/ui/card";

export function GoalsSection() {
  return (
    <section
      id="objetivos"
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-50"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <AnimatedSection animation="slideUp" className="space-y-2">
            <div className="inline-block rounded-lg bg-indigo-100 px-3 py-1 text-sm text-indigo-600">
              Objetivos
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Metas Profissionais
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              Para onde estou direcionando minha carreira
            </p>
          </AnimatedSection>
          <AnimatedSection
            animation="scale"
            delay={0.2}
            className="mx-auto max-w-3xl space-y-4"
          >
            <Card className="border-indigo-100 shadow-sm">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <motion.div
                    className="flex justify-center"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div className="rounded-full bg-indigo-100 p-3 text-indigo-600">
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
                        className="h-8 w-8"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                  </motion.div>
                  <p className="text-lg text-center">
                    Atuar como gerente de projetos ou processos em empresas que
                    valorizam inovação, eficiência e colaboração.
                  </p>
                  <AnimatedList
                    className="grid grid-cols-1 md:grid-cols-3 gap-4"
                    delay={0.4}
                    staggerDelay={0.1}
                  >
                    <div className="flex flex-col items-center space-y-2 rounded-lg border border-indigo-100 bg-white p-4 shadow-sm">
                      <h4 className="text-base font-medium text-indigo-600">
                        Inovação
                      </h4>
                    </div>
                    <div className="flex flex-col items-center space-y-2 rounded-lg border border-indigo-100 bg-white p-4 shadow-sm">
                      <h4 className="text-base font-medium text-indigo-600">
                        Eficiência
                      </h4>
                    </div>
                    <div className="flex flex-col items-center space-y-2 rounded-lg border border-indigo-100 bg-white p-4 shadow-sm">
                      <h4 className="text-base font-medium text-indigo-600">
                        Colaboração
                      </h4>
                    </div>
                  </AnimatedList>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
