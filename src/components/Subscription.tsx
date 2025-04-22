
import { Check, Info } from "lucide-react";

const Subscription = () => {
  const subscriptionFeatures = [
    "Super fast withdrawal",
    "Earn 8% of total order value",
    "100% Delivery charge and Tip",
    "Service hub benefits Access"
  ];

  return (
    <section id="subscription" className="py-16 px-4 bg-xces-black relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-left mb-8">
          <h2 className="text-3xl font-bold mb-2">
            XCES Partner <span className="text-blue-500">Subscription</span>
          </h2>
          <p className="text-base text-gray-400">
            At XCES, we don't charge commissions from your earnings.
          </p>
        </div>

        {/* Card Container */}
        <div className="flex justify-center">
          <div className="w-full max-w-md bg-[#111] rounded-xl shadow-lg relative overflow-hidden p-6">
            {/* Plan Label */}
            <div className="mb-6">
              <span className="text-blue-500 font-medium">Partner Plans</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-2xl font-bold">₹15</span>
              <span className="text-gray-400">/day</span>
            </div>

            {/* Features */}
            <div className="space-y-4 mb-8">
              {subscriptionFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="text-blue-500">
                    <Check className="h-5 w-5" />
                  </div>
                  <p className="text-gray-300">
                    {feature}
                  </p>
                </div>
              ))}
            </div>

            {/* Subscribe Button */}
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition mb-6">
              Subscribe Now
            </button>

            {/* Money Back Info */}
            <div className="bg-[#1a1a1a] rounded-lg p-4 flex items-start gap-3">
              <Info className="text-blue-500 h-5 w-5 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-gray-300">
                  Didn't receive any orders? We will refund your subscription fee – no questions asked!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscription;
