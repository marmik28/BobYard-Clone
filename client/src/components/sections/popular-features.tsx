import { useEffect, useState } from "react";

export default function PopularFeatures() {
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

    const element = document.getElementById('popular-features');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: "https://cdn.prod.website-files.com/68a0b147a392c76e4c8c2aa5/68a0b424f8231c1a57863ecf_icon-7.svg",
      title: "Analytics for prediction",
      description: "To predict future patterns and behavio, use previous data.",
    },
    {
      icon: "https://cdn.prod.website-files.com/68a0b147a392c76e4c8c2aa5/68a0b424f8231c1a57863ed1_icon-8.svg",
      title: "Information visualization",
      description: "Transform intricate data into understa, captivating images.",
    },
    {
      icon: "https://cdn.prod.website-files.com/68a0b147a392c76e4c8c2aa5/68a0b424f8231c1a57863ed0_icon-9.svg",
      title: "Integrating machine learning",
      description: "Use data-driven learning algorithms to enhance decision-making.",
    },
    {
      icon: "https://cdn.prod.website-files.com/68a0b147a392c76e4c8c2aa5/68a0b424f8231c1a57863ed7_icon-10.svg",
      title: "Reporting automation",
      description: "On demand, create reports that highlig important metrics and conclusions.",
    },
    {
      icon: "https://cdn.prod.website-files.com/68a0b147a392c76e4c8c2aa5/68a0b424f8231c1a57863ed8_icon-11.svg",
      title: "Monitoring user activity",
      description: "Keep an eye on interactions to trends and enhance the user experience.",
    },
    {
      icon: "https://cdn.prod.website-files.com/68a0b147a392c76e4c8c2aa5/68a0b424f8231c1a57863ed9_icon-13.svg",
      title: "Analytics for prediction",
      description: "Create systems that can increase with the volume data without.",
    },
  ];

  return (
    <section 
      id="popular-features"
      className="py-20 bg-gradient-to-b from-background to-muted/20" 
      data-testid="section-popular-features"
    >
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center justify-center mb-6" data-testid="popular-features-icon">
            <img 
              src="https://cdn.prod.website-files.com/68a0b147a392c76e4c8c2aa5/68a0b424f8231c1a57863ed4_icon-2.svg" 
              alt="Popular Features Icon" 
              className="w-12 h-12"
            />
          </div>
          <p className="text-primary text-lg font-medium mb-4" data-testid="popular-features-badge">Popular Features</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6" data-testid="popular-features-title">
            <span className="gradient-text">Check out our cutting-edge</span><br />
            <span className="gradient-text">success resources</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="popular-features-subtitle">
            Resources for the problems of today. Learn how we can assist you, whether you are a startup or a major corporation.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`feature-card p-8 rounded-2xl card-hover text-center transition-all duration-700 delay-${(index + 1) * 100} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              data-testid={`feature-card-${index + 1}`}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 border border-primary/20 rounded-2xl mb-6">
                <img src={feature.icon} alt="Feature Icon" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4" data-testid={`feature-title-${index + 1}`}>{feature.title}</h3>
              <p className="text-muted-foreground" data-testid={`feature-description-${index + 1}`}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
