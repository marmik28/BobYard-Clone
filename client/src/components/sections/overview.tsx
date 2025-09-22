import { useEffect, useState } from "react";

export default function Overview() {
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

    const element = document.getElementById('overview');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="overview"
      className="py-20 overview-pattern" 
      data-testid="section-overview"
    >
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-primary text-lg font-medium mb-4" data-testid="overview-badge">Overview</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight" data-testid="overview-title">
            <span className="gradient-text">Learn about our success-oriented tools</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mt-6" data-testid="overview-subtitle">
            Look for ways to improve the way your firm operates.
          </p>
        </div>

        {/* Overview Items */}
        <div className="space-y-20 max-w-6xl mx-auto">
          {/* Overview 1 */}
          <div className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} data-testid="overview-item-1">
            <div>
              <h3 className="text-3xl font-bold mb-6" data-testid="overview-1-title">Your strategy for boosting productivity</h3>
              <p className="text-muted-foreground mb-8" data-testid="overview-1-description">
                Making plans for the getaway. He will be rendered gleaning if he does this. The not-about-concept is crucial.
              </p>
            </div>
            <div>
              <img 
                src="https://cdn.prod.website-files.com/68a0b147a392c76e4c8c2aa5/68b53c6fb392bbb3644f17d3_6ebd4002c8ca7c186cba8e29da0c530a_thumb-2.webp" 
                alt="Productivity Strategy" 
                className="w-full rounded-2xl shadow-xl"
                data-testid="overview-1-image"
              />
            </div>
          </div>

          {/* Overview 2 */}
          <div className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} data-testid="overview-item-2">
            <div className="lg:order-2">
              <h3 className="text-3xl font-bold mb-6" data-testid="overview-2-title">Strategies for increasing efficiency and output</h3>
              <p className="text-muted-foreground mb-8" data-testid="overview-2-description">
                Even the necessary limited feedback with demanding offers. and the choice to conceal the key and money.
              </p>
            </div>
            <div className="lg:order-1">
              <img 
                src="https://cdn.prod.website-files.com/68a0b147a392c76e4c8c2aa5/68b53da9cbebc1cd8d7a973f_2e99716ec1d86915ace613726008ea32_thumb-3.webp" 
                alt="Efficiency Strategies" 
                className="w-full rounded-2xl shadow-xl"
                data-testid="overview-2-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
