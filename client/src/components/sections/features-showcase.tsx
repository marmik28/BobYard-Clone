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
      className="py-20 bg-gradient-to-b from-background to-muted/20" 
      data-testid="section-features-showcase"
    >
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center justify-center mb-6" data-testid="features-icon">
            <img 
              src="https://cdn.prod.website-files.com/68a0b147a392c76e4c8c2aa5/68a0b424f8231c1a57863ed4_icon-2.svg" 
              alt="Features Icon" 
              className="w-12 h-12"
            />
          </div>
          <p className="text-primary text-lg font-medium mb-4" data-testid="features-badge">Our Features</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6" data-testid="features-title">
            <span className="gradient-text">Explore our innovative tools</span><br />
            <span className="gradient-text">crafted to drive your success.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="features-subtitle">
            Discover how our innovative solution elevate your business
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Dynamic Chat Interface */}
          <div className={`feature-card p-8 rounded-2xl card-hover transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} data-testid="feature-chat-interface">
            <div className="flex items-start space-x-4 mb-6">
              <img 
                src="https://cdn.prod.website-files.com/68a0b147a392c76e4c8c2aa5/68a0b424f8231c1a57863ed5_icon-3.svg" 
                alt="Chat Icon" 
                className="w-12 h-12"
              />
              <div>
                <h3 className="text-2xl font-bold mb-2" data-testid="chat-title">Dynamic chat interface</h3>
                <p className="text-muted-foreground" data-testid="chat-description">
                  The Al chatbot evolves, delivering quicker and more intelligent responses.
                </p>
              </div>
            </div>
            {/* Chat mockup */}
            <div className="bg-card border border-border rounded-xl p-4 space-y-4" data-testid="chat-mockup">
              <div className="flex items-start space-x-3">
                <img 
                  src="https://cdn.prod.website-files.com/68a0b147a392c76e4c8c2aa5/68b84978c5b5ad65e15ac2b2_icon-9.svg" 
                  alt="AI Avatar" 
                  className="w-8 h-8 rounded-full"
                />
                <div className="bg-muted rounded-lg p-3 max-w-xs">
                  <p className="text-sm">Greetings! I'm Al, your helpful AI companion. How may I help you today?</p>
                </div>
              </div>
              <div className="flex items-center justify-end">
                <div className="bg-primary rounded-lg p-3 max-w-xs">
                  <p className="text-sm text-primary-foreground">Good morning</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 pt-2">
                <button className="flex items-center space-x-2 bg-muted rounded-lg px-3 py-2 text-sm" data-testid="button-upload-file">
                  <img 
                    src="https://cdn.prod.website-files.com/68a0b147a392c76e4c8c2aa5/68b84b21465177afdfd72ee7_icon-10.svg" 
                    alt="Upload" 
                    className="w-4 h-4"
                  />
                  <span>Upload File</span>
                </button>
                <button className="bg-primary rounded-lg px-3 py-2 text-sm text-primary-foreground" data-testid="button-save-prompt">
                  Save Prompt
                </button>
              </div>
            </div>
          </div>

          {/* Citation Functionality */}
          <div className={`feature-card p-8 rounded-2xl card-hover transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} data-testid="feature-citation">
            <div className="flex items-start space-x-4 mb-6">
              <img 
                src="https://cdn.prod.website-files.com/68a0b147a392c76e4c8c2aa5/68b53962860902af726dea43_icon-21.svg" 
                alt="Citation Icon" 
                className="w-12 h-12"
              />
              <div>
                <h3 className="text-2xl font-bold mb-2" data-testid="citation-title">Intelligent citation functionality</h3>
                <p className="text-muted-foreground" data-testid="citation-description">
                  Effortlessly create accurate and current citations.
                </p>
              </div>
            </div>
            {/* Citation mockup */}
            <div className="bg-card border border-border rounded-xl p-4 space-y-4" data-testid="citation-mockup">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold">Smart Recommendations</h4>
                <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs">New Models</span>
              </div>
              <div className="space-y-3">
                <div className="bg-muted rounded-lg p-3">
                  <h5 className="font-medium text-sm mb-1">Large Language Models Built on Transformer</h5>
                  <p className="text-xs text-muted-foreground">
                    Introducing Jamie Lin, an ambitious PhD student at Stanford University, poised to finish their studies by 2026. Jamie is passionate
                  </p>
                </div>
                <button className="flex items-center space-x-2 text-primary text-sm" data-testid="button-ai-ideas">
                  <img 
                    src="https://cdn.prod.website-files.com/68a0b147a392c76e4c8c2aa5/68b84ea4c5b5ad65e15d3d95_icon-11.svg" 
                    alt="AI Ideas" 
                    className="w-4 h-4"
                  />
                  <span>AI Ideas</span>
                </button>
              </div>
            </div>
          </div>

          {/* Time Optimization */}
          <div className={`feature-card p-8 rounded-2xl card-hover transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} data-testid="feature-time-optimization">
            <div className="flex items-start space-x-4 mb-6">
              <img 
                src="https://cdn.prod.website-files.com/68a0b147a392c76e4c8c2aa5/68b53a156d6e3cbbb6116c4e_icon-22.svg" 
                alt="Time Icon" 
                className="w-12 h-12"
              />
              <div>
                <h3 className="text-2xl font-bold mb-2" data-testid="time-title">Streamlined time optimization</h3>
                <p className="text-muted-foreground" data-testid="time-description">
                  Utilize AI to effectively prioritize your tasks.
                </p>
              </div>
            </div>
            {/* Time allocation mockup */}
            <div className="bg-card border border-border rounded-xl p-4" data-testid="time-mockup">
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src="https://cdn.prod.website-files.com/68a0b147a392c76e4c8c2aa5/68b6f2a6f7a435e955dc9cfe_icon-61.svg" 
                  alt="Time Icon" 
                  className="w-6 h-6"
                />
                <h4 className="font-semibold">Time Allocation</h4>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-2 bg-muted rounded-lg">
                  <span className="text-sm">Conferences</span>
                  <span className="text-sm font-medium">82 Minutes</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-muted rounded-lg">
                  <span className="text-sm">Self-Care</span>
                  <span className="text-sm font-medium">45 Minutes</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-muted rounded-lg">
                  <span className="text-sm">Stuck</span>
                  <span className="text-sm font-medium">56 Minutes</span>
                </div>
              </div>
            </div>
          </div>

          {/* Integrations */}
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
                <h3 className="text-2xl font-bold mb-2" data-testid="integrations-title">Effortless integrations</h3>
                <p className="text-muted-foreground" data-testid="integrations-description">
                  AI-driven insights enhance productivity
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
