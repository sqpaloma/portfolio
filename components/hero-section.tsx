import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/animated-section";
import { AnimatedText } from "@/components/animated-text";

export function HeroSection() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-50 to-white">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
        <AnimatedSection
          animation="fadeIn"
          className="flex flex-col items-center justify-center mb-12"
        >
          <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px]">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative z-10 rounded-full overflow-hidden"
            >
              <Image
                src="/profile-no-background.png"
                alt="Foto de Paloma"
                width={400}
                height={400}
                className="object-cover grayscale"
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
          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Duis aute irure dolor em reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </motion.p>
        </AnimatedSection>
      </div>
    </section>
  );
}
