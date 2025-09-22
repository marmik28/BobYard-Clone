import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="hero-pattern grid-pattern pt-32 pb-20 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-6xl mx-auto text-center">
          {/* Icon */}
          <div className={`inline-flex items-center justify-center mb-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} data-testid="hero-icon">
            <img 
              src="https://cdn.prod.website-files.com/68a0b147a392c76e4c8c2aa5/68a0b424f8231c1a57863ec6_icon-1.svg" 
              alt="Smart AI Automation" 
              className="w-16 h-16 animate-float"
            />
          </div>

          {/* Badge */}
          <div className={`inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-8 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} data-testid="hero-badge">
            Smart AI Automation
          </div>

          {/* Title */}
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} data-testid="hero-title">
            <span className="gradient-text">Make your workflow</span><br />
            <span className="gradient-text">smoother than ever</span>
          </h1>

          {/* Subtitle */}
          <p className={`text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} data-testid="hero-subtitle">
            Unlock the power of automation with our cutting-edge tools designed to streamline your workflow.
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} data-testid="hero-cta-buttons">
            <Button className="btn-primary px-8 py-4 rounded-lg text-primary-foreground font-semibold text-lg" data-testid="button-get-started">
              Get Started
            </Button>
            <Button 
              variant="outline" 
              className="px-8 py-4 rounded-lg border border-border text-foreground font-semibold text-lg hover:bg-muted transition-colors"
              data-testid="button-book-demo"
            >
              Book a demo
            </Button>
          </div>

          {/* Hero Image */}
          <div className={`relative transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} data-testid="hero-image">
            <img 
              src="https://cdn.prod.website-files.com/68a0b147a392c76e4c8c2aa5/68b537872bb82a30cbc9912c_3dfdc36491acd79fc7efa6647179177e_thumb-1.webp" 
              alt="Exoraz Dashboard" 
              className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl animate-glow-pulse"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
