'use client';

import { useState, type FormEvent } from 'react';
import Link from 'next/link';
import { ArrowRight, Eye, EyeOff, LockKeyhole, Mail } from 'lucide-react';
import styles from './LoginForm.module.css';

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage('La connexion sera bientôt disponible. Tes identifiants n’ont pas été envoyés.');
  }

  return (
    <section className={styles.card} aria-labelledby="login-title">
      <div className={styles.icon}><LockKeyhole size={30} aria-hidden="true" /></div>
      <span className="kicker">HEUREUX DE TE REVOIR</span>
      <h1 id="login-title" className={styles.title}>Connexion</h1>
      <p className={styles.intro}>Retrouve tes langues, tes défis et tes petites victoires.</p>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.field}>
          <label htmlFor="login-email">Adresse e-mail</label>
          <div className={styles.inputWrapper}>
            <Mail size={20} aria-hidden="true" />
            <input id="login-email" name="email" type="email" autoComplete="username" placeholder="toi@exemple.fr" required />
          </div>
        </div>
        <div className={styles.field}>
          <label htmlFor="login-password">Mot de passe</label>
          <div className={styles.inputWrapper}>
            <LockKeyhole size={20} aria-hidden="true" />
            <input id="login-password" name="password" type={showPassword ? 'text' : 'password'} autoComplete="current-password" placeholder="Ton mot de passe" required />
            <button type="button" className={styles.passwordToggle} onClick={() => setShowPassword(!showPassword)} aria-label={showPassword ? 'Masquer le mot de passe' : 'Afficher le mot de passe'} aria-pressed={showPassword} aria-controls="login-password">
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>
        <button className={`btn btn-primary ${styles.submit}`} type="submit">Se connecter <ArrowRight size={19} aria-hidden="true" /></button>
        <p role="status" className={styles.status}>{message}</p>
      </form>
      <p className={styles.note}>Pas encore de compte ? <Link className={styles.link} href="/inscription">S’inscrire</Link></p>
    </section>
  );
}
