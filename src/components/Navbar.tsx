import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass-morph shadow-lg border-b border-accent/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => scrollToSection('hero')}
          className="text-2xl font-bold tracking-[0.3em] bg-gradient-to-r from-primary via-accent to-accent bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 animate-glow-pulse cursor-hover"
        >
          APEX
        </button>

        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('about')}
            className="text-sm font-medium text-foreground hover:text-accent transition-colors cursor-hover"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="text-sm font-medium text-foreground hover:text-accent transition-colors cursor-hover"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection('work')}
            className="text-sm font-medium text-foreground hover:text-accent transition-colors cursor-hover"
          >
            Work
          </button>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full glass-morph hover:scale-110 transition-all duration-300 cursor-hover"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-accent" />
            ) : (
              <Moon className="w-5 h-5 text-primary" />
            )}
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-6 py-2 bg-gradient-to-r from-accent to-accent/80 text-primary rounded-full text-sm font-semibold hover:shadow-2xl hover:shadow-accent/50 transition-all duration-300 hover:scale-105 cursor-hover"
          >
            Start Project →
          </button>
        </div>
      </div>
    </nav>
  );
};
