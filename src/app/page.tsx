import Header from '@/components/home/Header';
import HeroSection from '@/components/home/HeroSection';
import Ticker from '@/components/home/Ticker';
import LanguagesSection from '@/components/home/LanguagesSection';
import HowItWorksSection from '@/components/home/HowItWorksSection';
import LessonPreviewSection from '@/components/home/LessonPreviewSection';
import MissionSection from '@/components/home/MissionSection';
import CallToActionSection from '@/components/home/CallToActionSection';
import Footer from '@/components/home/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <Ticker />
      <LanguagesSection />
      <HowItWorksSection />
      <LessonPreviewSection />
      <MissionSection />
      <CallToActionSection />
      <Footer />
    </main>
  );
}
