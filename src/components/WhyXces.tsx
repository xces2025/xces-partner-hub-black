
import { Clock, IndianRupee, Shield, User } from "lucide-react";

const WhyXces = () => {
  return (
    <section id="why-xces" className="section-padding bg-gradient-to-b from-xces-black to-xces-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Partner with <span className="xces-gradient-text">XCES</span></h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Join the future of food delivery. We believe in empowering restaurants and home chefs 
            with better technology, fair pricing, and a true partnership approach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="xces-card">
            <div className="h-12 w-12 rounded-full bg-xces-blue/20 flex items-center justify-center mb-6">
              <IndianRupee className="text-xces-blue" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Zero Commission Model</h3>
            <p className="text-gray-300">Keep 100% of your food sales. Only pay a small fixed monthly fee.</p>
          </div>
          
          <div className="xces-card">
            <div className="h-12 w-12 rounded-full bg-xces-blue/20 flex items-center justify-center mb-6">
              <Clock className="text-xces-blue" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Fast Payouts</h3>
            <p className="text-gray-300">Daily settlements directly to your bank account. No holding periods.</p>
          </div>
          
          <div className="xces-card">
            <div className="h-12 w-12 rounded-full bg-xces-blue/20 flex items-center justify-center mb-6">
              <Shield className="text-xces-blue" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Dedicated Support</h3>
            <p className="text-gray-300">24/7 partner support and a dedicated growth manager for your success.</p>
          </div>
          
          <div className="xces-card">
            <div className="h-12 w-12 rounded-full bg-xces-blue/20 flex items-center justify-center mb-6">
              <User className="text-xces-blue" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Growth Tools</h3>
            <p className="text-gray-300">Access marketing tools, analytics, and insights to grow your business.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyXces;
