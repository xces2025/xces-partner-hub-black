import { Database, Users, Package, Zap } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Database className="w-12 h-12 text-xces-blue mb-4" />,
      title: "Access to Local Customer Data",
      description: "Know who's ordering, when, and what they love"
    },
    {
      icon: <Users className="w-12 h-12 text-xces-blue mb-4" />,
      title: "Dedicated Sections",
      description: "Separate spaces for Restaurants and Home Chefs to shine"
    },
    {
      icon: <Package className="w-12 h-12 text-xces-blue mb-4" />,
      title: "Free Basic Packaging Material",
      description: "We've got your first packaging needs covered"
    },
    {
      icon: <Zap className="w-12 h-12 text-xces-blue mb-4" />,
      title: "Business Growth Team",
      description: "We help you grow, not just list"
    }
  ];

  return (
    <section id="how-it-works" className="section-padding relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What You Get with <span className="xces-gradient-text">XCES</span></h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Everything you need to grow your food business
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
      
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-xces-blue/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default HowItWorks;
