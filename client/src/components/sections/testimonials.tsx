import { useEffect, useState } from "react";

export default function Testimonials() {
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

    const element = document.getElementById('testimonials');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      author: "Mike Rodriguez",
      role: "Owner, Green Valley Landscaping",
      avatar: "https://cdn.prod.website-files.com/68a0b147a392c76e4c8c2aa5/68a0b424f8231c1a57863ede_author-1.webp",
      quote: "Bobyard cut our takeoff time from 3 hours to 20 minutes. The AI plant counting is incredibly accurate, and we're winning more bids with faster turnaround times.",
      quoteIcon: "https://cdn.prod.website-files.com/68a0b147a392c76e4c8c2aa5/68a0b424f8231c1a57863edf_icon-18.svg"
    },
    {
      author: "Sarah Chen", 
      role: "Project Manager, Urban Oasis Design",
      avatar: "https://cdn.prod.website-files.com/68a0b147a392c76e4c8c2aa5/68b5494e137b14fb2c24edb5_author-4.webp",
      quote: "The measurement tools are a game-changer. What used to require multiple site visits can now be done from the office. Our clients love the detailed, accurate estimates.",
      quoteIcon: "https://cdn.prod.website-files.com/68a0b147a392c76e4c8c2aa5/68a0b424f8231c1a57863edf_icon-18.svg"
    },
    {
      author: "James Thompson",
      role: "Estimator, Premier Landscapes", 
      avatar: "https://cdn.prod.website-files.com/68a0b147a392c76e4c8c2aa5/68b58d4acbebc1cd8d975913_author-7.webp",
      quote: "Bobyard's export feature seamlessly integrates with our estimating software. No more manual data entry - everything flows perfectly into our workflow.",
      quoteIcon: "https://cdn.prod.website-files.com/68a0b147a392c76e4c8c2aa5/68b54913d464d3fc085fe7b1_icon-30.svg"
    }
  ];

  return (
    <section 
      id="testimonials"
      className="py-20 testimonials-pattern" 
      data-testid="section-testimonials"
    >
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-primary text-lg font-medium mb-4" data-testid="testimonials-badge">Customer Stories</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6" data-testid="testimonials-title">
            <span className="gradient-text">Landscapers love Bobyard for</span><br />
            <span className="gradient-text">faster, accurate takeoffs</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="testimonials-subtitle">
            See how landscaping professionals are transforming their estimating process with AI-powered takeoffs.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`feature-card p-8 rounded-2xl card-hover transition-all duration-700 delay-${(index + 1) * 100} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              data-testid={`testimonial-${index + 1}`}
            >
              <div className="flex items-center space-x-4 mb-6">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full"
                  data-testid={`avatar-${index + 1}`}
                />
                <div>
                  <h4 className="font-semibold" data-testid={`author-name-${index + 1}`}>{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground" data-testid={`author-role-${index + 1}`}>{testimonial.role}</p>
                </div>
              </div>
              <div className="mb-4">
                <img src={testimonial.quoteIcon} alt="Quote" className="w-8 h-8 mb-4" />
                <p className="text-muted-foreground" data-testid={`quote-${index + 1}`}>
                  {testimonial.quote}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
