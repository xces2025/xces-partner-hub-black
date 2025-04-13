
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import WhyXces from "@/components/WhyXces";
import Benefits from "@/components/Benefits";
import Payout from "@/components/Payout";
import Subscription from "@/components/Subscription";
import FAQ from "@/components/FAQ";
import Join from "@/components/Join";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-xces-black text-white overflow-x-hidden">
      <Header />
      <Hero />
      <WhyXces />
      <HowItWorks />
      <Benefits />
      <Payout />
      <Subscription />
      <Join />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
