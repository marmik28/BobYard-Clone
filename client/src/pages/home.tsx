import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import BrandCarousel from "@/components/sections/brand-carousel";
import FeaturesShowcase from "@/components/sections/features-showcase";
import HowItWorks from "@/components/sections/how-it-works";
import CounterSection from "@/components/sections/counter-section";
import Overview from "@/components/sections/overview";
import Pricing from "@/components/sections/pricing";
import Testimonials from "@/components/sections/testimonials";
import Investors from "@/components/sections/investors";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <BrandCarousel />
        <FeaturesShowcase />
        <HowItWorks />
        <CounterSection />
        <Overview />
        <Pricing />
        <Testimonials />
        <Investors />
      </main>
      <Footer />
    </div>
  );
}
