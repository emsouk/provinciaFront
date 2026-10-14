import { Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer"><div className="shell footer-main"><div><a href="#accueil" className="brand footer-brand"><span className="brand-mark">✳</span><span>provin<span className="brand-highlight">cia</span><span className="brand-dot">.</span></span></a><p>Des langues vivantes,<br />des cultures qui rayonnent.</p></div><nav aria-label="Navigation secondaire"><a href="#langues">Les langues</a><a href="#comment">Comment ça marche ?</a><a href="#mission">Notre mission</a></nav><div className="footer-social"><span>RETROUVE-NOUS BIENTÔT</span><div><span aria-label="Instagram à venir"><Instagram size={20} /></span><span aria-label="TikTok à venir">♪</span></div></div></div><div className="footer-bottom shell"><span>© {new Date().getFullYear()} PROVINCIA · Fait avec ♥ pour nos régions</span><span>Un projet qui prend vie, mot après mot.</span></div></footer>
  );
}
