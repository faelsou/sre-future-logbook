
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { t } = useLanguage();

  const handleContactClick = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="w-full py-4 px-4 md:px-8 backdrop-blur-md bg-background/80 sticky top-0 z-50 border-b border-border">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-mono text-xl font-bold text-gradient animate-glow">
            [SRE]
          </span>
          <h1 className="text-xl font-semibold hidden md:block">
            Diário de um SRE
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/iniciante" className="hover:text-neon-cyan transition-colors">
            {t('iniciante')}
          </Link>
          <Link to="/intermediario" className="hover:text-neon-cyan transition-colors">
            {t('intermediario')}
          </Link>
          <Link to="/avancado" className="hover:text-neon-cyan transition-colors">
            {t('avancado')}
          </Link>
          <Button variant="outline" className="neon-border" onClick={handleContactClick}>
            {t('contato')}
          </Button>
          <LanguageSelector />
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <LanguageSelector />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-[68px] left-0 w-full bg-card border-b border-border p-4 animate-fade-in">
          <nav className="flex flex-col gap-4">
            <Link 
              to="/iniciante" 
              className="py-2 hover:text-neon-cyan transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('iniciante')}
            </Link>
            <Link 
              to="/intermediario" 
              className="py-2 hover:text-neon-cyan transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('intermediario')}
            </Link>
            <Link 
              to="/avancado" 
              className="py-2 hover:text-neon-cyan transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('avancado')}
            </Link>
            <Button 
              variant="outline" 
              className="w-full neon-border"
              onClick={() => {
                setIsMenuOpen(false);
                handleContactClick();
              }}
            >
              {t('contato')}
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
