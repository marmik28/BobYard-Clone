import { useEffect, useState } from "react";
import productOverview from "@assets/image_1758726932492.png";

export default function HowItWorks() {
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

    const element = document.getElementById('how-it-works');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      icon: "https://cdn.prod.website-files.com/68a0b147a392c76e4c8c2aa5/68a0b424f8231c1a57863ecd_icon-4.svg",
      title: "Upload Your Plans",
      description: "Simply upload your landscape plans, blueprints, or satellite images to get started.",
    },
    {
      icon: "https://cdn.prod.website-files.com/68a0b147a392c76e4c8c2aa5/68a0b424f8231c1a57863ece_icon-5.svg",
      title: "AI Analyzes & Measures",
      description: "Our AI automatically identifies plants, measures areas, and counts landscape elements with precision.",
    },
    {
      icon: "https://cdn.prod.website-files.com/68a0b147a392c76e4c8c2aa5/68a0b424f8231c1a57863ecc_icon-6.svg",
      title: "Export to Estimates",
      description: "Export accurate quantities directly to your estimating software for faster, more competitive bids.",
    },
  ];

  return (
    <section 
      id="how-it-works"
      className="py-20 aurora-glow" 
      data-testid="section-how-it-works"
    >
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6" data-testid="how-it-works-title">
            <span className="gradient-text">Simple 3-step process</span><br />
            <span className="gradient-text">for accurate takeoffs</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="how-it-works-subtitle">
            From plan upload to accurate estimate in minutes, not hours
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`text-center transition-all duration-700 delay-${(index + 1) * 100} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              data-testid={`step-${index + 1}`}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 border border-primary/20 rounded-2xl mb-6">
                <img src={step.icon} alt="Step Icon" className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4" data-testid={`step-title-${index + 1}`}>{step.title}</h3>
              <p className="text-muted-foreground" data-testid={`step-description-${index + 1}`}>{step.description}</p>
            </div>
          ))}
        </div>

        {/* Featured Image */}
        <div className={`text-center transition-all duration-700 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} data-testid="how-it-works-image">
          <img 
            src={productOverview} 
            alt="Bobyard Landscaping Takeoff Process" 
            className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
