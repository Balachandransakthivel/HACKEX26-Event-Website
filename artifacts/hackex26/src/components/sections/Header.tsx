import { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { navItems } from '@/constants';

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
          <a href="#register" onClick={() => setMenuOpen(false)} data-testid="link-nav-register">Register</a>
        </nav>
        <a href="#register" className="nav-cta" data-testid="link-nav-cta">Register now <ArrowRight size={14} /></a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} data-testid="button-menu">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}
