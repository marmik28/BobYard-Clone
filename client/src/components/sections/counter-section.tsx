import { useEffect, useState } from "react";

export default function CounterSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    hours_saved: 0,
    accuracy_rate: 0,
    projects_completed: 0,
    cost_savings: 0
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const element = document.getElementById('counter-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      // Animate counters
      const duration = 2000;
      const targets = {
        hours_saved: 15000,
        accuracy_rate: 98,
        projects_completed: 2500,
        cost_savings: 500
      };

      const startTime = Date.now();
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        setCounts({
          hours_saved: Math.floor(targets.hours_saved * progress),
          accuracy_rate: Math.floor(targets.accuracy_rate * progress),
          projects_completed: Math.floor(targets.projects_completed * progress),
          cost_savings: Math.floor(targets.cost_savings * progress)
        });

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      animate();
    }
  }, [isVisible]);

  return (
    <section 
      id="counter-section"
      className="py-20 overview-pattern" 
      data-testid="section-counter"
    >
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-primary text-lg font-medium mb-4" data-testid="counter-badge">Focus on what matters</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6" data-testid="counter-title">
            <span className="gradient-text">The numbers speak</span><br />
            <span className="gradient-text">for themselves</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="counter-subtitle">
            See the measurable impact Bobyard has made for landscaping professionals across the industry
          </p>
        </div>

        {/* Counter Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Hours Saved */}
          <div className={`text-center transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} data-testid="counter-hours">
            <div className="feature-card p-8 rounded-2xl card-hover">
              <div className="text-5xl font-bold gradient-text mb-4" data-testid="hours-count">
                {counts.hours_saved.toLocaleString()}+
              </div>
              <h3 className="text-xl font-semibold mb-2" data-testid="hours-title">Hours Saved</h3>
              <p className="text-muted-foreground" data-testid="hours-description">
                Total time saved across all takeoff projects using Bobyard's AI tools
              </p>
            </div>
          </div>

          {/* Accuracy Rate */}
          <div className={`text-center transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} data-testid="counter-accuracy">
            <div className="feature-card p-8 rounded-2xl card-hover">
              <div className="text-5xl font-bold gradient-text mb-4" data-testid="accuracy-count">
                {counts.accuracy_rate}%
              </div>
              <h3 className="text-xl font-semibold mb-2" data-testid="accuracy-title">Accuracy Rate</h3>
              <p className="text-muted-foreground" data-testid="accuracy-description">
                Average accuracy of AI-powered plant counting and measurements
              </p>
            </div>
          </div>

          {/* Projects Completed */}
          <div className={`text-center transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} data-testid="counter-projects">
            <div className="feature-card p-8 rounded-2xl card-hover">
              <div className="text-5xl font-bold gradient-text mb-4" data-testid="projects-count">
                {counts.projects_completed.toLocaleString()}+
              </div>
              <h3 className="text-xl font-semibold mb-2" data-testid="projects-title">Projects Completed</h3>
              <p className="text-muted-foreground" data-testid="projects-description">
                Successful takeoff projects processed through the platform
              </p>
            </div>
          </div>

          {/* Cost Savings */}
          <div className={`text-center transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} data-testid="counter-savings">
            <div className="feature-card p-8 rounded-2xl card-hover">
              <div className="text-5xl font-bold gradient-text mb-4" data-testid="savings-count">
                ${counts.cost_savings.toLocaleString()}K+
              </div>
              <h3 className="text-xl font-semibold mb-2" data-testid="savings-title">Cost Savings</h3>
              <p className="text-muted-foreground" data-testid="savings-description">
                Total operational costs saved by landscaping companies
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}