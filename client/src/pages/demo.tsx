import { useEffect } from "react";
import { Calendar, Clock, Users, Zap } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function Demo() {
  useEffect(() => {
    // Load Calendly widget
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-6" data-testid="demo-title">
              Book a Demo
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto" data-testid="demo-description">
              See Bobyard in action with a personalized demo. We'll walk you through our AI-powered takeoff process using your own landscape plans and show you exactly how much time and money you can save.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center space-y-4" data-testid="benefit-personalized">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Personalized Walkthrough</h3>
              <p className="text-gray-600">One-on-one demo using your actual landscape drawings and project requirements</p>
            </div>
            
            <div className="text-center space-y-4" data-testid="benefit-live">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto">
                <Zap className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Live AI Processing</h3>
              <p className="text-gray-600">Watch our AI identify, count, and measure materials in real-time</p>
            </div>
            
            <div className="text-center space-y-4" data-testid="benefit-quick">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto">
                <Clock className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">30-Minute Session</h3>
              <p className="text-gray-600">Quick but comprehensive overview of Bobyard's capabilities and ROI</p>
            </div>
          </div>

          {/* Demo Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - What You'll See */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6" data-testid="what-youll-see-title">
                  What you'll see in the demo
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">AI automatically detecting and counting plants, hardscape materials, and irrigation components</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Instant area calculations for turf, mulch, concrete, and other surface materials</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Linear measurements for fencing, edging, and pathways with pixel-perfect accuracy</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Export capabilities to your existing estimating software</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Time comparison: manual takeoff vs. Bobyard's 85% faster process</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Come prepared with:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Recent landscape drawings or plans (PDF format preferred)</li>
                  <li>• Questions about your current takeoff process</li>
                  <li>• Information about your typical project size and volume</li>
                </ul>
              </div>
            </div>

            {/* Right Column - Calendly Widget */}
            <div className="bg-white">
              <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/bobyard/demo"
                style={{ minWidth: '320px', height: '700px' }}
                data-testid="calendly-widget"
              ></div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}