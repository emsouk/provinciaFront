'use client';

import { useState } from 'react';
import { Check, Flame, Star, X } from 'lucide-react';

export default function LessonPreviewSection() {
  const [answer, setAnswer] = useState<string | null>(null);
  return (
<section className="section preview-section shell"><div className="preview-copy"><span className="kicker">APPRENDRE EN S’AMUSANT</span><h2>Une petite leçon.<br /><span className="text-orange">Un grand sourire.</span></h2><p>Pas de cours interminables ici. Des questions rapides, des découvertes étonnantes et ce petit plaisir quand tu trouves la bonne réponse.</p><div className="preview-points"><span><Check size={16} /> À ton rythme</span><span><Check size={16} /> Des défis amusants</span><span><Check size={16} /> Des progrès visibles</span></div></div><div className="lesson-preview"><div className="lesson-topline"><span>LEÇON 01 · PREMIERS MOTS</span><span><Flame size={18} fill="currentColor" /> 3</span></div><div className="progress-track"><div className="progress-fill" /></div><div className="lesson-emoji">💬</div><div className="lesson-question">Comment dit-on<br /><strong>« Bonjour »</strong> en corse ?</div><div className="answers">{['Grazie', 'Bonghjornu', 'À prestu'].map((item) => <button onClick={() => setAnswer(item)} key={item} className={`answer ${answer === item ? (item === 'Bonghjornu' ? 'correct' : 'incorrect') : ''}`}>{item}{answer === item && (item === 'Bonghjornu' ? <Check size={20} /> : <X size={18} />)}</button>)}</div><div aria-live="polite" className="answer-feedback">{answer ? answer === 'Bonghjornu' ? '✨ Bravo ! Bonne réponse !' : 'Presque ! Essaie encore 💛' : 'Choisis une réponse pour essayer !'}</div><div className="lesson-footer"><span><Star size={17} fill="currentColor" /> +20 XP à gagner</span><span>✦ PROVINCIA</span></div></div></section>
  );
}
