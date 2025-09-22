import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="hero-pattern grid-pattern pt-40 pb-20 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-6xl mx-auto text-center">
          {/* Alert Badge */}
          <div className={`inline-flex items-center px-4 py-2 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-400 text-sm font-medium mb-8 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} data-testid="hero-badge">
            Different trade? Join waitlist!
          </div>

          {/* Title */}
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} data-testid="hero-title">
            <span className="gradient-text">AI Landscaping</span><br />
            <span className="gradient-text">Takeoffs</span>
          </h1>

          {/* Subtitle */}
          <p className={`text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} data-testid="hero-subtitle">
            Bobyard is a modern takeoff and estimating platform supercharged with AI for landscaping pros.
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} data-testid="hero-cta-buttons">
            <Button className="btn-primary px-8 py-4 rounded-lg text-primary-foreground font-semibold text-lg" data-testid="button-book-demo">
              Book demo
            </Button>
            <Button 
              variant="outline" 
              className="px-8 py-4 rounded-lg border border-border text-foreground font-semibold text-lg hover:bg-muted transition-colors"
              data-testid="button-sample-run"
            >
              Sample run
            </Button>
          </div>

          {/* Hero Image */}
          <div className={`relative transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} data-testid="hero-image">
            <img 
              src="https://bobyard-public-images.s3.us-west-2.amazonaws.com/CountDemo-new-ezgif.com-speed.gif" 
              alt="Bobyard Demo - AI Landscaping Takeoffs" 
              className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl animate-glow-pulse"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
