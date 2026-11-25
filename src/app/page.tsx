'use client';

import { useState } from 'react';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import LanguageModal from '@/components/LanguageModal';
import LanguageSection from '@/components/LanguageSection';
import LessonPreview from '@/components/LessonPreview';
import Mission from '@/components/Mission';
import Ticker from '@/components/Ticker';

export default function Home() {
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

  return (
    <main>
      <Header />
      <Hero />
      <Ticker />
      <LanguageSection onSelect={setSelectedLanguage} />
      <HowItWorks />
      <LessonPreview />
      <Mission />
      <CallToAction />
      <Footer />
      <LanguageModal language={selectedLanguage} onClose={() => setSelectedLanguage(null)} />
    </main>
  );
}
