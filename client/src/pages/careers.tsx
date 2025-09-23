import { ExternalLink, MapPin, DollarSign, Users, Lightbulb, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function Careers() {
  const jobCategories = [
    { name: "Fullstack", count: 1, active: true },
    { name: "UI/UX", count: 0, active: false },
    { name: "Product", count: 0, active: false },
    { name: "Ops", count: 0, active: false },
    { name: "Recruiter", count: 0, active: false }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6" data-testid="careers-title">
              Join Bobyard!
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto" data-testid="careers-description">
              Construction is one of the largest industries in the world, but it is also one of the least technologically innovative spaces. Conducting fast and accurate cost estimates is a massive pain point because of the tedious nature of takeoffs (measuring & counting materials needed from the drawings). Bobyard automates the construction takeoff process with CV and NLP models to make cost estimates 10x faster while eliminating mistakes.
            </p>
            <p className="text-lg text-gray-700 mt-6 max-w-3xl mx-auto">
              We are a lean startup backed by some of the best VCs in the world: <strong>Primary and Pear</strong>. Almost all of the work lies ahead of us. We are excited to create next-gen software for the built world!
            </p>
          </div>

          {/* Company Values */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center space-y-4" data-testid="value-innovation">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto">
                <Lightbulb className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Innovation First</h3>
              <p className="text-gray-600">We're transforming a $1.6T industry that hasn't seen major innovation in decades</p>
            </div>
            
            <div className="text-center space-y-4" data-testid="value-speed">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto">
                <Zap className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Move Fast</h3>
              <p className="text-gray-600">We iterate quickly, ship daily, and respond to customer needs in real-time</p>
            </div>
            
            <div className="text-center space-y-4" data-testid="value-team">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Small Team, Big Impact</h3>
              <p className="text-gray-600">Every team member has significant autonomy and direct impact on our success</p>
            </div>
          </div>

          {/* Job Categories */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8" data-testid="open-positions-title">
              Open Positions
            </h2>
            <div className="flex flex-wrap gap-3 mb-8">
              {jobCategories.map((category) => (
                <span
                  key={category.name}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    category.active
                      ? "bg-green-100 text-green-800"
                      : category.count > 0 
                      ? "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      : "bg-gray-50 text-gray-400"
                  }`}
                  data-testid={`category-${category.name.toLowerCase()}`}
                >
                  {category.name} ({category.count})
                </span>
              ))}
            </div>
          </div>

          {/* Job Listing */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2" data-testid="job-title">
                        Fullstack Engineer
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span data-testid="job-location">San Francisco, CA (In-person)</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <DollarSign className="h-4 w-4" />
                          <span data-testid="job-salary">$120k - $150k + equity</span>
                        </div>
                      </div>
                    </div>
                    <Button 
                      className="btn-primary flex items-center gap-2"
                      data-testid="apply-button"
                    >
                      Apply <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3" data-testid="position-overview-title">
                        Position Overview
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Bobyard's growing uncomfortably fast. There are so many new things we need to build while also scaling our existing infra to keep up with the demand.
                      </p>
                      <p className="text-gray-700 leading-relaxed mt-3">
                        You will have very high autonomy in designing, executing, and iterating on products. We are a startup, and we move fast. You will be the world's leading expert on the products you build. We look for world-class engineers who have both a vision for the product but also the ability to go heads down and produce exceptional code.
                      </p>
                      <p className="text-gray-700 leading-relaxed mt-3">
                        You will be working very closely with the founding team to develop & maintain the entire tech stack (React, Django, PostgreSQL, AWS, GCP, and Heroku).
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3" data-testid="desired-attributes-title">
                        Desired Attributes
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-3">
                          <span className="text-green-500 mt-1">•</span>
                          <span><strong>Learning Rate:</strong> Ability to adapt and learn new technologies and frameworks swiftly</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-green-500 mt-1">•</span>
                          <span><strong>Passion:</strong> Startups are not easy, this is not a cushy SWE job at Google</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-green-500 mt-1">•</span>
                          <span>Incredibly proud of the code you write and advocate for high standards</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-green-500 mt-1">•</span>
                          <span>Obsession with the customer and their experience</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3" data-testid="benefits-title">
                        Benefits
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-3">
                          <span className="text-green-500 mt-1">•</span>
                          <span>Competitive salary plus equity options (target $120k - $150k base + equity)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-green-500 mt-1">•</span>
                          <span>Opportunity to collaborate with a dynamic, driven team</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-green-500 mt-1">•</span>
                          <span>Build a massive company</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-6">
                      <p className="text-gray-700 leading-relaxed text-sm">
                        <strong>This is a full-time & in-person role in SF.</strong> Learning rate and dedication are vital factors. If you can prove that you can execute on the products our customers are waiting for at the speed and quality the market demands (or if you can prove that you will acquire the ability to do so fast enough), we would love to work with you.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="text-center bg-gray-50 rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4" data-testid="join-cta-title">
              Ready to join the team?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Don't see the perfect role? We're always looking for exceptional talent. Send us your resume and tell us how you'd like to contribute.
            </p>
            <Button className="btn-primary px-8 py-3 text-lg font-semibold" data-testid="contact-us-button">
              Get in Touch
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}