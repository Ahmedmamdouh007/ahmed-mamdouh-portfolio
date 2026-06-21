export function PipelineDiagram({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 480 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="pipe-flow" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00A896" stopOpacity="0.2" />
          <stop offset="50%" stopColor="#C8F542" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#00A896" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      {[
        { x: 24, y: 60, w: 100, label: "API" },
        { x: 160, y: 40, w: 120, label: "SCAN" },
        { x: 316, y: 60, w: 100, label: "QUEUE" },
        { x: 100, y: 160, w: 110, label: "ENGINE" },
        { x: 260, y: 160, w: 120, label: "REPORT" },
      ].map((node) => (
        <g key={node.label}>
          <rect
            x={node.x}
            y={node.y}
            width={node.w}
            height="48"
            rx="8"
            stroke="currentColor"
            strokeWidth="1"
            fill="color-mix(in oklch, currentColor 6%, transparent)"
            opacity="0.9"
          />
          <text
            x={node.x + node.w / 2}
            y={node.y + 30}
            textAnchor="middle"
            fill="currentColor"
            fontSize="11"
            fontFamily="monospace"
            fontWeight="600"
          >
            {node.label}
          </text>
        </g>
      ))}
      <path
        d="M124 84 H160 M280 84 H316 M155 88 V120 H155 H210 V160 M265 184 H260"
        stroke="url(#pipe-flow)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="210" cy="184" r="4" fill="#C8F542" />
      <path
        d="M48 200 H432"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.15"
        strokeDasharray="4 6"
      />
      <text x="24" y="248" fill="currentColor" fontSize="10" fontFamily="monospace" opacity="0.5">
        FastAPI → Celery → PostgreSQL → Redis
      </text>
    </svg>
  );
}

export function SectionWave({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1440 48"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M0 24 C360 0 720 48 1080 24 S1440 0 1440 24 V48 H0 Z"
        fill="currentColor"
        opacity="0.06"
      />
      <path
        d="M0 32 C480 8 960 40 1440 28"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.2"
      />
    </svg>
  );
}

export function CyberGridPattern({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 800 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <pattern id="cyber-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            opacity="0.35"
          />
        </pattern>
        <radialGradient id="grid-fade" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="white" stopOpacity="0.9" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <mask id="grid-mask">
          <rect width="800" height="800" fill="url(#grid-fade)" />
        </mask>
      </defs>
      <rect width="800" height="800" fill="url(#cyber-grid)" mask="url(#grid-mask)" />
      <circle cx="400" cy="400" r="120" stroke="currentColor" strokeWidth="0.75" opacity="0.2" />
      <circle cx="400" cy="400" r="200" stroke="currentColor" strokeWidth="0.5" opacity="0.12" />
      <circle cx="400" cy="400" r="280" stroke="currentColor" strokeWidth="0.35" opacity="0.08" />
    </svg>
  );
}

export function DataFlowLines({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 600 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M0 200 C120 120, 180 280, 300 200 S480 120, 600 200"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.4"
      />
      <path
        d="M0 240 C140 160, 200 320, 320 240 S500 160, 600 240"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.25"
      />
      <path
        d="M0 160 C100 80, 220 240, 340 160 S520 80, 600 160"
        stroke="currentColor"
        strokeWidth="0.75"
        opacity="0.18"
      />
      {[80, 200, 320, 440, 520].map((x, i) => (
        <circle key={x} cx={x} cy={200 + (i % 2 === 0 ? -20 : 20)} r="3" fill="currentColor" opacity="0.5" />
      ))}
      <rect x="270" y="185" width="60" height="30" rx="4" stroke="currentColor" strokeWidth="1" opacity="0.35" />
    </svg>
  );
}

