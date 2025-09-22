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
      author: "Myra Wunsch",
      role: "Operations Manager",
      avatar: "https://cdn.prod.website-files.com/68a0b147a392c76e4c8c2aa5/68a0b424f8231c1a57863ede_author-1.webp",
      quote: "This platform has completely streamlined our workflow. What used to take hours of manual effort is now done in minutes. It feels like we've without the extra cost.",
      quoteIcon: "https://cdn.prod.website-files.com/68a0b147a392c76e4c8c2aa5/68a0b424f8231c1a57863edf_icon-18.svg"
    },
    {
      author: "Ronald Heathcote", 
      role: "CEO",
      avatar: "https://cdn.prod.website-files.com/68a0b147a392c76e4c8c2aa5/68b5494e137b14fb2c24edb5_author-4.webp",
      quote: "The real-time insights have helped us make smarter decisions faster. It's like having an analytics expert on call 24/7.",
      quoteIcon: "https://cdn.prod.website-files.com/68a0b147a392c76e4c8c2aa5/68a0b424f8231c1a57863edf_icon-18.svg"
    },
    {
      author: "Kerry Bartell",
      role: "Business Analyst", 
      avatar: "https://cdn.prod.website-files.com/68a0b147a392c76e4c8c2aa5/68b58d4acbebc1cd8d975913_author-7.webp",
      quote: "We reduced our manual reporting time by 70% thanks to this platform. That's time we now spend growing our business instead of crunching numbers.",
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
          <div className="inline-flex items-center justify-center mb-6" data-testid="testimonials-icon">
            <img 
              src="https://cdn.prod.website-files.com/68a0b147a392c76e4c8c2aa5/68a0b424f8231c1a57863edb_icon-15.svg" 
              alt="Testimonial Icon" 
              className="w-12 h-12"
            />
          </div>
          <p className="text-primary text-lg font-medium mb-4" data-testid="testimonials-badge">Testimonial</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6" data-testid="testimonials-title">
            <span className="gradient-text">What did happy clients have to</span><br />
            <span className="gradient-text">say about us?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="testimonials-subtitle">
            Innovative solutions for modern business needs. Explore how we empower organizations of all sizes, from emerging.
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
