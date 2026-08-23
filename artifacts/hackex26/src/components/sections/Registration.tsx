import { ArrowUpRight, CheckCircle2, FileText, ShieldCheck, Sparkles } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GOOGLE_FORM_URL } from '@/constants';

export function Registration() {
  return (
    <section className="section register grid-bg" id="register">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="08 / JOIN THE GRID"
            title="Register for HACKEX’26"
            copy="Round 1 registration is 100% free! Click the button below to open the official Google Form and register your team."
          />
        </Reveal>

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
                  <span>Free Entry & PPT Submission</span>
                </div>
                <div className="highlight-pill">
                  <CheckCircle2 size={16} className="pill-icon" />
                  <span>Quick & Simple Team Sign-up</span>
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
