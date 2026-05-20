import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

type FAQItem = {
  question: string;
  answer: string;
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: 'What hardware does Nyxore.Cloud use for hosting?',
      answer: 'We host our services exclusively on enterprise high-frequency server hardware. This includes AMD Ryzen 9 7950X3D and Ryzen 9 9950X processors boosting up to 5.7 GHz, ultra-fast enterprise PCIe Gen4 NVMe SSDs in RAID configuration, and high-frequency DDR5 ECC memory.',
    },
    {
      question: 'How long does server deployment take?',
      answer: 'Every server is provisioned instantly. Once your payment is verified by our system, our deployment scripts configure your Minecraft game node or KVM VPS environment and email you login credentials within 60 seconds.',
    },
    {
      question: 'Can I upgrade or downgrade my hosting plan later?',
      answer: 'Yes! You can dynamically scale your server resources (vCPUs, RAM, and storage) up or down at any time through our client portal. Upgrades are applied automatically and do not require files or server data to be re-uploaded.',
    },
    {
      question: 'Where are your datacenter locations?',
      answer: 'To ensure low latency worldwide, we operate premium server locations in New York (US East), Frankfurt (Europe Central), Singapore (Asia Pacific), and Sydney (Australia). You can select your preferred location during the checkout process.',
    },
    {
      question: 'What kind of DDoS protection do you offer?',
      answer: 'Every Nyxore.Cloud plan includes always-on, multi-layered Anycast DDoS mitigation with a capacity of 12+ Tbps. Our edge scrubbing network filters out malicious volumetric and protocol attacks instantly, ensuring your server remains online and lag-free.',
    },
    {
      question: 'Do you support modpacks and custom JAR files on Minecraft servers?',
      answer: 'Absolutely. Our premium game panel includes a built-in One-Click Installer for over 100 popular modpacks (including Feed The Beast, Pixelmon, RLCraft) and server jars (Paper, Purpur, Forge, Fabric). You can also upload any custom JAR file via our web file manager or SFTP.',
    },
  ];

  const toggleFAQ = (idx: number) => {
    if (openIndex === idx) {
      setOpenIndex(null);
    } else {
      setOpenIndex(idx);
    }
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-[#080312] grid-bg">
      {/* Background glow overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-brand-vibrant/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold tracking-widest text-brand-pink uppercase">
            Got Questions?
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-cream">
            Frequently Asked Questions
          </h2>
          <p className="text-brand-cream/60 text-sm font-sans">
            Need help? Here are the most common questions about our VPS and Minecraft hosting configurations.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? 'glass-panel border-brand-pink/20 shadow-lg'
                    : 'glass-panel border-brand-pink/5 hover:border-brand-pink/15'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="font-display font-semibold text-brand-cream text-base sm:text-lg pr-4 flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-brand-pink shrink-0" />
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="w-7 h-7 rounded-lg bg-brand-pink/5 flex items-center justify-center border border-brand-pink/10 text-brand-cream/80 hover:text-brand-pink"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-brand-cream/65 text-sm sm:text-base font-sans leading-relaxed border-t border-brand-pink/5 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
