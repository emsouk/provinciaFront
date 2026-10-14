import { Gamepad2, Languages, Trophy } from 'lucide-react';

export default function HowItWorksSection() {
  return (
<section id="comment" className="section how-section"><div className="shell"><div className="section-heading centered"><span className="kicker">SIMPLE COMME BONJOUR</span><h2>Apprendre, c’est<br /><span className="text-blue">un jeu d’enfant.</span></h2><p>Trois petites étapes et te voilà lancé·e dans l’aventure.</p></div><div className="steps"><div className="step"><div className="step-illustration yellow"><Languages size={58} strokeWidth={1.8} /><span className="step-mini">01</span></div><h3>Choisis ta langue</h3><p>Provençal ou corse ? L’aventure commence avec un simple clic.</p></div><div className="step-arrow">↝</div><div className="step"><div className="step-illustration blue"><Gamepad2 size={62} strokeWidth={1.8} /><span className="step-mini">02</span></div><h3>Joue, apprends, recommence</h3><p>Des leçons courtes et des défis qui donnent envie d’y revenir.</p></div><div className="step-arrow">↝</div><div className="step"><div className="step-illustration pink"><Trophy size={60} strokeWidth={1.8} /><span className="step-mini">03</span></div><h3>Collectionne tes victoires</h3><p>Des points, des badges et la satisfaction de progresser chaque jour.</p></div></div></div></section>
  );
}
