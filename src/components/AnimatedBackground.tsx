import type { CSSProperties } from 'react'

import galaxyImage from '../assets/galaxy.jpg'

type Star = {
  top: number
  left: number
  size: number
  delay: number
  duration: number
  opacity: number
}

type ShootingStar = {
  top: number
  left: number
  delay: number
  duration: number
  length: number
  driftX: number
  driftY: number
  rotation: number
}

function pseudo(seed: number) {
  const value = Math.sin(seed * 91.137) * 43758.5453123
  return value - Math.floor(value)
}

const stars: Star[] = Array.from({ length: 176 }, (_, index) => {
  const top = pseudo(index + 1) * 100
  const left = pseudo(index + 41) * 100
  const size = 0.8 + pseudo(index + 9) * 2.6
  const delay = pseudo(index + 17) * 7
  const duration = 4.8 + pseudo(index + 29) * 6.4
  const opacity = 0.18 + pseudo(index + 53) * 0.78

  return { top, left, size, delay, duration, opacity }
})

const deepStars: Star[] = Array.from({ length: 30 }, (_, index) => {
  const top = pseudo(index + 101) * 100
  const left = pseudo(index + 167) * 100
  const size = 16 + pseudo(index + 203) * 38
  const delay = pseudo(index + 229) * 5
  const duration = 10 + pseudo(index + 251) * 12
  const opacity = 0.05 + pseudo(index + 277) * 0.12

  return { top, left, size, delay, duration, opacity }
})

const shootingStars: ShootingStar[] = Array.from({ length: 5 }, (_, index) => {
  const top = -10 + pseudo(index + 301) * 44
  const left = -12 + pseudo(index + 337) * 84
  const delay = pseudo(index + 373) * 18
  const duration = 10.5 + pseudo(index + 409) * 6.5
  const length = 120 + pseudo(index + 443) * 92
  const driftX = 22 + pseudo(index + 479) * 26
  const driftY = 20 + pseudo(index + 503) * 30
  const rotation = (Math.atan2(driftY, driftX) * 180) / Math.PI

  return { top, left, delay, duration, length, driftX, driftY, rotation }
})

export default function AnimatedBackground() {
  return (
    <div className="cosmos-bg" aria-hidden="true">
      <div className="galaxy-image galaxy-image--primary" style={{ backgroundImage: `url(${galaxyImage})` }} />
      <div className="galaxy-image galaxy-image--secondary" style={{ backgroundImage: `url(${galaxyImage})` }} />
      <div className="dust-layer dust-layer--one" />
      <div className="dust-layer dust-layer--two" />
      <div className="nebula nebula--one" />
      <div className="nebula nebula--two" />
      <div className="nebula nebula--three" />
      <div className="space-vignette" />

      <div className="deep-starfield">
        {deepStars.map((star, index) => (
          <span
            key={index}
            className="deep-star"
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="starfield">
        {stars.map((star, index) => (
          <span
            key={index}
            className="star"
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="shooting-stars">
        {shootingStars.map((comet, index) => {
          const cometStyle = {
            top: `${comet.top}%`,
            left: `${comet.left}%`,
            width: `${comet.length}px`,
            animationDelay: `${comet.delay}s`,
            animationDuration: `${comet.duration}s`,
            '--shoot-rotation': `${comet.rotation}deg`,
            '--shoot-drift-x': `${comet.driftX}vw`,
            '--shoot-drift-y': `${comet.driftY}vh`,
          } as CSSProperties

          return <span key={index} className="shooting-star" style={cometStyle} />
        })}
      </div>
    </div>
  )
}
