type Star = {
  top: number
  left: number
  size: number
  delay: number
  duration: number
  opacity: number
}

type Node = {
  x: number
  y: number
}

type Cluster = {
  className: string
  path: string
  nodes: Node[]
  lines: ReadonlyArray<readonly [number, number]>
  accents: number[]
}

function pseudo(seed: number) {
  const value = Math.sin(seed * 91.137) * 43758.5453123
  return value - Math.floor(value)
}

const stars: Star[] = Array.from({ length: 88 }, (_, index) => {
  const top = pseudo(index + 1) * 100
  const left = pseudo(index + 31) * 100
  const size = 1 + pseudo(index + 8) * 2.8
  const delay = pseudo(index + 14) * 5
  const duration = 3.5 + pseudo(index + 16) * 5
  const opacity = 0.25 + pseudo(index + 24) * 0.75

  return { top, left, size, delay, duration, opacity }
})

const deepStars: Star[] = Array.from({ length: 18 }, (_, index) => {
  const top = pseudo(index + 101) * 100
  const left = pseudo(index + 151) * 100
  const size = 12 + pseudo(index + 188) * 28
  const delay = pseudo(index + 214) * 5
  const duration = 8 + pseudo(index + 228) * 10
  const opacity = 0.08 + pseudo(index + 264) * 0.12

  return { top, left, size, delay, duration, opacity }
})

const shootingStars = Array.from({ length: 5 }, (_, index) => ({
  top: 12 + index * 17,
  left: 12 + index * 19,
  delay: index * 5.4,
  duration: 12 + index * 1.4,
  length: 140 + index * 24,
}))

const clusters: Cluster[] = [
  {
    className: 'constellation-cluster--northwest',
    path: 'M10 76C24 28 58 18 92 44',
    nodes: [
      { x: 8, y: 66 },
      { x: 20, y: 52 },
      { x: 34, y: 62 },
      { x: 44, y: 40 },
      { x: 62, y: 48 },
      { x: 72, y: 28 },
      { x: 90, y: 36 },
    ],
    lines: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 6],
    ],
    accents: [0, 3, 6],
  },
  {
    className: 'constellation-cluster--northeast',
    path: 'M6 38C28 12 64 20 92 72',
    nodes: [
      { x: 10, y: 20 },
      { x: 28, y: 10 },
      { x: 46, y: 18 },
      { x: 58, y: 34 },
      { x: 74, y: 50 },
      { x: 84, y: 68 },
      { x: 94, y: 82 },
    ],
    lines: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 6],
    ],
    accents: [1, 4, 6],
  },
  {
    className: 'constellation-cluster--southwest',
    path: 'M12 18C28 52 56 66 90 52',
    nodes: [
      { x: 12, y: 20 },
      { x: 24, y: 38 },
      { x: 38, y: 54 },
      { x: 54, y: 66 },
      { x: 70, y: 58 },
      { x: 84, y: 42 },
    ],
    lines: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
    ],
    accents: [0, 2, 5],
  },
  {
    className: 'constellation-cluster--southeast',
    path: 'M10 68C34 22 72 18 92 56',
    nodes: [
      { x: 8, y: 72 },
      { x: 24, y: 58 },
      { x: 38, y: 32 },
      { x: 56, y: 20 },
      { x: 72, y: 28 },
      { x: 84, y: 40 },
      { x: 94, y: 58 },
    ],
    lines: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 6],
    ],
    accents: [1, 3, 6],
  },
]

export default function AnimatedBackground() {
  return (
    <div className="cosmos-bg" aria-hidden="true">
      <div className="nebula nebula--one" />
      <div className="nebula nebula--two" />
      <div className="nebula nebula--three" />
      <div className="orbital-wave orbital-wave--one" />
      <div className="orbital-wave orbital-wave--two" />
      <div className="stellar-grid" />

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
        {shootingStars.map((comet, index) => (
          <span
            key={index}
            className="shooting-star"
            style={{
              top: `${comet.top}%`,
              left: `${comet.left}%`,
              width: `${comet.length}px`,
              animationDelay: `${comet.delay}s`,
              animationDuration: `${comet.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="constellation-field">
        {clusters.map((cluster) => (
          <div key={cluster.className} className={`constellation-cluster ${cluster.className}`}>
            <span className="constellation-cluster__glow" />

            <svg viewBox="0 0 100 100" className="constellation-cluster__svg">
              <path className="constellation-signature" d={cluster.path} />

              {cluster.lines.map(([from, to], index) => (
                <line
                  key={`${cluster.className}-line-${index}`}
                  className="constellation-line"
                  x1={cluster.nodes[from].x}
                  y1={cluster.nodes[from].y}
                  x2={cluster.nodes[to].x}
                  y2={cluster.nodes[to].y}
                />
              ))}

              {cluster.nodes.map((node, index) => (
                <g key={`${cluster.className}-node-${index}`}>
                  <circle
                    className={`constellation-node${cluster.accents.includes(index) ? ' constellation-node--accent' : ''}`}
                    cx={node.x}
                    cy={node.y}
                    r={cluster.accents.includes(index) ? 1.45 : 0.95}
                  />
                  {cluster.accents.includes(index) ? (
                    <>
                      <line
                        className="constellation-pulse"
                        x1={node.x - 2.2}
                        y1={node.y}
                        x2={node.x + 2.2}
                        y2={node.y}
                      />
                      <line
                        className="constellation-pulse"
                        x1={node.x}
                        y1={node.y - 2.2}
                        x2={node.x}
                        y2={node.y + 2.2}
                      />
                    </>
                  ) : null}
                </g>
              ))}
            </svg>
          </div>
        ))}
      </div>
    </div>
  )
}
