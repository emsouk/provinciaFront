import { ArrowRight, BookOpen } from 'lucide-react';

export default function CallToActionSection() {
  return (
<section className="cta-section shell"><div className="cta-card"><span className="cta-spark cta-spark-one">✷</span><span className="cta-spark cta-spark-two">✳</span><div className="cta-icon"><BookOpen size={34} /></div><h2>Allez, on se lance ?</h2><p>Ta prochaine aventure commence avec un premier mot.</p><a href="#langues" className="btn btn-dark btn-xl">Choisir ma langue <ArrowRight size={21} /></a></div></section>
  );
}
