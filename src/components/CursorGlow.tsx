import { motion, useMotionValue, useSpring } from 'framer-motion'
import type { MotionStyle } from 'framer-motion'
import { useEffect } from 'react'

const GLOW_SIZE = 360
const GLOW_HALF = GLOW_SIZE / 2

export default function CursorGlow() {
  const x = useMotionValue(-GLOW_SIZE)
  const y = useMotionValue(-GLOW_SIZE)
  const smoothX = useSpring(x, { stiffness: 220, damping: 28, mass: 0.24 })
  const smoothY = useSpring(y, { stiffness: 220, damping: 28, mass: 0.24 })

  useEffect(() => {
    function handlePointerMove(event: PointerEvent) {
      x.set(event.clientX - GLOW_HALF)
      y.set(event.clientY - GLOW_HALF)
    }

    window.addEventListener('pointermove', handlePointerMove)

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
    }
  }, [x, y])

  const glowStyle = {
    x: smoothX,
    y: smoothY,
    ['--cursor-glow-size' as string]: `${GLOW_SIZE}px`,
  } as MotionStyle

  return <motion.div className="cursor-glow" style={glowStyle} aria-hidden="true" />
}
