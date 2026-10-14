import type { ReactNode } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import styles from './AuthLayout.module.css';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <main className={styles.page}>
      <div className="announcement">✦ Les langues de chez nous ont de l’avenir ✦</div>
      <header className={`shell ${styles.header}`}>
        <Link className="brand" href="/" aria-label="PROVINCIA, retour à l’accueil">
          <span className="brand-mark">✳</span>
          <span>provin<span className="brand-highlight">cia</span><span className="brand-dot">.</span></span>
        </Link>
        <Link className={styles.back} href="/"><ArrowLeft size={18} aria-hidden="true" /> Retour à l’accueil</Link>
      </header>
      <div className={`shell ${styles.content}`}>{children}</div>
    </main>
  );
}
