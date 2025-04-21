
import React from "react";
import { DollarSign, CircleDollarSign, Percent, Equal } from "lucide-react";

const PricingExplainer = () => (
  <section className="section-padding bg-xces-black">
    <div className="container mx-auto px-4 max-w-5xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          How Our <span className="xces-gradient-text">Pricing</span> Works
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Discover how our transparent and smart pricing helps you keep more of what you earn, 
          and lets your customers enjoy more value for less.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        {/* XCES Model */}
        <div className="flex-1 bg-gradient-to-tr from-xces-dark to-xces-blue/10 border-2 border-xces-blue/30 rounded-3xl p-8 shadow-glow-lg relative animate-fade-in">
          <div className="flex flex-col items-center mb-6">
            <span className="bg-xces-blue/30 p-4 rounded-xl shadow-glow">
              <CircleDollarSign className="text-xces-blue" size={36} />
            </span>
            <h3 className="text-2xl font-bold mt-4 mb-2">XCES 0% Commission Model</h3>
            <span className="text-sm bg-xces-blue/10 text-xces-blue rounded-full px-3 py-1 font-semibold mb-2">Keep All Your Earnings</span>
          </div>
          <div className="bg-xces-dark/80 rounded-xl p-5 space-y-3 text-gray-200 text-lg leading-relaxed border border-xces-blue/20">
            <p>
              <span className="font-bold text-white">You list pizza:</span> ₹100
            </p>
            <div className="flex items-center gap-2 text-center justify-center">
              <Equal className="text-xces-blue" size={16} />
              <span>
                <span className="font-bold text-white">Customer pays:</span> ₹112 
                <span className="ml-1 text-xs text-xces-blue bg-xces-blue/10 rounded px-2 py-0.5">includes XCES fee</span>
              </span>
            </div>
            <p>
              <span className="font-bold text-xces-blue">You receive:</span>{" "}
              <span className="text-green-400 font-bold">₹100</span>
              <span className="text-xs ml-1"> (full price!)</span>
            </p>
            <div className="h-0.5 w-16 mx-auto bg-xces-blue/40 my-4 rounded"></div>
            <ul className="text-sm space-y-2 mt-2">
              <li><span className="text-xces-blue font-bold mr-1">✓</span>No commission deducted</li>
              <li><span className="text-xces-blue font-bold mr-1">✓</span>Customer sees true price + small platform fee</li>
              <li><span className="text-xces-blue font-bold mr-1">✓</span><span className="font-medium">Transparent</span> for both sides</li>
            </ul>
          </div>
        </div>
        {/* Traditional Model */}
        <div className="flex-1 bg-gradient-to-tr from-red-950 to-red-800/10 border-2 border-red-500/30 rounded-3xl p-8 shadow-glow-lg relative animate-fade-in">
          <div className="flex flex-col items-center mb-6">
            <span className="bg-red-700/30 p-4 rounded-xl shadow-glow">
              <DollarSign className="text-red-400" size={36} />
            </span>
            <h3 className="text-2xl font-bold mt-4 mb-2">Other Platforms</h3>
            <span className="text-sm bg-red-800/10 text-red-400 rounded-full px-3 py-1 font-semibold mb-2">30-40% Commission</span>
          </div>
          <div className="bg-xces-dark/80 rounded-xl p-5 space-y-3 text-gray-200 text-lg leading-relaxed border border-red-500/20">
            <p>
              <span className="font-bold text-white">You want to earn:</span> ₹100
            </p>
            <div className="flex items-center gap-2 text-center justify-center">
              <Percent className="text-red-400" size={16} />
              <span>
                <span className="font-bold text-white">List price:</span> ₹140-150 
                <span className="ml-1 text-xs text-red-400 bg-red-500/10 rounded px-2 py-0.5">commission markup</span>
              </span>
            </div>
            <p>
              <span className="font-bold text-red-400">You get:</span>{" "}
              <span className="text-red-400 font-bold">₹100</span>
              <span className="text-xs ml-1">(after fees)</span>
            </p>
            <div className="h-0.5 w-16 mx-auto bg-red-400/30 my-4 rounded"></div>
            <ul className="text-sm space-y-2 mt-2">
              <li><span className="text-red-400 font-bold mr-1">✗</span>High commission eats into earnings</li>
              <li><span className="text-red-400 font-bold mr-1">✗</span>Customer pays much more</li>
              <li><span className="text-red-400 font-bold mr-1">✗</span>Zero price transparency</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-12 max-w-3xl mx-auto bg-xces-blue/10 p-6 rounded-2xl border border-xces-blue/20 shadow-glow">
        <h4 className="text-xl font-bold text-xces-blue mb-2 flex items-center gap-2">
          <Percent size={20} className="inline-block" /> The Savings Are Obvious:
        </h4>
        <ul className="space-y-2 text-gray-200 text-lg">
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
  </section>
);

export default PricingExplainer;
