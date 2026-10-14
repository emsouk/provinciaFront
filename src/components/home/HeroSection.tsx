import { ArrowRight, ChevronDown, Heart, Play, Star } from 'lucide-react';
import Mascot from '@/components/Mascot';

export default function HeroSection() {
  return (
<section id="accueil" className="hero section-shell">

      <div className="hero-doodle doodle-one">✽</div><div className="hero-doodle doodle-two">✦</div>

      <div className="hero-inner shell">

        <div className="hero-copy">

          <div className="eyebrow"><span className="eyebrow-star">✳</span> L’AVENTURE COMMENCE ICI</div>

          <h1>Les langues<br />de <span className="underlined">chez nous</span><br /><span className="highlight-line">ont du peps<span className="punctuation">!</span></span></h1>

          <p>Le provençal, le corse et toute une culture à découvrir. Des mini-jeux, des défis, des petites victoires… et beaucoup de plaisir à apprendre !</p>

          <div className="hero-buttons"><a href="#langues" className="btn btn-primary btn-xl">Je me lance ! <ArrowRight size={21} /></a><a href="#comment" className="btn btn-outline btn-xl"><Play size={17} fill="currentColor" /> Comment ça marche ?</a></div>

          <div className="hero-social"><div className="avatar-stack"><span>☀️</span><span>💬</span><span>💜</span></div><span>Des langues vivantes.<br /><strong>Des histoires à partager.</strong></span></div>

        </div>

        <div className="hero-art">

          <div className="hero-sun">✳</div><div className="orbit orbit-one"></div><div className="orbit orbit-two"></div>

          <div className="hero-shape"></div>

          <div className="speech-bubble"><span className="speech-hello">Salute ! 👋</span><span>Prêt·e à apprendre<br />avec moi ?</span></div>

          <Mascot className="mascot-image" />

          <div className="sticker sticker-xp"><Star size={18} fill="currentColor" /> +20 XP</div><div className="sticker sticker-heart"><Heart size={24} fill="currentColor" /></div><div className="sticker sticker-spark">✦</div>

        </div>

      </div>

      <div className="hero-footer shell"><span>FAIS DÉFILER POUR EXPLORER</span><ChevronDown size={19} /><span className="hero-footer-right">100% BONNE HUMEUR ☻</span></div>

    </section>
  );
}
