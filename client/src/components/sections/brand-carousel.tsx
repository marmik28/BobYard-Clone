export default function BrandCarousel() {
  const brands = [
    "https://cdn.prod.website-files.com/68a0b147a392c76e4c8c2aa5/68a0b424f8231c1a57863ec7_brand-1.svg",
    "https://cdn.prod.website-files.com/68a0b147a392c76e4c8c2aa5/68a0b424f8231c1a57863ec8_brand-2.svg",
    "https://cdn.prod.website-files.com/68a0b147a392c76e4c8c2aa5/68a0b424f8231c1a57863ec9_brand-3.svg",
    "https://cdn.prod.website-files.com/68a0b147a392c76e4c8c2aa5/68a0b424f8231c1a57863eca_brand-4.svg",
    "https://cdn.prod.website-files.com/68a0b147a392c76e4c8c2aa5/68a0b424f8231c1a57863ecb_brand-5.svg",
    "https://cdn.prod.website-files.com/68a0b147a392c76e4c8c2aa5/68a0b424f8231c1a57863ed2_brand-6.svg",
    "https://cdn.prod.website-files.com/68a0b147a392c76e4c8c2aa5/68a0b424f8231c1a57863ed3_brand-7.svg",
  ];

  return (
    <section className="py-16 border-b border-border" data-testid="section-brand-carousel">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-12">
          <p className="text-muted-foreground text-lg" data-testid="carousel-title">
            Trusted by customer-lead product companies
          </p>
        </div>

        <div className="overflow-hidden">
          <div className="flex animate-scroll-left hover:pause" data-testid="carousel-track">
            {/* First set of logos */}
            <div className="flex items-center space-x-12 min-w-full">
              {brands.map((brand, index) => (
                <img 
                  key={`brand-${index}`}
                  src={brand} 
                  alt={`Brand ${index + 1}`} 
                  className="h-8 opacity-60 hover:opacity-100 transition-opacity"
                  data-testid={`brand-logo-${index + 1}`}
                />
              ))}
            </div>
            {/* Duplicate set for seamless loop */}
            <div className="flex items-center space-x-12 min-w-full">
              {brands.map((brand, index) => (
                <img 
                  key={`brand-duplicate-${index}`}
                  src={brand} 
                  alt={`Brand ${index + 1}`} 
                  className="h-8 opacity-60 hover:opacity-100 transition-opacity"
                  data-testid={`brand-logo-duplicate-${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
