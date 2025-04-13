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
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            XCES Partner <span className="xces-gradient-text">Subscription</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto">
            At XCES, we don't charge commissions from your earnings.
          </p>
        </div>

        {/* Card Container */}
        <div className="flex justify-center">
          <div className="w-full max-w-md bg-gradient-to-br from-xces-dark to-black rounded-2xl shadow-lg relative overflow-hidden p-6 sm:p-8">
            {/* Background Blur Bubble */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-xces-blue/20 rounded-full blur-3xl -mr-20 -mt-20" />

            <div className="relative z-10">
              {/* Plan Label */}
              <div className="bg-xces-blue/10 rounded-full px-4 py-1 inline-block mb-6">
                <span className="text-xces-blue font-medium text-sm sm:text-base">Partner Plans</span>
              </div>

              {/* Price */}
              <div className="flex items-end gap-2 mb-6">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold">₹15</h3>
                <span className="text-gray-400 mb-1 text-base sm:text-lg">/day</span>
              </div>

              {/* Features */}
              <div className="space-y-5 mb-8">
                {subscriptionFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="mt-1 bg-xces-blue/20 rounded-full p-2 flex-shrink-0">
                      <Check className="h-5 w-5 text-xces-blue" />
                    </div>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              {/* Subscribe Button */}
              <a href="#join-us" className="xces-btn w-full text-center text-base sm:text-lg">
                Subscribe Now
              </a>

              {/* Guarantee Info */}
              <div className="mt-6 bg-xces-blue/10 rounded-lg p-4">
                <div className="flex items-start">
                  <Info size={20} className="text-xces-blue mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1 text-base sm:text-lg">Money-Back Guarantee</h4>
                    <p className="text-sm sm:text-base text-gray-300">
                      Didn't receive any orders? We will refund your subscription fee – no questions asked!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Background Bubble */}
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-xces-blue/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Subscription;
