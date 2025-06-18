
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ServicesPreview from '@/components/ServicesPreview';
import WhyChooseUs from '@/components/WhyChooseUs';
import FeaturesSection from '@/components/FeaturesSection';
import TestimonialsSection from '@/components/TestimonialsSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ServicesPreview />
      <FeaturesSection />
      <TestimonialsSection />
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default Index;
