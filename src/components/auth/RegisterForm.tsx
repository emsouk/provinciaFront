'use client';

import { useState, type FormEvent } from 'react';
import Link from 'next/link';
import { ArrowRight, Eye, EyeOff, LockKeyhole, Mail, User, UserPlus } from 'lucide-react';
import styles from './LoginForm.module.css';

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const confirmation = form.elements.namedItem('passwordConfirmation') as HTMLInputElement;

    confirmation.setCustomValidity(data.get('password') === data.get('passwordConfirmation')
      ? '' : 'Les mots de passe doivent être identiques.');
    if (!form.reportValidity()) return;

    setMessage('La création de compte sera bientôt disponible. Tes informations n’ont pas été envoyées et aucun compte n’a été créé.');
  }

  return (
    <section className={styles.card} aria-labelledby="register-title">
      <div className={styles.icon}><UserPlus size={30} aria-hidden="true" /></div>
      <span className="kicker">L’AVENTURE COMMENCE ICI</span>
      <h1 id="register-title" className={styles.title}>Inscription</h1>
      <p className={styles.intro}>Un premier compte, un premier mot et plein de découvertes à venir.</p>

      <form onSubmit={handleSubmit} className={styles.form} onInput={(event) => {
        const confirmation = event.currentTarget.elements.namedItem('passwordConfirmation') as HTMLInputElement;
        confirmation.setCustomValidity('');
        setMessage('');
      }}>
        <div className={styles.field}>
          <label htmlFor="register-name">Prénom</label>
          <div className={styles.inputWrapper}>
            <User size={20} aria-hidden="true" />
            <input id="register-name" name="name" autoComplete="given-name" placeholder="Ton prénom" required />
          </div>
        </div>
        <div className={styles.field}>
          <label htmlFor="register-email">Adresse e-mail</label>
          <div className={styles.inputWrapper}>
            <Mail size={20} aria-hidden="true" />
            <input id="register-email" name="email" type="email" autoComplete="email" placeholder="toi@exemple.fr" required />
          </div>
        </div>
        <div className={styles.field}>
          <label htmlFor="register-password">Mot de passe</label>
          <div className={styles.inputWrapper}>
            <LockKeyhole size={20} aria-hidden="true" />
            <input id="register-password" name="password" type={showPassword ? 'text' : 'password'} autoComplete="new-password" placeholder="Au moins 8 caractères" minLength={8} required />
            <button type="button" className={styles.passwordToggle} onClick={() => setShowPassword(!showPassword)} aria-label={showPassword ? 'Masquer les mots de passe' : 'Afficher les mots de passe'} aria-pressed={showPassword} aria-controls="register-password register-confirmation">
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>
        <div className={styles.field}>
          <label htmlFor="register-confirmation">Confirmer le mot de passe</label>
          <div className={styles.inputWrapper}>
            <LockKeyhole size={20} aria-hidden="true" />
            <input id="register-confirmation" name="passwordConfirmation" type={showPassword ? 'text' : 'password'} autoComplete="new-password" placeholder="Retape ton mot de passe" minLength={8} required />
          </div>
        </div>
        <button className={`btn btn-primary ${styles.submit}`} type="submit">Créer mon compte <ArrowRight size={19} aria-hidden="true" /></button>
        <p role="status" className={styles.status}>{message}</p>
      </form>
      <p className={styles.note}>Déjà inscrit·e ? <Link className={styles.link} href="/connexion">Se connecter</Link></p>
    </section>
  );
}
