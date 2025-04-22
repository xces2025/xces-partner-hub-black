
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
    
    // Reset form
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
    <section id="join-us" className="py-16 px-4 bg-[#111]">
      <div className="max-w-md mx-auto">
        <div className="text-left mb-8">
          <h2 className="text-2xl font-bold mb-2">
            Become a Delivery <span className="text-blue-500">Partner</span>
          </h2>
          <p className="text-gray-400">
            Join our network and start earning today
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Form Fields */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name*</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-[#1a1a1a] border border-gray-800 rounded-lg p-3 text-white text-sm focus:outline-none focus:border-blue-500"
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
              className="w-full bg-[#1a1a1a] border border-gray-800 rounded-lg p-3 text-white text-sm focus:outline-none focus:border-blue-500"
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
              className="w-full bg-[#1a1a1a] border border-gray-800 rounded-lg p-3 text-white text-sm focus:outline-none focus:border-blue-500"
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
              className="w-full bg-[#1a1a1a] border border-gray-800 rounded-lg p-3 text-white text-sm focus:outline-none focus:border-blue-500"
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
              className="w-full bg-[#1a1a1a] border border-gray-800 rounded-lg p-3 text-white text-sm focus:outline-none focus:border-blue-500"
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
              className="w-full bg-[#1a1a1a] border border-gray-800 rounded-lg p-3 text-white text-sm focus:outline-none focus:border-blue-500"
            >
              <option value="">Not currently partnered</option>
              <option value="zomato">Zomato</option>
              <option value="swiggy">Swiggy</option>
              <option value="both">Both</option>
              <option value="other">Other</option>
            </select>
          </div>

          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Register Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default Join;
