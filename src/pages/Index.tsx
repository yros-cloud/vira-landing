
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { WhyChooseVira } from "@/components/WhyChooseVira";
import { OurServices } from "@/components/OurServices";
import { ExpertsSection } from "@/components/ExpertsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <WhyChooseVira />
        <OurServices />
        <ExpertsSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
