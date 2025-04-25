import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/animated-section";
import { AnimatedText } from "@/components/animated-text";

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-indigo-50 to-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
          <AnimatedSection
            animation="fadeInLeft"
            className="flex flex-col justify-center space-y-4"
          >
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
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                  Entre em contato
                </Button>
              </Link>
              <Link href="#projetos">
                <Button
                  variant="outline"
                  className="w-full border-indigo-600 text-indigo-600 hover:bg-indigo-50"
                >
                  Ver projetos
                </Button>
              </Link>
            </motion.div>
          </AnimatedSection>
          <AnimatedSection
            animation="fadeInRight"
            className="flex items-center justify-center"
          >
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
  );
}
