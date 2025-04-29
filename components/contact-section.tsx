import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/animated-section";
import { AnimatedList } from "@/components/animated-list";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contato" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <AnimatedSection animation="slideUp" className="space-y-2">
            <div className="inline-block rounded-lg bg-indigo-100 px-3 py-1 text-sm text-indigo-600">
              Contato
            </div>
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
                      <Mail className="h-8 w-8" />
                    </div>
                  </motion.div>
                  <p className="text-lg text-center">
                    Estou sempre aberta a novas oportunidades e desafios. Vamos
                    trabalhar juntos!
                  </p>
                  <AnimatedList
                    className="flex flex-col md:flex-row gap-4 justify-center"
                    delay={0.4}
                    staggerDelay={0.1}
                  >
                    <Button variant="outline" className="gap-2">
                      <Mail className="h-4 w-4" />
                      Email
                    </Button>
                    <Button variant="outline" className="gap-2">
                      <Linkedin className="h-4 w-4" />
                      <a
                        href="https://www.linkedin.com/in/sqpaloma/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        LinkedIn
                      </a>
                    </Button>
                    <Button variant="outline" className="gap-2">
                      <Github className="h-4 w-4" />
                      <a
                        href="https://github.com/sqpaloma"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </a>
                    </Button>
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
