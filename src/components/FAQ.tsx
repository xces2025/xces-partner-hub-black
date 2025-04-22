
import { ChevronDown } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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
