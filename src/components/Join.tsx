
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const Join = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    state:"",
    vehicle: "bike",
    foodPartner:""
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
    <section id="join-us" className="section-padding bg-gradient-to-b from-xces-black to-xces-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join <span className="xces-gradient-text">XCES</span> Today
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Become our early delivery partner and start earning more with XCES.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="xces-card">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-300 mb-2">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-xces-black border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-xces-blue"
                placeholder="Enter your full name"
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-300 mb-2">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full bg-xces-black border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-xces-blue"
                placeholder="Enter your phone number"
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="city" className="block text-gray-300 mb-2">City</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="w-full bg-xces-black border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-xces-blue"
                placeholder="Enter your city"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="state" className="block text-gray-300 mb-2">State</label>
              <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
                className="w-full bg-xces-black border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-xces-blue"
                placeholder="Enter your state"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="vehicle" className="block text-gray-300 mb-2">Vehicle Type</label>
              <select
                id="vehicle"
                name="vehicle"
                value={formData.vehicle}
                onChange={handleChange}
                className="w-full bg-xces-black border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-xces-blue"
              >
                <option value="bike">Bike</option>
                <option value="scooter">Scooter</option>
                <option value="bicycle">Bicycle</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="vehicle" className="block text-gray-300 mb-2">Currently i am Food Partner</label>
              <select
                id="foodPartner"
                name="foodPartner"
                value={formData.foodPartner}
                onChange={handleChange}
                className="w-full bg-xces-black border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-xces-blue"
              >
                <option value="bike">Zomato</option>
                <option value="scooter">Swiggy</option>
                <option value="bicycle">Both</option>
                <option value="bicycle">other</option>

              </select>
            </div>
            
            <button type="submit" className="xces-btn w-full">
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Join;
