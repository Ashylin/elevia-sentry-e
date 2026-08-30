interface EleviaLogoProps {
  size?: number
  withWordmark?: boolean
  className?: string
}

/**
 * Recreation of the Elevia chrome mountain mark as SVG so it stays crisp
 * and animatable at any size, matching the logo poster: two overlapping
 * jagged peaks in a silver/chrome gradient on black.
 */
export default function EleviaLogo({ size = 40, withWordmark = true, className }: EleviaLogoProps) {
  return (
    <div
      className={className}
      style={{ display: 'flex', alignItems: 'center', gap: withWordmark ? size * 0.32 : 0 }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 120 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Elevia"
      >
        <defs>
          <linearGradient id="elv-chrome" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="24%" stopColor="#d9d9d9" />
            <stop offset="50%" stopColor="#8a8a8a" />
            <stop offset="64%" stopColor="#e4e4e4" />
            <stop offset="82%" stopColor="#6a6a6a" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
        </defs>
        <path
          d="M8 88 C 20 80, 26 66, 32 52 C 36 43, 40 34, 45 34 C 49 34, 51 42, 54 50 C 57 40, 62 22, 68 22 C 75 22, 80 40, 86 56 C 90 68, 96 80, 112 88"
          stroke="url(#elv-chrome)"
          strokeWidth={6}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
      {withWordmark && (
        <div style={{ lineHeight: 1 }}>
          <div
            style={{
              fontFamily: 'var(--elv-font)',
              fontWeight: 500,
              letterSpacing: '0.32em',
              fontSize: size * 0.42,
              background: 'var(--elv-chrome-gradient)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            ELEVIA
          </div>
        </div>
      )}
    </div>
  )
}
