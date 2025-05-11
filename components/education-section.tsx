import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/animated-section";
import { AnimatedList } from "@/components/animated-list";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function EducationSection() {
  return (
    <section id="formacao" className="w-full py-12 md:py-24 lg:py-16">
      <div className="container mx-auto px-4 md:px-8 flex flex-col items-center">
        <div className="flex flex-col items-center justify-center space-y-14 text-center w-full">
          <AnimatedSection animation="slideUp" className="space-y-2">
            <div className="inline-block rounded-lg bg-indigo-100 px-6 py-2 text-2xl text-indigo-600">
              Formação Acadêmica
            </div>
          </AnimatedSection>
          <AnimatedList
            className="mx-auto grid max-w-5xl gap-8 md:grid-cols-1"
            delay={0.2}
            staggerDelay={0.2}
          >
            <Card className="border-indigo-100 shadow-sm">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-indigo-600">
                      Engenharia Mecânica
                    </h3>
                    <p className="text-gray-500">Graduação</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-indigo-600">Concluído</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-indigo-100 shadow-sm">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-indigo-600">
                      MBA em Engenharia e Gestão da Manutenção e Manufatura
                    </h3>
                    <p className="text-gray-500">Pós-graduação</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant="outline"
                      className="border-indigo-200 text-indigo-700"
                    >
                      Em andamento
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedList>
          <AnimatedSection
            animation="fadeIn"
            delay={0.4}
            className="mx-auto max-w-3xl pt-2"
          >
            <h3 className="text-2xl pb-8 font-bold">Idiomas</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <motion.div
                className="flex items-center justify-between rounded-lg border border-indigo-100 bg-white p-4 shadow-sm"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="space-y-0.5">
                  <h4 className="text-base font-medium">Português</h4>
                </div>
                <Badge
                  variant="outline"
                  className="border-indigo-200 text-indigo-700"
                >
                  Nativo
                </Badge>
              </motion.div>

              <motion.div
                className="flex items-center justify-between rounded-lg border border-indigo-100 bg-white p-4 shadow-sm"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="space-y-0.5">
                  <h4 className="text-base font-medium">Inglês</h4>
                </div>
                <Badge
                  variant="outline"
                  className="border-indigo-200 text-indigo-700"
                >
                  Avançado
                </Badge>
              </motion.div>
              <motion.div
                className="flex items-center justify-between rounded-lg border border-indigo-100 bg-white p-4 shadow-sm"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="space-y-0.5">
                  <h4 className="text-base font-medium">Alemão</h4>
                </div>
                <Badge
                  variant="outline"
                  className="border-indigo-200 text-indigo-700"
                >
                  Básico
                </Badge>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
