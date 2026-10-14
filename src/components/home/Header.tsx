'use client';

import { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

const links = [{ label: 'Les langues', href: '#langues' }, { label: 'Comment ça marche ?', href: '#comment' }, { label: 'Notre mission', href: '#mission' }];

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
<>
<div className="announcement">✦   Les langues de chez nous ont de l’avenir   ✦</div>

    <header className="header shell">

      <a className="brand" href="#accueil" aria-label="PROVINCIA, retour à l'accueil"><span className="brand-mark">✳</span><span>provin<span className="brand-highlight">cia</span><span className="brand-dot">.</span></span></a>

      <nav className="desktop-nav" aria-label="Navigation principale">{links.map(link => <a key={link.href} href={link.href}>{link.label}</a>)}</nav>

      <div className="header-actions"><a className="login-link" href="#comment">Connexion <span className="coming-soon">(bientôt)</span></a><a className="btn btn-primary header-cta" href="#langues">C’est parti ! <ArrowRight size={17} /></a><button className="mobile-toggle" onClick={() => setMobileMenu(!mobileMenu)} aria-label={mobileMenu ? 'Fermer le menu' : 'Ouvrir le menu'} aria-expanded={mobileMenu}>{mobileMenu ? <X /> : <Menu />}</button></div>

    </header>

    {mobileMenu && <nav className="mobile-nav shell" aria-label="Navigation mobile">{links.map(link => <a key={link.href} href={link.href} onClick={() => setMobileMenu(false)}>{link.label}</a>)}</nav>}
</>
  );
}