export function ChromeRing({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="chrome-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F0EDE4" stopOpacity="0.9" />
          <stop offset="45%" stopColor="#00A896" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#C8F542" stopOpacity="0.8" />
        </linearGradient>
      </defs>
      <ellipse cx="100" cy="100" rx="70" ry="45" stroke="url(#chrome-grad)" strokeWidth="3" transform="rotate(-25 100 100)" />
      <ellipse cx="100" cy="100" rx="50" ry="30" stroke="currentColor" strokeWidth="0.75" opacity="0.2" transform="rotate(15 100 100)" />
    </svg>
  );
}

export function SparkNode({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M16 2v8M16 22v8M2 16h8M22 16h8M5.5 5.5l5.5 5.5M21 21l5.5 5.5M26.5 5.5 21 11M11 21l-5.5 5.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ShieldGlyph({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M32 4 8 14v22c0 16 10 28 24 34 14-6 24-18 24-34V14L32 4Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M22 36 28 42l14-16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function HexBadge({ className = "", label = "SEC" }: { className?: string; label?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 80 92"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M40 4 72 22v28L40 88 8 50V22L40 4Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="color-mix(in oklch, currentColor 8%, transparent)"
      />
      <text
        x="40"
        y="52"
        textAnchor="middle"
        fill="currentColor"
        fontSize="14"
        fontFamily="monospace"
        fontWeight="700"
      >
        {label}
      </text>
    </svg>
  );
}

export function HexLattice({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <defs>
        <pattern id="hex-lattice" width="56" height="48" patternUnits="userSpaceOnUse" patternTransform="scale(1)">
          <path
            d="M28 2 L52 14 V34 L28 46 L4 34 V14 Z"
            stroke="currentColor"
            strokeWidth="0.6"
            fill="none"
            opacity="0.5"
          />
        </pattern>
      </defs>
      <rect width="400" height="400" fill="url(#hex-lattice)" />
      <circle cx="200" cy="200" r="80" stroke="currentColor" strokeWidth="0.5" opacity="0.15" strokeDasharray="3 5" />
      <circle cx="200" cy="200" r="140" stroke="currentColor" strokeWidth="0.35" opacity="0.08" />
    </svg>
  );
}

export function CircuitTraces({
  className = "",
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 320 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      style={flip ? { transform: "scaleX(-1)" } : undefined}
    >
      <path d="M20 40 H80 V100 H140 V60 H200 V120 H280" stroke="currentColor" strokeWidth="1.2" opacity="0.45" strokeLinecap="round" />
      <path d="M40 180 H120 V140 H180 V200 H260" stroke="currentColor" strokeWidth="0.8" opacity="0.3" strokeLinecap="round" />
      <path d="M60 20 V80 M100 160 V220 M220 20 V100 M260 140 V220" stroke="currentColor" strokeWidth="0.6" opacity="0.2" />
      {[
        [80, 40],
        [140, 100],
        [200, 60],
        [120, 180],
        [180, 200],
      ].map(([cx, cy], i) => (
        <g key={i}>
          <rect x={cx - 8} y={cy - 8} width="16" height="16" rx="2" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
          <circle cx={cx} cy={cy} r="2" fill="currentColor" opacity="0.7" />
        </g>
      ))}
    </svg>
  );
}

export function WireframeGlobe({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <circle cx="100" cy="100" r="72" stroke="currentColor" strokeWidth="1" opacity="0.35" />
      <ellipse cx="100" cy="100" rx="72" ry="24" stroke="currentColor" strokeWidth="0.6" opacity="0.25" />
      <ellipse cx="100" cy="100" rx="24" ry="72" stroke="currentColor" strokeWidth="0.6" opacity="0.25" />
      <ellipse cx="100" cy="100" rx="52" ry="72" stroke="currentColor" strokeWidth="0.5" opacity="0.15" transform="rotate(45 100 100)" />
      <ellipse cx="100" cy="100" rx="52" ry="72" stroke="currentColor" strokeWidth="0.5" opacity="0.15" transform="rotate(-45 100 100)" />
      <path d="M28 100 H172 M100 28 V172" stroke="currentColor" strokeWidth="0.4" opacity="0.2" />
      {[0, 45, 90, 135].map((deg) => (
        <circle
          key={deg}
          cx={100 + 72 * Math.cos((deg * Math.PI) / 180)}
          cy={100 + 72 * Math.sin((deg * Math.PI) / 180)}
          r="2.5"
          fill="currentColor"
          opacity="0.4"
        />
      ))}
    </svg>
  );
}

export function OrbitalRings({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <circle cx="120" cy="120" r="40" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <ellipse cx="120" cy="120" rx="90" ry="36" stroke="currentColor" strokeWidth="0.8" opacity="0.25" transform="rotate(-20 120 120)" />
      <ellipse cx="120" cy="120" rx="100" ry="42" stroke="currentColor" strokeWidth="0.6" opacity="0.18" transform="rotate(35 120 120)" />
      <ellipse cx="120" cy="120" rx="110" ry="28" stroke="currentColor" strokeWidth="0.5" opacity="0.12" transform="rotate(70 120 120)" />
      <circle cx="120" cy="120" r="4" fill="currentColor" opacity="0.5" />
      <circle cx="210" cy="120" r="3" fill="currentColor" opacity="0.35" />
      <circle cx="60" cy="55" r="2.5" fill="currentColor" opacity="0.3" />
    </svg>
  );
}

export function DataPackets({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      {[
        { x: 20, y: 30, w: 64, h: 36 },
        { x: 100, y: 70, w: 72, h: 40 },
        { x: 190, y: 20, w: 60, h: 34 },
        { x: 50, y: 120, w: 80, h: 38 },
        { x: 160, y: 110, w: 68, h: 36 },
      ].map((p, i) => (
        <g key={i} opacity={0.35 + i * 0.08}>
          <rect x={p.x} y={p.y} width={p.w} height={p.h} rx="6" stroke="currentColor" strokeWidth="1" />
          <path d={`M${p.x + 10} ${p.y + 14} H${p.x + p.w - 14}`} stroke="currentColor" strokeWidth="0.6" opacity="0.6" />
          <path d={`M${p.x + 10} ${p.y + 24} H${p.x + p.w - 28}`} stroke="currentColor" strokeWidth="0.6" opacity="0.4" />
        </g>
      ))}
      <path d="M84 48 L100 90 M172 37 L160 70 M130 148 L160 128" stroke="currentColor" strokeWidth="0.8" opacity="0.25" strokeDasharray="4 4" />
    </svg>
  );
}

export function CrosshairTarget({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <circle cx="40" cy="40" r="28" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <circle cx="40" cy="40" r="14" stroke="currentColor" strokeWidth="0.8" opacity="0.3" strokeDasharray="2 3" />
      <path d="M40 8 V20 M40 60 V72 M8 40 H20 M60 40 H72" stroke="currentColor" strokeWidth="1.2" opacity="0.5" strokeLinecap="round" />
      <circle cx="40" cy="40" r="2" fill="currentColor" opacity="0.7" />
    </svg>
  );
}

export function TerminalCorners({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M8 28 V8 H28 M92 8 H112 V28 M112 92 V112 H92 M28 112 H8 V92" stroke="currentColor" strokeWidth="2" opacity="0.5" strokeLinecap="round" />
      <path d="M20 44 H52 M68 44 H100 M20 76 H44 M76 76 H100" stroke="currentColor" strokeWidth="0.6" opacity="0.25" />
      <rect x="44" y="52" width="32" height="16" rx="2" stroke="currentColor" strokeWidth="0.8" opacity="0.35" />
    </svg>
  );
}

export function NodeConstellation({ className = "" }: { className?: string }) {
  const nodes = [
    [30, 40],
    [80, 25],
    [130, 55],
    [170, 30],
    [220, 70],
    [60, 100],
    [120, 90],
    [180, 120],
    [240, 95],
    [100, 150],
    [200, 160],
  ];
  const edges: [number, number][] = [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
    [0, 5],
    [5, 6],
    [6, 7],
    [7, 8],
    [5, 9],
    [6, 9],
    [7, 10],
    [8, 10],
  ];
  return (
    <svg className={className} viewBox="0 0 270 180" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a][0]}
          y1={nodes[a][1]}
          x2={nodes[b][0]}
          y2={nodes[b][1]}
          stroke="currentColor"
          strokeWidth="0.6"
          opacity="0.2"
        />
      ))}
      {nodes.map(([cx, cy], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r={i % 3 === 0 ? 4 : 2.5} fill="currentColor" opacity={0.25 + (i % 4) * 0.1} />
          {i % 4 === 0 ? (
            <circle cx={cx} cy={cy} r="8" stroke="currentColor" strokeWidth="0.5" opacity="0.15" />
          ) : null}
        </g>
      ))}
    </svg>
  );
}

