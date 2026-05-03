import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect } from 'react'

export default function CursorGlow() {
  const x = useMotionValue(-200)
  const y = useMotionValue(-200)
  const smoothX = useSpring(x, { stiffness: 180, damping: 24, mass: 0.3 })
  const smoothY = useSpring(y, { stiffness: 180, damping: 24, mass: 0.3 })

  useEffect(() => {
    function handlePointerMove(event: PointerEvent) {
      x.set(event.clientX)
      y.set(event.clientY)
    }

    window.addEventListener('pointermove', handlePointerMove)

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
    }
  }, [x, y])

  return <motion.div className="cursor-glow" style={{ x: smoothX, y: smoothY }} aria-hidden="true" />
}
