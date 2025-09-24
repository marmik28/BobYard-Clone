import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2" data-testid="logo">
            <img 
              src="https://bobyard-public-images.s3.us-west-2.amazonaws.com/landing4-logo.png" 
              alt="Bobyard Logo" 
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8" data-testid="nav-desktop">
            <Link href="/sample" className="text-muted-foreground hover:text-primary transition-colors" data-testid="nav-sample">Sample</Link>
            <Link href="/demo" className="text-muted-foreground hover:text-primary transition-colors" data-testid="nav-demo">Demo</Link>
            <Link href="/careers" className="text-muted-foreground hover:text-primary transition-colors" data-testid="nav-careers">Careers</Link>
            <Link href="/news" className="text-muted-foreground hover:text-primary transition-colors" data-testid="nav-news">News</Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="https://app.bobyard.com/login" className="text-muted-foreground hover:text-primary transition-colors font-medium" data-testid="link-login">
              Login
            </a>
            <Link href="/demo">
              <Button className="btn-primary px-6 py-2 rounded-lg text-primary-foreground font-medium" data-testid="button-try-now">
                Try now
              </Button>
            </Link>
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
      <div className={`lg:hidden fixed top-24 right-0 bottom-0 w-64 bg-card border-l border-border transition-transform duration-300 ${
        isMenuOpen ? 'transform translate-x-0' : 'transform translate-x-full'
      }`} data-testid="nav-mobile">
        <nav className="p-6 space-y-6">
          <Link href="/sample" className="block text-muted-foreground hover:text-primary transition-colors" data-testid="nav-mobile-sample">Sample</Link>
          <Link href="/demo" className="block text-muted-foreground hover:text-primary transition-colors" data-testid="nav-mobile-demo">Demo</Link>
          <Link href="/careers" className="block text-muted-foreground hover:text-primary transition-colors" data-testid="nav-mobile-careers">Careers</Link>
          <Link href="/news" className="block text-muted-foreground hover:text-primary transition-colors" data-testid="nav-mobile-news">News</Link>
          <a href="https://app.bobyard.com/login" className="block text-muted-foreground hover:text-primary transition-colors mt-6" data-testid="nav-mobile-login">Login</a>
          <Link href="/demo">
            <Button className="btn-primary w-full px-6 py-2 rounded-lg text-primary-foreground font-medium mt-4" data-testid="button-mobile-try-now">
              Try now
            </Button>
          </Link>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-background/50 backdrop-blur-sm top-24"
          onClick={() => setIsMenuOpen(false)}
          data-testid="mobile-menu-overlay"
        />
      )}
    </header>
    </>
  );
}