export function ArrowBurst({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M8 24h28M28 14l10 10-10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 12 12 4 M36 4 44 12 M44 36 36 44 M4 36 12 44" stroke="currentColor" strokeWidth="1" opacity="0.3" strokeLinecap="round" />
    </svg>
  );
}

export function ScanRadar({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.6" opacity="0.2" />
      <circle cx="100" cy="100" r="55" stroke="currentColor" strokeWidth="0.5" opacity="0.15" />
      <circle cx="100" cy="100" r="30" stroke="currentColor" strokeWidth="0.5" opacity="0.12" />
      <path d="M100 100 L100 20 A80 80 0 0 1 170 130 Z" fill="currentColor" opacity="0.08" />
      <path d="M100 20 V180 M20 100 H180" stroke="currentColor" strokeWidth="0.4" opacity="0.15" />
      <circle cx="145" cy="65" r="3" fill="currentColor" opacity="0.45" />
      <circle cx="72" cy="128" r="2" fill="currentColor" opacity="0.35" />
    </svg>
  );
}

export function IsoCubes({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 160 140" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      {[
        { x: 20, y: 60 },
        { x: 70, y: 30 },
        { x: 100, y: 75 },
      ].map(({ x, y }, i) => (
        <g key={i} opacity={0.3 + i * 0.15}>
          <path d={`M${x} ${y} l20 -12 v24 l-20 12 v-24`} stroke="currentColor" strokeWidth="0.8" />
          <path d={`M${x + 20} ${y - 12} l20 12 v24 l-20 -12 v-24`} stroke="currentColor" strokeWidth="0.8" />
          <path d={`M${x} ${y} l20 12 l20 -12 l-20 -12`} stroke="currentColor" strokeWidth="0.8" />
        </g>
      ))}
    </svg>
  );
}

