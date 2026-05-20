import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Cpu, HardDrive, Zap, Server, Sliders } from 'lucide-react';

type Plan = {
  name: string;
  price: string;
  ram: string;
  cpu: string;
  storage: string;
  bandwidth: string;
  portSpeed: string;
  isPopular: boolean;
  features: string[];
};

export default function Pricing() {
  const [activeCategory, setActiveCategory] = useState<'vps' | 'minecraft'>('vps');
  const [vpsTier, setVpsTier] = useState<'budget' | 'premium'>('budget');

  // Custom Plan state for VPS
  const [customCpu, setCustomCpu] = useState(4);
  const [customRam, setCustomRam] = useState(16);
  const [customStorage, setCustomStorage] = useState(80);

  const budgetVpsPlans: Plan[] = [
    {
      name: 'Basic Plan',
      price: '1.00',
      ram: '4 GB DDR5',
      cpu: '1 vCPU Core',
      storage: '28 GB NVMe Gen4',
      bandwidth: '5 TB Bandwidth',
      portSpeed: '10 Gbps Port',
      isPopular: false,
      features: ['Dedicated IPv4 Address', 'Full KVM Virtualization', '99.99% Uptime Guarantee', 'Instant Setup & OS Reinstall'],
    },
    {
      name: 'Starter Plan',
      price: '2.50',
      ram: '8 GB DDR5',
      cpu: '2 vCPU Cores',
      storage: '32 GB NVMe Gen4',
      bandwidth: '10 TB Bandwidth',
      portSpeed: '10 Gbps Port',
      isPopular: false,
      features: ['Dedicated IPv4 Address', 'Full KVM Virtualization', '99.99% Uptime Guarantee', 'Instant Setup & OS Reinstall'],
    },
    {
      name: 'Standard Plan',
      price: '4.00',
      ram: '14 GB DDR5',
      cpu: '3 vCPU Cores',
      storage: '48 GB NVMe Gen4',
      bandwidth: '15 TB Bandwidth',
      portSpeed: '10 Gbps Port',
      isPopular: false,
      features: ['Dedicated IPv4 Address', 'Full KVM Virtualization', '99.99% Uptime Guarantee', 'Instant Setup & OS Reinstall'],
    },
    {
      name: 'High Plan',
      price: '5.99',
      ram: '18 GB DDR5',
      cpu: '3 vCPU Cores',
      storage: '55 GB NVMe Gen4',
      bandwidth: '20 TB Bandwidth',
      portSpeed: '10 Gbps Port',
      isPopular: false,
      features: ['Dedicated IPv4 Address', 'Full KVM Virtualization', '99.99% Uptime Guarantee', 'Instant Setup & OS Reinstall', 'Advanced DDoS Protection'],
    },
    {
      name: 'Extreme Plan',
      price: '7.00',
      ram: '24 GB DDR5',
      cpu: '4 vCPU Cores',
      storage: '64 GB NVMe Gen4',
      bandwidth: '25 TB Bandwidth',
      portSpeed: '10 Gbps Port',
      isPopular: true,
      features: ['Dedicated IPv4 Address', 'Full KVM Virtualization', '99.99% Uptime Guarantee', 'Instant Setup & OS Reinstall', 'Advanced DDoS Protection', 'Weekly Automatic Backups'],
    },
    {
      name: 'Ultra Plan',
      price: '8.00',
      ram: '28 GB DDR5',
      cpu: '5 vCPU Cores',
      storage: '75 GB NVMe Gen4',
      bandwidth: '30 TB Bandwidth',
      portSpeed: '10 Gbps Port',
      isPopular: false,
      features: ['Dedicated IPv4 Address', 'Full KVM Virtualization', '99.99% Uptime Guarantee', 'Instant Setup & OS Reinstall', 'Advanced DDoS Protection', 'Weekly Automatic Backups'],
    },
    {
      name: 'Enterprise Plan',
      price: '9.99',
      ram: '32 GB DDR5',
      cpu: '5 vCPU Cores',
      storage: '100 GB NVMe Gen4',
      bandwidth: 'Unlimited Bandwidth',
      portSpeed: '10 Gbps Port',
      isPopular: false,
      features: ['Dedicated IPv4 Address', 'Full KVM Virtualization', '99.99% SLA Guarantee', 'Instant Setup & OS Reinstall', 'Enterprise DDoS Scrubbing Shield', 'Daily Automatic Backups'],
    },
    {
      name: 'Godly Plan',
      price: '11.99',
      ram: '64 GB DDR5',
      cpu: '6 vCPU Cores',
      storage: '150 GB SSD',
      bandwidth: 'Unlimited Bandwidth',
      portSpeed: '10 Gbps Port',
      isPopular: false,
      features: ['2x Dedicated IPv4 Addresses', 'Full KVM Virtualization', '99.99% SLA Guarantee', 'Instant Setup & OS Reinstall', 'Enterprise DDoS Scrubbing Shield', 'Daily Automatic Backups', 'Priority Support Tier'],
    },
  ];

  const premiumVpsPlans: Plan[] = [
    {
      name: 'Basic Plan',
      price: '2.00',
      ram: '4 GB DDR5',
      cpu: '1 vCPU Core',
      storage: '28 GB NVMe Gen4',
      bandwidth: '5 TB Bandwidth',
      portSpeed: '10 Gbps Port',
      isPopular: false,
      features: ['Dedicated IPv4 Address', 'Full KVM Virtualization', '99.99% Uptime Guarantee', 'Instant Setup & OS Reinstall'],
    },
    {
      name: 'Starter Plan',
      price: '3.50',
      ram: '8 GB DDR5',
      cpu: '2 vCPU Cores',
      storage: '32 GB NVMe Gen4',
      bandwidth: '10 TB Bandwidth',
      portSpeed: '10 Gbps Port',
      isPopular: false,
      features: ['Dedicated IPv4 Address', 'Full KVM Virtualization', '99.99% Uptime Guarantee', 'Instant Setup & OS Reinstall'],
    },
    {
      name: 'Standard Plan',
      price: '5.00',
      ram: '14 GB DDR5',
      cpu: '3 vCPU Cores',
      storage: '48 GB NVMe Gen4',
      bandwidth: '15 TB Bandwidth',
      portSpeed: '10 Gbps Port',
      isPopular: false,
      features: ['Dedicated IPv4 Address', 'Full KVM Virtualization', '99.99% Uptime Guarantee', 'Instant Setup & OS Reinstall'],
    },
    {
      name: 'High Plan',
      price: '8.00',
      ram: '18 GB DDR5',
      cpu: '3 vCPU Cores',
      storage: '55 GB NVMe Gen4',
      bandwidth: '20 TB Bandwidth',
      portSpeed: '10 Gbps Port',
      isPopular: false,
      features: ['Dedicated IPv4 Address', 'Full KVM Virtualization', '99.99% Uptime Guarantee', 'Instant Setup & OS Reinstall', 'Advanced DDoS Protection'],
    },
    {
      name: 'Extreme Plan',
      price: '10.99',
      ram: '24 GB DDR5',
      cpu: '4 vCPU Cores',
      storage: '64 GB NVMe Gen4',
      bandwidth: '25 TB Bandwidth',
      portSpeed: '10 Gbps Port',
      isPopular: true,
      features: ['Dedicated IPv4 Address', 'Full KVM Virtualization', '99.99% Uptime Guarantee', 'Instant Setup & OS Reinstall', 'Advanced DDoS Protection', 'Weekly Automatic Backups'],
    },
    {
      name: 'Ultra Plan',
      price: '13.00',
      ram: '28 GB DDR5',
      cpu: '5 vCPU Cores',
      storage: '75 GB NVMe Gen4',
      bandwidth: '30 TB Bandwidth',
      portSpeed: '10 Gbps Port',
      isPopular: false,
      features: ['Dedicated IPv4 Address', 'Full KVM Virtualization', '99.99% Uptime Guarantee', 'Instant Setup & OS Reinstall', 'Advanced DDoS Protection', 'Weekly Automatic Backups'],
    },
    {
      name: 'Enterprise Plan',
      price: '15.00',
      ram: '32 GB DDR5',
      cpu: '5 vCPU Cores',
      storage: '100 GB NVMe Gen4',
      bandwidth: 'Unlimited Bandwidth',
      portSpeed: '10 Gbps Port',
      isPopular: false,
      features: ['Dedicated IPv4 Address', 'Full KVM Virtualization', '99.99% SLA Guarantee', 'Instant Setup & OS Reinstall', 'Enterprise DDoS Scrubbing Shield', 'Daily Automatic Backups'],
    },
    {
      name: 'Godly Plan',
      price: '17.00',
      ram: '64 GB DDR5',
      cpu: '6 vCPU Cores',
      storage: '150 GB SSD',
      bandwidth: 'Unlimited Bandwidth',
      portSpeed: '10 Gbps Port',
      isPopular: false,
      features: ['2x Dedicated IPv4 Addresses', 'Full KVM Virtualization', '99.99% SLA Guarantee', 'Instant Setup & OS Reinstall', 'Enterprise DDoS Scrubbing Shield', 'Daily Automatic Backups', 'Priority Support Tier'],
    },
  ];

  const minecraftPlans: Plan[] = [
    {
      name: 'Basic Plan',
      price: '1.00',
      ram: '4 GB DDR5 (ECC)',
      cpu: '1 vCPU Core',
      storage: '14 GB NVMe Gen4',
      bandwidth: 'Unlimited Bandwidth',
      portSpeed: '10 Gbps Uplink',
      isPopular: false,
      features: ['Unlimited Slots & Players', 'Paper/Purpur Server Jar support', 'One-click Modpack Installer', 'Web File Access / SFTP', 'Instant Server Provisioning'],
    },
    {
      name: 'Starter Plan',
      price: '2.50',
      ram: '8 GB DDR5 (ECC)',
      cpu: '2 vCPU Cores',
      storage: '20 GB NVMe Gen4',
      bandwidth: 'Unlimited Bandwidth',
      portSpeed: '10 Gbps Uplink',
      isPopular: false,
      features: ['Unlimited Slots & Players', 'Paper/Purpur Server Jar support', 'One-click Modpack Installer', 'Web File Access / SFTP', 'Instant Server Provisioning', 'Free Dedicated IP Port (25565)'],
    },
    {
      name: 'Standard Plan',
      price: '5.00',
      ram: '14 GB DDR5 (ECC)',
      cpu: '3 vCPU Cores',
      storage: '22 GB NVMe Gen4',
      bandwidth: 'Unlimited Bandwidth',
      portSpeed: '10 Gbps Uplink',
      isPopular: false,
      features: ['Unlimited Slots & Players', 'Paper/Purpur Server Jar support', 'One-click Modpack Installer', 'Web File Access / SFTP', 'Instant Server Provisioning', 'Free Dedicated IP Port (25565)', 'Daily Remote Backups'],
    },
    {
      name: 'High Plan',
      price: '7.99',
      ram: '18 GB DDR5 (ECC)',
      cpu: '3 vCPU Cores',
      storage: '26 GB NVMe Gen4',
      bandwidth: 'Unlimited Bandwidth',
      portSpeed: '10 Gbps Uplink',
      isPopular: false,
      features: ['Unlimited Slots & Players', 'Paper/Purpur Server Jar support', 'One-click Modpack Installer', 'Web File Access / SFTP', 'Instant Server Provisioning', 'Free Dedicated IP Port (25565)', 'Daily Remote Backups', 'Advanced DDoS Shielding'],
    },
    {
      name: 'Extreme Plan',
      price: '10.00',
      ram: '24 GB DDR5 (ECC)',
      cpu: '4 vCPU Cores',
      storage: '32 GB NVMe Gen4',
      bandwidth: 'Unlimited Bandwidth',
      portSpeed: '10 Gbps Uplink',
      isPopular: true,
      features: ['Unlimited Slots & Players', 'Paper/Purpur Server Jar support', 'One-click Modpack Installer', 'Web File Access / SFTP', 'Instant Server Provisioning', 'Free Dedicated IP Port (25565)', 'Daily Remote Backups', 'Advanced DDoS Shielding', '1x MySQL Server Database'],
    },
    {
      name: 'Ultra Plan',
      price: '12.00',
      ram: '28 GB DDR5 (ECC)',
      cpu: '5 vCPU Cores',
      storage: '35 GB NVMe Gen4',
      bandwidth: 'Unlimited Bandwidth',
      portSpeed: '10 Gbps Uplink',
      isPopular: false,
      features: ['Unlimited Slots & Players', 'Paper/Purpur Server Jar support', 'One-click Modpack Installer', 'Web File Access / SFTP', 'Instant Server Provisioning', 'Free Dedicated IP Port (25565)', 'Daily Remote Backups', 'Advanced DDoS Shielding', '2x MySQL Server Databases'],
    },
    {
      name: 'Enterprise Plan',
      price: '14.99',
      ram: '32 GB DDR5 (ECC)',
      cpu: '5 vCPU Cores',
      storage: '40 GB NVMe Gen4',
      bandwidth: 'Unlimited Bandwidth',
      portSpeed: '10 Gbps Uplink',
      isPopular: false,
      features: ['Unlimited Slots & Players', 'Paper/Purpur Server Jar support', 'One-click Modpack Installer', 'Web File Access / SFTP', 'Instant Server Provisioning', 'Free Dedicated IP Port (25565)', 'Daily Remote Backups', 'Advanced DDoS Shielding', 'Unlimited MySQL Databases', 'Priority Expert Support'],
    },
    {
      name: 'Godly Plan',
      price: '17.00',
      ram: '64 GB DDR5 (ECC)',
      cpu: '6 vCPU Cores',
      storage: '80 GB SSD',
      bandwidth: 'Unlimited Bandwidth',
      portSpeed: '10 Gbps Uplink',
      isPopular: false,
      features: ['Unlimited Slots & Players', 'Paper/Purpur Server Jar support', 'One-click Modpack Installer', 'Web File Access / SFTP', 'Instant Server Provisioning', 'Free Dedicated IP Port (25565)', 'Daily Remote Backups', 'Advanced DDoS Shielding', 'Unlimited MySQL Databases', 'Priority Expert Support', 'Dedicated Server Node Core Thread'],
    },
  ];

  // Dynamic custom calculation formula
  const calculateCustomPrice = () => {
    if (vpsTier === 'budget') {
      const val = 0.50 + customCpu * 0.40 + customRam * 0.10 + customStorage * 0.02;
      return val.toFixed(2);
    } else {
      const val = 1.00 + customCpu * 0.80 + customRam * 0.15 + customStorage * 0.03;
      return val.toFixed(2);
    }
  };

  const customPrice = calculateCustomPrice();

  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-[#070310]">
      {/* Background glow structures */}
      <div className="absolute top-1/4 left-1/4 -translate-y-1/2 w-96 h-96 bg-brand-vibrant/5 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-y-1/2 w-96 h-96 bg-brand-pink/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-5">
          <span className="text-xs font-semibold tracking-widest text-brand-pink uppercase">
            Flexible Plans
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-cream">
            Pricing Designed for Scaling
          </h2>
          <p className="text-brand-cream/60 text-sm sm:text-base font-sans">
            Deploy in minutes with transparent, fixed pricing models. No hidden fees or bandwidth overage billing.
          </p>

          {/* Pricing Category Toggle Switch */}
          <div className="flex flex-col items-center gap-4 pt-4">
            <div className="relative p-1 rounded-2xl glass-panel border border-brand-pink/10 flex items-center w-72">
              <button
                onClick={() => setActiveCategory('vps')}
                className={`relative z-10 flex-1 py-2.5 text-xs font-bold rounded-xl transition-colors duration-300 ${
                  activeCategory === 'vps' ? 'text-brand-deep' : 'text-brand-cream/65 hover:text-brand-cream'
                }`}
              >
                VPS Hosting
              </button>
              <button
                onClick={() => setActiveCategory('minecraft')}
                className={`relative z-10 flex-1 py-2.5 text-xs font-bold rounded-xl transition-colors duration-300 ${
                  activeCategory === 'minecraft' ? 'text-brand-deep' : 'text-brand-cream/65 hover:text-brand-cream'
                }`}
              >
                Minecraft Servers
              </button>

              {/* Toggle slider animation */}
              <motion.div
                layoutId="activePricingCategory"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                className="absolute inset-y-1 left-1 w-[136px] bg-brand-cream rounded-xl z-0"
                style={{
                  left: activeCategory === 'vps' ? '4px' : '140px',
                }}
              />
            </div>

            {/* Secondary VPS Switcher (Budget vs Premium) - Only visible when VPS category is selected */}
            <AnimatePresence>
              {activeCategory === 'vps' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="relative p-1 rounded-2xl glass-panel border border-brand-pink/10 flex items-center w-64 scale-90"
                >
                  <button
                    onClick={() => setVpsTier('budget')}
                    className={`relative z-10 flex-1 py-2 text-xs font-bold rounded-xl transition-colors duration-300 ${
                      vpsTier === 'budget' ? 'text-brand-deep' : 'text-brand-cream/65 hover:text-brand-cream'
                    }`}
                  >
                    Budget VPS
                  </button>
                  <button
                    onClick={() => setVpsTier('premium')}
                    className={`relative z-10 flex-1 py-2 text-xs font-bold rounded-xl transition-colors duration-300 ${
                      vpsTier === 'premium' ? 'text-brand-deep' : 'text-brand-cream/65 hover:text-brand-cream'
                    }`}
                  >
                    Premium VPS
                  </button>

                  <motion.div
                    layoutId="activeVpsTierPricing"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    className="absolute inset-y-1 left-1 w-[120px] bg-brand-cream rounded-xl z-0"
                    style={{
                      left: vpsTier === 'budget' ? '4px' : '124px',
                    }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          <AnimatePresence mode="popLayout">
            {activeCategory === 'vps' ? (
              // VPS pricing list render
              <>
                {(vpsTier === 'budget' ? budgetVpsPlans : premiumVpsPlans).map((plan, index) => (
                  <motion.div
                    key={plan.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className={`group relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                      plan.isPopular
                        ? 'glass-panel border-2 border-brand-vibrant shadow-2xl shadow-brand-vibrant/10 glow-primary scale-[1.02] md:scale-[1.03] z-10'
                        : 'glass-panel border border-brand-pink/8 hover:border-brand-pink/20 hover:scale-[1.01] shadow-xl shadow-black/25'
                    }`}
                  >
                    {plan.isPopular && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-brand-vibrant to-brand-pink text-[10px] font-black tracking-wider uppercase text-brand-cream border border-brand-cream/15 shadow-md">
                        Most Popular
                      </span>
                    )}

                    <div>
                      <h3 className="font-display font-bold text-xl text-brand-cream mb-4">
                        {plan.name}
                      </h3>

                      <div className="flex items-baseline space-x-1 mb-8">
                        <span className="text-brand-cream font-bold text-3xl">$</span>
                        <span className="text-5xl font-display font-black tracking-tight text-brand-cream">
                          {plan.price.split('.')[0]}
                        </span>
                        <span className="text-2xl font-display font-bold text-brand-cream">
                          .{plan.price.split('.')[1]}
                        </span>
                        <span className="text-xs font-light text-brand-cream/60 ml-1.5">/mo</span>
                      </div>

                      <div className="space-y-4 mb-8 bg-brand-pink/5 rounded-2xl p-4.5 border border-brand-pink/5">
                        <div className="flex items-center justify-between text-xs sm:text-sm font-sans">
                          <span className="text-brand-cream/50 flex items-center gap-2">
                            <Cpu className="w-4 h-4 text-brand-pink/70 shrink-0" />
                            CPU
                          </span>
                          <span className="font-bold text-brand-cream">{plan.cpu}</span>
                        </div>
                        <div className="flex items-center justify-between text-xs sm:text-sm font-sans border-t border-brand-pink/5 pt-3">
                          <span className="text-brand-cream/50 flex items-center gap-2">
                            <Server className="w-4 h-4 text-brand-pink/70 shrink-0" />
                            RAM
                          </span>
                          <span className="font-bold text-brand-cream">{plan.ram}</span>
                        </div>
                        <div className="flex items-center justify-between text-xs sm:text-sm font-sans border-t border-brand-pink/5 pt-3">
                          <span className="text-brand-cream/50 flex items-center gap-2">
                            <HardDrive className="w-4 h-4 text-brand-pink/70 shrink-0" />
                            Storage
                          </span>
                          <span className="font-bold text-brand-cream">{plan.storage}</span>
                        </div>
                        <div className="flex items-center justify-between text-xs sm:text-sm font-sans border-t border-brand-pink/5 pt-3">
                          <span className="text-brand-cream/50 flex items-center gap-2">
                            <Zap className="w-4 h-4 text-brand-pink/70 shrink-0" />
                            Port / Traffic
                          </span>
                          <span className="font-bold text-brand-cream text-right text-xs">
                            {plan.bandwidth.split(' ')[0]} {plan.bandwidth.split(' ')[1]} ({plan.portSpeed.split(' ')[0]})
                          </span>
                        </div>
                      </div>

                      <ul className="space-y-3.5 mb-10">
                        {plan.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start space-x-3 text-xs sm:text-sm text-brand-cream/80">
                            <Check className="w-4.5 h-4.5 text-brand-pink shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href="https://discord.gg/YjQF7YJV6a"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-4 rounded-2xl text-center text-sm font-bold transition-all duration-300 shadow-md ${
                        plan.isPopular
                          ? 'bg-brand-cream text-brand-deep hover:bg-brand-pink hover:shadow-lg hover:shadow-brand-pink/20 hover:scale-[1.02]'
                          : 'bg-brand-cream/5 border border-brand-pink/10 text-brand-cream hover:bg-brand-cream/10 hover:border-brand-pink/25'
                      }`}
                    >
                      Deploy Server
                    </a>
                  </motion.div>
                ))}

                {/* VPS Custom Slider Card */}
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="group relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 glass-panel border border-brand-pink/15 hover:border-brand-pink/35 shadow-2xl shadow-black/45"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-display font-bold text-xl text-brand-cream flex items-center gap-2">
                        <Sliders className="w-5 h-5 text-brand-pink" />
                        Custom Plan
                      </h3>
                      <span className="px-2.5 py-0.5 rounded-full bg-brand-vibrant/25 border border-brand-vibrant/40 text-[9px] font-bold text-brand-cream uppercase tracking-wider">
                        Interactive
                      </span>
                    </div>

                    <div className="flex items-baseline space-x-1 mb-8">
                      <span className="text-brand-cream font-bold text-3xl">$</span>
                      <span className="text-5xl font-display font-black tracking-tight text-brand-cream">
                        {customPrice.split('.')[0]}
                      </span>
                      <span className="text-2xl font-display font-bold text-brand-cream">
                        .{customPrice.split('.')[1]}
                      </span>
                      <span className="text-xs font-light text-brand-cream/60 ml-1.5">/mo</span>
                    </div>

                    <div className="space-y-6 mb-8 bg-brand-pink/5 rounded-2xl p-5 border border-brand-pink/5">
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs sm:text-sm font-sans">
                          <span className="text-brand-cream/50 flex items-center gap-2">
                            <Cpu className="w-4 h-4 text-brand-pink/70 shrink-0" />
                            vCPU Cores
                          </span>
                          <span className="font-bold text-brand-pink">{customCpu} Cores</span>
                        </div>
                        <input
                          type="range"
                          min="1"
                          max="16"
                          step="1"
                          value={customCpu}
                          onChange={(e) => setCustomCpu(Number(e.target.value))}
                          className="w-full accent-brand-pink h-1 bg-brand-deep rounded-lg cursor-pointer"
                        />
                      </div>

                      <div className="space-y-2 border-t border-brand-pink/5 pt-4">
                        <div className="flex justify-between text-xs sm:text-sm font-sans">
                          <span className="text-brand-cream/50 flex items-center gap-2">
                            <Server className="w-4 h-4 text-brand-pink/70 shrink-0" />
                            RAM Allocation
                          </span>
                          <span className="font-bold text-brand-pink">{customRam} GB DDR5</span>
                        </div>
                        <input
                          type="range"
                          min="4"
                          max="128"
                          step="4"
                          value={customRam}
                          onChange={(e) => setCustomRam(Number(e.target.value))}
                          className="w-full accent-brand-pink h-1 bg-brand-deep rounded-lg cursor-pointer"
                        />
                      </div>

                      <div className="space-y-2 border-t border-brand-pink/5 pt-4">
                        <div className="flex justify-between text-xs sm:text-sm font-sans">
                          <span className="text-brand-cream/50 flex items-center gap-2">
                            <HardDrive className="w-4 h-4 text-brand-pink/70 shrink-0" />
                            SSD Storage
                          </span>
                          <span className="font-bold text-brand-pink">
                            {customStorage} GB {customStorage >= 150 ? 'SSD' : 'NVMe'}
                          </span>
                        </div>
                        <input
                          type="range"
                          min="20"
                          max="500"
                          step="10"
                          value={customStorage}
                          onChange={(e) => setCustomStorage(Number(e.target.value))}
                          className="w-full accent-brand-pink h-1 bg-brand-deep rounded-lg cursor-pointer"
                        />
                      </div>
                    </div>

                    <ul className="space-y-3.5 mb-10">
                      <li className="flex items-start space-x-3 text-xs sm:text-sm text-brand-cream/80">
                        <Check className="w-4.5 h-4.5 text-brand-pink shrink-0 mt-0.5" />
                        <span>Dedicated resources & SLA standards</span>
                      </li>
                      <li className="flex items-start space-x-3 text-xs sm:text-sm text-brand-cream/80">
                        <Check className="w-4.5 h-4.5 text-brand-pink shrink-0 mt-0.5" />
                        <span>10 Gbps Port / Unlimited Traffic</span>
                      </li>
                    </ul>
                  </div>

                  <a
                    href="https://discord.gg/YjQF7YJV6a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 rounded-2xl text-center text-sm font-bold transition-all duration-300 shadow-md bg-brand-cream text-brand-deep hover:bg-brand-pink hover:shadow-lg hover:shadow-brand-pink/20 hover:scale-[1.02]"
                  >
                    Deploy Custom Server
                  </a>
                </motion.div>
              </>
            ) : (
              // Minecraft server pricing list render
              minecraftPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`group relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                    plan.isPopular
                      ? 'glass-panel border-2 border-brand-vibrant shadow-2xl shadow-brand-vibrant/10 glow-primary scale-[1.02] md:scale-[1.03] z-10'
                      : 'glass-panel border border-brand-pink/8 hover:border-brand-pink/20 hover:scale-[1.01] shadow-xl shadow-black/25'
                  }`}
                >
                  {plan.isPopular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-brand-vibrant to-brand-pink text-[10px] font-black tracking-wider uppercase text-brand-cream border border-brand-cream/15 shadow-md">
                      Most Popular
                    </span>
                  )}

                  <div>
                    <h3 className="font-display font-bold text-xl text-brand-cream mb-4">
                      {plan.name}
                    </h3>

                    <div className="flex items-baseline space-x-1 mb-8">
                      <span className="text-brand-cream font-bold text-3xl">$</span>
                      <span className="text-5xl font-display font-black tracking-tight text-brand-cream">
                        {plan.price.split('.')[0]}
                      </span>
                      <span className="text-2xl font-display font-bold text-brand-cream">
                        .{plan.price.split('.')[1]}
                      </span>
                      <span className="text-xs font-light text-brand-cream/60 ml-1.5">/mo</span>
                    </div>

                    <div className="space-y-4 mb-8 bg-brand-pink/5 rounded-2xl p-4.5 border border-brand-pink/5">
                      <div className="flex items-center justify-between text-xs sm:text-sm font-sans">
                        <span className="text-brand-cream/50 flex items-center gap-2">
                          <Cpu className="w-4 h-4 text-brand-pink/70 shrink-0" />
                          CPU Architecture
                        </span>
                        <span className="font-bold text-brand-cream">{plan.cpu}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs sm:text-sm font-sans border-t border-brand-pink/5 pt-3">
                        <span className="text-brand-cream/50 flex items-center gap-2">
                          <Server className="w-4 h-4 text-brand-pink/70 shrink-0" />
                          Memory
                        </span>
                        <span className="font-bold text-brand-cream">{plan.ram}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs sm:text-sm font-sans border-t border-brand-pink/5 pt-3">
                        <span className="text-brand-cream/50 flex items-center gap-2">
                          <HardDrive className="w-4 h-4 text-brand-pink/70 shrink-0" />
                          Storage
                        </span>
                        <span className="font-bold text-brand-cream">{plan.storage}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs sm:text-sm font-sans border-t border-brand-pink/5 pt-3">
                        <span className="text-brand-cream/50 flex items-center gap-2">
                          <Zap className="w-4 h-4 text-brand-pink/70 shrink-0" />
                          Port Speed / Bandwidth
                        </span>
                        <span className="font-bold text-brand-cream text-right text-xs">
                          {plan.bandwidth.split(' ')[0]} {plan.bandwidth.split(' ')[1]} ({plan.portSpeed.split(' ')[0]})
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-3.5 mb-10">
                      {plan.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start space-x-3 text-xs sm:text-sm text-brand-cream/80">
                          <Check className="w-4.5 h-4.5 text-brand-pink shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="https://discord.gg/YjQF7YJV6a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-4 rounded-2xl text-center text-sm font-bold transition-all duration-300 shadow-md ${
                      plan.isPopular
                        ? 'bg-brand-cream text-brand-deep hover:bg-brand-pink hover:shadow-lg hover:shadow-brand-pink/20 hover:scale-[1.02]'
                        : 'bg-brand-cream/5 border border-brand-pink/10 text-brand-cream hover:bg-brand-cream/10 hover:border-brand-pink/25'
                    }`}
                  >
                    Deploy Server
                  </a>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
