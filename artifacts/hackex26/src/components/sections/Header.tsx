import { useState } from 'react';
import { Menu, X, ExternalLink, FileText } from 'lucide-react';
import { navItems, GOOGLE_FORM_URL, GUIDELINES_PDF_URL } from '@/constants';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#home" className="brand" data-testid="link-brand">
          <span className="brand-mark"><span>HX</span></span>
          <span>HACKE<span className="brand-x">X</span>’26<small>EXCEL ENGINEERING COLLEGE</small></span>
        </a>
        <nav className={`nav-links ${menuOpen ? 'open' : ''}`} aria-label="Main navigation">
          {navItems.map(([label, href]) => (
            <a href={href} key={href} onClick={() => setMenuOpen(false)} data-testid={`link-nav-${label.toLowerCase()}`}>{label}</a>
          ))}
          <a href={GUIDELINES_PDF_URL} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)} className="nav-pdf-link mobile-only" data-testid="link-nav-guidelines-mobile">
            <FileText size={14} /> Guidelines PDF
          </a>
          <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)} className="mobile-menu-cta mobile-only" data-testid="link-nav-register-mobile">
            Register Now <ExternalLink size={14} />
          </a>
        </nav>
        <div className="desktop-only" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <a href={GUIDELINES_PDF_URL} target="_blank" rel="noopener noreferrer" className="nav-pdf-btn" data-testid="link-nav-guidelines-btn">
            <FileText size={14} /> Guidelines PDF
          </a>
          <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" className="nav-cta" data-testid="link-nav-cta">Register now <ExternalLink size={14} /></a>
        </div>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} data-testid="button-menu">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}
