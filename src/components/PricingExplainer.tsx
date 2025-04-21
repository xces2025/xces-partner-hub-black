
import React from "react";
import { DollarSign, CircleDollarSign } from "lucide-react";

const PricingExplainer = () => (
  <section className="section-padding bg-xces-black">
    <div className="container mx-auto px-4 max-w-4xl">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          How Our <span className="xces-gradient-text">Pricing</span> Works
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Our transparent pricing model puts more money in your pocket and saves your customers money too.
        </p>
      </div>
      
      <div className="bg-gradient-to-br from-xces-dark to-black border border-xces-blue/20 rounded-2xl shadow-glow overflow-hidden">
        <div className="p-6 sm:p-8 md:p-10">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            <div className="bg-xces-blue/10 rounded-2xl p-6 flex-1 border border-xces-blue/20">
              <div className="h-14 w-14 rounded-full bg-xces-blue/20 flex items-center justify-center mb-4 mx-auto md:mx-0">
                <CircleDollarSign className="text-xces-blue" size={28} />
              </div>
              <h3 className="font-bold text-xl mb-4 text-center md:text-left">0% Commission Model</h3>
              <div className="space-y-3 text-gray-300">
                <p>You sell a pizza for <span className="font-bold text-white">₹100</span></p>
                <p>On XCES, you list it at <span className="font-bold text-white">₹100</span></p>
                <p>We show the customer <span className="font-bold text-white">₹112</span></p>
                <p>Extra <span className="font-bold text-white">₹12</span> is our fee from customer</p>
                <div className="h-0.5 w-16 bg-xces-blue/30 my-4"></div>
                <p className="font-medium text-white">You keep your full <span className="font-bold text-white">₹100</span></p>
              </div>
            </div>

            <div className="bg-red-900/20 rounded-2xl p-6 flex-1 border border-red-500/20">
              <div className="h-14 w-14 rounded-full bg-red-500/20 flex items-center justify-center mb-4 mx-auto md:mx-0">
                <DollarSign className="text-red-400" size={28} />
              </div>
              <h3 className="font-bold text-xl mb-4 text-center md:text-left">Traditional Commission Model</h3>
              <div className="space-y-3 text-gray-300">
                <p>You want to earn <span className="font-bold text-white">₹100</span> for your pizza</p>
                <p>You list it at <span className="font-bold text-white">₹140-150</span> to cover 30-40% commission</p>
                <p>Customer pays <span className="font-bold text-white">₹140-150</span></p>
                <p>You lose <span className="font-bold text-red-400">₹40-50</span> in commission</p>
                <div className="h-0.5 w-16 bg-red-500/30 my-4"></div>
                <p className="font-medium text-white">You keep only your <span className="font-bold text-white">₹100</span></p>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-xces-blue/5 p-6 rounded-xl border border-xces-blue/10">
            <h4 className="text-lg font-bold text-xces-blue mb-2">The Bottom Line:</h4>
            <ul className="space-y-2 text-gray-200">
              <li className="flex items-start gap-2">
                <span className="text-xces-blue font-bold mt-1">✓</span> 
                <span>You earn the <span className="font-bold">same amount</span> on both platforms</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-xces-blue font-bold mt-1">✓</span> 
                <span>Your customers pay <span className="font-bold text-xces-blue">₹30-40 less</span> on XCES</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-xces-blue font-bold mt-1">✓</span> 
                <span>Lower prices = <span className="font-bold">more orders</span> = more revenue</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PricingExplainer;
