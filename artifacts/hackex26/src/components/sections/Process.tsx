import { Check, Calendar, FileText, Sparkles, MapPin, Zap } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function Process() {
  const steps = [
    {
      round: 'ROUND 1',
      title: 'ONLINE REGISTRATION',
      subtitle: 'Free Online Registration',
      badge: 'REGISTER IT FREE',
      badgeClass: 'badge-free',
      details: [
        'Register your team online with basic details.',
        'Online registration is 100% free — no entry fee required for Round 1.',
        'Shortlisted teams confirmation on 8–9 SEPTEMBER.',
      ],
    },
    {
      round: 'ROUND 2',
      title: 'OFFLINE HACKATHON & PPT SUBMISSION',
      subtitle: 'September 25 & 26, 2026',
      badge: '₹1,500 / TEAM (AFTER SELECTION)',
      badgeClass: 'badge-paid',
      details: [
        'Venue: Offline | Excel Engineering College campus.',
        'Submit and present your project PPT on your chosen topic during Round 2.',
        'Payment of ₹1,500 per team is collected ONLY AFTER selection in Round 1.',
        'Non-stop 36-hour build window with food, wifi, live mentoring, and final prototype demo.',
      ],
    },
  ];

  return (
    <section className="section process" id="experience">
      <div className="container">
        <Reveal>
          <SectionHeading
            light
            eyebrow="03 / EVENT STRUCTURE & SELECTION"
            title="Two rounds. One high-intensity journey."
            copy="From online registration to an on-campus 36-hour build and PPT topic presentation. Everything is designed to test real innovation and execution."
          />
        </Reveal>

        <div className="process-rounds-grid">
          {steps.map((step, idx) => (
            <Reveal key={step.round}>
              <div className={`round-card round-card-${idx + 1}`}>
                <div className="round-header">
                  <span className="round-tag">{step.round}</span>
                  <span className={`round-badge ${step.badgeClass}`}>{step.badge}</span>
                </div>
                <h3 className="round-title">{step.title}</h3>
                <p className="round-subtitle">{step.subtitle}</p>

                <ul className="round-details">
                  {step.details.map((item, i) => (
                    <li key={i}>
                      <Check size={16} className="check-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Quick Summary Grid */}
        <Reveal>
          <div className="process-summary-banner">
            <div className="summary-item">
              <FileText size={22} />
              <div>
                <strong>Round 1 Registration</strong>
                <span>Online Registration • 100% Free</span>
              </div>
            </div>
            <div className="summary-item">
              <Calendar size={22} />
              <div>
                <strong>Selection Announcement</strong>
                <span>8–9 September 2026</span>
              </div>
            </div>
            <div className="summary-item">
              <MapPin size={22} />
              <div>
                <strong>Round 2 Venue</strong>
                <span>Excel Engineering College (Offline)</span>
              </div>
            </div>
            <div className="summary-item">
              <Zap size={22} />
              <div>
                <strong>Event Fee</strong>
                <span>₹1,500 after selection</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

