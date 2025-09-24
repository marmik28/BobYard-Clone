import { useEffect, useState } from "react";
import aiTakeoffsImage from "@assets/image_1758725763808.png";

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
            <div className="flex flex-col h-full">
              <h3 className="text-4xl font-bold mb-8" data-testid="overview-1-title">Ridiculously fast AI takeoffs</h3>
              
              <div className="space-y-8 flex-1" data-testid="overview-1-features">
                <div className="flex items-start space-x-6">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mt-1 flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Auto Count</h4>
                    <p className="text-lg text-muted-foreground">Automatically count planting, irrigation, and electrical symbols in seconds.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mt-1 flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Measure Lengths</h4>
                    <p className="text-lg text-muted-foreground">Automatically measure lengths of irrigation systems.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mt-1 flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8 2h2v4h4v2h-4v4h-2v-4H7v-2h4V5z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Measure Areas</h4>
                    <p className="text-lg text-muted-foreground">Automatically measure pavers, concrete, and other materials.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <img 
                src={aiTakeoffsImage} 
                alt="AI Takeoffs Visualization" 
                className="w-full h-full object-cover rounded-2xl"
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
