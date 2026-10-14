import type { Metadata } from 'next';
import AuthLayout from '@/components/auth/AuthLayout';
import RegisterForm from '@/components/auth/RegisterForm';

export const metadata: Metadata = {
  title: 'Inscription — PROVINCIA',
  description: 'Crée ton compte PROVINCIA pour découvrir le provençal et le corse.',
};

export default function RegisterPage() {
  return <AuthLayout><RegisterForm /></AuthLayout>;
}
