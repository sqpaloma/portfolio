import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { AnimatedSection } from "@/components/animated-section";
import { AnimatedList } from "@/components/animated-list";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const projects = [
  {
    title: "Implementação ISO 9001",
    description:
      "Liderança na implementação do sistema de gestão da qualidade ISO 9001 no setor de Consultoria de Engenharia. Responsável pela coordenação do processo, desenvolvimento de procedimentos, treinamento da equipe e gestão de melhorias contínuas.",
    image: "/iso-project.png",
    badges: ["ISO 9001", "Gestão da Qualidade", "Consultoria"],
    status: "Em andamento",
  },
  {
    title: "Ortobank",
    description:
      "Gestão do projeto de desenvolvimento do aplicativo web, utilizando Basecamp para rastreamento de tarefas e comunicação com a equipe. Responsável pela organização do fluxo de trabalho, definição de prioridades e acompanhamento do desempenho da equipe.",
    image: "/webapp-project.png",
    badges: ["Gestão de Projetos", "Basecamp", "Comunicação"],
  },
  {
    title: "Site da RLP",
    description:
      "Projeto desenvolvido com Next.js, React e Vercel. Fui responsável pela estrutura, organização de conteúdo e identidade visual.",
    image: "/corporate-website.png",
    badges: ["Next.js", "React"],
  },
  {
    title: "Divina Flor",
    description:
      "E-commerce de produtos de beleza, joias, skincare e lingerie desenvolvido com Next.js, React e integração com Shopify. Projeto em fase de desenvolvimento.",
    image: "/beauty-ecommerce-1.png",
    badges: ["Next.js", "React", "Shopify"],
    status: "Em andamento",
    carousel: [
      "/beauty-ecommerce-1.png",
      "/beauty-ecommerce-2.png",
      "/beauty-ecommerce-3.jpg",
    ],
  },
];

export function ProjectsSection() {
  return (
    <section id="projetos" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <AnimatedSection animation="slideUp" className="space-y-2">
            <div className="inline-block rounded-lg bg-indigo-100 px-6 py-2 text-2xl text-indigo-600">
              Projetos
            </div>
          </AnimatedSection>
          <AnimatedList
            className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2"
            delay={0.3}
            staggerDelay={0.2}
          >
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden border-indigo-100 shadow-sm h-full"
              >
                {project.carousel ? (
                  <div className="relative">
                    <Carousel className="w-full">
                      <CarouselContent>
                        {project.carousel.map((image, i) => (
                          <CarouselItem key={i}>
                            <motion.div
                              className="relative h-48"
                              whileHover={{ scale: 1.02 }}
                              transition={{ duration: 0.3 }}
                            >
                              <Image
                                src={image}
                                alt={`${project.title} - Imagem ${i + 1}`}
                                fill
                                className="object-cover"
                              />
                            </motion.div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="left-2" />
                      <CarouselNext className="right-2" />
                    </Carousel>
                  </div>
                ) : (
                  <motion.div
                    className="relative h-48"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                )}
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-indigo-600">
                          {project.title}
                        </h3>
                        <div className="flex flex-wrap gap-1 justify-end">
                          {project.badges.map((badge, i) => (
                            <Badge
                              key={i}
                              variant="outline"
                              className="border-indigo-200 text-indigo-700 text-xs"
                            >
                              {badge}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      {project.status && (
                        <div className="flex items-center gap-2">
                          <Badge
                            variant="secondary"
                            className="bg-indigo-100 text-indigo-700 text-xs"
                          >
                            {project.status}
                          </Badge>
                        </div>
                      )}
                      <p className="text-gray-500 text-sm">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </AnimatedList>
        </div>
      </div>
    </section>
  );
}
