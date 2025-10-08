import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const rotatingWords = ["define", "shape", "accelerate"];

export const Hero = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(false);
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % rotatingWords.length);
        setIsTyping(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-mesh opacity-60" />
        <img
          src={heroBg}
          alt="Hero Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-accent/30 rotate-45 animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border-2 border-accent/20 rounded-full animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-accent/10 backdrop-blur-sm animate-float" style={{ animationDelay: "2s" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        {/* Logo/Brand */}
        <div className="mb-12 animate-fade-in">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tighter">
            <span className="bg-gradient-to-r from-accent via-accent to-secondary bg-clip-text text-transparent">
              APEX
            </span>
          </h1>
          <div className="h-1 w-32 bg-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Main Headline */}
        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight animate-slide-up">
          Building digital experiences
          <br />
          that{" "}
          <span className="relative inline-block">
            <span
              className={`bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent transition-opacity duration-500 ${
                isTyping ? "opacity-100" : "opacity-0"
              }`}
            >
              {rotatingWords[wordIndex]}
            </span>
            <span className="absolute bottom-0 left-0 w-full h-1 bg-accent animate-pulse" />
          </span>{" "}
          tomorrow.
        </h2>

        {/* Subheadline */}
        <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Full-stack innovation for startups and enterprises.
          <br className="hidden sm:block" />
          We build what others imagine.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-primary font-bold text-lg px-8 py-6 rounded-full shadow-accent group"
            onClick={() => scrollToSection("contact")}
          >
            Start Project
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-accent/50 hover:border-accent hover:bg-accent/10 text-foreground font-semibold text-lg px-8 py-6 rounded-full group"
            onClick={() => scrollToSection("case-studies")}
          >
            View Our Work
            <ArrowDown className="ml-2 group-hover:translate-y-1 transition-transform" />
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-accent/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-accent rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};
