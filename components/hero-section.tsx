import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/animated-section";
import { AnimatedText } from "@/components/animated-text";

export function HeroSection() {
  return (
    <section className="w-full flex flex-col items-center justify-center bg-gradient-to-b from-indigo-50 to-white">
      <div className="container mt-24 mx-auto px-2 md:px-6 flex flex-col items-center">
        <AnimatedSection
          animation="fadeIn"
          className="flex flex-col items-center justify-center"
        >
          <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px]">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="relative z-10 rounded-full overflow-hidden"
            >
              <Image
                src="/paloma.jpeg"
                alt="Foto de Paloma"
                width={400}
                height={400}
                priority
              />
            </motion.div>
          </div>
        </AnimatedSection>

        <AnimatedSection
          animation="fadeIn"
          className="flex flex-col items-center text-center max-w-2xl mx-auto space-y-8"
        >
          <div className="space-y-4">
            <AnimatedText className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter">
              Paloma S. Queiroz
            </AnimatedText>
            <AnimatedText className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wide">
              Engenheira Mecânica
            </AnimatedText>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
