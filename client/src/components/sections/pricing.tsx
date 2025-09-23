import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function Pricing() {
  const [isVisible, setIsVisible] = useState(false);
  const [inputs, setInputs] = useState({
    numberOfEstimators: 5,
    estimatorSalary: 80000,
    weeklyTakeoffsPerEstimator: 5,
    timePerTakeoff: 8,
    winRate: 35,
    averageJobSize: 100000
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
  const totalEstimatorCost = inputs.numberOfEstimators * inputs.estimatorSalary;
  const hourlyEstimatorRate = inputs.estimatorSalary / (52 * 40); // Weekly hours
  const annualTakeoffs = inputs.numberOfEstimators * inputs.weeklyTakeoffsPerEstimator * 52;
  const currentAnnualHours = annualTakeoffs * inputs.timePerTakeoff;
  
  // With Bobyard (85% time reduction)
  const timeReduction = 0.85;
  const savedHours = currentAnnualHours * timeReduction;
  const costSavings = savedHours * hourlyEstimatorRate;
  
  // Revenue calculations
  const currentWonJobs = annualTakeoffs * (inputs.winRate / 100);
  const additionalTakeoffs = savedHours / inputs.timePerTakeoff;
  const additionalWonJobs = additionalTakeoffs * (inputs.winRate / 100);
  const revenueLift = additionalWonJobs * inputs.averageJobSize;
  const revenueImpact = (revenueLift / (currentWonJobs * inputs.averageJobSize)) * 100;
  
  const totalFinancialImpact = costSavings + revenueLift;
  const roi = (totalFinancialImpact / totalEstimatorCost) * 100;

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
                {/* Number of Estimators */}
                <div>
                  <label className="block text-sm font-medium mb-2" data-testid="estimators-label">
                    Number of Estimators
                  </label>
                  <div className="flex items-center space-x-4">
                    <input
                      type="range"
                      min="1"
                      max="20"
                      step="1"
                      value={inputs.numberOfEstimators}
                      onChange={(e) => updateInput('numberOfEstimators', parseInt(e.target.value))}
                      className="flex-1"
                      data-testid="estimators-slider"
                    />
                    <span className="w-16 text-right font-semibold" data-testid="estimators-value">
                      {inputs.numberOfEstimators}
                    </span>
                  </div>
                </div>

                {/* Estimator Salary */}
                <div>
                  <label className="block text-sm font-medium mb-2" data-testid="salary-label">
                    Estimator Salary
                  </label>
                  <div className="flex items-center space-x-4">
                    <input
                      type="range"
                      min="40000"
                      max="150000"
                      step="5000"
                      value={inputs.estimatorSalary}
                      onChange={(e) => updateInput('estimatorSalary', parseInt(e.target.value))}
                      className="flex-1"
                      data-testid="salary-slider"
                    />
                    <span className="w-24 text-right font-semibold" data-testid="salary-value">
                      ${inputs.estimatorSalary.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Weekly Takeoffs per Estimator */}
                <div>
                  <label className="block text-sm font-medium mb-2" data-testid="weekly-takeoffs-label">
                    Weekly Takeoffs per Estimator
                  </label>
                  <div className="flex items-center space-x-4">
                    <input
                      type="range"
                      min="1"
                      max="20"
                      step="1"
                      value={inputs.weeklyTakeoffsPerEstimator}
                      onChange={(e) => updateInput('weeklyTakeoffsPerEstimator', parseInt(e.target.value))}
                      className="flex-1"
                      data-testid="weekly-takeoffs-slider"
                    />
                    <span className="w-16 text-right font-semibold" data-testid="weekly-takeoffs-value">
                      {inputs.weeklyTakeoffsPerEstimator}
                    </span>
                  </div>
                </div>

                {/* Time per Takeoff */}
                <div>
                  <label className="block text-sm font-medium mb-2" data-testid="time-takeoff-label">
                    Time per Takeoff
                  </label>
                  <div className="flex items-center space-x-4">
                    <input
                      type="range"
                      min="1"
                      max="20"
                      step="1"
                      value={inputs.timePerTakeoff}
                      onChange={(e) => updateInput('timePerTakeoff', parseInt(e.target.value))}
                      className="flex-1"
                      data-testid="time-takeoff-slider"
                    />
                    <span className="w-16 text-right font-semibold" data-testid="time-takeoff-value">
                      {inputs.timePerTakeoff} hrs
                    </span>
                  </div>
                </div>

                {/* Win Rate */}
                <div>
                  <label className="block text-sm font-medium mb-2" data-testid="win-rate-label">
                    Win Rate
                  </label>
                  <div className="flex items-center space-x-4">
                    <input
                      type="range"
                      min="10"
                      max="80"
                      step="5"
                      value={inputs.winRate}
                      onChange={(e) => updateInput('winRate', parseInt(e.target.value))}
                      className="flex-1"
                      data-testid="win-rate-slider"
                    />
                    <span className="w-16 text-right font-semibold" data-testid="win-rate-value">
                      {inputs.winRate}%
                    </span>
                  </div>
                </div>

                {/* Average Job Size */}
                <div>
                  <label className="block text-sm font-medium mb-2" data-testid="job-size-label">
                    Average Job Size
                  </label>
                  <div className="flex items-center space-x-4">
                    <input
                      type="range"
                      min="10000"
                      max="500000"
                      step="10000"
                      value={inputs.averageJobSize}
                      onChange={(e) => updateInput('averageJobSize', parseInt(e.target.value))}
                      className="flex-1"
                      data-testid="job-size-slider"
                    />
                    <span className="w-24 text-right font-semibold" data-testid="job-size-value">
                      ${inputs.averageJobSize.toLocaleString()}
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
              <h3 className="text-2xl font-bold mb-6" data-testid="calculator-results-title">Your potential returns with Bobyard</h3>
              <p className="text-sm text-muted-foreground mb-6">Based on 85% time reduction per takeoff</p>
              
              <div className="grid md:grid-cols-3 gap-6">
                {/* Savings Section */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-accent" data-testid="savings-title">Savings</h4>
                  
                  <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                    <div className="text-2xl font-bold text-accent mb-1" data-testid="time-savings">
                      {savedHours.toLocaleString()} hrs
                    </div>
                    <div className="text-sm text-muted-foreground">Time Savings</div>
                  </div>

                  <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                    <div className="text-2xl font-bold text-accent mb-1" data-testid="cost-savings">
                      ${costSavings.toLocaleString()}
                    </div>
                    <div className="text-sm text-muted-foreground">Cost Savings</div>
                  </div>
                </div>

                {/* Revenue Section */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-green-600" data-testid="revenue-title">Revenue</h4>
                  
                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-600 mb-1" data-testid="revenue-impact">
                      {revenueImpact.toFixed(0)}%
                    </div>
                    <div className="text-sm text-muted-foreground">Revenue Impact</div>
                  </div>

                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-600 mb-1" data-testid="revenue-lift">
                      ${revenueLift.toLocaleString()}
                    </div>
                    <div className="text-sm text-muted-foreground">Revenue Lift</div>
                  </div>
                </div>

                {/* Business Impact Section */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-blue-600" data-testid="impact-title">Business Impact</h4>
                  
                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-600 mb-1" data-testid="total-impact">
                      ${totalFinancialImpact.toLocaleString()}
                    </div>
                    <div className="text-sm text-muted-foreground">Total Financial Impact</div>
                  </div>

                  <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                    <div className="text-2xl font-bold text-purple-600 mb-1" data-testid="roi-percentage">
                      {roi.toLocaleString()}%
                    </div>
                    <div className="text-sm text-muted-foreground">ROI</div>
                  </div>
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
