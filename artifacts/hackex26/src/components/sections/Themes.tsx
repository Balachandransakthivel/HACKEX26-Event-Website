import { useEffect, useState } from 'react';
import { themes, problemStatements } from '@/constants';
import type { ProblemStatement } from '@/types';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import {
  Check,
  Copy,
  Info,
  Layers,
  Sparkles,
  X,
} from 'lucide-react';

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

interface ThemesProps {
  selectedProblem?: ProblemStatement | null;
  onSelectProblem?: (problem: ProblemStatement) => void;
}

export function Themes({ selectedProblem, onSelectProblem }: ThemesProps) {
  const [activeThemeId, setActiveThemeId] = useState<string | null>(null);
  const [copiedOpenInno, setCopiedOpenInno] = useState(false);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveThemeId(null);
      }
    };
    if (activeThemeId) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeThemeId]);

  const activeTheme = themes.find((t) => t.id === activeThemeId);
  const activeProblems = activeThemeId
    ? problemStatements.filter((p) => p.themeId === activeThemeId)
    : [];

  const copyOpenInnoFormat = () => {
    const formatText = `OPEN INNOVATION SUBMISSION FORMAT
Problem Title: [Enter your proposed problem title]
Problem Description: [Clearly explain the real-world problem]
Target Users: [Who experiences or is affected by this problem?]
Existing Gap: [What limitations exist in current solutions?]
Proposed Technology: [Mention the technologies you plan to use]
Expected Impact: [Explain how your solution can create measurable impact]`;
    navigator.clipboard.writeText(formatText);
    setCopiedOpenInno(true);
    setTimeout(() => setCopiedOpenInno(false), 2500);
  };

  return (
    <section className="section themes grid-bg" id="themes">
      <div className="container">
        {/* Section Heading */}
        <Reveal>
          <SectionHeading
            eyebrow="02 / CHOOSE YOUR ARENA"
            title="Five directions. Infinite ways in."
            copy="Click on any theme below to view its specific problem statements for Round 1."
          />
        </Reveal>

        {/* Five Themes Grid */}
        <div className="theme-grid">
          {themes.map(({ id, name, description, icon: Icon, tag, color, gradient, borderColor, problemCountText, ctaText }, index) => {
            return (
              <Reveal key={id}>
                <article
                  className={`theme-card theme-card-${id}`}
                  style={{
                    '--theme-accent': color,
                    '--theme-gradient': gradient,
                    '--theme-border': borderColor,
                  } as React.CSSProperties}
                  data-testid={`card-theme-${index + 1}`}
                  onClick={() => setActiveThemeId(id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setActiveThemeId(id);
                    }
                  }}
                >
                  <div className="theme-header-strip">
                    <span className="theme-index">0{index + 1} / THEME</span>
                    <span
                      className="theme-pill-tag"
                      style={{ color: color, borderColor: `${color}40`, background: `${color}12` }}
                    >
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

                  <div className="theme-card-footer">
                    <div className="theme-count-badge" style={{ color: color, borderColor: `${color}33`, background: `${color}10` }}>
                      <Layers size={13} />
                      <span>{problemCountText}</span>
                    </div>
                    <button
                      type="button"
                      className="theme-view-cta"
                      style={{ color: color }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveThemeId(id);
                      }}
                      data-testid={`btn-view-problems-${id}`}
                    >
                      <span>{ctaText}</span>
                    </button>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* Important Rule Notice Box (Permanently visible on page before Section 03) */}
        <Reveal>
          <div className="important-rule-box on-page-rule-box" data-testid="rule-problem-selection-page">
            <div className="important-rule-icon">
              <Info size={28} />
            </div>
            <div className="important-rule-content">
              <div className="important-rule-title">
                <span>IMPORTANT RULE FOR PARTICIPANTS</span>
                <span className="rule-badge">Problem Statement Selection</span>
              </div>
              <p className="important-rule-text">
                Each team must select one problem statement from the available themes. Teams choosing Open Innovation
                may propose their own real-world problem. The selected problem statement must be clearly addressed in the
                Round 1 PPT and subsequently developed into a functional prototype if selected for Round 2.
              </p>
              <div className="important-rule-footer">
                <span className="mono">[ ROUND 1 ONLINE PPT SELECTION • ROUND 2 CAMPUS PROTOTYPE ]</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* POPUP / MODAL VIEW FOR SELECTED THEME PROBLEMS */}
      {activeTheme && (
        <div
          className="theme-problems-modal-overlay"
          onClick={() => setActiveThemeId(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="theme-modal-title"
        >
          <div
            className="theme-problems-modal-content"
            style={{
              '--modal-accent': activeTheme.color,
            } as React.CSSProperties}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="theme-modal-header">
              <div className="theme-modal-title-wrap">
                <div
                  className="theme-modal-icon"
                  style={{
                    color: activeTheme.color,
                    borderColor: `${activeTheme.color}50`,
                    background: `${activeTheme.color}15`,
                  }}
                >
                  <activeTheme.icon size={26} />
                </div>
                <div>
                  <div className="theme-modal-eyebrow" style={{ color: activeTheme.color }}>
                    THEME PROBLEMS • {activeTheme.problemCountText}
                  </div>
                  <h2 id="theme-modal-title" className="theme-modal-title">
                    {activeTheme.name}
                  </h2>
                </div>
              </div>

              <button
                type="button"
                className="theme-modal-close-btn"
                onClick={() => setActiveThemeId(null)}
                aria-label="Close problems view"
                data-testid="btn-close-theme-modal"
              >
                <X size={20} />
                <span>Close</span>
              </button>
            </div>

            {/* Quick Switch Theme Pills inside modal */}
            <div className="theme-modal-switcher" role="tablist" aria-label="Switch theme">
              {themes.map((t) => {
                const Icon = t.icon;
                const isActive = t.id === activeThemeId;
                return (
                  <button
                    key={t.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={`modal-switch-btn ${isActive ? 'active' : ''}`}
                    onClick={() => setActiveThemeId(t.id)}
                    style={{
                      '--pill-color': t.color,
                    } as React.CSSProperties}
                  >
                    <Icon size={14} />
                    <span>{t.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Problem Statements List for this Theme */}
            <div className="theme-modal-body">
              <div className="problem-cards-grid">
                {activeProblems.map((problem) => {
                  if (problem.isOpenInnovation) {
                    return (
                      <article
                        key={problem.id}
                        className="problem-card open-innovation-card"
                        style={{
                          '--card-accent': activeTheme.color,
                        } as React.CSSProperties}
                        data-testid={`card-problem-${problem.id.toLowerCase()}`}
                      >
                        <div className="problem-card-top">
                          <span
                            className="problem-theme-badge"
                            style={{
                              color: activeTheme.color,
                              borderColor: `${activeTheme.color}40`,
                              background: `${activeTheme.color}15`,
                            }}
                          >
                            {problem.themeName}
                          </span>
                          <span className="problem-id-tag">{problem.id}</span>
                        </div>

                        <h3 className="problem-title">{problem.title}</h3>
                        <p className="problem-desc">{problem.description}</p>

                        {/* Suggested Areas */}
                        <div className="open-inno-areas-section">
                          <div className="section-mini-title">
                            <Sparkles size={14} style={{ color: activeTheme.color }} />
                            <span>Participants may propose solutions in areas such as:</span>
                          </div>
                          <div className="open-inno-pills">
                            {problem.suggestedAreas?.map((area) => (
                              <span key={area} className="area-pill">
                                {area}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Submission Format Preview */}
                        <div className="open-inno-format-section">
                          <div className="format-header">
                            <span className="format-title">Open Innovation Submission Format (PPT / Form):</span>
                            <button
                              type="button"
                              className="format-copy-btn"
                              onClick={copyOpenInnoFormat}
                              title="Copy submission template"
                            >
                              {copiedOpenInno ? <Check size={14} /> : <Copy size={14} />}
                              <span>{copiedOpenInno ? 'Copied Template!' : 'Copy Template'}</span>
                            </button>
                          </div>
                          <div className="format-fields-list">
                            {problem.submissionFormat?.map((item) => (
                              <div key={item.label} className="format-field-item">
                                <span className="format-field-label">{item.label}:</span>
                                <span className="format-field-desc">{item.description}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </article>
                    );
                  }

                  return (
                    <article
                      key={problem.id}
                      className="problem-card"
                      style={{
                        '--card-accent': activeTheme.color,
                      } as React.CSSProperties}
                      data-testid={`card-problem-${problem.id.toLowerCase()}`}
                    >
                      <div className="problem-card-top">
                        <span
                          className="problem-theme-badge"
                          style={{
                            color: activeTheme.color,
                            borderColor: `${activeTheme.color}40`,
                            background: `${activeTheme.color}15`,
                          }}
                        >
                          {problem.themeName}
                        </span>
                        <span className="problem-id-tag">{problem.id}</span>
                      </div>

                      <h3 className="problem-title">{problem.title}</h3>
                      <p className="problem-desc">{problem.description}</p>
                    </article>
                  );
                })}
              </div>

              {/* Important Rule Notice Box inside the modal */}
              <div className="important-rule-box" data-testid="rule-problem-selection">
                <div className="important-rule-icon">
                  <Info size={24} />
                </div>
                <div className="important-rule-content">
                  <div className="important-rule-title">
                    <span>IMPORTANT RULE FOR PARTICIPANTS</span>
                    <span className="rule-badge">Problem Statement Selection</span>
                  </div>
                  <p className="important-rule-text">
                    Each team must select one problem statement from the available themes. Teams choosing Open Innovation
                    may propose their own real-world problem. The selected problem statement must be clearly addressed in the
                    Round 1 PPT and subsequently developed into a functional prototype if selected for Round 2.
                  </p>
                  <div className="important-rule-footer">
                    <span className="mono">[ ROUND 1 ONLINE PPT SELECTION • ROUND 2 CAMPUS PROTOTYPE ]</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
