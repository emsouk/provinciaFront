import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'PROVINCIA — Les langues d’ici ont de l’avenir',
  description: 'Apprends le provençal et le corse avec des mini-leçons ludiques, des défis et une bonne dose de culture.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr" data-theme="provincia"><body>{children}</body></html>;
}
