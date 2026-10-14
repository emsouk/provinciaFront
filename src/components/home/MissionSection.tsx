import { ArrowRight, Globe2 } from 'lucide-react';

export default function MissionSection() {
  return (
<section id="mission" className="mission-section"><div className="shell mission-inner"><div className="mission-visual"><span className="mission-flower flower-a">✳</span><span className="mission-flower flower-b">✿</span><div className="mission-circle"><Globe2 size={108} strokeWidth={1.2} /><span className="mission-heart">♥</span></div></div><div className="mission-copy"><span className="kicker">NOTRE PETITE GRANDE MISSION</span><h2>Nos langues ont<br />une histoire.<br /><span>À nous de la faire vivre.</span></h2><p>Une langue, c’est bien plus que des mots. Ce sont des souvenirs, des accents, des traditions et tout un patrimoine à transmettre.</p><p>Avec PROVINCIA, on fait rimer héritage culturel avec découverte et bonne humeur.</p><a href="#langues" className="btn btn-light">Découvrir les langues <ArrowRight size={18} /></a></div></div></section>
  );
}
