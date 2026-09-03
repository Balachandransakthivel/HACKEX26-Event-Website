import { useState } from 'react';
import {
  ArrowUpRight,
  Check,
  CheckCircle2,
  Copy,
  ExternalLink,
  FileText,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  Target,
} from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GOOGLE_FORM_URL, themes } from '@/constants';
import type { ProblemStatement } from '@/types';

interface RegistrationProps {
  selectedProblem?: ProblemStatement | null;
  onClearProblem?: () => void;
}

export function Registration({ selectedProblem, onClearProblem }: RegistrationProps) {
  const [copied, setCopied] = useState(false);

  const currentTheme = selectedProblem
    ? themes.find((t) => t.id === selectedProblem.themeId)
    : null;
  const themeColor = currentTheme?.color || '#086cff';

  const handleCopyProblem = () => {
    if (!selectedProblem) return;
    let text = `Selected Problem Statement:\nTheme: ${selectedProblem.themeName}\nProblem ID: ${selectedProblem.id}\nTitle: ${selectedProblem.title}\nDescription: ${selectedProblem.description}`;
    if (selectedProblem.isOpenInnovation && selectedProblem.submissionFormat) {
      text += `\n\nOpen Innovation Submission Structure:\n` +
        selectedProblem.submissionFormat.map((f) => `- ${f.label}: ${f.description}`).join('\n');
    }
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChangeProblem = () => {
    const problemsElem = document.getElementById('problems-list') || document.getElementById('themes');
    if (problemsElem) {
      problemsElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section register grid-bg" id="register">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="08 / JOIN THE GRID"
            title="Register for HACKEX’26"
            copy="Round 1 registration is 100% free! Fill in your team details and submit your project idea & PPT through the official form."
          />
        </Reveal>

        {/* Selected Problem Highlight Box if Participant selected a problem */}
        {selectedProblem && (
          <Reveal>
            <div
              className="selected-problem-banner"
              style={{
                '--selected-accent': themeColor,
              } as React.CSSProperties}
              data-testid="banner-selected-problem"
            >
              <div className="banner-top">
                <div className="banner-badge">
                  <Target size={16} />
                  <span>PRE-SELECTED PROBLEM STATEMENT</span>
                </div>
                <div className="banner-actions">
                  <button
                    type="button"
                    className="banner-copy-btn"
                    onClick={handleCopyProblem}
                    title="Copy problem statement for PPT"
                  >
                    {copied ? <Check size={14} /> : <Copy size={14} />}
                    <span>{copied ? 'Copied Details!' : 'Copy for PPT'}</span>
                  </button>
                  <button
                    type="button"
                    className="banner-change-btn"
                    onClick={handleChangeProblem}
                  >
                    <RotateCcw size={14} />
                    <span>Change Problem</span>
                  </button>
                </div>
              </div>

              <div className="banner-main">
                <div className="banner-meta">
                  <span className="banner-theme-pill" style={{ color: themeColor, borderColor: `${themeColor}40`, background: `${themeColor}15` }}>
                    {selectedProblem.themeName}
                  </span>
                  <span className="banner-code-pill">{selectedProblem.id}</span>
                </div>

                <h3 className="banner-title">{selectedProblem.title}</h3>
                <p className="banner-desc">{selectedProblem.description}</p>

                {selectedProblem.isOpenInnovation && selectedProblem.submissionFormat && (
                  <div className="banner-openinno-specs">
                    <span className="specs-title">Open Innovation Submission Checklist for PPT:</span>
                    <div className="specs-grid">
                      {selectedProblem.submissionFormat.map((fmt) => (
                        <div key={fmt.label} className="spec-item">
                          <strong>{fmt.label}:</strong> <span>{fmt.description}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="banner-footer-tip">
                <Sparkles size={14} style={{ color: '#ffd15a' }} />
                <span>
                  Please enter <strong>{selectedProblem.id} ({selectedProblem.title})</strong> in the Problem Statement field on the Google Form.
                </span>
              </div>
            </div>
          </Reveal>
        )}

        <Reveal>
          <div className="google-form-card" data-testid="google-form-card">
            <div className="google-form-badge">
              <Sparkles size={16} /> OFFICIAL REGISTRATION FORM
            </div>

            <div className="google-form-content">
              <h3>Round 1 Online Registration (PPT Selection)</h3>
              <p>
                Choose your problem statement, submit your innovative project idea, and upload your project PPT directly on our official Google Form.
                Round 1 is <strong>100% Free</strong> with no entry fee required. Selected PPT teams move to Round 2 to build on campus!
              </p>

              <div className="google-form-highlights">
                <div className="highlight-pill">
                  <CheckCircle2 size={16} className="pill-icon" />
                  <span>Free Entry • 13 Sep PPT Deadline</span>
                </div>
                <div className="highlight-pill">
                  <CheckCircle2 size={16} className="pill-icon" />
                  <span>13–14 Sep Confirmation Date</span>
                </div>
                <div className="highlight-pill">
                  <CheckCircle2 size={16} className="pill-icon" />
                  <span>₹1,500 collected ONLY after selection</span>
                </div>
              </div>

              <div className="google-form-action-container">
                <a
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-primary button-large"
                  data-testid="button-google-form-link"
                >
                  <FileText size={20} />
                  <span>Open Google Registration Form</span>
                  <ArrowUpRight size={20} />
                </a>
              </div>

              <div className="google-form-footer-note">
                <ShieldCheck size={16} style={{ color: '#086cff' }} />
                <span>Make sure your team leader registers with active contact details.</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
