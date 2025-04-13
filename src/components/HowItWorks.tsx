
import { Check, ShoppingBag, ThumbsUp, MapPin, CreditCard } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <ShoppingBag className="w-12 h-12 text-xces-blue mb-4" />,
      title: "Get Order",
      description: "Receive food order requests from customers"
    },
    {
      icon: <ThumbsUp className="w-12 h-12 text-xces-blue mb-4" />,
      title: "Accept & Pick-up",
      description: "Accept the order and pick it up from the restaurant or home chef"
    },
    {
      icon: <MapPin className="w-12 h-12 text-xces-blue mb-4" />,
      title: "Drop to Customer",
      description: "Deliver the food to the customer's location"
    },
    {
      icon: <CreditCard className="w-12 h-12 text-xces-blue mb-4" />,
      title: "Receive Payment",
      description: "Get payment directly in the partner app"
    }
  ];

  return (
    <section id="how-it-works" className="section-padding relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It <span className="xces-gradient-text">Works</span></h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our simple 4-step process makes food delivery straightforward and rewarding
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="xces-card flex flex-col items-center text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="mb-2 relative">
                {step.icon}
                <span className="absolute -top-4 -right-4 flex items-center justify-center w-8 h-8 rounded-full bg-xces-blue text-white font-bold text-sm">
                  {index + 1}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-xces-blue/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default HowItWorks;