export function LockWireframe({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect x="12" y="36" width="40" height="36" rx="4" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <path d="M20 36 V28a12 12 0 0 1 24 0 v8" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <circle cx="32" cy="52" r="4" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <path d="M32 56 V62" stroke="currentColor" strokeWidth="1" opacity="0.5" strokeLinecap="round" />
    </svg>
  );
}

export function MiniBraces({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path
        d="M12 8 C8 8 6 12 6 20 C6 28 8 32 12 32 M28 8 C32 8 34 12 34 20 C34 28 32 32 28 32"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}

export function MiniPulse({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path
        d="M4 12 H12 L16 4 L24 20 L28 12 H44"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.55"
      />
    </svg>
  );
}

export function MiniDiamond({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M16 4 L28 16 L16 28 L4 16 Z" stroke="currentColor" strokeWidth="1.2" opacity="0.45" />
      <circle cx="16" cy="16" r="2" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

export function MiniCodeTag({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path
        d="M14 8 L6 16 L14 24 M34 8 L42 16 L34 24"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.5"
      />
    </svg>
  );
}

export function MiniDots({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      {[
        [8, 8],
        [16, 8],
        [24, 8],
        [8, 16],
        [16, 16],
        [24, 16],
        [8, 24],
        [16, 24],
        [24, 24],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r={i % 3 === 0 ? 1.8 : 1.2} fill="currentColor" opacity={0.25 + (i % 3) * 0.15} />
      ))}
    </svg>
  );
}
