import { useEffect, useState } from "react";

export default function Investors() {
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

    const element = document.getElementById('investors');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const investors = [
    {
      name: "Pear VC",
      logo: "https://images.crunchbase.com/image/upload/c_pad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/v1397180227/b541f0c33e6723718c9e5b7bb89dbf19.png",
      description: "Seed specialists partnering with founders at the earliest stages"
    },
    {
      name: "Primary Venture Partners", 
      logo: "https://images.crunchbase.com/image/upload/c_pad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/v1481840997/xrxgozwvdm4onqfj1iqu.png",
      description: "Leading seed firm backing NYC's most visionary founders"
    }
  ];

  return (
    <section 
      id="investors"
      className="py-20 bg-gradient-to-b from-background to-muted/20" 
      data-testid="section-investors"
    >
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6" data-testid="investors-title">
            <span className="gradient-text">Backed by world-class</span><br />
            <span className="gradient-text">AI investors</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="investors-subtitle">
            We're proud to be supported by leading venture capital firms who share our vision for AI-powered construction technology.
          </p>
        </div>

        {/* Investor Logos */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {investors.map((investor, index) => (
            <div 
              key={investor.name}
              className={`feature-card p-8 rounded-2xl text-center transition-all duration-700 delay-${(index + 1) * 100} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              data-testid={`investor-card-${index + 1}`}
            >
              <div className="mb-6">
                <img 
                  src={investor.logo} 
                  alt={`${investor.name} Logo`} 
                  className="h-16 mx-auto opacity-80 hover:opacity-100 transition-opacity"
                  data-testid={`investor-logo-${index + 1}`}
                />
              </div>
              <h3 className="text-xl font-bold mb-3" data-testid={`investor-name-${index + 1}`}>
                {investor.name}
              </h3>
              <p className="text-muted-foreground" data-testid={`investor-description-${index + 1}`}>
                {investor.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className={`text-center mt-12 transition-all duration-700 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} data-testid="investors-info">
          <p className="text-muted-foreground">
            Raised $3.63M in seed funding to revolutionize landscaping takeoffs with AI
          </p>
        </div>
      </div>
    </section>
  );
}