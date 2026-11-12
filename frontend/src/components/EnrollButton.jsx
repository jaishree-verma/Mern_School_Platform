import React, { useRef, useCallback } from 'react';

/**
 * EnrollButton — 3D claymorphism CTA button
 * Props:
 *  - onClick : function  (called when button is clicked)
 *  - label   : string   (button text, default "Enroll Now")
 *  - icon    : string   (emoji icon, default "🚀")
 *  - className: string  (extra wrapper classes)
 */
const PARTICLES = [
  { dx: -34, dy: -34, color: '#ff6b6b' },
  { dx:  28, dy: -32, color: '#ffa94d' },
  { dx:  38, dy:   8, color: '#74c0fc' },
  { dx:  22, dy:  36, color: '#b197fc' },
  { dx: -10, dy:  38, color: '#ff6b6b' },
  { dx: -36, dy:  18, color: '#ffd43b' },
  { dx: -40, dy:  -6, color: '#63e6be' },
  { dx: -16, dy: -40, color: '#ffa94d' },
];

export default function EnrollButton({
  onClick,
  label = 'Explore Our School',
  icon = null,
  rightIcon = null,
  className = '',
  testId = 'enroll-3d-button',
}) {
  const btnRef = useRef(null);
  const particlesRef = useRef([]);

  /* ── Particle burst on hover enter ── */
  const handleMouseEnter = useCallback(() => {
    particlesRef.current.forEach((el) => {
      if (!el) return;
      el.style.animation = 'none';
      void el.offsetHeight; // force reflow
      el.style.animation = '';
    });
  }, []);

  /* ── Ripple on click ── */
  const handleClick = useCallback((e) => {
    const btn = btnRef.current;
    if (!btn) return;

    // create ripple element
    const ripple = document.createElement('span');
    ripple.className = 'enroll-ripple';
    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 500);

    if (onClick) onClick(e);
  }, [onClick]);

  return (
    <div className={`enroll-btn-wrap ${className}`} onMouseEnter={handleMouseEnter}>
      {/* Glow halo */}
      <div className="enroll-glow-halo" />

      {/* Particle burst ring */}
      <div className="enroll-particles">
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            ref={(el) => { particlesRef.current[i] = el; }}
            className="enroll-particle"
            style={{
              '--dx': p.dx,
              '--dy': p.dy,
              background: p.color,
              animationDelay: `${[0, 0.05, 0.1, 0.05, 0, 0.05, 0.1, 0.05][i]}s`,
            }}
          />
        ))}
      </div>

      {/* The 3D button */}
      <button
        ref={btnRef}
        className="enroll-btn-3d"
        onClick={handleClick}
        data-testid={testId}
      >
        {icon && <span className="enroll-icon">{icon}</span>}
        <span>{label}</span>
        {rightIcon && <span className="enroll-icon">{rightIcon}</span>}
      </button>
    </div>
  );
}

