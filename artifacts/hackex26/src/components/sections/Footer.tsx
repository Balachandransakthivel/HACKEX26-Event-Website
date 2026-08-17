import { ArrowRight, Instagram, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-motto-banner">
          <div className="motto-content">
            <span className="motto-tag">HACKEX’26 MOTTO</span>
            <h2 className="motto-title">BUILD. THINK. INNOVATE.</h2>
            <p className="motto-sub">INNOVATE TODAY, IMPACT TOMORROW.</p>
          </div>
          <a href="#register" className="button-primary motto-cta" data-testid="link-footer-motto-cta">
            Register your team <ArrowRight size={15} />
          </a>
        </div>

        <div className="footer-grid">
          <div className="footer-col-brand">
            <div className="footer-brand-wrap">
              <span className="brand-mark"><span>HX</span></span>
              <span className="footer-brand display">HACKE<span className="brand-x">X</span>’26</span>
            </div>
            <p className="footer-desc">
              A national-level hackathon organized by <strong>Excel Engineering College (Autonomous)</strong>, Komarapalayam, Namakkal – 637303, Techno Debuggers Club and the Department of Computer Science &amp; Engineering.
            </p>
          </div>

          <div className="footer-col-nav">
            <h3>Navigate</h3>
            <div className="footer-nav-links">
              {[
                ['About', '#about'],
                ['Themes', '#themes'],
                ['Timeline', '#timeline'],
                ['Prizes', '#prizes'],
                ['Rules', '#rules'],
                ['FAQ', '#faq'],
              ].map(([label, href]) => (
                <a href={href} key={href} data-testid={`link-footer-${label.toLowerCase()}`}>{label}</a>
              ))}
            </div>
          </div>

          <div className="footer-col-contact">
            <h3>Say Hello &amp; Connect</h3>
            <div className="footer-contact-cards">
              <div className="contact-card">
                <span className="contact-card-label">Email the team</span>
                <a href="mailto:hackex2026@gmail.com" data-testid="link-footer-email" className="contact-card-link">
                  <Mail size={14} /> hackex2026@gmail.com
                </a>
              </div>

              <div className="contact-card">
                <span className="contact-card-label">Follow the build</span>
                <a href="https://instagram.com/excel_cse_official" target="_blank" rel="noopener noreferrer" data-testid="link-footer-instagram" className="contact-card-link">
                  <Instagram size={14} /> @excel_cse_official
                </a>
              </div>

              <div className="contact-actions">
                <a href="#contact" data-testid="link-footer-coordinators" className="footer-pill-btn">Coordinators</a>
                <a href="#register" data-testid="link-footer-register" className="footer-pill-btn primary">
                  <ArrowRight size={13} /> Register team
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 HACKEX / Excel Engineering College (Autonomous), Komarapalayam, Namakkal – 637303</span>
          <span className="footer-motto-tagline">INNOVATE TODAY, IMPACT TOMORROW.</span>
        </div>
      </div>
    </footer>
  );
}
