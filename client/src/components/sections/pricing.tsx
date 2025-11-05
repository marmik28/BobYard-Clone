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
    averageJobSize: 100000,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );
    const el = document.getElementById("pricing");
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const updateInput = (field: keyof typeof inputs, value: number) =>
    setInputs((prev) => ({ ...prev, [field]: value }));

  // ---------------------
  // ROI Calculations
  // ---------------------
  const totalEstimatorCost = inputs.numberOfEstimators * inputs.estimatorSalary;
  const hourlyEstimatorRate = inputs.estimatorSalary / (52 * 40);
  const annualTakeoffs =
    inputs.numberOfEstimators * inputs.weeklyTakeoffsPerEstimator * 52;
  const currentAnnualHours = annualTakeoffs * inputs.timePerTakeoff;

  const timeReduction = 0.85;
  const savedHours = currentAnnualHours * timeReduction;
  const costSavings = savedHours * hourlyEstimatorRate;

  const currentWonJobs = annualTakeoffs * (inputs.winRate / 100);
  const additionalTakeoffs = savedHours / inputs.timePerTakeoff;
  const additionalWonJobs = additionalTakeoffs * (inputs.winRate / 100);
  const revenueLift = additionalWonJobs * inputs.averageJobSize;

  const revenueImpact =
    (revenueLift / (currentWonJobs * inputs.averageJobSize)) * 100;
  const totalFinancialImpact = costSavings + revenueLift;
  const roi = (totalFinancialImpact / totalEstimatorCost) * 100;

  // ---------------------

  return (
    <section
      id="pricing"
      className="py-20 relative overflow-hidden bg-gradient-to-b from-white to-slate-50"
    >
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-primary text-lg font-medium mb-2">ROI Calculator</p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-3">
            <span className="gradient-text">Measure your financial impact</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how much time, labor cost, and new revenue Bobyard generates for
            your landscaping business.
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-10 items-stretch max-w-7xl mx-auto">
          {/* ---------------- INPUTS CARD ---------------- */}
          <div
            className={`transition-all duration-700 delay-75 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="rounded-3xl bg-white/60 backdrop-blur-xl border border-slate-200 shadow-xl p-6 h-full">
              <h3 className="text-xl font-bold mb-4 gradient-text">Your current process</h3>

              <div className="space-y-6">
                {[
                  {
                    label: "Number of Estimators",
                    field: "numberOfEstimators",
                    min: 1,
                    max: 20,
                    step: 1,
                  },
                  {
                    label: "Estimator Salary",
                    field: "estimatorSalary",
                    min: 40000,
                    max: 150000,
                    step: 5000,
                    prefix: "$",
                  },
                  {
                    label: "Weekly Takeoffs per Estimator",
                    field: "weeklyTakeoffsPerEstimator",
                    min: 1,
                    max: 20,
                    step: 1,
                  },
                  {
                    label: "Time per Takeoff",
                    field: "timePerTakeoff",
                    min: 1,
                    max: 20,
                    step: 1,
                    suffix: " hrs",
                  },
                  {
                    label: "Win Rate",
                    field: "winRate",
                    min: 10,
                    max: 80,
                    step: 5,
                    suffix: "%",
                  },
                  {
                    label: "Average Job Size",
                    field: "averageJobSize",
                    min: 10000,
                    max: 500000,
                    step: 10000,
                    prefix: "$",
                  },
                ].map((item, i) => (
                  <div key={i}>
                    <label className="block text-sm font-medium mb-2">
                      <span className="gradient-text">{item.label}</span>
                    </label>

                    <div className="flex gradient-text items-center space-x-4">
                      <input
                        type="range"
                        min={item.min}
                        max={item.max}
                        step={item.step}
                        value={inputs[item.field as keyof typeof inputs]}
                        onChange={(e) =>
                          updateInput(
                            item.field as keyof typeof inputs,
                            parseInt(e.target.value)
                          )
                        }
                        className="flex-1"
                      />

                      <span className="font-semibold w-20 text-right">
                        {item.prefix}
                        {inputs[item.field as keyof typeof inputs].toLocaleString()}
                        {item.suffix}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ---------------- RESULTS CARD ---------------- */}
          <div
            className={`transition-all duration-700 delay-150 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="rounded-3xl bg-white/70 backdrop-blur-xl border border-slate-200 shadow-xl p-6 h-full">
              <h3 className="text-xl font-bold mb-4 gradient-text">Your potential returns</h3>
              <p className="text-muted-foreground text-sm mb-6 ">
                Based on 85% time reduction
              </p>

              <div className="space-y-8">
                {/* Savings */}
                <div>
                  <h4 className="text-lg font-semibold text-purple-600 mb-3">
                    Savings
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20">
                      <div className="text-2xl font-bold text-purple-600 mb-1">
                        {savedHours.toLocaleString()} hrs
                      </div>
                      <p className="text-sm text-muted-foreground">Time Saved</p>
                    </div>

                    <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20">
                      <div className="text-2xl font-bold text-purple-600 mb-1">
                        ${Math.round(costSavings).toLocaleString()}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Labor Savings
                      </p>
                    </div>
                  </div>
                </div>

                {/* Revenue */}
                <div>
                  <h4 className="text-lg font-semibold text-green-600 mb-3">
                    Revenue
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                      <div className="text-2xl font-bold text-green-600 mb-1">
                        {Math.round(revenueImpact)}%
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Revenue Impact
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                      <div className="text-2xl font-bold text-green-600 mb-1">
                        ${Math.round(revenueLift).toLocaleString()}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Revenue Lift
                      </p>
                    </div>
                  </div>
                </div>

                {/* Business Impact */}
                <div>
                  <h4 className="text-lg font-semibold text-blue-600 mb-3">
                    Business Impact
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                      <div className="text-2xl font-bold text-blue-600 mb-1">
                        ${Math.round(totalFinancialImpact).toLocaleString()}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Total Impact
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                      <div className="text-2xl font-bold text-blue-600 mb-1">
                        {Math.round(roi).toLocaleString()}%
                      </div>
                      <p className="text-sm text-muted-foreground">ROI</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-16 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="rounded-3xl bg-white/70 backdrop-blur-xl shadow-xl border border-slate-200 p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-3">
              Ready to see your ROI in action?
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Get a personalized walkthrough using your real plans and numbers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-primary px-8 py-3 text-lg rounded-lg">
                Book a Demo
              </Button>
              <Button
                variant="outline"
                className="px-8 py-3 text-lg rounded-lg border-primary text-primary hover:bg-primary hover:text-white"
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
