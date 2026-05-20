import { motion } from 'framer-motion';
import Pricing from '../components/Pricing';

export default function PricingPage() {
  return (
    <div className="pt-20 bg-dark-bg min-h-screen text-brand-cream overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 flex items-center justify-center overflow-hidden grid-bg">
        {/* Background glowing blobs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-vibrant/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-brand-pink/5 rounded-full blur-[110px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full glass-panel border border-brand-pink/15 text-xs font-semibold text-brand-pink tracking-wide mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-brand-vibrant" />
            <span>Hosting Configurations</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight text-brand-cream max-w-4xl mx-auto"
          >
            Transparent Plans <br />
            <span className="text-gradient font-black">Built for Scaling</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-brand-pink/70 text-base sm:text-lg font-sans max-w-2xl mx-auto leading-relaxed mt-6"
          >
            Compare plans side-by-side. Get Ryzen 9 performance, high-speed NVMe storage, and 12+ Tbps edge protection standard on all servers.
          </motion.p>
        </div>
      </section>

      {/* Main Pricing Grid */}
      <Pricing />
    </div>
  );
}
