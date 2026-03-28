import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Awards', id: 'achievements' },
    { name: 'Education', id: 'education' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-card/80 backdrop-blur-xl shadow-lg shadow-primary/5 border-b border-border/50' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button onClick={() => scrollToSection('home')} className="relative group">
            <span className="text-xl font-bold font-['Space_Grotesk'] text-foreground tracking-tight">
              ABR
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
          </button>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Button key={link.id} variant="ghost" size="sm" onClick={() => scrollToSection(link.id)}
                className="text-muted-foreground hover:text-foreground hover:bg-primary/5 text-sm font-medium transition-all duration-200">
                {link.name}
              </Button>
            ))}
            <Button size="sm" className="ml-3 bg-primary hover:bg-primary/90 text-primary-foreground shadow-md shadow-primary/20"
              onClick={() => scrollToSection('contact')}>
              Let's Talk
            </Button>
          </div>

          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card/95 backdrop-blur-xl border-t border-border/50"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Button key={link.id} variant="ghost" onClick={() => scrollToSection(link.id)}
                  className="w-full justify-start text-muted-foreground hover:text-foreground">
                  {link.name}
                </Button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
