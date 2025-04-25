import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/animated-section";
import { AnimatedList } from "@/components/animated-list";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function EducationSection() {
  return (
    <section id="formacao" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <AnimatedSection animation="slideUp" className="space-y-2">
            <div className="inline-block rounded-lg bg-indigo-100 px-3 py-1 text-sm text-indigo-600">
              Formação
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Formação Acadêmica
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              Minha trajetória educacional
            </p>
          </AnimatedSection>
          <AnimatedList
            className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2"
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
            className="mx-auto max-w-3xl space-y-4 pt-8"
          >
            <h3 className="text-2xl font-bold">Idiomas</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
                <Badge className="bg-indigo-600">Nativo</Badge>
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
                  Intermediário
                </Badge>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
