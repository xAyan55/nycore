import { motion } from 'framer-motion';
import { ShieldCheck, Network, BadgeCheck } from 'lucide-react';

export default function WhyChooseUs() {
  const comparisonData = [
    { metric: 'CPU Architecture', nyxore: 'Ryzen 9 (5.7 GHz max)', standard: 'Intel Xeon (2.4 GHz max)' },
    { metric: 'Storage Type', nyxore: 'NVMe Gen4 PCIe (7,000MB/s)', standard: 'SATA SSD (500MB/s)' },
    { metric: 'Network Port Speed', nyxore: '10 Gbps Uplinks', standard: '1 Gbps Uplinks' },
    { metric: 'Mitigation Shield', nyxore: 'Included (12+ Tbps Scrubbing)', standard: 'Null Route/Extra Fee' },
    { metric: 'SLA Guarantee', nyxore: '99.99% Uptime Guarantee', standard: 'No SLA Guarantee' },
    { metric: 'Support Response', nyxore: 'Under 15 Minutes Avg', standard: '24-48 Hours Ticket' },
  ];

  const highlights = [
    {
      title: 'Ultra Low Latency',
      description: 'Our routers run multi-homed BGP sessions with premium transit providers (Telia, GTT, Level3) ensuring sub-15ms latency.',
      icon: Network,
    },
    {
      title: 'Easy Control Panel',
      description: 'Deploy instantly and manage games or VPS resources through our premium customized web panel. FTP, backup triggers, and root shell access.',
      icon: BadgeCheck,
    },
    {
      title: 'Automatic Backups',
      description: 'Rest easy knowing we backup your virtual environments daily to remote off-site backup servers. 1-click snapshot restores.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="why-us" className="py-24 relative overflow-hidden bg-[#080312] grid-bg">
      {/* Background glow circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-vibrant/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="text-xs font-semibold tracking-widest text-brand-pink uppercase">
            Proven Superiority
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-cream">
            Why Gamers & Developers Choose Nyxore
          </h2>
          <p className="text-brand-cream/60 text-sm sm:text-base font-sans">
            We don't cut corners on hardware or routing. See how Nyxore.Cloud stacks up against legacy hosting providers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Comparison Table (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 rounded-3xl glass-panel p-6 sm:p-8 border border-brand-pink/10 shadow-2xl relative"
          >
            {/* Header row */}
            <div className="grid grid-cols-3 pb-6 border-b border-brand-pink/10 text-xs sm:text-sm font-semibold tracking-wide uppercase text-brand-cream">
              <div>Infrastructure</div>
              <div className="text-brand-pink font-bold">Nyxore.Cloud</div>
              <div className="text-brand-cream/40">Standard Hosting</div>
            </div>

            {/* Comparison Rows */}
            <div className="divide-y divide-brand-pink/5">
              {comparisonData.map((row, idx) => (
                <div key={idx} className="grid grid-cols-3 py-4.5 text-xs sm:text-sm items-center font-sans">
                  <div className="font-semibold text-brand-cream/90">{row.metric}</div>
                  <div className="text-brand-pink font-semibold flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-vibrant" />
                    <span>{row.nyxore}</span>
                  </div>
                  <div className="text-brand-cream/45">{row.standard}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Core Highlights (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col gap-8"
          >
            {highlights.map((highlight, idx) => {
              const Icon = highlight.icon;
              return (
                <div key={idx} className="flex gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-brand-pink/5 border border-brand-pink/15 flex items-center justify-center text-brand-pink shrink-0 shadow-md">
                    <Icon className="w-5.5 h-5.5" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="font-display font-semibold text-lg text-brand-cream">
                      {highlight.title}
                    </h3>
                    <p className="text-brand-cream/60 text-sm font-sans leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
