import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function Pricing() {
  const [isVisible, setIsVisible] = useState(false);
  const [inputs, setInputs] = useState({
    hoursPerTakeoff: 3,
    hourlyRate: 75,
    takeoffsPerMonth: 20
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

    const element = document.getElementById('pricing');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const updateInput = (field: keyof typeof inputs, value: number) => {
    setInputs(prev => ({ ...prev, [field]: value }));
  };

  // Calculations
  const currentMonthlyCost = inputs.hoursPerTakeoff * inputs.hourlyRate * inputs.takeoffsPerMonth;
  const currentYearlyCost = currentMonthlyCost * 12;
  
  // With Bobyard (85% time reduction)
  const bobyard_hours_per_takeoff = inputs.hoursPerTakeoff * 0.15; // 85% reduction
  const bobyardMonthlyCost = bobyard_hours_per_takeoff * inputs.hourlyRate * inputs.takeoffsPerMonth;
  const bobyardYearlyCost = bobyardMonthlyCost * 12;
  
  const monthlySavings = currentMonthlyCost - bobyardMonthlyCost;
  const yearlySavings = currentYearlyCost - bobyardYearlyCost;
  const timeSavedPerMonth = (inputs.hoursPerTakeoff - bobyard_hours_per_takeoff) * inputs.takeoffsPerMonth;

  return (
    <section 
      id="pricing"
      className="py-20 pricing-pattern" 
      data-testid="section-pricing"
    >
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-primary text-lg font-medium mb-4" data-testid="pricing-badge">ROI Calculator</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6" data-testid="pricing-title">
            <span className="gradient-text">Measure the returns</span><br />
            <span className="gradient-text">of smarter takeoffs</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="pricing-subtitle">
            Calculate how much time and money Bobyard can save your landscaping business
          </p>
        </div>

        {/* Calculator */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Input Section */}
          <div className={`transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="feature-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6" data-testid="calculator-inputs-title">Tell us about your current process</h3>
              
              <div className="space-y-6">
                {/* Hours per takeoff */}
                <div>
                  <label className="block text-sm font-medium mb-2" data-testid="hours-label">
                    Hours per takeoff (current process)
                  </label>
                  <div className="flex items-center space-x-4">
                    <input
                      type="range"
                      min="1"
                      max="10"
                      step="0.5"
                      value={inputs.hoursPerTakeoff}
                      onChange={(e) => updateInput('hoursPerTakeoff', parseFloat(e.target.value))}
                      className="flex-1"
                      data-testid="hours-slider"
                    />
                    <span className="w-16 text-right font-semibold" data-testid="hours-value">
                      {inputs.hoursPerTakeoff}h
                    </span>
                  </div>
                </div>

                {/* Hourly rate */}
                <div>
                  <label className="block text-sm font-medium mb-2" data-testid="rate-label">
                    Your hourly rate
                  </label>
                  <div className="flex items-center space-x-4">
                    <input
                      type="range"
                      min="25"
                      max="200"
                      step="5"
                      value={inputs.hourlyRate}
                      onChange={(e) => updateInput('hourlyRate', parseInt(e.target.value))}
                      className="flex-1"
                      data-testid="rate-slider"
                    />
                    <span className="w-16 text-right font-semibold" data-testid="rate-value">
                      ${inputs.hourlyRate}/h
                    </span>
                  </div>
                </div>

                {/* Takeoffs per month */}
                <div>
                  <label className="block text-sm font-medium mb-2" data-testid="takeoffs-label">
                    Takeoffs per month
                  </label>
                  <div className="flex items-center space-x-4">
                    <input
                      type="range"
                      min="5"
                      max="100"
                      step="5"
                      value={inputs.takeoffsPerMonth}
                      onChange={(e) => updateInput('takeoffsPerMonth', parseInt(e.target.value))}
                      className="flex-1"
                      data-testid="takeoffs-slider"
                    />
                    <span className="w-16 text-right font-semibold" data-testid="takeoffs-value">
                      {inputs.takeoffsPerMonth}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className={`transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="feature-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6" data-testid="calculator-results-title">Your potential savings with Bobyard</h3>
              <p className="text-sm text-muted-foreground mb-6">Based on 85% time reduction per takeoff</p>
              
              <div className="space-y-6">
                {/* Monthly savings */}
                <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                  <div className="text-3xl font-bold text-accent mb-1" data-testid="monthly-savings">
                    ${monthlySavings.toLocaleString()}
                  </div>
                  <div className="text-sm text-muted-foreground">Monthly savings</div>
                </div>

                {/* Yearly savings */}
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                  <div className="text-3xl font-bold text-green-600 mb-1" data-testid="yearly-savings">
                    ${yearlySavings.toLocaleString()}
                  </div>
                  <div className="text-sm text-muted-foreground">Yearly savings</div>
                </div>

                {/* Time saved */}
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                  <div className="text-3xl font-bold text-blue-600 mb-1" data-testid="time-saved">
                    {timeSavedPerMonth.toFixed(0)} hours
                  </div>
                  <div className="text-sm text-muted-foreground">Time saved per month</div>
                </div>

                {/* ROI Percentage */}
                <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                  <div className="text-3xl font-bold text-purple-600 mb-1" data-testid="roi-percentage">
                    {((monthlySavings / (monthlySavings + bobyardMonthlyCost)) * 100).toFixed(0)}%
                  </div>
                  <div className="text-sm text-muted-foreground">Monthly ROI</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-16 transition-all duration-700 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} data-testid="calculator-cta">
          <div className="feature-card p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4" data-testid="cta-title">Ready to start saving?</h3>
            <p className="text-xl text-muted-foreground mb-8" data-testid="cta-description">
              See these savings in action with a personalized demo using your own landscape plans
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-primary px-8 py-3 rounded-lg font-semibold" data-testid="button-book-demo">
                Book a Demo
              </Button>
              <Button 
                variant="outline" 
                className="px-8 py-3 rounded-lg font-semibold border-primary text-primary hover:bg-primary hover:text-white" 
                data-testid="button-sample-run"
              >
                Try Sample Run
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
