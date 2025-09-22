export default function BrandCarousel() {
  const brands = [
    "https://bobyard-public-images.s3.us-west-2.amazonaws.com/Untitled+design+(6)+(1).png",
    "https://bobyard-public-images.s3.us-west-2.amazonaws.com/Untitled+design+(4)+(1).png",
    "https://bobyard-public-images.s3.us-west-2.amazonaws.com/fGlogo-green+(1).png",
    "https://bobyard-public-images.s3.us-west-2.amazonaws.com/43e09820-eced-436a-b1b8-a661f4cac82c_removalai_preview+(1).png",
    "https://bobyard-public-images.s3.us-west-2.amazonaws.com/Untitled+design+(7)+(1).png",
    "https://bobyard-public-images.s3.us-west-2.amazonaws.com/image+(20).png",
    "https://bobyard-public-images.s3.us-west-2.amazonaws.com/rafael-landscaping-logo-white+(1)+(2).png",
    "https://bobyard-public-images.s3.us-west-2.amazonaws.com/California-Turf-and-Landscape-Logo+(1).png",
    "https://bobyard-public-images.s3.us-west-2.amazonaws.com/image+(19).png",
  ];

  return (
    <section className="py-16 border-b border-border" data-testid="section-brand-carousel">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-12">
          <p className="text-muted-foreground text-lg" data-testid="carousel-title">
            Trusted by next-gen landscapers
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
