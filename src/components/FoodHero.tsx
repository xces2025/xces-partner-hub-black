
import { ArrowRight } from "lucide-react";

const FoodHero = () => {
  return (
    <section className="pt-28 md:pt-32 pb-16 md:pb-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left md:col-span-2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Grow your <span className="xces-gradient-text">business</span> with XCES
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Join as a food partner and reach more customers effortlessly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#join-us" className="xces-btn">
                Partner with Us
                <ArrowRight className="inline-block ml-2" size={18} />
              </a>
              <a href="#why-xces" className="xces-btn-outline">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Subtle background (no character image) */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-xces-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-xces-blue/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default FoodHero;
