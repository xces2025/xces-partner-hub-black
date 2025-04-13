
import { useState } from "react";
import { Check, IndianRupee , Info, Calculator } from "lucide-react";

const Payout = () => {
  const [distance, setDistance] = useState<number>();
  const [orderValue, setOrderValue] = useState<number>();
  
  const calculateEarnings = () => {
    // Base pay for first 4km
    const basePay = 14;
    
    // Additional distance pay (₹8 per km beyond 4km)
    const additionalDistance = Math.max(0, distance - 4);
    const distancePay = additionalDistance * 8;
    
    // Order value commission (8%)
    const orderCommission = orderValue * 0.08;
    
    // Total earnings per order
    const totalEarnings = basePay + distancePay + orderCommission;
    
    return {
      basePay,
      distancePay,
      orderCommission: orderCommission.toFixed(2),
      totalEarnings: totalEarnings.toFixed(2)
    };
  };
  
  const earnings = calculateEarnings();
  
  const payoutItems = [
    "Base Pay: ₹14 per order – Earn from the first 4 kilometer.",
    "Distance Pay: ₹8 per km – No low per-km rates like other apps.",
    "Order Commission Bonus: Get 8% of the order value—more than competitors!",
    "Daily & Weekly Bonuses: Earn additional payouts for completing set deliveries.",
    "Daily Withdrawals: Get your money anytime—no waiting till next week!"
  ];

  return (
    <section id="payout" className="section-padding bg-gradient-to-b from-xces-dark to-xces-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            How Our <span className="xces-gradient-text">Payout Structure</span> Works
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            At XCES, we believe in fair pay and transparent earnings. Our payout structure 
            ensures you earn more per order and keep more of what you make.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="xces-card">
              <div className="flex items-center mb-6">
                <div className="h-12 w-12 rounded-full bg-xces-blue/20 flex items-center justify-center mr-4">
                  <IndianRupee  className="text-xces-blue" size={24} />
                </div>
                <h3 className="text-2xl font-semibold">Guaranteed High Payouts</h3>
              </div>
              
              <div className="space-y-4">
                {payoutItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1 bg-xces-blue/20 rounded-full p-1 flex-shrink-0">
                      <Check className="h-4 w-4 text-xces-blue" />
                    </div>
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed">
          {item}
        </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <div className="xces-card bg-gradient-to-br from-xces-dark to-xces-black h-full shadow-glow">
              <div className="flex items-center mb-6">
                <div className="h-10 w-10 rounded-full bg-xces-blue/20 flex items-center justify-center mr-3 glow-icon">
                  <Calculator className="text-xces-blue" size={20} />
                </div>
                <h3 className="text-xl font-semibold">Earnings Calculator</h3>
              </div>
              
              <div className="space-y-4 mb-6">
                <div>
                  <label htmlFor="distance" className="block text-sm text-gray-400 mb-1">
                    Distance (km)
                  </label>
                  <input
                    id="distance"
                    type="number"
                    min="1"
                    value={distance}
                    onChange={(e) => setDistance(Number(e.target.value))}
                    className="w-full bg-xces-black border border-gray-800 rounded-lg px-3 py-2 focus:border-xces-blue focus:outline-none focus:ring-1 focus:ring-xces-blue/50 text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="orderValue" className="block text-sm text-gray-400 mb-1">
                    Order Value (₹)
                  </label>
                  <input
                    id="orderValue"
                    type="number"
                    min="1"
                    value={orderValue}
                    onChange={(e) => setOrderValue(Number(e.target.value))}
                    className="w-full bg-xces-black border border-gray-800 rounded-lg px-3 py-2 focus:border-xces-blue focus:outline-none focus:ring-1 focus:ring-xces-blue/50 text-white"
                  />
                </div>
              </div>
              
              <div className="bg-xces-black p-4 rounded-lg border border-gray-800 mb-4 glow-border">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-400">Base Pay</span>
                  <span className="font-medium">₹{earnings.basePay}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-400">
                    Distance Pay {distance > 4 ? `(${distance-4} km beyond 4 km)` : ''}
                  </span>
                  <span className="font-medium">₹{earnings.distancePay}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-400">Order Value (8%)</span>
                  <span className="font-medium">₹{earnings.orderCommission}</span>
                </div>
                <div className="border-t border-gray-700 mt-2 pt-2 flex justify-between">
                  <span className="text-gray-300">Per Order Total</span>
                  <span className="font-bold glow-text">₹{earnings.totalEarnings}</span>
                </div>
              </div>
              
              <div className="mt-4 flex items-start">
                <Info size={16} className="text-xces-blue mr-2 mt-0.5 flex-shrink-0" />
                <p className="text-xs text-gray-400">
                  This calculator provides an estimate. Actual earnings may vary based on peak hours, 
                  incentives, and other bonuses available during your delivery time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payout;
