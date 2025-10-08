import { CustomCursor } from "@/components/CustomCursor";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <CaseStudies />
      <WhyChoose />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
