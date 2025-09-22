import { useEffect, useState } from "react";

export default function FeaturesShowcase() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const element = document.getElementById('features-showcase');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="features-showcase"
      className="py-20 features-pattern" 
      data-testid="section-features-showcase"
    >
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-primary text-lg font-medium mb-4" data-testid="features-badge">Landscaping Takeoffs</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6" data-testid="features-title">
            <span className="gradient-text">AI-powered takeoff tools</span><br />
            <span className="gradient-text">built for landscaping pros</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="features-subtitle">
            Streamline your estimating process with intelligent measurement and quantity tools
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* AI Counting */}
          <div className={`feature-card p-8 rounded-2xl card-hover transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} data-testid="feature-ai-counting">
            <div className="flex items-start space-x-4 mb-6">
              <img 
                src="https://cdn.prod.website-files.com/68a0b147a392c76e4c8c2aa5/68a0b424f8231c1a57863ed5_icon-3.svg" 
                alt="AI Counting Icon" 
                className="w-12 h-12"
              />
              <div>
                <h3 className="text-2xl font-bold mb-2" data-testid="ai-counting-title">AI Object Counting</h3>
                <p className="text-muted-foreground" data-testid="ai-counting-description">
                  Let AI automatically count plants, fixtures, and landscape elements from your plans.
                </p>
              </div>
            </div>
            {/* AI Analysis mockup */}
            <div className="bg-card border border-border rounded-xl p-4 space-y-4" data-testid="ai-analysis-mockup">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold">AI Analysis Results</h4>
                <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs">Complete</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-muted rounded-lg p-3">
                  <h5 className="font-medium text-sm mb-1">Trees</h5>
                  <p className="text-2xl font-bold text-primary">47</p>
                </div>
                <div className="bg-muted rounded-lg p-3">
                  <h5 className="font-medium text-sm mb-1">Shrubs</h5>
                  <p className="text-2xl font-bold text-primary">123</p>
                </div>
              </div>
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                <p className="text-sm font-medium text-green-400">Analysis Complete</p>
                <p className="text-xs text-green-300/80 mt-1">Ready for export to estimate</p>
              </div>
            </div>
          </div>

          {/* Measurement Tools */}
          <div className={`feature-card p-8 rounded-2xl card-hover transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} data-testid="feature-measurement">
            <div className="flex items-start space-x-4 mb-6">
              <img 
                src="https://cdn.prod.website-files.com/68a0b147a392c76e4c8c2aa5/68b53962860902af726dea43_icon-21.svg" 
                alt="Measurement Icon" 
                className="w-12 h-12"
              />
              <div>
                <h3 className="text-2xl font-bold mb-2" data-testid="measurement-title">Smart Measurement Tools</h3>
                <p className="text-muted-foreground" data-testid="measurement-description">
                  Accurate area and linear measurements with snap-to-grid precision.
                </p>
              </div>
            </div>
            {/* Measurement mockup */}
            <div className="bg-card border border-border rounded-xl p-4 space-y-4" data-testid="measurement-mockup">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold">Measurement Tools</h4>
                <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs">Active</span>
              </div>
              <div className="space-y-3">
                <div className="bg-muted rounded-lg p-3">
                  <div className="flex justify-between items-center mb-2">
                    <h5 className="font-medium text-sm">Lawn Area</h5>
                    <span className="text-primary font-bold">2,847 sq ft</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <h5 className="font-medium text-sm">Planting Beds</h5>
                    <span className="text-primary font-bold">456 sq ft</span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="flex-1 bg-primary/20 text-primary rounded-lg px-3 py-2 text-sm">
                    Area Tool
                  </button>
                  <button className="flex-1 bg-muted rounded-lg px-3 py-2 text-sm">
                    Linear Tool
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Export & Estimating */}
          <div className={`feature-card p-8 rounded-2xl card-hover transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} data-testid="feature-export-estimating">
            <div className="flex items-start space-x-4 mb-6">
              <img 
                src="https://cdn.prod.website-files.com/68a0b147a392c76e4c8c2aa5/68b53a156d6e3cbbb6116c4e_icon-22.svg" 
                alt="Export Icon" 
                className="w-12 h-12"
              />
              <div>
                <h3 className="text-2xl font-bold mb-2" data-testid="export-title">Export & Estimating</h3>
                <p className="text-muted-foreground" data-testid="export-description">
                  Export quantities directly to your estimating software for accurate bids.
                </p>
              </div>
            </div>
            {/* Export mockup */}
            <div className="bg-card border border-border rounded-xl p-4" data-testid="export-mockup">
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src="https://cdn.prod.website-files.com/68a0b147a392c76e4c8c2aa5/68b6f2a6f7a435e955dc9cfe_icon-61.svg" 
                  alt="Export Icon" 
                  className="w-6 h-6"
                />
                <h4 className="font-semibold">Ready to Export</h4>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-2 bg-muted rounded-lg">
                  <span className="text-sm">Trees (3" caliper)</span>
                  <span className="text-sm font-medium">47 units</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-muted rounded-lg">
                  <span className="text-sm">Shrubs (5 gal)</span>
                  <span className="text-sm font-medium">123 units</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-muted rounded-lg">
                  <span className="text-sm">Sod Installation</span>
                  <span className="text-sm font-medium">2,847 sq ft</span>
                </div>
              </div>
            </div>
          </div>

          {/* Software Integrations */}
          <div className={`feature-card p-8 rounded-2xl card-hover transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} data-testid="feature-integrations">
            <div className="flex items-start space-x-4 mb-6">
              <img 
                src="https://cdn.prod.website-files.com/68a0b147a392c76e4c8c2aa5/68b53a152cf82cee90291eea_icon-23.svg" 
                alt="Integrations Icon" 
                className="w-12 h-12"
              />
              <div>
                <h3 className="text-2xl font-bold mb-2" data-testid="integrations-title">Software Integrations</h3>
                <p className="text-muted-foreground" data-testid="integrations-description">
                  Works with your existing estimating and design software
                </p>
              </div>
            </div>
            {/* Integrations grid */}
            <div className="grid grid-cols-3 gap-3" data-testid="integrations-grid">
              {[
                "https://cdn.prod.website-files.com/68a0b147a392c76e4c8c2aa5/68b92904516ea438fba6e510_icon-13.svg",
                "https://cdn.prod.website-files.com/68a0b147a392c76e4c8c2aa5/68b92904eafb4ff1baf5d5e7_icon-15.svg",
                "https://cdn.prod.website-files.com/68a0b147a392c76e4c8c2aa5/68b929046deaf0cc90c5aaa2_icon-18.svg",
                "https://cdn.prod.website-files.com/68a0b147a392c76e4c8c2aa5/68b92904a40047ddced0c387_icon-20.svg",
                "https://cdn.prod.website-files.com/68a0b147a392c76e4c8c2aa5/68b929048284b3ab05c2d0fb_icon-17.svg",
                "https://cdn.prod.website-files.com/68a0b147a392c76e4c8c2aa5/68b92904418aeeb65bf48819_icon-16.svg",
              ].map((icon, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-3 flex items-center justify-center">
                  <img src={icon} alt={`Integration ${index + 1}`} className="w-8 h-8" />
                </div>
              ))}
            </div>
          </div>

          {/* Team Collaboration */}
          <div className={`feature-card p-8 rounded-2xl card-hover lg:col-span-2 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} data-testid="feature-collaboration">
            <div className="flex items-start space-x-4 mb-6">
              <img 
                src="https://cdn.prod.website-files.com/68a0b147a392c76e4c8c2aa5/68b53a1597a47e5933ebf3a3_icon-24.svg" 
                alt="Collaboration Icon" 
                className="w-12 h-12"
              />
              <div>
                <h3 className="text-2xl font-bold mb-2" data-testid="collaboration-title">Team collaboration strategies</h3>
                <p className="text-muted-foreground" data-testid="collaboration-description">
                  Organize regular check-ins with your team.
                </p>
              </div>
            </div>
            {/* Collaboration mockup */}
            <div className="grid md:grid-cols-3 gap-4" data-testid="collaboration-grid">
              {[
                { title: "Integrated Outlook", icon: "https://cdn.prod.website-files.com/68a0b147a392c76e4c8c2aa5/68b855185e91607d83002a37_icon-12.svg" },
                { title: "Smart Collaboration", icon: "https://cdn.prod.website-files.com/68a0b147a392c76e4c8c2aa5/68b855185e91607d83002a37_icon-12.svg" },
                { title: "Shared Imagination", icon: "https://cdn.prod.website-files.com/68a0b147a392c76e4c8c2aa5/68b855185e91607d83002a37_icon-12.svg" },
              ].map((item, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-4 text-center">
                  <img src={item.icon} alt={item.title} className="w-8 h-8 mx-auto mb-3" />
                  <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
