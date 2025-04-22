
import React from "react";
import { ArrowRight } from "lucide-react";

const FoodHero = () => (
  <section className="pt-28 md:pt-32 pb-14 md:pb-18 relative overflow-hidden">
    <div className="container mx-auto px-4 text-center max-w-2xl">
      <img
        src="/uploads/2nd logo-01.png"
        alt="XCES Logo"
        className="mx-auto w-32 md:w-40 mb-6"
        loading="lazy"
        draggable="false"
      />
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
        Partner With <span className="xces-gradient-text">XCES</span> For Success
      </h1>
      <p className="text-xl md:text-2xl mb-3 font-medium text-xces-blue">
        Zero Commission. Maximum Profit.
      </p>
      <p className="text-lg text-gray-200 mb-6">
        Keep <span className="font-bold text-white">100%</span> of your food sales revenue
      </p>
      <div className="flex flex-col mt-2 gap-4 sm:flex-row justify-center">
        <a href="#become-partner" className="xces-btn text-base font-semibold">
          Join as Food Partner <ArrowRight className="inline-block ml-2" size={18} />
        </a>
        <a href="#why-xces" className="xces-btn-outline text-base font-semibold">
          Learn More
        </a>
      </div>
      <div className="text-sm text-gray-300 mt-7">
        By Avriti International &nbsp;|&nbsp; CIN: <span className="font-mono">U74103BR2025PTC073308</span>
      </div>
    </div>
    <div className="absolute -top-24 -right-24 w-96 h-96 bg-xces-blue/5 rounded-full blur-3xl"></div>
    <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-xces-blue/5 rounded-full blur-3xl"></div>
  </section>
);

export default FoodHero;
