"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/animated-section";
import { AnimatedList } from "@/components/animated-list";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function ProjectsSection() {
  return (
    <section id="projetos" className="w-full py-12 md:py-24 lg:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <AnimatedSection animation="slideUp" className="space-y-2">
            <div className="inline-block rounded-lg bg-indigo-100 px-6 py-2 text-2xl text-indigo-600">
              Projetos
            </div>
          </AnimatedSection>
          <AnimatedList
            className="mx-auto grid md:grid-cols-3 gap-6"
            delay={0.3}
            staggerDelay={0.2}
          >
            {projects.map((project, index) => (
              <Link
                key={index}
                href={`/projetos/${project.title
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className="block transition-transform hover:scale-[1.02]"
              >
                <Card className="overflow-hidden border-indigo-100 shadow-sm h-full">
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
              </Link>
            ))}
          </AnimatedList>
        </div>
      </div>
    </section>
  );
}
