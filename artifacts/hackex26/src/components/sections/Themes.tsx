import { themes } from '@/constants';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Activity, BookOpen, Cpu, Globe, TrendingUp } from 'lucide-react';

function ThemeBackgroundSvg({ themeId, color }: { themeId: string; color: string }) {
  switch (themeId) {
    case 'healthcare':
      return (
        <svg className="theme-bg-svg" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 100 H50 L65 60 L85 140 L105 40 L125 120 L140 90 L155 100 H190" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.35" />
          <circle cx="105" cy="40" r="4" fill={color} opacity="0.6" />
          <circle cx="85" cy="140" r="4" fill={color} opacity="0.6" />
          <rect x="140" y="30" width="30" height="30" rx="6" stroke={color} strokeWidth="1.5" opacity="0.2" />
        </svg>
      );
    case 'edutech':
      return (
        <svg className="theme-bg-svg" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="60" stroke={color} strokeWidth="1.5" strokeDasharray="4 4" opacity="0.3" />
          <circle cx="100" cy="100" r="35" stroke={color} strokeWidth="1.5" opacity="0.2" />
          <circle cx="100" cy="40" r="6" fill={color} opacity="0.5" />
          <circle cx="152" cy="130" r="6" fill={color} opacity="0.5" />
          <circle cx="48" cy="130" r="6" fill={color} opacity="0.5" />
          <path d="M100 40 L152 130 M152 130 L48 130 M48 130 L100 40" stroke={color} strokeWidth="1" opacity="0.25" />
        </svg>
      );
    case 'fintech':
      return (
        <svg className="theme-bg-svg" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="25" y="110" width="20" height="50" rx="3" fill={color} opacity="0.25" />
          <rect x="60" y="80" width="20" height="80" rx="3" fill={color} opacity="0.35" />
          <rect x="95" y="50" width="20" height="110" rx="3" fill={color} opacity="0.45" />
          <rect x="130" y="30" width="20" height="130" rx="3" fill={color} opacity="0.6" />
          <path d="M25 110 L70 75 L105 55 L140 25" stroke={color} strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />
        </svg>
      );
    case 'industrial':
      return (
        <svg className="theme-bg-svg" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="130" cy="70" r="45" stroke={color} strokeWidth="2" strokeDasharray="6 6" opacity="0.35" />
          <circle cx="70" cy="130" r="35" stroke={color} strokeWidth="2" strokeDasharray="4 4" opacity="0.35" />
          <path d="M20 20 H80 V80 H20 Z" stroke={color} strokeWidth="1.5" opacity="0.2" />
          <circle cx="130" cy="70" r="15" stroke={color} strokeWidth="1.5" opacity="0.4" />
        </svg>
      );
    case 'openinno':
      return (
        <svg className="theme-bg-svg" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 20 L100 180 M20 100 L180 100 M43 43 L157 157 M157 43 L43 157" stroke={color} strokeWidth="1.2" opacity="0.25" />
          <circle cx="100" cy="100" r="40" stroke={color} strokeWidth="2" opacity="0.4" />
          <circle cx="100" cy="100" r="8" fill={color} opacity="0.7" />
        </svg>
      );
    default:
      return null;
  }
}

export function Themes() {
  return (
    <section className="section themes grid-bg" id="themes">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="02 / CHOOSE YOUR ARENA"
            title="Five directions. Infinite ways in."
            copy="Pick the problem space where your curiosity has teeth. Each track comes with distinct real-world challenges and endless room for breakthrough solutions."
          />
        </Reveal>
        <div className="theme-grid">
          {themes.map(({ id, name, description, icon: Icon, tag, color, gradient, borderColor }, index) => (
            <Reveal key={name}>
              <article
                className={`theme-card theme-card-${id}`}
                style={{
                  '--theme-accent': color,
                  '--theme-gradient': gradient,
                  '--theme-border': borderColor,
                } as React.CSSProperties}
                data-testid={`card-theme-${index + 1}`}
              >
                <div className="theme-header-strip">
                  <span className="theme-index">0{index + 1} / THEME</span>
                  <span className="theme-pill-tag" style={{ color: color, borderColor: `${color}40`, background: `${color}12` }}>
                    {tag.split('•')[0].trim()}
                  </span>
                </div>

                <div className="theme-art" aria-hidden="true">
                  <ThemeBackgroundSvg themeId={id} color={color} />
                  <div className="theme-glow-spot" style={{ background: color }} />
                </div>

                <div className="theme-icon" style={{ color: color, borderColor: `${color}40`, background: `${color}15` }}>
                  <Icon size={28} />
                </div>

                <h3 style={{ color: '#fff' }}>{name}</h3>
                <p>{description}</p>

                <div className="theme-footer-tag">
                  <span>{tag}</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="theme-note">
          <span>
            <strong>Round 1 Evaluation:</strong> Choose your problem statement under any theme, submit your project idea, and <strong>upload your PPT in Round 1!</strong> Selected teams move to Round 2 to build on campus.
          </span>
          <span className="mono">[ ROUND 1 ONLINE PPT SELECTION ]</span>
        </div>
      </div>
    </section>
  );
}
