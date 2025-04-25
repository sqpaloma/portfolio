"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface AnimatedListProps {
  children: ReactNode[]
  className?: string
  delay?: number
  staggerDelay?: number
}

export function AnimatedList({ children, className, delay = 0, staggerDelay = 0.1 }: AnimatedListProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
    >
      {Array.isArray(children) &&
        children.map((child, index) => (
          <motion.div key={index} variants={item}>
            {child}
          </motion.div>
        ))}
    </motion.div>
  )
}
