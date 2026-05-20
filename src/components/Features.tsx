import { motion } from 'framer-motion';
import { HardDrive, Cpu, Zap, Globe, ShieldAlert, HeartHandshake, PackageCheck, Terminal } from 'lucide-react';

export default function Features() {
  const featuresList = [
    {
      title: 'NVMe SSD Storage',
      description: 'PCIe Gen4 enterprise-grade SSDs offering up to 7,000 MB/s read/write performance. Zero IOPS throttling.',
      icon: HardDrive,
    },
    {
      title: 'Ryzen 9 CPUs',
      description: 'Powered by AMD Ryzen 9 7950X3D and 9950X processors, peaking at 5.7GHz boost clock speed.',
      icon: Cpu,
    },
    {
      title: 'Instant Deployment',
      description: 'Your server gets provisioned automatically in under 60 seconds after successful invoice payment.',
      icon: Zap,
    },
    {
      title: 'Global Locations',
      description: 'Choose from global premium edge datacenters: New York, Frankfurt, Singapore, and Sydney.',
      icon: Globe,
    },
    {
      title: 'DDoS Protection',
      description: 'Always-on DDoS mitigation shield scrubbing up to 12+ Tbps of malicious network traffic.',
      icon: ShieldAlert,
    },
    {
      title: '24/7 Elite Support',
      description: 'Expert server engineers active 24/7/365 to resolve infrastructure and gaming server inquiries.',
      icon: HeartHandshake,
    },
    {
      title: 'One-Click Installer',
      description: 'Easily deploy 100+ Minecraft modpacks, plugins, BungeeCord, Java editions, and server databases.',
      icon: PackageCheck,
    },
    {
      title: 'Full Root Access',
      description: 'Unrestricted root SSH access, dedicated ports, SFTP file access, and custom kernel virtualization.',
      icon: Terminal,
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' as const },
    },
  };

  return (
    <section id="features" className="py-24 relative overflow-hidden bg-[#080312] grid-bg">
      {/* Visual Ambient Glows */}
      <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-brand-vibrant/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[350px] h-[350px] bg-brand-deep/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="text-xs font-semibold tracking-widest text-brand-pink uppercase">
            Built For Speed
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-cream">
            Enterprise Infrastructure Perks
          </h2>
          <p className="text-brand-cream/60 text-sm sm:text-base font-sans">
            Every plan includes elite high-frequency hardware and dedicated edge services standard at no extra cost.
          </p>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {featuresList.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group relative rounded-2xl glass-panel p-6 sm:p-7 hover:border-brand-pink/20 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Micro Ambient Glow inside Card */}
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-brand-vibrant/0 via-brand-vibrant/0 to-brand-pink/0 group-hover:from-brand-vibrant/5 group-hover:to-brand-pink/5 opacity-100 transition-all duration-500 pointer-events-none" />
                
                <div>
                  {/* Icon Block */}
                  <div className="w-11 h-11 rounded-xl bg-brand-vibrant/10 border border-brand-vibrant/20 group-hover:bg-brand-vibrant/25 group-hover:border-brand-vibrant/50 flex items-center justify-center mb-6 transition-all duration-300 text-brand-pink group-hover:text-brand-cream shadow-md">
                    <Icon className="w-5.5 h-5.5 group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  <h3 className="font-display font-semibold text-lg text-brand-cream mb-2 group-hover:text-brand-pink transition-colors duration-200">
                    {feature.title}
                  </h3>
                  <p className="text-brand-cream/60 text-sm font-sans leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
