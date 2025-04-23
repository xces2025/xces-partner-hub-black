
import { useState, useEffect } from 'react';
import { Restaurant, Home, Coffee, Cloud, Cake, Truck, IceCream } from 'lucide-react';

const WhoCanJoin = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('who-can-join');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const partners = [
    { icon: <Home className="w-6 h-6" />, text: "Home Chefs" },
    { icon: <Restaurant className="w-6 h-6" />, text: "Restaurants" },
    { icon: <Coffee className="w-6 h-6" />, text: "Cafés" },
    { icon: <Cloud className="w-6 h-6" />, text: "Cloud Kitchens" },
    { icon: <Cake className="w-6 h-6" />, text: "Sweet Shops" },
    { icon: <Truck className="w-6 h-6" />, text: "Food Trucks" },
    { icon: <IceCream className="w-6 h-6" />, text: "Ice Cream Parlours" },
  ];

  return (
    <section id="who-can-join" className="section-padding bg-gradient-to-b from-xces-dark to-xces-black">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <h2 className={`text-3xl md:text-4xl font-bold mb-12 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
          Who Can <span className="xces-gradient-text">Join?</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {partners.map((partner, index) => (
            <div
              key={partner.text}
              className={`flex flex-col items-center gap-2 p-4 xces-card transform transition-all duration-1000 delay-${index * 100} ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
              }`}
            >
              <div className="text-xces-blue mb-2">
                {partner.icon}
              </div>
              <span className="font-medium">{partner.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoCanJoin;
