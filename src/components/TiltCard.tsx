import { motion } from 'framer-motion'
import type { CSSProperties, PointerEvent as ReactPointerEvent, ReactNode } from 'react'
import { useState } from 'react'

type TiltCardProps = {
  children: ReactNode
  className?: string
}

type TiltState = {
  rotateX: number
  rotateY: number
  glowX: number
  glowY: number
}

const defaultTilt: TiltState = {
  rotateX: 0,
  rotateY: 0,
  glowX: 50,
  glowY: 50,
}

export default function TiltCard({ children, className }: TiltCardProps) {
  const [tilt, setTilt] = useState<TiltState>(defaultTilt)

  function handlePointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    const bounds = event.currentTarget.getBoundingClientRect()
    const offsetX = (event.clientX - bounds.left) / bounds.width
    const offsetY = (event.clientY - bounds.top) / bounds.height

    setTilt({
      rotateX: (0.5 - offsetY) * 10,
      rotateY: (offsetX - 0.5) * 12,
      glowX: offsetX * 100,
      glowY: offsetY * 100,
    })
  }

  function handleLeave() {
    setTilt(defaultTilt)
  }

  const dynamicStyle: CSSProperties = {
    transform: `perspective(1200px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
    background: `radial-gradient(circle at ${tilt.glowX}% ${tilt.glowY}%, rgba(140, 243, 255, 0.12), rgba(255, 255, 255, 0) 55%)`,
  }

  return (
    <motion.div
      className={`tilt-card${className ? ` ${className}` : ''}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={handleLeave}
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
    >
      <div className="tilt-card__inner" style={dynamicStyle}>
        {children}
      </div>
    </motion.div>
  )
}
