"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface AnimatedTextProps {
  children: ReactNode
  className?: string
  delay?: number
  staggerChildren?: number
}

export function AnimatedText({ children, className, delay = 0, staggerChildren = 0.1 }: AnimatedTextProps) {
  const text = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay,
        staggerChildren,
      },
    },
  }

  const character = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <motion.div className={className} variants={text} initial="initial" whileInView="animate" viewport={{ once: true }}>
      {typeof children === "string"
        ? children.split("").map((char, index) => (
            <motion.span key={index} variants={character}>
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))
        : children}
    </motion.div>
  )
}
