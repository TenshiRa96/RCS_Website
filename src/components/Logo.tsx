import { useId } from 'react'

type LogoProps = {
  compact?: boolean
}

export default function Logo({ compact = false }: LogoProps) {
  const gradientId = useId()

  return (
    <div className={`logo-lockup${compact ? ' logo-lockup--compact' : ''}`}>
      <svg className="logo-mark" viewBox="0 0 84 84" aria-hidden="true">
        <defs>
          <linearGradient id={gradientId} x1="8%" y1="12%" x2="88%" y2="92%">
            <stop offset="0%" stopColor="#8cf3ff" />
            <stop offset="60%" stopColor="#80a8ff" />
            <stop offset="100%" stopColor="#ffc77a" />
          </linearGradient>
        </defs>

        <circle cx="42" cy="42" r="27" fill="none" stroke={`url(#${gradientId})`} strokeWidth="1.2" opacity="0.5" />
        <circle cx="42" cy="42" r="18" fill="none" stroke="rgba(255,255,255,0.28)" strokeWidth="1" />
        <path
          d="M20 47C26 34 36 27 50 25C57 24 63 27 67 31"
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M18 55C26 57 33 57 39 54C45 51 51 45 57 35"
          fill="none"
          stroke="rgba(255,255,255,0.92)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="63" cy="30" r="3.6" fill="#ffc77a" />
        <circle cx="24" cy="55" r="2.8" fill="#8cf3ff" />
        <circle cx="42" cy="42" r="5.5" fill={`url(#${gradientId})`} />
      </svg>

      <div className="logo-copy">
        <span className="logo-caption">Reality Computer Software</span>
        <span className="logo-wordmark">RCS</span>
      </div>
    </div>
  )
}
