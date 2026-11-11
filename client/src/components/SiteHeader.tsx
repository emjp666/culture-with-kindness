import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { assets } from '../lib/assets';
import { primaryCta } from '../lib/programme';

const links = [
  ['The programme', '#programme'],
  ['Training', '#training'],
  ['Our approach', '#approach'],
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="header-inner page-width">
        <a href="#" className="brand-link" aria-label="Clean Break — back to top">
          <img src={assets.logo} alt="Clean Break" width="1400" height="664" />
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <a href="#enquire" className="button button-outline nav-cta">{primaryCta} <ArrowUpRight size={17} /></a>
        <button className="menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="mobile-nav" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {menuOpen && <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation">
        {links.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
        <a href="#enquire" onClick={() => setMenuOpen(false)}>{primaryCta} <ArrowUpRight size={18} /></a>
      </nav>}
    </header>
  );
}
