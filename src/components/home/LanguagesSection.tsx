'use client';

import { useState } from 'react';
import { ArrowRight, Heart, X } from 'lucide-react';

const languages = [
  { key: 'provence', number: '01', emoji: '☀️', name: 'Provençal', hello: 'Adiéu !', description: 'Le soleil, les cigales et mille expressions à découvrir.', label: 'CAP SUR LA PROVENCE', color: 'orange' },
  { key: 'corsica', number: '02', emoji: '⛰️', name: 'Corse', hello: 'Salute !', description: 'Une langue vivante au caractère aussi fort que son île.', label: 'DIRECTION L’ÎLE DE BEAUTÉ', color: 'blue' },
];

export default function LanguagesSection() {
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  return (
<>
<section id="langues" className="section languages-section shell">

      <div className="section-heading centered"><span className="kicker">À TOI DE CHOISIR</span><h2>Deux langues.<br /><span className="text-orange">Mille découvertes.</span></h2><p>Tu commences où ? Choisis ton aventure, on s’occupe du reste !</p></div>

      <div className="language-grid">{languages.map((lang) => <article key={lang.key} className={`language-card ${lang.color}`}><div className="language-top"><span className="language-tag">{lang.label}</span><span className="language-number">{lang.number}/02</span></div><div className="language-symbol">{lang.emoji}</div><div className="language-bottom"><span className="language-greeting">{lang.hello}</span><h3>{lang.name}</h3><p>{lang.description}</p><button className="language-button" onClick={() => setSelectedLanguage(lang.name)} aria-label={`Découvrir le ${lang.name.toLowerCase()}`}>Découvrir <ArrowRight size={22} /></button></div></article>)}</div>

      <p className="language-after">Et ce n’est que le début… d’autres langues arrivent bientôt ! <span>✳</span></p>

    </section>
{selectedLanguage && <div className="modal-backdrop" onClick={() => setSelectedLanguage(null)}><div className="language-modal" role="dialog" aria-modal="true" aria-labelledby="language-dialog-title" onClick={event => event.stopPropagation()}><button className="modal-close" onClick={() => setSelectedLanguage(null)} aria-label="Fermer"><X size={20} /></button><div className="modal-icon">{selectedLanguage === 'Corse' ? '⛰️' : '☀️'}</div><span className="kicker">BIENTÔT DISPONIBLE</span><h2 id="language-dialog-title">Le {selectedLanguage.toLowerCase()} arrive !</h2><p>Nos parcours pédagogiques sont en préparation. En attendant, découvre l’univers PROVINCIA !</p><button className="btn btn-primary" onClick={() => setSelectedLanguage(null)}>J’ai hâte ! <Heart size={17} /></button></div></div>}
</>
  );
}
