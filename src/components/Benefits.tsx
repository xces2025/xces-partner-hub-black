
import { 
  Check, 
  MapPin, 
  Heart, 
  ShieldCheck, 
  Wifi, 
  BookUser, 
  Car, 
  Headphones,
  Battery,
  Utensils,
  Coffee
} from "lucide-react";

const Benefits = () => {
  const benefitItems = [
    "Work Anytime, Anywhere: No fixed shifts – log in and out as you like.",
    "Zero Pressure: No penalties for rejecting low-value orders.",
    "No Hidden Fees: No deductions from your earnings, unlike other apps.",
    "Priority Scheduling: Choose preferred delivery zones for convenience."
  ];

  const partnerBenefits = [
    {
      icon: <Heart className="h-6 w-6 text-xces-blue" />,
      title: "Free Health Checkups",
      description: "Regular medical checkups to keep you healthy."
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-xces-blue" />,
      title: "Insurance Coverage",
      description: "Accident & medical insurance for your safety."
    },
    {
      icon: <Car className="h-6 w-6 text-xces-blue" />,
      title: "Vehicle Maintenance Discounts",
      description: "Save money on fuel, servicing, and repairs."
    },
    {
      icon: <BookUser className="h-6 w-6 text-xces-blue" />,
      title: "Learning & Upskilling Programs",
      description: "Access courses to improve your skills and career."
    }
  ];

  const serviceHubs = [
    {
      icon: <Wifi className="h-6 w-6 text-xces-blue" />,
      title: "Free WiFi",
      description: "Stay connected while waiting for orders"
    },
    {
      icon: <Battery className="h-6 w-6 text-xces-blue" />,
      title: "Phone Charging",
      description: "Never worry about a low battery"
    },
    {
      icon: <Utensils className="h-6 w-6 text-xces-blue" />,
      title: "Affordable Foods",
      description: "Budget-friendly meals between deliveries"
    },
    {
      icon: <Coffee className="h-6 w-6 text-xces-blue" />,
      title: "Rest Areas",
      description: "Comfortable spaces to take a break"
    }
  ];

  return (
    <section id="benefits" className="section-padding bg-xces-black relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Deliver with <span className="xces-gradient-text">XCES</span>?
          </h2>
          <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto">
            Enjoy Maximum Freedom, Flexibility, and Excellent Earnings Without the Stress.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="xces-card transform hover:scale-105 transition-all duration-300 glow-border">
  <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-center">Work on Your Terms</h3>
  <div className="space-y-4">
    {benefitItems.map((item, index) => (
      <div key={index} className="flex items-start gap-3">
        <div className="mt-1 bg-xces-blue/20 rounded-full p-1 flex-shrink-0">
          <Check className="h-4 w-4 text-xces-blue" />
        </div>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300">
          {item}
        </p>
      </div>
    ))}
  </div>
</div>


          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center">Exclusive Partner <span className="text-xces-blue">Benefits</span></h3>
            <p className="text-gray-300 mb-6 text-center">
              At XCES, we care about our delivery partners beyond just earnings.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {partnerBenefits.map((benefit, index) => (
                <div key={index} className="bg-xces-dark p-4 rounded-xl border border-gray-800 hover:border-xces-blue/50 hover:shadow-glow transition-all duration-300 flex flex-col items-center text-center">
                  <div className="bg-xces-blue/10 p-4 rounded-full mb-4">
                    {benefit.icon}
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{benefit.title}</h4>
                  <p className="text-gray-400 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Redesigned Service Hubs section with similar design to Benefits */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            XCES <span className="xces-gradient-text">Service Hubs</span>
          </h3>
          <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto mb-10">
            Access our specially designed service hubs across the city for convenience and comfort
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {serviceHubs.map((hub, index) => (
              <div 
                key={index} 
                className="bg-xces-dark p-4 rounded-xl border border-gray-800 hover:border-xces-blue/50 hover:shadow-glow transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="bg-xces-blue/10 p-4 rounded-full mb-4">
                  {hub.icon}
                </div>
                <h4 className="text-lg font-semibold mb-2">{hub.title}</h4>
                <p className="text-gray-400 text-sm">{hub.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-xces-blue/5 to-transparent"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-xces-blue/5 rounded-full blur-[100px]"></div>
    </section>
  );
};

export default Benefits;
