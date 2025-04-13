
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-28 md:pt-32 pb-16 md:pb-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Earn what you <span className="xces-gradient-text">deserve</span> with XCES
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Earn monthly up to <span className="font-bold text-white">₹75,000</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#join-us" className="xces-btn">
                Join as Partner
                <ArrowRight className="inline-block ml-2" size={18} />
              </a>
              <a href="#why-xces" className="xces-btn-outline">
                Learn More
              </a>
            </div>
          </div>
          <div className="flex justify-center md:justify-end relative">
            <div className="relative">
              <div className="absolute -z-10 w-64 h-64 rounded-full bg-xces-blue/20 blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              <img 
                src="/uploads/d6f8dc56-5042-4cc8-b28e-aec5ce17c799.png" 
                alt="XCES Delivery Partner" 
                className="max-w-xs md:max-w-sm xl:max-w-md relative z-10 animate-float"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-xces-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-xces-blue/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;
