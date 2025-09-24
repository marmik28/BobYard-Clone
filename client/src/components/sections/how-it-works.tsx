import { useEffect, useState } from "react";
import dashboardImage from "@assets/image_1758727483462.png";

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

  const features = [
    {
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
        </svg>
      ),
      title: "Secure",
      description: "Store and access your documents from anywhere.",
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"/>
          <path d="M14 2v6h6"/>
          <path d="M16 13H8"/>
          <path d="M16 17H8"/>
          <path d="M10 9H8"/>
        </svg>
      ),
      title: "Auto Naming",
      description: "Automatically split and name your drawings.",
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
          <path d="M13 10h-2v3"/>
          <path d="M9 10h6"/>
        </svg>
      ),
      title: "Q&A with AI",
      description: "Ask a private model trained on your data about anything.",
    },
  ];

  return (
    <section 
      id="how-it-works"
      className="py-20 bg-gradient-to-br from-slate-50 to-blue-50" 
      data-testid="section-how-it-works"
    >
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-gray-900" data-testid="how-it-works-title">
            Instant access to key data
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto items-center">
          {/* Features Column */}
          <div className="space-y-12">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`transition-all duration-700 delay-${(index + 1) * 100} ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
                data-testid={`feature-${index + 1}`}
              >
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900" data-testid={`feature-title-${index + 1}`}>
                      {feature.title}
                    </h3>
                    <p className="text-lg text-gray-600" data-testid={`feature-description-${index + 1}`}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dashboard Image */}
          <div className={`transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`} data-testid="how-it-works-image">
            <div className="relative">
              <img 
                src={dashboardImage} 
                alt="Project Dashboard with AI Chat" 
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
