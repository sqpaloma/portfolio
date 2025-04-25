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

export function ProjectsSection() {
  return (
    <section id="projetos" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <AnimatedSection animation="slideUp" className="space-y-2">
            <div className="inline-block rounded-lg bg-indigo-100 px-3 py-1 text-sm text-indigo-600">
              Projetos
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Projetos em Destaque
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              Conheça alguns dos projetos que desenvolvi
            </p>
          </AnimatedSection>
          <AnimatedList
            className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-3"
            delay={0.3}
            staggerDelay={0.2}
          >
            <Card className="overflow-hidden border-indigo-100 shadow-sm">
              <motion.div
                className="relative h-60"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/webapp-project.png"
                  alt="Projeto Ortobank"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-bold text-indigo-600">
                        Ortobank
                      </h3>
                      <div className="flex gap-1">
                        <Badge
                          variant="outline"
                          className="border-indigo-200 text-indigo-700"
                        >
                          Next.js
                        </Badge>
                        <Badge
                          variant="outline"
                          className="border-indigo-200 text-indigo-700"
                        >
                          React
                        </Badge>
                      </div>
                    </div>
                    <p className="text-gray-500">
                      Aplicativo web criado com Next.js, React e Vercel. Atuei
                      no design, estruturação e organização do projeto. Primeiro
                      cliente solicitou uma funcionalidade de to-do list.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-indigo-100 shadow-sm">
              <motion.div
                className="relative h-60"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/corporate-website.png"
                  alt="Projeto Site RLP"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-bold text-indigo-600">
                        Site da RLP
                      </h3>
                      <div className="flex gap-1">
                        <Badge
                          variant="outline"
                          className="border-indigo-200 text-indigo-700"
                        >
                          Next.js
                        </Badge>
                        <Badge
                          variant="outline"
                          className="border-indigo-200 text-indigo-700"
                        >
                          React
                        </Badge>
                      </div>
                    </div>
                    <p className="text-gray-500">
                      Projeto desenvolvido com Next.js, React e Vercel. Fui
                      responsável pela estrutura, organização de conteúdo e
                      identidade visual.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-indigo-100 shadow-sm">
              <div className="relative">
                <Carousel className="w-full">
                  <CarouselContent>
                    <CarouselItem>
                      <motion.div
                        className="relative h-60"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Image
                          src="/beauty-ecommerce-1.png"
                          alt="Divina Flor - Página Inicial"
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                    </CarouselItem>
                    <CarouselItem>
                      <motion.div
                        className="relative h-60"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Image
                          src="/beauty-ecommerce-2.png"
                          alt="Divina Flor - Produtos"
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                    </CarouselItem>
                    <CarouselItem>
                      <motion.div
                        className="relative h-60"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Image
                          src="/beauty-ecommerce-3.jpg"
                          alt="Divina Flor - Checkout"
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </Carousel>
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-bold text-indigo-600">
                        Divina Flor
                      </h3>
                      <div className="flex gap-1">
                        <Badge
                          variant="outline"
                          className="border-indigo-200 text-indigo-700"
                        >
                          Next.js
                        </Badge>
                        <Badge
                          variant="outline"
                          className="border-indigo-200 text-indigo-700"
                        >
                          React
                        </Badge>
                        <Badge
                          variant="outline"
                          className="border-indigo-200 text-indigo-700"
                        >
                          Shopify
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge
                        variant="secondary"
                        className="bg-indigo-100 text-indigo-700"
                      >
                        Em andamento
                      </Badge>
                    </div>
                    <p className="text-gray-500">
                      E-commerce de produtos de beleza, joias, skincare e
                      lingerie desenvolvido com Next.js, React e integração com
                      Shopify. Projeto em fase de desenvolvimento.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedList>
        </div>
      </div>
    </section>
  );
}
