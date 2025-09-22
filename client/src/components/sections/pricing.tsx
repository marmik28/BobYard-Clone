import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function Pricing() {
  const [isVisible, setIsVisible] = useState(false);
  const [isYearly, setIsYearly] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const element = document.getElementById('pricing');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const toggleBilling = () => setIsYearly(!isYearly);

  const pricingPlans = [
    {
      name: "Basic",
      monthlyPrice: "$99.00",
      yearlyPrice: "$199.00",
      subtitle: "per user / month",
      features: [
        "Visualization of Task Progress",
        "Simple Collaboration Instruments", 
        "Features for Deadline Reminders",
        "An easy-to-use interface"
      ],
      checkmarkIcon: "https://cdn.prod.website-files.com/68a0b147a392c76e4c8c2aa5/68bfccfb36f1426d54b87865_checkbox-multiple-line.svg",
      featured: false
    },
    {
      name: "Standard",
      monthlyPrice: "$149.00",
      yearlyPrice: "$360.00",
      subtitle: "10 user / month",
      features: [
        "Visualization of Project Progress",
        "Visualizing Milestone Progress",
        "Visualization of Work Status",
        "Monitoring of Work Progress"
      ],
      checkmarkIcon: "https://cdn.prod.website-files.com/68a0b147a392c76e4c8c2aa5/68bfccfb260a2951235fe9f4_Vector.svg",
      featured: true
    },
    {
      name: "Premium", 
      monthlyPrice: "$299.00",
      yearlyPrice: "$700.00",
      subtitle: "100 user / month",
      features: [
        "Monitoring Workflow Status",
        "Tracking Activity Completion",
        "Task Journey Monitoring",
        "Task Flow Diagram"
      ],
      checkmarkIcon: "https://cdn.prod.website-files.com/68a0b147a392c76e4c8c2aa5/68bfccfb5136c159a04b3ad8_Vector-2.svg",
      featured: false
    }
  ];

  return (
    <section 
      id="pricing"
      className="py-20 bg-gradient-to-b from-background to-muted/20" 
      data-testid="section-pricing"
    >
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center justify-center mb-6" data-testid="pricing-icon">
            <img 
              src="https://cdn.prod.website-files.com/68a0b147a392c76e4c8c2aa5/68a0b424f8231c1a57863eda_icon-14.svg" 
              alt="Pricing Icon" 
              className="w-12 h-12"
            />
          </div>
          <p className="text-primary text-lg font-medium mb-4" data-testid="pricing-badge">Pricing Plan</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6" data-testid="pricing-title">
            <span className="gradient-text">Choose the plan that fits your</span><br />
            <span className="gradient-text">business needs</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="pricing-subtitle">
            Choose the best package based on your company's needs.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mt-8" data-testid="billing-toggle">
            <span className={`text-${isYearly ? 'muted-foreground' : 'foreground'}`}>Monthly</span>
            <button 
              className="relative w-12 h-6 bg-primary rounded-full"
              onClick={toggleBilling}
              data-testid="toggle-button"
            >
              <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${
                isYearly ? 'translate-x-6' : 'translate-x-0'
              }`} />
            </button>
            <span className={`text-${isYearly ? 'foreground' : 'muted-foreground'}`}>Yearly</span>
            <span className="bg-accent/20 text-accent px-2 py-1 rounded text-sm font-medium">20% OFF</span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div 
              key={plan.name}
              className={`pricing-card ${plan.featured ? 'featured' : ''} p-8 rounded-2xl transition-all duration-700 delay-${(index + 1) * 100} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              data-testid={`pricing-card-${plan.name.toLowerCase()}`}
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2" data-testid={`plan-name-${plan.name.toLowerCase()}`}>{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold" data-testid={`plan-price-${plan.name.toLowerCase()}`}>
                    {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                </div>
                <p className="text-muted-foreground" data-testid={`plan-subtitle-${plan.name.toLowerCase()}`}>{plan.subtitle}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3" data-testid={`feature-${plan.name.toLowerCase()}-${featureIndex}`}>
                    <img src={plan.checkmarkIcon} alt="Check" className="w-5 h-5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className="btn-primary w-full py-3 rounded-lg font-semibold mb-4" 
                data-testid={`button-trial-${plan.name.toLowerCase()}`}
              >
                Start 30 Days Free Trial
              </Button>

              <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground" data-testid={`security-note-${plan.name.toLowerCase()}`}>
                <img 
                  src="https://cdn.prod.website-files.com/68a0b147a392c76e4c8c2aa5/68b5439b9d546e2e95528339_icon-25.svg" 
                  alt="Security" 
                  className="w-4 h-4"
                />
                <span>No credit card required</span>
              </div>
            </div>
          ))}
        </div>

        {/* Demo CTA */}
        <div className={`text-center mt-16 transition-all duration-700 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} data-testid="demo-cta">
          <h3 className="text-2xl font-bold mb-4" data-testid="demo-title">Or you might want a quick demo?</h3>
          <p className="text-muted-foreground mb-8" data-testid="demo-description">
            Doing planning the with away. Rendering the are gleaning him be domed is will. That key the not about concept.
          </p>
          <Button className="btn-primary px-8 py-3 rounded-lg font-semibold" data-testid="button-book-demo">
            Book a free demo call
          </Button>
        </div>
      </div>
    </section>
  );
}
