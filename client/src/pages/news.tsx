import { useEffect, useState } from "react";

export default function News() {
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

    const element = document.getElementById('news');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const newsItems = [
    {
      title: "How Chopper Landscaping Landed $350k in New Projects with Bobyard",
      description: "John from Chopper Landscaping says: \"This is literally the future of estimating in landscaping. Bobyard has cut our time in half, helped us win work we couldn't before, and made the process effortless. It's a 50-foot step in the right direction—and it's time to get on board.\"",
      date: "Sep 11, 2025",
      image: "https://www.bobyard.com/static/media/Still%202025-09-10%20151201_1.33.5.5fa1955900662514cd25.jpg",
      link: "https://www.bobyard.com/blogs/chopper-landscaping-success-story"
    },
    {
      title: "Estimate Your Potential ROI With Bobyard",
      description: "Wondering how much time and money Bobyard can help you save on your projects? Our ROI Calculator provides a quick, easy estimate tailored to your business.",
      date: "Aug 20, 2025",
      image: "https://www.bobyard.com/static/media/roi-calculator.dd046d40175d85328b7e.png",
      link: "https://www.bobyard.com/blogs/estimating-roi"
    },
    {
      title: "New Bobyard Features: Edge Finder, AI Item Callouts, and Better Models for Landscaping Takeoffs",
      description: "If you work in landscaping or construction estimating, you know that every minute spent on manual takeoffs is a minute lost. With Bobyard's latest update, you can measure faster, count smarter, and get more accurate results – all powered by our AI-powered landscaping takeoff software.",
      date: "Aug 19, 2025",
      image: "https://www.bobyard.com/static/media/callouts.d5fd592bcd479abbd6ee.png",
      link: "https://www.bobyard.com/blogs/aug-2025-new-features"
    },
    {
      title: "How AI is Transforming the Landscaping Industry",
      description: "Our founder and CEO, Michael Ding, recently took the stage at the Lawn & Landscape Technology Conference to share his perspective on how AI is reshaping the landscaping industry. Michael walked through the current landscape of AI, real-world use cases for contractors, and what it takes to successfully adopt these tools.",
      date: "July 28, 2025",
      image: "https://bobyard-public-images.s3.us-west-2.amazonaws.com/IMG_2617.png",
      link: "https://www.bobyard.com/blogs/lawn-landscape-tech-conference-2025"
    },
    {
      title: "How K&D Landscaping Increased Estimating Efficiency by 50% and Revenue by 15%",
      description: "At K&D Landscaping, technology isn't an afterthought, it's a pillar of how they compete and grow. That mindset led CEO Justin White and his team to Bobyard, and the results have been transformative.",
      date: "July 16, 2025",
      image: "https://bobyard-public-images.s3.us-west-2.amazonaws.com/Still+2025-07-17+203411_2.18.1.jpg",
      link: "https://www.bobyard.com/blogs/k-n-d"
    },
    {
      title: "AI That Builds Human Connection",
      description: "\"Bobyard's AI makes any estimator 1000x better,\" says Rudy Prado at K&D Landscaping. The results? 50% time savings, 20% revenue growth — and more human connection.",
      date: "July 8, 2025",
      image: "https://bobyard-public-images.s3.us-west-2.amazonaws.com/Still+2025-07-08+113147_1.33.3.jpg",
      link: "https://www.youtube.com/watch?v=Rylmsdh7XGM"
    },
    {
      title: "Introducing Pattern Search",
      description: "Bobyard is already trusted for having the most accurate counting AI in landscaping, that's built to handle messy plans with overlapping symbols, noisy linework. And now, we've brought that same power to square footage.",
      date: "June 30, 2025",
      image: "https://bobyard-public-images.s3.us-west-2.amazonaws.com/PATTERN+SEARCH+(2).png",
      link: "https://www.bobyard.com/blogs/pattern-search"
    },
    {
      title: "From Backlogged to Bid Ready: Smith & Enright Speeds Up Estimating",
      description: "\"What used to take us hours takes minutes now.\" With Bobyard's AI-powered plant count and square footage tools, features Nick and Selena rely on daily, Smith & Enright is estimating faster, unlocking the time and bandwidth to pursue bigger opportunities and grow the business.",
      date: "June 20, 2025",
      image: "https://bobyard-public-images.s3.us-west-2.amazonaws.com/IMG_7073.jpg",
      link: "https://www.youtube.com/watch?v=Gvmc_u_J4c8"
    },
    {
      title: "New Path sees 3-5× increase in bid capacity",
      description: "\"That same estimator that historically figured us at 15 million can now turn out 30 million.\" New Path Landscape, a growing commercial contractor in the Bay Area, has dramatically scaled their operations and increased output by implementing Bobyard's AI-powered takeoff solution.",
      date: "April 9, 2025",
      image: "https://bobyard-public-images.s3.us-west-2.amazonaws.com/Still+2025-06-25+142015_1.28.1.jpg",
      link: "https://www.youtube.com/watch?v=jsbxZEOLQCQ"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <section 
        id="news"
        className="py-20" 
        data-testid="section-news"
      >
        <div className="container mx-auto px-4 lg:px-6">
          {/* Header */}
          <div className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6" data-testid="news-title">
              <span className="gradient-text">Bobyard in the news</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="news-subtitle">
              See how Bobyard is being used in the world
            </p>
          </div>

          {/* News Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {newsItems.map((item, index) => (
              <div 
                key={index}
                className={`bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                data-testid={`news-item-${index}`}
              >
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="block">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      data-testid={`news-image-${index}`}
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-primary font-medium mb-2" data-testid={`news-date-${index}`}>
                      {item.date}
                    </div>
                    <h3 className="text-xl font-bold mb-3 line-clamp-2" data-testid={`news-title-${index}`}>
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3" data-testid={`news-description-${index}`}>
                      {item.description}
                    </p>
                    <div className="mt-4 flex items-center text-primary font-medium">
                      <span className="text-sm">Read more</span>
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}