import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const Join = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    state: "",
    vehicle: "bike",
    foodPartner: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Application Submitted!",
      description: "We'll contact you shortly to complete your registration.",
      duration: 5000,
    });
    
    setFormData({
      name: "",
      phone: "",
      city: "",
      state:"",
      vehicle: "bike",
      foodPartner:""
    });
  };

  return (
    <section id="join-us" className="py-16 px-4 bg-gradient-to-br from-[#111] to-[#1a1a1a]">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Become a Delivery <span className="text-blue-500">Partner</span>
          </h2>
          <p className="text-lg text-gray-400">
            Join our network and start earning today
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-gradient-to-br from-[#1a1a1a] to-[#222] p-8 rounded-2xl border border-gray-800/50">
          <div className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name*</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-[#111] border border-gray-800 rounded-xl p-3.5 text-white text-base focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Phone Number*</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full bg-[#111] border border-gray-800 rounded-xl p-3.5 text-white text-base focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                placeholder="10-digit mobile number"
              />
            </div>

            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-300 mb-2">City*</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="w-full bg-[#111] border border-gray-800 rounded-xl p-3.5 text-white text-base focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                placeholder="Your city"
              />
            </div>

            <div>
              <label htmlFor="state" className="block text-sm font-medium text-gray-300 mb-2">State*</label>
              <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
                className="w-full bg-[#111] border border-gray-800 rounded-xl p-3.5 text-white text-base focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                placeholder="Your state"
              />
            </div>

            <div>
              <label htmlFor="vehicle" className="block text-sm font-medium text-gray-300 mb-2">Your Vehicle</label>
              <select
                id="vehicle"
                name="vehicle"
                value={formData.vehicle}
                onChange={handleChange}
                className="w-full bg-[#111] border border-gray-800 rounded-xl p-3.5 text-white text-base focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
              >
                <option value="bike">Bike</option>
                <option value="scooter">Scooter</option>
                <option value="bicycle">Bicycle</option>
              </select>
            </div>

            <div>
              <label htmlFor="foodPartner" className="block text-sm font-medium text-gray-300 mb-2">Currently working with</label>
              <select
                id="foodPartner"
                name="foodPartner"
                value={formData.foodPartner}
                onChange={handleChange}
                className="w-full bg-[#111] border border-gray-800 rounded-xl p-3.5 text-white text-base focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
              >
                <option value="">Not currently partnered</option>
                <option value="zomato">Zomato</option>
                <option value="swiggy">Swiggy</option>
                <option value="both">Both</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <button 
            type="submit" 
            className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3.5 rounded-xl font-medium hover:from-blue-500 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-blue-500/20"
          >
            Register Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default Join;
