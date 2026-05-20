import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Cpu, HardDrive, Zap, Server, Terminal, Shield, ChevronDown, HelpCircle, Sliders } from 'lucide-react';

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

type FAQItem = {
  question: string;
  answer: string;
};

export default function VPSHosting() {
  const [vpsTier, setVpsTier] = useState<'budget' | 'premium'>('budget');
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  // Custom Plan State
  const [customCpu, setCustomCpu] = useState(4);
  const [customRam, setCustomRam] = useState(16);
  const [customStorage, setCustomStorage] = useState(80);

  const budgetPlans: Plan[] = [
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

  const premiumPlans: Plan[] = [
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

  const currentPlans = vpsTier === 'budget' ? budgetPlans : premiumPlans;

  // Custom Pricing Formula Calculator
  // Budget Custom: Base $0.50 + $0.40/CPU + $0.10/RAM + $0.02/SSD
  // Premium Custom: Base $1.00 + $0.80/CPU + $0.15/RAM + $0.03/SSD
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

  const vpsFeatures = [
    {
      title: 'Full Root SSH Access',
      description: 'Take full control of your server environment with administrative root privileges, custom kernel configs, and raw SSH socket options.',
      icon: Terminal,
    },
    {
      title: 'Enterprise KVM Hypervisors',
      description: 'Unlike OpenVZ containers, KVM virtualization guarantees dedicated RAM and CPU resources. Zero CPU or RAM overcommitting.',
      icon: Cpu,
    },
    {
      title: 'Global Operating Systems',
      description: 'Install and reinstall Debian, Ubuntu, AlmaLinux, Rocky Linux, or mount your own custom ISOs directly through our web interface.',
      icon: Server,
    },
    {
      title: '10 Gbps Network Ports',
      description: 'Connected directly to redundant multi-gigabit routing hardware. Experience instant downloads, low latency, and zero bandwidth caps.',
      icon: Zap,
    },
    {
      title: 'NVMe Gen4 Storage Arrays',
      description: 'Enterprise SSDs operating in RAID 10 configurations. Over 7,000 MB/s raw read speeds to power high-traffic databases and applications.',
      icon: HardDrive,
    },
    {
      title: 'Automated Snapshots',
      description: 'Back up your entire system state with a single click. Restore instant snapshots or set automatic backup tasks via the API.',
      icon: Shield,
    },
  ];

  const faqList: FAQItem[] = [
    {
      question: 'What is the virtualization technology used?',
      answer: 'All our VPS servers run on hardware-level KVM (Kernel-based Virtual Machine) virtualization. This guarantees that your allocated RAM, CPU cores, and SSD storage are dedicated entirely to your server. There is no resource sharing or overcommitting.',
    },
    {
      question: 'Can I upload and boot from a custom ISO?',
      answer: 'Yes! Our custom control panel allows you to upload any custom bootable ISO, mount it to your virtual CD-ROM drive, and boot your server to install custom operating systems, specialized firewalls, or custom configurations.',
    },
    {
      question: 'How long does deployment take?',
      answer: 'VPS nodes are provisioned automatically. Once your invoice is confirmed, your server is booted and your root login credentials are sent to your registered email in under 60 seconds.',
    },
    {
      question: 'Do you offer DDoS protection?',
      answer: 'Yes, every server is shielded behind our 12+ Tbps edge DDoS mitigation network. This filters out protocol attacks, UDP reflection floods, and TCP SYN floods automatically without adding latency or routing overhead.',
    },
    {
      question: 'Can I upgrade my VPS without losing data?',
      answer: 'Absolutely. You can upgrade to a higher tier plan at any time through the billing dashboard. The process takes under 2 minutes, requires only a simple reboot, and all your files, IP addresses, and configurations remain intact.',
    },
  ];

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

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
            <span>Dedicated Virtual Private Servers</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight text-brand-cream max-w-4xl mx-auto"
          >
            High Performance KVM <br />
            <span className="text-gradient font-black">VPS Servers</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-brand-pink/70 text-base sm:text-lg font-sans max-w-2xl mx-auto leading-relaxed mt-6"
          >
            Deploy virtual private servers instantly on AMD Ryzen 9 9950X processors, enterprise PCIe Gen4 NVMe arrays, and dedicated 10 Gbps uplinks.
          </motion.p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 relative bg-[#070310] border-t border-brand-pink/5">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Header & Toggle Switch */}
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-5">
            <span className="text-xs font-semibold tracking-widest text-brand-pink uppercase">VPS Configs</span>
            <h2 className="font-display font-bold text-3xl text-brand-cream">Select Your Virtual Server</h2>
            <p className="text-brand-cream/60 text-sm font-sans">
              Choose between budget and premium virtual tiers. Drag sliders inside the custom card to build your own.
            </p>

            {/* Budget / Premium Switcher */}
            <div className="flex justify-center pt-2">
              <div className="relative p-1 rounded-2xl glass-panel border border-brand-pink/10 flex items-center w-72">
                <button
                  onClick={() => setVpsTier('budget')}
                  className={`relative z-10 flex-1 py-2.5 text-xs font-bold rounded-xl transition-colors duration-300 ${
                    vpsTier === 'budget' ? 'text-brand-deep' : 'text-brand-cream/65 hover:text-brand-cream'
                  }`}
                >
                  Budget VPS
                </button>
                <button
                  onClick={() => setVpsTier('premium')}
                  className={`relative z-10 flex-1 py-2.5 text-xs font-bold rounded-xl transition-colors duration-300 ${
                    vpsTier === 'premium' ? 'text-brand-deep' : 'text-brand-cream/65 hover:text-brand-cream'
                  }`}
                >
                  Premium VPS
                </button>

                {/* Switcher Indicator */}
                <motion.div
                  layoutId="activeVpsTier"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  className="absolute inset-y-1 left-1 w-[136px] bg-brand-cream rounded-xl z-0"
                  style={{
                    left: vpsTier === 'budget' ? '4px' : '140px',
                  }}
                />
              </div>
            </div>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
            <AnimatePresence mode="popLayout">
              {currentPlans.map((plan, index) => (
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
                    <h3 className="font-display font-bold text-xl text-brand-cream mb-4">{plan.name}</h3>

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

                    {/* Tech specs */}
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

              {/* 9th Configurator Custom Card */}
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

                  {/* Sliders Container */}
                  <div className="space-y-6 mb-8 bg-brand-pink/5 rounded-2xl p-5 border border-brand-pink/5">
                    {/* CPU Sliders */}
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

                    {/* RAM Sliders */}
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

                    {/* Storage Sliders */}
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
                      <span>Dedicated CPU Cores & RAM allocations</span>
                    </li>
                    <li className="flex items-start space-x-3 text-xs sm:text-sm text-brand-cream/80">
                      <Check className="w-4.5 h-4.5 text-brand-pink shrink-0 mt-0.5" />
                      <span>10 Gbps Port / Unlimited Bandwidth</span>
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
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* VPS Features Section */}
      <section className="py-20 bg-[#080312]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold tracking-widest text-brand-pink uppercase">VPS Infrastructure</span>
            <h2 className="font-display font-bold text-3xl text-brand-cream">Elite Virtual Server Hosting</h2>
            <p className="text-brand-cream/60 text-sm font-sans">
              Advanced control features standard with all VPS plans. Managed through our custom cloud UI.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {vpsFeatures.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div key={idx} className="group relative rounded-2xl glass-panel p-6 hover:border-brand-pink/20 transition-all duration-300 flex flex-col justify-between">
                  <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-brand-vibrant/0 via-brand-vibrant/0 to-brand-pink/0 group-hover:from-brand-vibrant/5 group-hover:to-brand-pink/5 opacity-100 transition-all duration-500 pointer-events-none" />
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-brand-vibrant/10 border border-brand-vibrant/20 group-hover:bg-brand-vibrant/25 group-hover:border-brand-vibrant/50 flex items-center justify-center mb-6 transition-all duration-300 text-brand-pink group-hover:text-brand-cream shadow-md">
                      <Icon className="w-5.5 h-5.5 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="font-display font-semibold text-lg text-brand-cream mb-2 group-hover:text-brand-pink transition-colors duration-200">
                      {feat.title}
                    </h3>
                    <p className="text-brand-cream/60 text-sm font-sans leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#070310] border-t border-brand-pink/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16 space-y-3">
            <span className="text-xs font-semibold tracking-widest text-brand-pink uppercase">Help Center</span>
            <h2 className="font-display font-bold text-3xl text-brand-cream">VPS FAQ</h2>
            <p className="text-brand-cream/60 text-sm font-sans">
              Frequently asked questions regarding KVM virtualization and operating systems.
            </p>
          </div>

          <div className="space-y-4">
            {faqList.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl glass-panel border border-brand-pink/5 overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-5 text-left font-display font-medium text-sm sm:text-base text-brand-cream hover:text-brand-pink transition-colors duration-200"
                  >
                    <div className="flex items-center space-x-3.5 pr-4">
                      <HelpCircle className="w-5 h-5 text-brand-pink shrink-0" />
                      <span>{faq.question}</span>
                    </div>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-brand-pink/60 shrink-0"
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div className="p-5 pt-0 border-t border-brand-pink/5 text-brand-cream/65 text-xs sm:text-sm leading-relaxed font-sans">
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
    </div>
  );
}
