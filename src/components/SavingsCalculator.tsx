
import React, { useState, useEffect } from "react";
import { Calculator, TrendingUp, TrendingDown, Percent } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";

const SavingsCalculator = () => {
  const [revenue, setRevenue] = useState<number>(100000);
  const [sliderValue, setSliderValue] = useState<number[]>([100000]);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
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
            Instantly estimate how much more you can earn by switching to XCES.
          </p>
        </div>

        <div className="bg-gradient-to-br from-xces-blue/10 to-xces-dark border border-xces-blue/20 rounded-2xl shadow-glow overflow-hidden">
          <div className="p-6 sm:p-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-12 w-12 rounded-full bg-xces-blue/20 flex items-center justify-center shadow-glow animate-float-slow">
                <Calculator className="text-xces-blue" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-xces-blue">Savings Calculator</h3>
            </div>

            <div className="space-y-6">
              <div>
                <label htmlFor="revenue" className="block text-lg font-medium text-gray-200 mb-2">
                  Your monthly online revenue
                </label>
                <div className="flex items-center space-x-2">
                  <span className="text-xl font-medium text-xces-blue">₹</span>
                  <Input
                    id="revenue"
                    type="number"
                    min={0}
                    max={500000}
                    value={revenue}
                    onChange={handleInputChange}
                    className="bg-xces-black border border-xces-blue/40 text-xl font-medium text-white focus:border-xces-blue focus:ring-1 focus:ring-xces-blue/50 w-52"
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
                {/* Competitor Loss */}
                <div className={`bg-red-900/15 border-l-4 border-red-400/70 rounded-xl p-5 transition-all duration-700 transform ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'} shadow-lg`}>
                  <div className="flex items-center mb-2 gap-2">
                    <TrendingDown size={22} className="text-red-400" />
                    <span className="font-semibold text-gray-200">Other Platforms</span>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <span className="font-medium text-red-400 flex items-center gap-1 text-3xl">
                      -₹{format(competitorLoss)}
                      <Percent className="inline" size={16} />
                    </span>
                    <span className="text-xs text-gray-400">Lost to commission</span>
                  </div>
                  <div className="mt-2 text-xs text-gray-400">
                    Assumes 30% avg. platform fee
                  </div>
                </div>

                {/* XCES Gain */}
                <div className={`bg-xces-blue/15 border-l-4 border-xces-blue/80 rounded-xl p-5 transition-all duration-700 transform ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'} delay-150 shadow-lg`}>
                  <div className="flex items-center mb-2 gap-2">
                    <TrendingUp size={22} className="text-xces-blue" />
                    <span className="font-semibold text-gray-200">With XCES</span>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <span className="font-medium text-xces-blue flex items-center gap-1 text-3xl">
                      +₹{format(xcesGain)}
                      <Percent className="inline" size={16} />
                    </span>
                    <span className="text-xs text-gray-400">Additional profit</span>
                  </div>
                  <div className="mt-2 text-xs text-gray-400">
                    No commission—just flat monthly fee
                  </div>
                </div>
              </div>

              <div className="mt-4 p-4 bg-xces-blue/5 border-l-4 border-xces-blue rounded text-xs text-gray-300">
                <p className="font-medium mb-1">How calculation works:</p>
                <p>
                  Calculated with a typical 30% commission charged by major delivery apps.<br/>
                  Your actual savings may vary by business and volume, but XCES always lets you keep more!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SavingsCalculator;
