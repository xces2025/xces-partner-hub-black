import React, { useState } from "react";
import FoodHero from "@/components/FoodHero";
import { 
  Check, 
  DollarSign, 
  Users, 
  FileText, 
  CalendarCheck,
  ListCheck,
  BadgePercent,
  Rocket
} from "lucide-react";
import PricingExplainer from "@/components/PricingExplainer";
import SavingsCalculator from "@/components/SavingsCalculator";

const benefitList = [
  {
    title: "Access to Local Customer Data",
    description: "Know who's ordering, when, and what they love.",
    icon: "users",
  },
  {
    title: "Dedicated Sections",
    description: "Separate spaces for Restaurants and Home Chefs to shine.",
    icon: "list-check",
  },
  {
    title: "Free Basic Packaging Material",
    description: "We've got your first packaging needs covered.",
    icon: "box",
  },
  {
    title: "Ad Options that Work for You",
    description: "Promote your food — without paying high per click commissions.",
    icon: "badge-percent",
  },
  {
    title: "Your Own Business Growth Team",
    description: "We help you grow, not just list.",
    icon: "rocket",
  },
];

const BoxIcon = () => (
  <svg
    className="w-8 h-8 text-xces-blue"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <path d="M16 3v4M8 3v4M3 11h18" />
  </svg>
);

const iconComponents: Record<string, React.ReactNode> = {
  users: <Users className="w-8 h-8 text-xces-blue" />,
  "list-check": <ListCheck className="w-8 h-8 text-xces-blue" />,
  "badge-percent": <BadgePercent className="w-8 h-8 text-xces-blue" />,
  rocket: <Rocket className="w-8 h-8 text-xces-blue" />,
  box: <BoxIcon />,
};

const WhyXCES = () => (
  <section id="why-xces" className="section-padding bg-gradient-to-b from-xces-black to-xces-dark">
    <div className="container mx-auto px-4 max-w-3xl text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-5">
        Why <span className="xces-gradient-text">XCES?</span>
      </h2>
      <p className="text-lg text-gray-300 mb-8">
        XCES is a food delivery platform built for food entrepreneurs — from home chefs to restaurants, food trucks to cloud kitchens.<br /><br />
        <span className="block font-semibold text-xces-blue mt-2 mb-0">Unlike other platforms, we don’t eat into your earnings.</span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="xces-card py-8">
          <DollarSign size={32} className="mx-auto text-xces-blue mb-2" />
          <h3 className="font-bold text-lg mb-2">0% Commission</h3>
          <p>No deductions from your food sales—keep everything you earn.</p>
        </div>
        <div className="xces-card py-8">
          <FileText size={32} className="mx-auto text-xces-blue mb-2" />
          <h3 className="font-bold text-lg mb-2">No Hidden Fees</h3>
          <p>Transparent pricing, so you always know what you’ll pay.</p>
        </div>
        <div className="xces-card py-8">
          <Users size={32} className="mx-auto text-xces-blue mb-2" />
          <h3 className="font-bold text-lg mb-2">No Delivery Charge</h3>
          <p>No added delivery markup for your customers.</p>
        </div>
      </div>
    </div>
  </section>
);

