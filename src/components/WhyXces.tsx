
import { Clock, IndianRupee , Shield, User } from "lucide-react";

const WhyXces = () => {
  return (
    <section id="why-xces" className="section-padding bg-gradient-to-b from-xces-black to-xces-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why <span className="xces-gradient-text">XCES</span></h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            At XCES, we believe delivery partners are the backbone of the food delivery industry. 
            That's why we ensure you earn more, work flexibly, and receive top-tier benefits. 
            Join us today and take control of your financial future!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="xces-card">
            <div className="h-12 w-12 rounded-full bg-xces-blue/20 flex items-center justify-center mb-6">
              <Clock className="text-xces-blue" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Work on Your Terms</h3>
            <p className="text-gray-300">No stress, no pressure! Complete flexibility to work when and where you want.</p>
          </div>
          
          <div className="xces-card">
            <div className="h-12 w-12 rounded-full bg-xces-blue/20 flex items-center justify-center mb-6">
              <IndianRupee  className="text-xces-blue" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Guaranteed High Payouts</h3>
            <p className="text-gray-300">Earn more per order with transparent and fair payout structure.</p>
          </div>
          
          <div className="xces-card">
            <div className="h-12 w-12 rounded-full bg-xces-blue/20 flex items-center justify-center mb-6">
              <Shield className="text-xces-blue" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Exclusive Benefits</h3>
            <p className="text-gray-300">From insurance to health checkups, we take care of our partners.</p>
          </div>
          
          <div className="xces-card">
            <div className="h-12 w-12 rounded-full bg-xces-blue/20 flex items-center justify-center mb-6">
              <User className="text-xces-blue" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Partner First Approach</h3>
            <p className="text-gray-300">XCES puts delivery partners first in every decision we make.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyXces;
