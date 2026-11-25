import { Heart, X } from 'lucide-react';

export default function LanguageModal({ language, onClose }: { language: string | null; onClose: () => void }) {
  if (!language) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="language-modal" role="dialog" aria-modal="true" aria-labelledby="language-dialog-title" onClick={(event) => event.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Fermer"><X size={20}/></button><div className="modal-icon">{language === 'Corse' ? '⛰️' : '☀️'}</div>
        <span className="kicker">BIENTÔT DISPONIBLE</span><h2 id="language-dialog-title">Le {language.toLowerCase()} arrive !</h2><p>Nos parcours pédagogiques sont en préparation. En attendant, découvre l’univers REGIO !</p>
        <button className="btn btn-primary" onClick={onClose}>J’ai hâte ! <Heart size={17}/></button>
      </div>
    </div>
  );
}
