'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, BookOpen, Check, ChevronDown, Flame, Gamepad2, Globe2, Heart, Instagram, Languages, Menu, Play, Sparkles, Star, Trophy, Volume2, X } from 'lucide-react';
import Mascot from '@/components/Mascot';

const links = [{ label: 'Les langues', href: '#langues' }, { label: 'Comment ça marche ?', href: '#comment' }, { label: 'Notre mission', href: '#mission' }];
const languages = [
  { key: 'provence', number: '01', emoji: '☀️', name: 'Provençal', hello: 'Adiéu !', description: 'Le soleil, les cigales et mille expressions à découvrir.', label: 'CAP SUR LA PROVENCE', color: 'orange' },
  { key: 'corsica', number: '02', emoji: '⛰️', name: 'Corse', hello: 'Salute !', description: 'Une langue vivante au caractère aussi fort que son île.', label: 'DIRECTION L’ÎLE DE BEAUTÉ', color: 'blue' },
];

export default function Home() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [answer, setAnswer] = useState<string | null>(null);
  return (
    <main>
      <div className="announcement">✦ &nbsp; Les langues de chez nous ont de l’avenir &nbsp; ✦</div>
      <header className="header shell">
        <a className="brand" href="#accueil" aria-label="PROVINCIA, retour à l'accueil"><span className="brand-mark">✳</span><span>provin<span className="brand-highlight">cia</span><span className="brand-dot">.</span></span></a>
        <nav className="desktop-nav" aria-label="Navigation principale">{links.map(link => <a key={link.href} href={link.href}>{link.label}</a>)}</nav>
        <div className="header-actions"><a className="login-link" href="#comment">Connexion <span className="coming-soon">(bientôt)</span></a><a className="btn btn-primary header-cta" href="#langues">C’est parti ! <ArrowRight size={17}/></a><button className="mobile-toggle" onClick={() => setMobileMenu(!mobileMenu)} aria-label={mobileMenu ? 'Fermer le menu' : 'Ouvrir le menu'} aria-expanded={mobileMenu}>{mobileMenu ? <X/> : <Menu/>}</button></div>
      </header>
      {mobileMenu && <nav className="mobile-nav shell" aria-label="Navigation mobile">{links.map(link => <a key={link.href} href={link.href} onClick={() => setMobileMenu(false)}>{link.label}</a>)}</nav>}

      <section id="accueil" className="hero section-shell">
        <div className="hero-doodle doodle-one">✽</div><div className="hero-doodle doodle-two">✦</div>
        <div className="hero-inner shell">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-star">✳</span> L’AVENTURE COMMENCE ICI</div>
            <h1>Les langues<br/>de <span className="underlined">chez nous</span><br/><span className="highlight-line">ont du peps<span className="punctuation">!</span></span></h1>
            <p>Le provençal, le corse et toute une culture à découvrir. Des mini-jeux, des défis, des petites victoires… et beaucoup de plaisir à apprendre !</p>
            <div className="hero-buttons"><a href="#langues" className="btn btn-primary btn-xl">Je me lance ! <ArrowRight size={21}/></a><a href="#comment" className="btn btn-outline btn-xl"><Play size={17} fill="currentColor"/> Comment ça marche ?</a></div>
            <div className="hero-social"><div className="avatar-stack"><span>☀️</span><span>💬</span><span>💜</span></div><span>Des langues vivantes.<br/><strong>Des histoires à partager.</strong></span></div>
          </div>
          <div className="hero-art">
            <div className="hero-sun">✳</div><div className="orbit orbit-one"></div><div className="orbit orbit-two"></div>
            <div className="hero-shape"></div>
            <div className="speech-bubble"><span className="speech-hello">Salute ! 👋</span><span>Prêt·e à apprendre<br/>avec moi ?</span></div>
            <Mascot className="mascot-image" />
            <div className="sticker sticker-xp"><Star size={18} fill="currentColor"/> +20 XP</div><div className="sticker sticker-heart"><Heart size={24} fill="currentColor"/></div><div className="sticker sticker-spark">✦</div>
          </div>
        </div>
        <div className="hero-footer shell"><span>FAIS DÉFILER POUR EXPLORER</span><ChevronDown size={19}/><span className="hero-footer-right">100% BONNE HUMEUR ☻</span></div>
      </section>

      <div className="ticker" aria-label="Apprendre, jouer, partager"><div>UN MOT APRÈS L’AUTRE <span>✳</span> UNE CULTURE À LA FOIS <span>✳</span> UN MOT APRÈS L’AUTRE <span>✳</span> UNE CULTURE À LA FOIS <span>✳</span></div></div>

      <section id="langues" className="section languages-section shell">
        <div className="section-heading centered"><span className="kicker">À TOI DE CHOISIR</span><h2>Deux langues.<br/><span className="text-orange">Mille découvertes.</span></h2><p>Tu commences où ? Choisis ton aventure, on s’occupe du reste !</p></div>
        <div className="language-grid">{languages.map((lang) => <article key={lang.key} className={`language-card ${lang.color}`}><div className="language-top"><span className="language-tag">{lang.label}</span><span className="language-number">{lang.number}/02</span></div><div className="language-symbol">{lang.emoji}</div><div className="language-bottom"><span className="language-greeting">{lang.hello}</span><h3>{lang.name}</h3><p>{lang.description}</p><button className="language-button" onClick={() => setSelectedLanguage(lang.name)} aria-label={`Découvrir le ${lang.name.toLowerCase()}`}>Découvrir <ArrowRight size={22}/></button></div></article>)}</div>
        <p className="language-after">Et ce n’est que le début… d’autres langues arrivent bientôt ! <span>✳</span></p>
      </section>

      <section id="comment" className="section how-section"><div className="shell"><div className="section-heading centered"><span className="kicker">SIMPLE COMME BONJOUR</span><h2>Apprendre, c’est<br/><span className="text-blue">un jeu d’enfant.</span></h2><p>Trois petites étapes et te voilà lancé·e dans l’aventure.</p></div><div className="steps"><div className="step"><div className="step-illustration yellow"><Languages size={58} strokeWidth={1.8}/><span className="step-mini">01</span></div><h3>Choisis ta langue</h3><p>Provençal ou corse ? L’aventure commence avec un simple clic.</p></div><div className="step-arrow">↝</div><div className="step"><div className="step-illustration blue"><Gamepad2 size={62} strokeWidth={1.8}/><span className="step-mini">02</span></div><h3>Joue, apprends, recommence</h3><p>Des leçons courtes et des défis qui donnent envie d’y revenir.</p></div><div className="step-arrow">↝</div><div className="step"><div className="step-illustration pink"><Trophy size={60} strokeWidth={1.8}/><span className="step-mini">03</span></div><h3>Collectionne tes victoires</h3><p>Des points, des badges et la satisfaction de progresser chaque jour.</p></div></div></div></section>

      <section className="section preview-section shell"><div className="preview-copy"><span className="kicker">APPRENDRE EN S’AMUSANT</span><h2>Une petite leçon.<br/><span className="text-orange">Un grand sourire.</span></h2><p>Pas de cours interminables ici. Des questions rapides, des découvertes étonnantes et ce petit plaisir quand tu trouves la bonne réponse.</p><div className="preview-points"><span><Check size={16}/> À ton rythme</span><span><Check size={16}/> Des défis amusants</span><span><Check size={16}/> Des progrès visibles</span></div></div><div className="lesson-preview"><div className="lesson-topline"><span>LEÇON 01 · PREMIERS MOTS</span><span><Flame size={18} fill="currentColor"/> 3</span></div><div className="progress-track"><div className="progress-fill"/></div><div className="lesson-emoji">💬</div><div className="lesson-question">Comment dit-on<br/><strong>« Bonjour »</strong> en corse ?</div><div className="answers">{['Grazie', 'Bonghjornu', 'À prestu'].map((item) => <button onClick={() => setAnswer(item)} key={item} className={`answer ${answer === item ? (item === 'Bonghjornu' ? 'correct' : 'incorrect') : ''}`}>{item}{answer === item && (item === 'Bonghjornu' ? <Check size={20}/> : <X size={18}/>)}</button>)}</div><div aria-live="polite" className="answer-feedback">{answer ? answer === 'Bonghjornu' ? '✨ Bravo ! Bonne réponse !' : 'Presque ! Essaie encore 💛' : 'Choisis une réponse pour essayer !'}</div><div className="lesson-footer"><span><Star size={17} fill="currentColor"/> +20 XP à gagner</span><span>✦ PROVINCIA</span></div></div></section>

      <section id="mission" className="mission-section"><div className="shell mission-inner"><div className="mission-visual"><span className="mission-flower flower-a">✳</span><span className="mission-flower flower-b">✿</span><div className="mission-circle"><Globe2 size={108} strokeWidth={1.2}/><span className="mission-heart">♥</span></div></div><div className="mission-copy"><span className="kicker">NOTRE PETITE GRANDE MISSION</span><h2>Nos langues ont<br/>une histoire.<br/><span>À nous de la faire vivre.</span></h2><p>Une langue, c’est bien plus que des mots. Ce sont des souvenirs, des accents, des traditions et tout un patrimoine à transmettre.</p><p>Avec PROVINCIA, on fait rimer héritage culturel avec découverte et bonne humeur.</p><a href="#langues" className="btn btn-light">Découvrir les langues <ArrowRight size={18}/></a></div></div></section>

      <section className="cta-section shell"><div className="cta-card"><span className="cta-spark cta-spark-one">✷</span><span className="cta-spark cta-spark-two">✳</span><div className="cta-icon"><BookOpen size={34}/></div><h2>Allez, on se lance ?</h2><p>Ta prochaine aventure commence avec un premier mot.</p><a href="#langues" className="btn btn-dark btn-xl">Choisir ma langue <ArrowRight size={21}/></a></div></section>

      <footer className="footer"><div className="shell footer-main"><div><a href="#accueil" className="brand footer-brand"><span className="brand-mark">✳</span><span>provin<span className="brand-highlight">cia</span><span className="brand-dot">.</span></span></a><p>Des langues vivantes,<br/>des cultures qui rayonnent.</p></div><nav aria-label="Navigation secondaire"><a href="#langues">Les langues</a><a href="#comment">Comment ça marche ?</a><a href="#mission">Notre mission</a></nav><div className="footer-social"><span>RETROUVE-NOUS BIENTÔT</span><div><span aria-label="Instagram à venir"><Instagram size={20}/></span><span aria-label="TikTok à venir">♪</span></div></div></div><div className="footer-bottom shell"><span>© {new Date().getFullYear()} PROVINCIA · Fait avec ♥ pour nos régions</span><span>Un projet qui prend vie, mot après mot.</span></div></footer>

      {selectedLanguage && <div className="modal-backdrop" onClick={() => setSelectedLanguage(null)}><div className="language-modal" role="dialog" aria-modal="true" aria-labelledby="language-dialog-title" onClick={event => event.stopPropagation()}><button className="modal-close" onClick={() => setSelectedLanguage(null)} aria-label="Fermer"><X size={20}/></button><div className="modal-icon">{selectedLanguage === 'Corse' ? '⛰️' : '☀️'}</div><span className="kicker">BIENTÔT DISPONIBLE</span><h2 id="language-dialog-title">Le {selectedLanguage.toLowerCase()} arrive !</h2><p>Nos parcours pédagogiques sont en préparation. En attendant, découvre l’univers PROVINCIA !</p><button className="btn btn-primary" onClick={() => setSelectedLanguage(null)}>J’ai hâte ! <Heart size={17}/></button></div></div>}
    </main>
  );
}
