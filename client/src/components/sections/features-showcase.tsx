import { useEffect, useState } from "react";

export default function FeaturesShowcase() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const element = document.getElementById("features-showcase");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="features-showcase"
      className="py-20 features-pattern"
      data-testid="section-features-showcase"
    >
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p
            className="text-primary text-lg font-medium mb-4"
            data-testid="features-badge"
          >
            Customer Success Stories
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold leading-tight mb-6"
            data-testid="features-title"
          >
            <span className="gradient-text">See how leading landscapers</span>
            <br />
            <span className="gradient-text">transform their workflow</span>
          </h2>
          <p
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            data-testid="features-subtitle"
          >
            Real landscaping professionals share their experience with Bobyard's
            takeoff tools
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Chopper Landscaping */}
          <div
            className={`feature-card p-8 rounded-2xl card-hover transition-all duration-700 delay-100 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            data-testid="testimonial-chopper"
          >
            <div className="flex items-start space-x-4 mb-6">
              <div>
                <h3
                  className="text-2xl font-bold mb-2"
                  data-testid="chopper-title"
                >
                  Chopper Landscaping
                </h3>
                <p
                  className="text-muted-foreground"
                  data-testid="chopper-description"
                >
                  "Bobyard cut our takeoff time from 3 hours to 30 minutes. The
                  accuracy is incredible."
                </p>
              </div>
            </div>
            {/* Video mockup */}
            <div
              className="bg-card border border-border rounded-xl overflow-hidden"
              data-testid="chopper-video"
            >
              <div className="aspect-video">
                <img
                  src="https://www.bobyard.com/static/media/Still%202025-09-10%20151201_1.33.5.5fa1955900662514cd25.jpg"
                  alt="Chopper Landscaping Video Thumbnail"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-muted-foreground">
                  See how Chopper Landscaping transformed their estimating
                  process with Bobyard's AI takeoff tools.
                </p>
              </div>
            </div>
          </div>

          {/* K & D Landscaping */}
          <div
            className={`feature-card p-8 rounded-2xl card-hover transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            data-testid="testimonial-kd"
          >
            <div className="flex items-start space-x-4 mb-6">
              <div>
                <h3 className="text-2xl font-bold mb-2" data-testid="kd-title">
                  K & D Landscaping
                </h3>
                <p
                  className="text-muted-foreground"
                  data-testid="kd-description"
                >
                  "The measurement tools are game-changing. We win more bids
                  with faster turnaround."
                </p>
              </div>
            </div>
            {/* Video mockup */}
            <div
              className="bg-card border border-border rounded-xl overflow-hidden"
              data-testid="kd-video"
            >
              <div className="aspect-video">
                <img
                  src="https://bobyard-public-images.s3.us-west-2.amazonaws.com/Still+2025-07-08+113147_1.33.3.jpg"
                  alt="K & D Landscaping Video Thumbnail"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-muted-foreground">
                  Learn how K & D Landscaping increased their bidding accuracy
                  and efficiency.
                </p>
              </div>
            </div>
          </div>

          {/* New Path Landscape */}
          <div
            className={`feature-card p-8 rounded-2xl card-hover transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            data-testid="testimonial-newpath"
          >
            <div className="flex items-start space-x-4 mb-6">
              <div>
                <h3
                  className="text-2xl font-bold mb-2"
                  data-testid="newpath-title"
                >
                  New Path Landscape
                </h3>
                <p
                  className="text-muted-foreground"
                  data-testid="newpath-description"
                >
                  "AI counting is so accurate, we trust it more than manual
                  counts. Saved us hours."
                </p>
              </div>
            </div>
            {/* Video mockup */}
            <div
              className="bg-card border border-border rounded-xl overflow-hidden"
              data-testid="newpath-video"
            >
              <div className="aspect-video">
                <img
                  src="https://bobyard-public-images.s3.us-west-2.amazonaws.com/Still+2025-06-25+142015_1.28.1.jpg"
                  alt="New Path Landscape Video Thumbnail"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-muted-foreground">
                  Discover how New Path Landscape leverages AI for precise plant
                  counting and estimation.
                </p>
              </div>
            </div>
          </div>

          {/* Smith & Enright */}
          <div
            className={`feature-card p-8 rounded-2xl card-hover transition-all duration-700 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            data-testid="testimonial-smith"
          >
            <div className="flex items-start space-x-4 mb-6">
              <div>
                <h3
                  className="text-2xl font-bold mb-2"
                  data-testid="smith-title"
                >
                  Smith & Enright
                </h3>
                <p
                  className="text-muted-foreground"
                  data-testid="smith-description"
                >
                  "Export feature seamlessly integrates with our software. No
                  more manual data entry."
                </p>
              </div>
            </div>
            {/* Video mockup */}
            <div
              className="bg-card border border-border rounded-xl overflow-hidden"
              data-testid="smith-video"
            >
              <div className="aspect-video">
                <img
                  src="https://bobyard-public-images.s3.us-west-2.amazonaws.com/IMG_7073.jpg"
                  alt="Smith & Enright Video Thumbnail"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-muted-foreground">
                  See how Smith & Enright streamlined their workflow with
                  seamless software integration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
