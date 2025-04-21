
import React, { useState, useEffect } from "react";
import { Calculator, TrendingUp, TrendingDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";

const SavingsCalculator = () => {
  const [revenue, setRevenue] = useState<number>(100000);
  const [sliderValue, setSliderValue] = useState<number[]>([100000]);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setIsAnimated(true);
  }, []);

  const handleSliderChange = (value: number[]) => {
    setSliderValue(value);
    setRevenue(value[0]);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    if (value >= 0 && value <= 500000) {
      setRevenue(value);
      setSliderValue([value]);
    }
  };

  const format = (n: number) => n.toLocaleString("en-IN");
  
  const competitorLoss = Math.floor(revenue * 0.3);
  const xcesGain = Math.floor(revenue * 0.3);

  return (
    <section className="section-padding bg-gradient-to-b from-xces-dark to-xces-black">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            See the <span className="xces-gradient-text">Savings</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Calculate how much more you can earn with XCES compared to traditional food delivery platforms.
          </p>
        </div>

        <div className="bg-gradient-to-br from-xces-dark to-black border border-xces-blue/20 rounded-2xl shadow-glow overflow-hidden">
          <div className="p-6 sm:p-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-12 w-12 rounded-full bg-xces-blue/20 flex items-center justify-center">
                <Calculator className="text-xces-blue" size={24} />
              </div>
              <h3 className="text-2xl font-bold">Savings Calculator</h3>
            </div>

            <div className="space-y-6">
              <div>
                <label htmlFor="revenue" className="block text-lg font-medium text-gray-200 mb-2">
                  Your monthly online revenue
                </label>
                <div className="flex items-center space-x-2">
                  <span className="text-xl font-medium">₹</span>
                  <Input
                    id="revenue"
                    type="number"
                    min={0}
                    max={500000}
                    value={revenue}
                    onChange={handleInputChange}
                    className="bg-xces-black border border-xces-blue/40 text-xl font-medium text-white focus:border-xces-blue focus:ring-1 focus:ring-xces-blue/50"
                  />
                </div>
              </div>

              <div className="py-4">
                <Slider
                  value={sliderValue}
                  min={5000}
                  max={500000}
                  step={5000}
                  onValueChange={handleSliderChange}
                  className="py-4"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>₹5,000</span>
                  <span>₹500,000</span>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className={`bg-red-900/10 border border-red-500/20 rounded-xl p-5 transition-all duration-700 transform ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="font-medium text-gray-300">Other Platforms</h4>
                    <div className="flex items-center bg-red-500/20 text-red-400 text-sm px-2 py-1 rounded">
                      <TrendingDown size={16} className="mr-1" />
                      <span>-30%</span>
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-red-400 flex items-center gap-1">
                    <span>-₹{format(competitorLoss)}</span>
                  </div>
                  <p className="mt-2 text-sm text-gray-400">Lost to commission fees</p>
                </div>

                <div className={`bg-xces-blue/10 border border-xces-blue/20 rounded-xl p-5 transition-all duration-700 transform ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'} delay-150`}>
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="font-medium text-gray-300">With XCES</h4>
                    <div className="flex items-center bg-xces-blue/20 text-xces-blue text-sm px-2 py-1 rounded">
                      <TrendingUp size={16} className="mr-1" />
                      <span>+30%</span>
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-xces-blue flex items-center gap-1">
                    <span>+₹{format(xcesGain)}</span>
                  </div>
                  <p className="mt-2 text-sm text-gray-400">Additional profit</p>
                </div>
              </div>

              <div className="mt-4 p-4 bg-gradient-to-r from-xces-blue/5 to-transparent border-l-4 border-xces-blue rounded text-sm text-gray-300">
                <p className="font-medium">Monthly Savings Calculation</p>
                <p className="mt-1">Based on typical 30% commission charged by other food delivery platforms. Your actual savings may be higher depending on your business model and order volume.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SavingsCalculator;
