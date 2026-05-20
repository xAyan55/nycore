import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Cpu, Gamepad2, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Categories() {
  const categories = [
    {
      id: 'vps-hosting',
      title: 'VPS Hosting',
      tagline: 'Enterprise-grade Infrastructure',
      icon: Cpu,
      description:
        'Engineered for developers, production web apps, and databases. Dedicated resources, NVMe storage, and complete control over your virtual environments.',
      price: '$5.50',
      color: 'from-brand-vibrant to-brand-deep',
      glowColor: 'group-hover:shadow-brand-vibrant/30',
      features: [
        'Dedicated CPU Thread allocations',
        'KVM Virtualization technology',
        'Root Access & Custom ISOs',
        'Anycast DDoS Shield (12+ Tbps)',
      ],
      ctaText: 'Explore VPS Plans',
      link: '/vps-hosting',
    },
    {
      id: 'minecraft-hosting',
      title: 'Minecraft Hosting',
      tagline: 'High-TPS Gaming Server Nodes',
      icon: Gamepad2,
      description:
        'Powering vanilla SMPs, massive modded servers, and BungeeCord networks. Hosted on extreme-clock Ryzen CPUs with instant panel setup.',
      price: '$3.50',
      color: 'from-brand-pink to-brand-vibrant',
      glowColor: 'group-hover:shadow-brand-pink/25',
      features: [
        'Ryzen 9 7950X / 9950X CPUs',
        'Lag-Free Network routing',
        'One-Click Modpack & Plugin Install',
        'Daily Automatical Off-site Backups',
      ],
      ctaText: 'Explore Game Plans',
      link: '/minecraft-hosting',
    },
  ];

  return (
    <section id="categories" className="py-24 relative overflow-hidden bg-[#070310]">
      {/* Background glow assets */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-brand-vibrant/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-brand-pink/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold tracking-widest text-brand-pink uppercase">
            Deploy Instantly
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-cream">
            Select Your Hosting Environment
          </h2>
          <p className="text-brand-cream/60 text-sm sm:text-base font-sans">
            Choose between developer-first virtual private servers and gaming nodes optimized for maximum TPS and player retention.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="group relative rounded-3xl glass-panel p-8 sm:p-10 flex flex-col justify-between hover:scale-[1.01] hover:border-brand-pink/20 transition-all duration-300"
              >
                {/* Background glow inside card on hover */}
                <div className={`absolute -inset-px rounded-3xl bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-10 blur-md transition-opacity duration-500 pointer-events-none`} />

                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cat.color} p-0.5 border border-brand-pink/20 flex items-center justify-center shadow-lg shadow-black/30`}>
                      <div className="w-full h-full bg-dark-bg/40 rounded-[14px] flex items-center justify-center">
                        <Icon className="w-6 h-6 text-brand-cream" />
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="block text-xs font-sans text-brand-cream/40 font-semibold uppercase tracking-wider">
                        Starting at
                      </span>
                      <span className="text-2xl font-display font-black text-brand-cream">
                        {cat.price}
                        <span className="text-xs font-light text-brand-cream/60">/mo</span>
                      </span>
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-2xl text-brand-cream mb-2">
                    {cat.title}
                  </h3>
                  <p className="text-brand-pink text-xs font-semibold mb-4 tracking-wide uppercase">
                    {cat.tagline}
                  </p>
                  <p className="text-brand-cream/60 text-sm font-sans mb-8 leading-relaxed">
                    {cat.description}
                  </p>

                  {/* Bullet features */}
                  <ul className="space-y-3.5 mb-10">
                    {cat.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start space-x-3 text-sm text-brand-cream/80 font-sans">
                        <CheckCircle2 className="w-4.5 h-4.5 text-brand-pink mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Link
                  to={cat.link}
                  className="group/btn flex items-center justify-center space-x-2 w-full py-4 rounded-2xl bg-brand-cream/5 border border-brand-pink/10 group-hover:bg-brand-vibrant group-hover:border-brand-vibrant text-brand-cream text-sm font-bold transition-all duration-300 shadow-md group-hover:shadow-lg group-hover:shadow-brand-vibrant/20"
                >
                  <span>{cat.ctaText}</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform duration-300" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
