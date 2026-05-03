import { motion, useScroll, useSpring } from 'framer-motion'

export default function TopProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 28,
    mass: 0.25,
  })

  return <motion.div className="top-progress" style={{ scaleX }} />
}
