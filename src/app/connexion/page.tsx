import type { Metadata } from 'next';
import AuthLayout from '@/components/auth/AuthLayout';
import LoginForm from '@/components/auth/LoginForm';

export const metadata: Metadata = {
  title: 'Connexion — PROVINCIA',
  description: 'Connecte-toi à ton espace PROVINCIA pour poursuivre ton apprentissage du provençal et du corse.',
};

export default function LoginPage() {
  return <AuthLayout><LoginForm /></AuthLayout>;
}
