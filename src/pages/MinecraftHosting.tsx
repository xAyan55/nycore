import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Cpu, HardDrive, Zap, Server, Gamepad2, Package, Shield, Users, Database, HelpCircle, ChevronDown } from 'lucide-react';

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

export default function MinecraftHosting() {
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

  const mcFeatures = [
    {
      title: 'One-Click Modpack Installer',
      description: 'Easily deploy over 100+ modpacks from CurseForge, Modrinth, and FeedTheBeast directly from your control panel.',
      icon: Package,
    },
    {
      title: 'Ryzen 9 7950X3D Hardware',
      description: 'Host on top-tier single-threaded game nodes powered by AMD Ryzen 9 3D V-Cache processors, running at 5.7 GHz.',
      icon: Cpu,
    },
    {
      title: 'Custom Game Panel',
      description: 'Manage files, write plugins, edit server.properties, access console logs, and deploy databases through our fast game panel.',
      icon: Gamepad2,
    },
    {
      title: 'Unlimited Slots & Players',
      description: 'We do not restrict player counts or slots. Invite as many players as your allocated RAM can support without extra fees.',
      icon: Users,
    },
    {
      title: 'Free MySQL Databases',
      description: 'Create and connect MySQL databases instantly to store player inventories, luckperms settings, or coreprotect blocks.',
      icon: Database,
    },
    {
      title: 'Off-site Daily Backups',
      description: 'Rest easy with automatic server snapshot backups saved daily to remote data hubs. Restore or download anytime.',
      icon: Shield,
    },
  ];

  const faqList: FAQItem[] = [
    {
      question: 'How do I change the Minecraft server version?',
      answer: 'You can change your server jar version instantly using the Version Manager inside your panel. We support Vanilla, Paper, Purpur, Fabric, Forge, BungeeCord, Velocity, and custom jar uploads in any Java version (8, 11, 17, 21).',
    },
    {
      question: 'Can I upload my existing world/server?',
      answer: 'Yes! You can connect to your server using any standard SFTP client (like FileZilla or WinSCP) or drag-and-drop folders into the panel file manager. Just transfer your directories and update the server properties to start playing.',
    },
    {
      question: 'Do you charge based on the number of slots?',
      answer: 'No, we never restrict the number of players who can connect to your server. You have complete freedom. The only limit is what your selected RAM allocation can handle under heavy Minecraft load.',
    },
    {
      question: 'Do plugins and mods work on all plans?',
      answer: 'Yes. You can install any plugins, mods, or custom configuration files on any plan. Simply run a Paper, Spigot, Fabric, or Forge server jar and drop your files into the plugins or mods folder.',
    },
    {
      question: 'Can I get a custom subdomain?',
      answer: 'Yes, we provide free custom subdomains (e.g., play.yourname.nyxore.cloud) with all plans so players can join without typing in server port numbers.',
    },
  ];

  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

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
            <span className="w-2 h-2 rounded-full bg-brand-vibrant animate-ping" />
            <span>Lag-Free Game Nodes</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight text-brand-cream max-w-4xl mx-auto"
          >
            Lag-Free Minecraft <br />
            <span className="text-gradient font-black">Server Hosting</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-brand-pink/70 text-base sm:text-lg font-sans max-w-2xl mx-auto leading-relaxed mt-6"
          >
            Power your community with AMD Ryzen 9 7950X3D CPUs, high-speed DDR5 ECC memory, enterprise NVMe storage, and 12+ Tbps automatic DDoS mitigation.
          </motion.p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 relative bg-[#070310] border-t border-brand-pink/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold tracking-widest text-brand-pink uppercase">Game Plans</span>
            <h2 className="font-display font-bold text-3xl text-brand-cream">Select Your Minecraft Server</h2>
            <p className="text-brand-cream/60 text-sm font-sans">
              Automatic provisioning. Change version and mods at any time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
            {minecraftPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
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
                      .{plan.price.split('.')[1] || '00'}
                    </span>
                    <span className="text-xs font-light text-brand-cream/60 ml-1.5">/mo</span>
                  </div>

                  {/* Hardware specs */}
                  <div className="space-y-4 mb-8 bg-brand-pink/5 rounded-2xl p-4.5 border border-brand-pink/5">
                    <div className="flex items-center justify-between text-xs sm:text-sm font-sans">
                      <span className="text-brand-cream/50 flex items-center gap-2">
                        <Cpu className="w-4 h-4 text-brand-pink/70 shrink-0" />
                        CPU Cores
                      </span>
                      <span className="font-bold text-brand-cream">{plan.cpu}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs sm:text-sm font-sans border-t border-brand-pink/5 pt-3">
                      <span className="text-brand-cream/50 flex items-center gap-2">
                        <Server className="w-4 h-4 text-brand-pink/70 shrink-0" />
                        Allocated Memory
                      </span>
                      <span className="font-bold text-brand-cream">{plan.ram}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs sm:text-sm font-sans border-t border-brand-pink/5 pt-3">
                      <span className="text-brand-cream/50 flex items-center gap-2">
                        <HardDrive className="w-4 h-4 text-brand-pink/70 shrink-0" />
                        Storage Volume
                      </span>
                      <span className="font-bold text-brand-cream">{plan.storage}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs sm:text-sm font-sans border-t border-brand-pink/5 pt-3">
                      <span className="text-brand-cream/50 flex items-center gap-2">
                        <Zap className="w-4 h-4 text-brand-pink/70 shrink-0" />
                        Uplink Speed
                      </span>
                      <span className="font-bold text-brand-cream">{plan.portSpeed}</span>
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
          </div>
        </div>
      </section>

      {/* Minecraft Features Section */}
      <section className="py-20 bg-[#080312]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold tracking-widest text-brand-pink uppercase">Game Features</span>
            <h2 className="font-display font-bold text-3xl text-brand-cream">Designed For Server Admins</h2>
            <p className="text-brand-cream/60 text-sm font-sans">
              All tools required to build, grow, and manage your server are loaded standard.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {mcFeatures.map((feat, idx) => {
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
            <span className="text-xs font-semibold tracking-widest text-brand-pink uppercase">FAQ</span>
            <h2 className="font-display font-bold text-3xl text-brand-cream">Minecraft Server FAQ</h2>
            <p className="text-brand-cream/60 text-sm font-sans">
              Frequently asked questions regarding game mods, world backups, and player count allocations.
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
