
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
}

const faqData: FAQItem[] = [
  {
    question: "How does XCES ensure better earnings for delivery partners?",
    answer: "XCES pays delivery partners 8% of the order value + ₹14 base pay + ₹8 per km, which is 2× higher than competitors."
  },
  {
    question: "Are there any joining fees to become a delivery partner?",
    answer: "No, currently joining XCES as a delivery partner is completely free."
  },
  {
    question: "What are the working hours and flexibility?",
    answer: "You can choose your own working hours. Whether full-time or part-time, you decide when to go online and accept orders."
  },
  {
    question: "What additional benefits does XCES provide?",
    answer: (
      <ul className="list-disc pl-5 space-y-2 mt-2">
        <li>Free health checkups and insurance coverage</li>
        <li>Vehicle maintenance discounts</li>
        <li>Learning courses for skill development</li>
        <li>Access to XCES Service Hubs for rest, food, and essentials</li>
      </ul>
    )
  },
  {
    question: "How do I receive my earnings?",
    answer: "Payouts are made daily or weekly to your bank account. You can also opt for instant withdrawal via the XCES app."
  },
  {
    question: "What are XCES Service Hubs?",
    answer: "XCES Service Hubs are rest points with food, phone charging, and washrooms, ensuring comfort and convenience for delivery partners."
  },
  {
    question: "Do I need a specific type of vehicle to join?",
    answer: "No, you can deliver using a bike, scooter, or bicycle."
  },
  {
    question: "How do I sign up as a delivery partner?",
    answer: "Simply download the XCES Delivery Partner app, submit your KYC documents, and start accepting orders once approved."
  }
];

const FAQ = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <section id="faq" className="section-padding bg-xces-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="xces-gradient-text">Questions</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about becoming an XCES delivery partner
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-xces-dark rounded-2xl border border-gray-800 overflow-hidden shadow-glow-sm hover:shadow-glow transition-all duration-500">
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border-b border-gray-800 last:border-b-0 overflow-hidden group"
                >
                  <AccordionTrigger className="py-5 px-6 text-left hover:no-underline group-hover:text-xces-blue transition-colors duration-300">
                    <span className="font-medium text-lg group-hover:text-xces-blue transition-colors duration-300">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 text-gray-400">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
        
        <div className="flex justify-center mt-10">
          <div className="animate-glow-pulse h-1 w-20 bg-xces-blue/30 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
