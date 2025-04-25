"use client"

import { Download, Mail, Linkedin, ChevronDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { AnimatedSection } from "@/components/animated-section"
import { AnimatedText } from "@/components/animated-text"
import { AnimatedList } from "@/components/animated-list"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="font-bold text-indigo-600">Paloma S Queiroz</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
              <Link href="#sobre" className="transition-colors hover:text-indigo-600">
                Sobre
              </Link>
              <Link href="#experiencia" className="transition-colors hover:text-indigo-600">
                Experiência
              </Link>
              <Link href="#formacao" className="transition-colors hover:text-indigo-600">
                Formação
              </Link>
              <Link href="#habilidades" className="transition-colors hover:text-indigo-600">
                Habilidades
              </Link>
              <Link href="#projetos" className="transition-colors hover:text-indigo-600">
                Projetos
              </Link>
              <Link href="#objetivos" className="transition-colors hover:text-indigo-600">
                Objetivos
              </Link>
              <Link href="#contato" className="transition-colors hover:text-indigo-600">
                Contato
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              className="hidden md:flex border-indigo-600 text-indigo-600 hover:bg-indigo-50"
            >
              <Download className="mr-2 h-4 w-4" />
              Baixar Currículo
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="md:hidden border-indigo-600 text-indigo-600 hover:bg-indigo-50"
            >
              <Download className="h-4 w-4" />
              <span className="sr-only">Baixar Currículo</span>
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
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
                    <line x1="4" x2="20" y1="12" y2="12" />
                    <line x1="4" x2="20" y1="6" y2="6" />
                    <line x1="4" x2="20" y1="18" y2="18" />
                  </svg>
                  <span className="sr-only">Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[240px] sm:w-[300px]">
                <SheetHeader>
                  <SheetTitle className="text-indigo-600">Navegação</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-4 mt-6">
                  <Link href="#sobre" className="flex py-2 text-base hover:text-indigo-600 transition-colors">
                    Sobre
                  </Link>
                  <Link href="#experiencia" className="flex py-2 text-base hover:text-indigo-600 transition-colors">
                    Experiência
                  </Link>
                  <Link href="#formacao" className="flex py-2 text-base hover:text-indigo-600 transition-colors">
                    Formação
                  </Link>
                  <Link href="#habilidades" className="flex py-2 text-base hover:text-indigo-600 transition-colors">
                    Habilidades
                  </Link>
                  <Link href="#projetos" className="flex py-2 text-base hover:text-indigo-600 transition-colors">
                    Projetos
                  </Link>
                  <Link href="#objetivos" className="flex py-2 text-base hover:text-indigo-600 transition-colors">
                    Objetivos
                  </Link>
                  <Link href="#contato" className="flex py-2 text-base hover:text-indigo-600 transition-colors">
                    Contato
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-indigo-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <AnimatedSection animation="fadeInLeft" className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <AnimatedText className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-indigo-600">
                    Paloma S Queiroz
                  </AnimatedText>
                  <motion.p
                    className="text-xl text-gray-600 md:text-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                  >
                    Engenheira Mecânica com foco em Gestão de Projetos e Processos
                  </motion.p>
                </div>
                <motion.div
                  className="flex flex-col gap-2 min-[400px]:flex-row"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  <Link href="#contato">
                    <Button className="w-full bg-indigo-600 hover:bg-indigo-700">Entre em contato</Button>
                  </Link>
                  <Link href="#projetos">
                    <Button variant="outline" className="w-full border-indigo-600 text-indigo-600 hover:bg-indigo-50">
                      Ver projetos
                    </Button>
                  </Link>
                </motion.div>
              </AnimatedSection>
              <AnimatedSection animation="fadeInRight" className="flex items-center justify-center">
                <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px]">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 blur-2xl opacity-20"></div>
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative z-10"
                  >
                    <Image
                      src="/profile-no-background.png"
                      alt="Foto de Paloma"
                      width={400}
                      height={400}
                      className="object-contain"
                      priority
                    />
                  </motion.div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section id="sobre" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <AnimatedSection animation="slideUp" className="space-y-2">
                <div className="inline-block rounded-lg bg-indigo-100 px-3 py-1 text-sm text-indigo-600">Sobre Mim</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Quem Sou</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Profissional com experiência no setor industrial
                </p>
              </AnimatedSection>
              <AnimatedSection animation="fadeIn" delay={0.2} className="mx-auto max-w-3xl space-y-4 text-left">
                <p className="text-base md:text-lg">
                  Engenheira com sólida experiência no setor industrial, MBA em Engenharia e Gestão da Manutenção (em
                  andamento), atuando na área comercial com foco técnico. Coordena equipe de 8 mecânicos e atua desde o
                  diagnóstico técnico até a entrega final ao cliente. Participa do comitê de implantação da ISO 9001.
                </p>
                <p className="text-base md:text-lg">
                  Apaixonada por resolver problemas, liderar times e otimizar processos com foco em resultados e
                  inovação. Atua com gestão estratégica e busca desafios em ambientes colaborativos, inovadores e com
                  impacto real.
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

        <section id="experiencia" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <AnimatedSection animation="slideUp" className="space-y-2">
                <div className="inline-block rounded-lg bg-indigo-100 px-3 py-1 text-sm text-indigo-600">
                  Experiência
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Trajetória Profissional</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">Minha experiência no setor industrial</p>
              </AnimatedSection>
              <div className="mx-auto max-w-4xl space-y-8">
                <div className="relative">
                  <div className="absolute left-0 top-0 h-full w-1 bg-indigo-200 hidden md:block"></div>
                  <div className="space-y-8 relative">
                    <AnimatedSection animation="fadeInRight" className="relative pl-0 md:pl-8">
                      <div className="absolute -left-3 top-7 h-6 w-6 rounded-full border-4 border-white bg-indigo-600 hidden md:block"></div>
                      <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <h3 className="text-xl font-bold text-indigo-600">Consultora de Serviços</h3>
                            <Badge className="bg-indigo-600">Atual</Badge>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <p className="text-base">
                            Coordeno uma equipe de 8 mecânicos em duas linhas de produção: bombas e motores de
                            engrenagem, e bombas e motores de pistões (circuito aberto e hidrostático).
                          </p>
                          <p className="text-base">
                            Responsável por toda a jornada do componente, da análise técnica/comercial até a entrega.
                            Uso sistema ERP e aplicativo interno para programar serviços com eficiência.
                          </p>
                          <p className="text-base">Membro do comitê de implantação da ISO 9001 na empresa.</p>
                        </div>
                        <AnimatedList className="flex flex-wrap gap-2" delay={0.3} staggerDelay={0.05}>
                          <Badge variant="outline" className="border-indigo-200 text-indigo-700">
                            Gestão de Equipes
                          </Badge>
                          <Badge variant="outline" className="border-indigo-200 text-indigo-700">
                            Análise Técnica
                          </Badge>
                          <Badge variant="outline" className="border-indigo-200 text-indigo-700">
                            ISO 9001
                          </Badge>
                          <Badge variant="outline" className="border-indigo-200 text-indigo-700">
                            ERP
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

        <section id="formacao" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <AnimatedSection animation="slideUp" className="space-y-2">
                <div className="inline-block rounded-lg bg-indigo-100 px-3 py-1 text-sm text-indigo-600">Formação</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Formação Acadêmica</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">Minha trajetória educacional</p>
              </AnimatedSection>
              <AnimatedList className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2" delay={0.2} staggerDelay={0.2}>
                <Card className="border-indigo-100 shadow-sm">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-indigo-600">Engenharia Mecânica</h3>
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
                        <Badge variant="outline" className="border-indigo-200 text-indigo-700">
                          Em andamento
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedList>
              <AnimatedSection animation="fadeIn" delay={0.4} className="mx-auto max-w-3xl space-y-4 pt-8">
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
                    <Badge variant="outline" className="border-indigo-200 text-indigo-700">
                      Intermediário
                    </Badge>
                  </motion.div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section id="habilidades" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <AnimatedSection animation="slideUp" className="space-y-2">
                <div className="inline-block rounded-lg bg-indigo-100 px-3 py-1 text-sm text-indigo-600">
                  Habilidades
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Habilidades Técnicas</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">Ferramentas e tecnologias que domino</p>
              </AnimatedSection>
              <div className="mx-auto w-full max-w-4xl">
                <Tabs defaultValue="sistemas" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 md:grid-cols-3">
                    <TabsTrigger value="sistemas">Sistemas</TabsTrigger>
                    <TabsTrigger value="desenvolvimento">Desenvolvimento</TabsTrigger>
                    <TabsTrigger value="gestao">Gestão</TabsTrigger>
                  </TabsList>
                  <TabsContent value="sistemas" className="mt-6 space-y-4">
                    <AnimatedList className="grid grid-cols-2 md:grid-cols-4 gap-4" delay={0.2} staggerDelay={0.1}>
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
                        <h3 className="text-center text-base font-medium">Excel Avançado</h3>
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
                        <h3 className="text-center text-base font-medium">MS Project</h3>
                      </div>
                    </AnimatedList>
                  </TabsContent>
                  <TabsContent value="desenvolvimento" className="mt-6 space-y-4">
                    <AnimatedList className="grid grid-cols-2 md:grid-cols-4 gap-4" delay={0.2} staggerDelay={0.1}>
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
                        <h3 className="text-center text-base font-medium">JavaScript</h3>
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
                        <h3 className="text-center text-base font-medium">React/Next.js</h3>
                      </div>
                    </AnimatedList>
                  </TabsContent>
                  <TabsContent value="gestao" className="mt-6 space-y-4">
                    <AnimatedList className="grid grid-cols-2 md:grid-cols-3 gap-4" delay={0.2} staggerDelay={0.1}>
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
                        <h3 className="text-center text-base font-medium">Gestão de Equipes</h3>
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
                        <h3 className="text-center text-base font-medium">ISO 9001</h3>
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
                        <h3 className="text-center text-base font-medium">Gestão de Processos</h3>
                      </div>
                    </AnimatedList>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </section>

        <section id="projetos" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <AnimatedSection animation="slideUp" className="space-y-2">
                <div className="inline-block rounded-lg bg-indigo-100 px-3 py-1 text-sm text-indigo-600">Projetos</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Projetos em Destaque</h2>
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
                  <motion.div className="relative h-60" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                    <Image src="/webapp-project.png" alt="Projeto Ortobank" fill className="object-cover" />
                  </motion.div>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h3 className="text-2xl font-bold text-indigo-600">Ortobank</h3>
                          <div className="flex gap-1">
                            <Badge variant="outline" className="border-indigo-200 text-indigo-700">
                              Next.js
                            </Badge>
                            <Badge variant="outline" className="border-indigo-200 text-indigo-700">
                              React
                            </Badge>
                          </div>
                        </div>
                        <p className="text-gray-500">
                          Aplicativo web criado com Next.js, React e Vercel. Atuei no design, estruturação e organização
                          do projeto. Primeiro cliente solicitou uma funcionalidade de to-do list.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="overflow-hidden border-indigo-100 shadow-sm">
                  <motion.div className="relative h-60" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                    <Image src="/corporate-website.png" alt="Projeto Site RLP" fill className="object-cover" />
                  </motion.div>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h3 className="text-2xl font-bold text-indigo-600">Site da RLP</h3>
                          <div className="flex gap-1">
                            <Badge variant="outline" className="border-indigo-200 text-indigo-700">
                              Next.js
                            </Badge>
                            <Badge variant="outline" className="border-indigo-200 text-indigo-700">
                              React
                            </Badge>
                          </div>
                        </div>
                        <p className="text-gray-500">
                          Projeto desenvolvido com Next.js, React e Vercel. Fui responsável pela estrutura, organização
                          de conteúdo e identidade visual.
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
                          <h3 className="text-2xl font-bold text-indigo-600">Divina Flor</h3>
                          <div className="flex gap-1">
                            <Badge variant="outline" className="border-indigo-200 text-indigo-700">
                              Next.js
                            </Badge>
                            <Badge variant="outline" className="border-indigo-200 text-indigo-700">
                              React
                            </Badge>
                            <Badge variant="outline" className="border-indigo-200 text-indigo-700">
                              Shopify
                            </Badge>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary" className="bg-indigo-100 text-indigo-700">
                            Em andamento
                          </Badge>
                        </div>
                        <p className="text-gray-500">
                          E-commerce de produtos de beleza, joias, skincare e lingerie desenvolvido com Next.js, React e
                          integração com Shopify. Projeto em fase de desenvolvimento.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedList>
            </div>
          </div>
        </section>

        <section id="objetivos" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <AnimatedSection animation="slideUp" className="space-y-2">
                <div className="inline-block rounded-lg bg-indigo-100 px-3 py-1 text-sm text-indigo-600">Objetivos</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Metas Profissionais</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Para onde estou direcionando minha carreira
                </p>
              </AnimatedSection>
              <AnimatedSection animation="scale" delay={0.2} className="mx-auto max-w-3xl space-y-4">
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
                        Atuar como gerente de projetos ou processos em empresas que valorizam inovação, eficiência e
                        colaboração.
                      </p>
                      <AnimatedList className="grid grid-cols-1 md:grid-cols-3 gap-4" delay={0.4} staggerDelay={0.1}>
                        <div className="flex flex-col items-center space-y-2 rounded-lg border border-indigo-100 bg-white p-4 shadow-sm">
                          <h4 className="text-base font-medium text-indigo-600">Inovação</h4>
                        </div>
                        <div className="flex flex-col items-center space-y-2 rounded-lg border border-indigo-100 bg-white p-4 shadow-sm">
                          <h4 className="text-base font-medium text-indigo-600">Eficiência</h4>
                        </div>
                        <div className="flex flex-col items-center space-y-2 rounded-lg border border-indigo-100 bg-white p-4 shadow-sm">
                          <h4 className="text-base font-medium text-indigo-600">Colaboração</h4>
                        </div>
                      </AnimatedList>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section id="contato" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <AnimatedSection animation="slideUp" className="space-y-2">
                <div className="inline-block rounded-lg bg-indigo-100 px-3 py-1 text-sm text-indigo-600">Contato</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Entre em Contato</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">Vamos conversar sobre oportunidades</p>
              </AnimatedSection>
              <AnimatedList className="mx-auto grid max-w-lg gap-6" delay={0.3} staggerDelay={0.15}>
                <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.2 }}>
                  <Button className="w-full bg-indigo-600 hover:bg-indigo-700" asChild>
                    <Link href="mailto:contato@exemplo.com">
                      <Mail className="mr-2 h-4 w-4" />
                      E-mail
                    </Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.2 }}>
                  <Button
                    variant="outline"
                    className="w-full border-indigo-600 text-indigo-600 hover:bg-indigo-50"
                    asChild
                  >
                    <Link href="https://linkedin.com/in/exemplo" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-2 h-4 w-4" />
                      LinkedIn
                    </Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.2 }}>
                  <Button variant="secondary" className="w-full bg-indigo-100 text-indigo-700 hover:bg-indigo-200">
                    <Download className="mr-2 h-4 w-4" />
                    Baixar Currículo
                  </Button>
                </motion.div>
              </AnimatedList>
            </div>
          </div>
        </section>

        <motion.div
          className="fixed bottom-6 right-6 z-50 md:hidden"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.3 }}
        >
          <Button className="rounded-full p-3 shadow-lg bg-indigo-600 hover:bg-indigo-700" size="icon" asChild>
            <Link href="#top">
              <ChevronDown className="h-6 w-6 rotate-180" />
              <span className="sr-only">Voltar ao topo</span>
            </Link>
          </Button>
        </motion.div>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-center text-sm leading-loose text-gray-500 md:text-left">
            © 2025 Paloma. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}
