import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import WhyUs from '@/components/WhyUs';
import ServicesSection from '@/components/ServicesSection';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import EnquirySection from '@/components/EnquirySection';
import StateOfSecurity  from '@/components/StateOfSecurity';
import NavBar from '@/components/NavBar';
import TestimonialsSection from '@/components/TestimonialsSection';

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <StateOfSecurity />
      <WhyUs />
      <ServicesSection />
      <TestimonialsSection />
      <CaseStudiesSection />
      <EnquirySection />
      <Footer />
    </main>
  );
}
