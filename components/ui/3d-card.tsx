"use client"

import type React from "react"

import { type ReactNode, useRef, useState } from "react"
import { motion, useSpring, useTransform } from "framer-motion"

interface Card3DProps {
  children: ReactNode
  className?: string
}

export function Card3D({ children, className = "" }: Card3DProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const x = useSpring(0, { stiffness: 300, damping: 30 })
  const y = useSpring(0, { stiffness: 300, damping: 30 })

  const rotateX = useTransform(y, [-0.5, 0.5], [7, -7])
  const rotateY = useTransform(x, [-0.5, 0.5], [-7, 7])

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const moveX = (event.clientX - centerX) / (rect.width / 2)
    const moveY = (event.clientY - centerY) / (rect.height / 2)

    x.set(moveX)
    y.set(moveY)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={className}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div style={{ transform: "translateZ(50px)" }}>{children}</div>
    </motion.div>
  )
}
