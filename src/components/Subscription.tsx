
import { Check, Info } from "lucide-react";

const Subscription = () => {
  const subscriptionFeatures = [
    "Super fast withdrawal",
    "Earn 8% of total order value",
    "100% Delivery charge and Tip",
    "Service hub benefits Access"
  ];

  return (
    <section id="subscription" className="py-16 px-4 bg-gradient-to-br from-[#111] to-[#1a1a1a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            XCES Partner <span className="text-blue-500">Subscription</span>
          </h2>
          <p className="text-lg text-gray-400">
            At XCES, we don't charge commissions from your earnings
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-md bg-gradient-to-br from-[#1a1a1a] to-[#222] rounded-2xl shadow-lg relative overflow-hidden p-8 border border-gray-800/50 hover:border-blue-500/30 transition-all duration-300">
            {/* Plan Label */}
            <div className="mb-6">
              <span className="bg-blue-500/10 text-blue-400 px-4 py-1.5 rounded-full text-sm font-medium">
                Partner Plans
              </span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-2 mb-8">
              <span className="text-4xl font-bold text-white">₹15</span>
              <span className="text-gray-400 text-lg">/day</span>
            </div>

            {/* Features */}
            <div className="space-y-5 mb-8">
              {subscriptionFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <div className="text-blue-500 bg-blue-500/10 p-1.5 rounded-full group-hover:bg-blue-500/20 transition-colors">
                    <Check className="h-4 w-4" />
                  </div>
                  <p className="text-gray-300 group-hover:text-white transition-colors">
                    {feature}
                  </p>
                </div>
              ))}
            </div>

            {/* Subscribe Button */}
            <button className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3.5 rounded-xl font-medium hover:from-blue-500 hover:to-blue-600 transition-all duration-300 mb-6 shadow-lg shadow-blue-500/20">
              Subscribe Now
            </button>

            {/* Money Back Info */}
            <div className="bg-gradient-to-br from-[#222] to-[#2a2a2a] rounded-xl p-4 flex items-start gap-3 border border-gray-800/50">
              <Info className="text-blue-400 h-5 w-5 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-gray-400 leading-relaxed">
                Didn't receive any orders? We will refund your subscription fee – no questions asked!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscription;
