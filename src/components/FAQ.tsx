import { ChevronDown } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqData = [
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
    answer: "We share limited analytics like top dishes, timing trends, and repeat orders — without compromising user data."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-16 px-4 bg-gradient-to-br from-[#111] to-[#1a1a1a]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Frequently Asked <span className="text-blue-500">Questions</span>
          </h2>
          <p className="text-lg text-gray-400">
            Everything you need to know about becoming an XCES delivery partner
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqData.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-gray-800/50 rounded-xl overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#222] hover:border-blue-500/30 transition-all duration-300"
            >
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                <span className="text-gray-200 text-base font-medium">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <div className="text-gray-400 text-base leading-relaxed">{faq.answer}</div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
