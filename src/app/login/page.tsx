'use client';

import { useState, type FormEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Eye, EyeOff, LogOut } from 'lucide-react';

export default function LoginPage() {
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formError, setFormError] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    if (mode === 'signup' && formData.get('password') !== formData.get('confirmPassword')) {
      setFormError('Les deux mots de passe ne correspondent pas.');
      return;
    }

    setFormError('');
    setIsLoggedIn(true);
  }

  function handleLogout() {
    setIsLoggedIn(false);
    setShowPassword(false);
    setFormError('');
  }

  function changeMode(nextMode: 'login' | 'signup') {
    setMode(nextMode);
    setShowPassword(false);
    setFormError('');
  }

  return (
    <main className="auth-page">
      <section className="auth-brand-panel" aria-label="REGIO">
        <Link className="auth-logo" href="/" aria-label="Retour à l’accueil REGIO">
          <Image src="/regio-logo.svg" alt="REGIO" width={76} height={76} priority />
        </Link>
        <div className="auth-brand-copy">
          <span className="auth-kicker">LES LANGUES D’ICI</span>
          <h1>Un mot après l’autre.<br />Une culture à la fois.</h1>
          <p>Retrouve bientôt ton espace pour apprendre, jouer et suivre tes progrès.</p>
        </div>
        <span className="auth-panel-mark" aria-hidden="true">✳</span>
      </section>

      <section className="auth-content">
        <Link className="auth-back" href="/"><ArrowLeft size={17} /> Retour au site</Link>
        <div className="auth-form-wrap">
          <span className="auth-kicker">ESPACE MEMBRE</span>
          {isLoggedIn ? (
            <div className="auth-session" role="status">
              <span className="auth-session-badge">APERÇU DE SESSION</span>
              <h2>{mode === 'signup' ? 'Bienvenue chez REGIO.' : 'Te revoilà chez REGIO.'}</h2>
              <p>{mode === 'signup' ? 'Aperçu d’inscription uniquement : aucun compte n’a été créé.' : 'Aperçu de connexion uniquement : aucun compte n’a été authentifié.'}</p>
              <button type="button" className="btn btn-primary auth-submit" onClick={handleLogout}>Se déconnecter <LogOut size={18} /></button>
            </div>
          ) : (
            <>
              <div className="auth-mode-switch" role="group" aria-label="Choisir une option">
                <button type="button" aria-pressed={mode === 'login'} className={mode === 'login' ? 'active' : ''} onClick={() => changeMode('login')}>Se connecter</button>
                <button type="button" aria-pressed={mode === 'signup'} className={mode === 'signup' ? 'active' : ''} onClick={() => changeMode('signup')}>S’inscrire</button>
              </div>
              <h2>{mode === 'login' ? 'Heureux de te revoir.' : 'Rejoins REGIO.'}</h2>
              <p className="auth-intro">{mode === 'login' ? 'Connecte-toi pour retrouver ton aventure REGIO.' : 'Crée ton espace et commence à explorer.'}</p>
              <p className="auth-demo-note">Démo uniquement : aucun compte ne sera créé et aucune donnée ne sera envoyée.</p>

              <form className="auth-form" onSubmit={handleSubmit}>
                {mode === 'signup' && <>
                  <label htmlFor="name">Prénom</label>
                  <input id="name" name="name" type="text" autoComplete="given-name" placeholder="Ton prénom" required />
                </>}

                <label htmlFor="email">Adresse e-mail</label>
                <input id="email" name="email" type="email" autoComplete="email" placeholder="toi@exemple.fr" required />

                <div className="auth-password-label">
                  <label htmlFor="password">Mot de passe</label>
                </div>
                <div className="auth-password-field">
                  <input id="password" name="password" type={showPassword ? 'text' : 'password'} autoComplete={mode === 'signup' ? 'new-password' : 'current-password'} minLength={mode === 'signup' ? 8 : undefined} placeholder="Ton mot de passe" required />
                  <button type="button" className="auth-password-toggle" onClick={() => setShowPassword(!showPassword)} aria-label={showPassword ? 'Masquer le mot de passe' : 'Afficher le mot de passe'} aria-pressed={showPassword}>
                    {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                  </button>
                </div>

                {mode === 'signup' && <>
                  <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
                  <div className="auth-password-field">
                    <input id="confirmPassword" name="confirmPassword" type={showPassword ? 'text' : 'password'} autoComplete="new-password" minLength={8} placeholder="Répète ton mot de passe" required />
                  </div>
                </>}

                <button type="submit" className="btn btn-primary auth-submit">{mode === 'login' ? 'Voir l’aperçu' : 'Créer mon compte'} <ArrowRight size={18} /></button>
                <p className="auth-feedback" role="alert" aria-live="polite">{formError}</p>
              </form>
            </>
          )}
        </div>
      </section>
    </main>
  );
}