const WhatYouGet = () => (
  <section className="section-padding bg-xces-black">
    <div className="container mx-auto px-4 max-w-5xl text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        What You Get with <span className="xces-gradient-text">XCES</span>
      </h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {benefitList.map((item, idx) => (
          <div
            key={item.title}
            className="bg-gradient-to-tr from-xces-dark to-xces-blue/5 border border-xces-blue/20 rounded-2xl shadow-glow p-6 flex flex-col items-center text-center hover:shadow-glow-lg transition-all duration-300 animate-fade-in"
          >
            <div className="mb-3">{iconComponents[item.icon]}</div>
            <h3 className="font-bold text-lg mb-1 text-white">{idx + 1}. {item.title}</h3>
            <p className="text-gray-300 text-base">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const WhoCanJoin = () => (
  <section className="section-padding bg-gradient-to-b from-xces-dark to-xces-black">
    <div className="container mx-auto px-4 text-center max-w-2xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-7">Who Can Join?</h2>
      <div className="flex flex-wrap justify-center gap-4 text-base md:text-lg font-medium">
        <span className="bg-xces-blue/10 text-xces-blue px-5 py-2 rounded-full">Home Chefs</span>
        <span className="bg-xces-blue/10 text-xces-blue px-5 py-2 rounded-full">Restaurants</span>
        <span className="bg-xces-blue/10 text-xces-blue px-5 py-2 rounded-full">Cafés</span>
        <span className="bg-xces-blue/10 text-xces-blue px-5 py-2 rounded-full">Cloud Kitchens</span>
        <span className="bg-xces-blue/10 text-xces-blue px-5 py-2 rounded-full">Sweet Shops</span>
        <span className="bg-xces-blue/10 text-xces-blue px-5 py-2 rounded-full">Food Trucks</span>
        <span className="bg-xces-blue/10 text-xces-blue px-5 py-2 rounded-full">Ice Cream Parlours</span>
      </div>
    </div>
  </section>
);

const Subscription = () => (
  <section className="py-16 px-4 bg-xces-black relative">
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          Subscription <span className="xces-gradient-text">Plan</span>
        </h2>
      </div>
      <div className="w-full bg-gradient-to-br from-xces-dark to-black rounded-2xl shadow-lg p-7 relative">
        <div className="flex items-end gap-2 mb-3">
          <h3 className="text-4xl sm:text-5xl font-extrabold">₹349</h3>
          <span className="text-gray-400 mb-1 text-lg">/month</span>
        </div>
        <p className="mb-6 text-lg text-gray-300">
          Instead of commission, we charge a flat ₹349/month.
        </p>
        <ul className="space-y-3 mb-7 text-base text-left">
          <li className="flex items-center">
            <Check className="text-xces-blue mr-2" size={20} /> Access to XCES’ growing customer base
          </li>
          <li className="flex items-center">
            <Check className="text-xces-blue mr-2" size={20} /> Premium Ads & Promotion Tools
          </li>
          <li className="flex items-center">
            <Check className="text-xces-blue mr-2" size={20} /> Super-fast Delivery Network
          </li>
          <li className="flex items-center">
            <Check className="text-xces-blue mr-2" size={20} /> Instant Payouts
          </li>
          <li className="flex items-center">
            <Check className="text-xces-blue mr-2" size={20} /> Customer Insights
          </li>
          <li className="flex items-center">
            <Check className="text-xces-blue mr-2" size={20} /> Business Growth Support Team
          </li>
        </ul>
        <div className="mb-4 text-xces-blue font-bold">
          <span className="block mb-1">Bonus:</span>
          Get 3 months FREE when you join now!<br />
          <span className="text-sm text-gray-300">And if you don’t receive a single order, we refund your money — no questions asked.</span>
        </div>
        <a href="#become-partner" className="block xces-btn mt-4 w-full text-center">Claim Offer</a>
      </div>
    </div>
    <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-xces-blue/5 rounded-full blur-3xl"></div>
  </section>
);

const SignupForm = () => {
  const [form, setForm] = useState({
    founder: "",
    brand: "",
    phone: "",
    city: "",
    state: "",
    ownership: "franchise",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
    setForm({
      founder: "",
      brand: "",
      phone: "",
      city: "",
      state: "",
      ownership: "franchise"
    });
  };

  return (
    <section id="become-partner" className="section-padding bg-xces-black">
      <div className="container mx-auto px-4 max-w-lg">
        <div className="xces-card p-8">
          <h3 className="text-2xl font-bold mb-3 text-center">Become an Early Food Partner</h3>
          <form onSubmit={handleSubmit} className="space-y-5 mt-6">
            <div>
              <label htmlFor="founder" className="block text-gray-300 mb-1 font-medium">Founder Name</label>
              <input id="founder" name="founder" value={form.founder} onChange={handleChange} required className="xces-input" placeholder="Your Name" />
            </div>
            <div>
              <label htmlFor="brand" className="block text-gray-300 mb-1 font-medium">Restaurant/Brand Name</label>
              <input id="brand" name="brand" value={form.brand} onChange={handleChange} required className="xces-input" placeholder="Business Name" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-gray-300 mb-1 font-medium">Phone Number</label>
              <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} required className="xces-input" placeholder="Phone" />
            </div>
            <div>
              <label htmlFor="city" className="block text-gray-300 mb-1 font-medium">City</label>
              <input id="city" name="city" value={form.city} onChange={handleChange} required className="xces-input" placeholder="City" />
            </div>
            <div>
              <label htmlFor="state" className="block text-gray-300 mb-1 font-medium">State</label>
              <input id="state" name="state" value={form.state} onChange={handleChange} required className="xces-input" placeholder="State" />
            </div>
            <div>
              <label htmlFor="ownership" className="block text-gray-300 mb-1 font-medium">Type</label>
              <select
                id="ownership"
                name="ownership"
                value={form.ownership}
                onChange={handleChange}
                className="xces-input"
              >
                <option value="franchise">Franchise</option>
                <option value="self-owned">Self-owned</option>
              </select>
            </div>
            <button type="submit" className="xces-btn w-full mt-4">Submit Now</button>
            {submitted && (
              <div className="text-green-400 mt-4 text-center font-medium">
                Thank you, we'll contact you soon!
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

const faqs = [
  {
    question: "What is XCES' pricing?",
    answer: "We charge 0% commission and a flat ₹349/month. Others take 30–40% from each order."
  },
  {
    question: "How can I list on XCES?",
    answer: "Sign up on the portal, upload your KYC & menu, and go live in 48 hours."
  },
  {
    question: "What are the benefits?",
    answer: "Higher profits, faster deliveries, free packaging support, and transparent insights."
  },
  {
    question: "How do I receive payments?",
    answer: "Daily settlements. No holding periods."
  },
  {
    question: "Can home chefs join?",
    answer: "Absolutely! Register under our Mom's Magic section."
  },
  {
    question: "Do you provide packaging material?",
    answer: "Yes, we provide eco-friendly basic packaging at no extra cost."
  },
  {
    question: "How does XCES boost my sales?",
    answer: "With AI-driven suggestions, better ad placements, and new restaurant visibility."
  },
  {
    question: "How do I access customer insights?",
    answer:
      "We share limited analytics like top dishes, timing trends, and repeat orders — without compromising user data."
  }
];

const FAQSection = () => (
  <section id="faq" className="section-padding bg-xces-black">
    <div className="container mx-auto px-4 max-w-3xl">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Frequently Asked <span className="xces-gradient-text">Questions</span>
        </h2>
      </div>
      <div className="divide-y divide-gray-800 rounded-2xl overflow-hidden bg-xces-dark shadow-glow border border-gray-800">
        {faqs.map((item, idx) => (
          <details key={idx} className="group p-6">
            <summary className="cursor-pointer font-semibold text-lg flex items-center justify-between">
              {item.question}
              <span className="ml-2 text-xces-blue">{'▼'}</span>
            </summary>
            <p className="mt-3 text-gray-300 leading-relaxed">{item.answer}</p>
          </details>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <div className="animate-glow-pulse h-1 w-20 bg-xces-blue/30 rounded-full"></div>
      </div>
    </div>
  </section>
);

const FoodPartner = () => (
  <div className="min-h-screen bg-xces-black text-white overflow-x-hidden">
    <FoodHero />
    <WhyXCES />
    <WhatYouGet />
    <WhoCanJoin />
    <PricingExplainer />
    <Subscription />
    <SignupForm />
    <FAQSection />
    <footer className="bg-xces-dark border-t border-gray-900 pt-10 pb-6">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row gap-8 items-center sm:justify-between">
        <div className="flex flex-col items-center sm:items-start">
          <img src="/uploads/2nd logo-01.png" alt="XCES logo" className="w-16 mb-2" draggable="false" loading="lazy" />
          <div className="font-semibold text-white text-lg">
            XCES
          </div>
          <div className="text-gray-500 font-light text-sm mb-2">
            Tez nhi , Taste hain<br />
            By Avriti International<br />
            CIN: U74103BR2025PTC073308
          </div>
        </div>
        <div className="mt-3 sm:mt-0 flex flex-col gap-1 text-center sm:text-right text-sm">
          <div>
            <span className="font-semibold text-white">Contact info</span>
            <br />
            <a href="mailto:contact@xcesnow.in" className="text-xces-blue hover:underline">
              contact@xcesnow.in
            </a>
          </div>
          <div className="mt-2">
            <span className="font-semibold text-white">Social links</span>
            <br />
            <a
              href="https://www.instagram.com/xcesindia?igsh=MWRvY2Jla200aDVuag=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-xces-blue hover:underline"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
);

export default FoodPartner;
