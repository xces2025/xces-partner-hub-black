
import { CircleDollarSign, BadgePercent, FileText } from "lucide-react";

const WhyXces = () => {
  return (
    <section id="why-xces" className="section-padding bg-gradient-to-b from-xces-black to-xces-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why <span className="xces-gradient-text">XCES</span></h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            XCES is a food delivery platform built for food entrepreneurs — from home chefs to restaurants, 
            food trucks to cloud kitchens.<br /><br />
            <span className="block font-semibold text-xces-blue mt-2">Unlike other platforms, we don't eat into your earnings.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="xces-card">
            <div className="h-12 w-12 rounded-full bg-xces-blue/20 flex items-center justify-center mb-6">
              <CircleDollarSign className="text-xces-blue" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">0% Commission</h3>
            <p className="text-gray-300">Keep 100% of your food sales. No deductions.</p>
          </div>
          
          <div className="xces-card">
            <div className="h-12 w-12 rounded-full bg-xces-blue/20 flex items-center justify-center mb-6">
              <FileText className="text-xces-blue" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">No Hidden Fees</h3>
            <p className="text-gray-300">Transparent pricing, so you always know what you'll pay.</p>
          </div>
          
          <div className="xces-card">
            <div className="h-12 w-12 rounded-full bg-xces-blue/20 flex items-center justify-center mb-6">
              <BadgePercent className="text-xces-blue" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">No Delivery Charges</h3>
            <p className="text-gray-300">No added delivery markup for your customers.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyXces;
