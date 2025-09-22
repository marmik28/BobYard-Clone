import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/80 backdrop-blur-md' : 'bg-transparent'
    } border-b border-border/40`}>
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2" data-testid="logo">
            <img 
              src="https://cdn.prod.website-files.com/68a0b147a392c76e4c8c2aa5/68a0b3ec2f8c8d775f3bde1e_21302f07dcbe0bb674682117b2e33bfc_logo.svg" 
              alt="Exoraz Logo" 
              className="h-8 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8" data-testid="nav-desktop">
            <a href="#" className="text-foreground hover:text-primary transition-colors" data-testid="nav-home">Home</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="nav-about">About us</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="nav-features">Features</a>
            <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors" data-testid="nav-pricing">Pricing</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="nav-blog">Blog</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button className="btn-primary px-6 py-2 rounded-lg text-primary-foreground font-medium" data-testid="button-contact">
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2" 
            onClick={toggleMenu}
            data-testid="button-mobile-menu"
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed top-16 right-0 bottom-0 w-64 bg-card border-l border-border transition-transform duration-300 ${
        isMenuOpen ? 'transform translate-x-0' : 'transform translate-x-full'
      }`} data-testid="nav-mobile">
        <nav className="p-6 space-y-6">
          <a href="#" className="block text-foreground hover:text-primary transition-colors" data-testid="nav-mobile-home">Home</a>
          <a href="#" className="block text-muted-foreground hover:text-primary transition-colors" data-testid="nav-mobile-about">About us</a>
          <a href="#" className="block text-muted-foreground hover:text-primary transition-colors" data-testid="nav-mobile-features">Features</a>
          <a href="#pricing" className="block text-muted-foreground hover:text-primary transition-colors" data-testid="nav-mobile-pricing">Pricing</a>
          <a href="#" className="block text-muted-foreground hover:text-primary transition-colors" data-testid="nav-mobile-blog">Blog</a>
          <Button className="btn-primary w-full px-6 py-2 rounded-lg text-primary-foreground font-medium mt-6" data-testid="button-mobile-contact">
            Contact
          </Button>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-background/50 backdrop-blur-sm top-16"
          onClick={() => setIsMenuOpen(false)}
          data-testid="mobile-menu-overlay"
        />
      )}
    </header>
  );
}
