"use client"

import { motion } from "framer-motion"

export function FloatingOrbs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-primary/20 blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{ top: "10%", left: "10%" }}
      />
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-accent/20 blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{ bottom: "10%", right: "10%" }}
      />
      <motion.div
        className="absolute w-72 h-72 rounded-full bg-blue-500/10 blur-3xl"
        animate={{
          x: [0, 150, 0],
          y: [0, 150, 0],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 30,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{ top: "50%", left: "50%" }}
      />
    </div>
  )
}
