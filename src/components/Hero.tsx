import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Zap, Cpu, Activity, Users, Globe } from 'lucide-react';

export default function Hero() {
  const stats = [
    { label: 'Uptime SLA', value: '99.99%', icon: Activity },
    { label: 'Ryzen Nodes', value: '5.7 GHz+', icon: Cpu },
    { label: 'Setup Time', value: 'Instant', icon: Zap },
    { label: 'DDoS Shield', value: '12 Tbps+', icon: Shield },
  ];

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden grid-bg">
      {/* Background glowing blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-vibrant/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 -translate-y-1/2 w-[350px] h-[350px] bg-brand-deep/30 rounded-full blur-[100px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-brand-pink/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10 w-full">
        {/* Left Side Info */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-8">
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full glass-panel border border-brand-pink/15 text-xs font-semibold text-brand-pink tracking-wide"
          >
            <span className="w-2 h-2 rounded-full bg-brand-vibrant animate-ping" />
            <span>High Performance Hosting, Simplified.</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.08] text-brand-cream"
          >
            Powering Next-Gen <br />
            <span className="text-gradient font-black">Minecraft & VPS</span> <br />
            Infrastructure.
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-brand-pink/70 text-base sm:text-lg font-sans max-w-xl leading-relaxed"
          >
            Experience premium-grade hosting featuring Ryzen 9 CPU architecture, ultra-fast NVMe enterprise storage, and a low-latency network optimized for gamers and developers.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Link
              to="/pricing"
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-brand-vibrant to-brand-deep text-brand-cream font-bold text-center text-sm hover:scale-[1.03] transition-all duration-300 shadow-xl shadow-brand-vibrant/25 border border-brand-pink/25 glow-primary-hover"
            >
              Get Started
            </Link>
            <Link
              to="/pricing"
              className="px-8 py-4 rounded-2xl glass-panel border border-brand-pink/15 hover:border-brand-pink/35 text-brand-cream hover:bg-brand-cream/5 font-semibold text-center text-sm transition-all duration-300 hover:scale-[1.03]"
            >
              View Plans
            </Link>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 w-full border-t border-brand-pink/5"
          >
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="flex flex-col space-y-1">
                  <div className="flex items-center space-x-2 text-brand-pink">
                    <Icon className="w-4 h-4 text-brand-pink/70" />
                    <span className="text-xs text-brand-cream/40 font-semibold tracking-wider uppercase">
                      {stat.label}
                    </span>
                  </div>
                  <span className="font-display font-bold text-xl sm:text-2xl text-brand-cream tracking-tight">
                    {stat.value}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Right Side Visuals (Floating Cards) */}
        <div className="lg:col-span-5 relative h-[450px] hidden sm:flex items-center justify-center">
          
          {/* Card 1: Node Performance status (Floats top-right) */}
          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-8 right-0 w-[280px] glass-panel p-5 rounded-2xl shadow-2xl border border-brand-pink/10 glow-primary-hover"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold text-brand-pink/60 uppercase tracking-wider">Node Status</span>
              <span className="flex items-center space-x-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>ONLINE</span>
              </span>
            </div>
            
            <div className="space-y-3.5">
              <div className="flex items-center justify-between">
                <span className="text-sm font-sans font-medium text-brand-cream/80">nyx-node-09</span>
                <span className="text-xs font-mono text-brand-pink">Ryzen 9 7950X3D</span>
              </div>
              
              {/* CPU Load bar */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs text-brand-cream/50">
                  <span>CPU Core Load</span>
                  <span>18.4%</span>
                </div>
                <div className="h-1.5 w-full bg-brand-deep/50 rounded-full overflow-hidden border border-brand-pink/5">
                  <div className="h-full bg-gradient-to-r from-brand-vibrant to-brand-pink rounded-full w-[18.4%]" />
                </div>
              </div>

              {/* Memory load bar */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs text-brand-cream/50">
                  <span>RAM Allocations</span>
                  <span>78.2 GB / 128 GB</span>
                </div>
                <div className="h-1.5 w-full bg-brand-deep/50 rounded-full overflow-hidden border border-brand-pink/5">
                  <div className="h-full bg-gradient-to-r from-brand-vibrant to-brand-pink rounded-full w-[61%]" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Minecraft Server Info (Floats center-left) */}
          <motion.div
            animate={{
              y: [0, 15, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5,
            }}
            className="absolute bottom-8 left-0 w-[290px] glass-panel p-5 rounded-2xl shadow-2xl border border-brand-pink/10"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-brand-pink/5 border border-brand-pink/20 flex items-center justify-center">
                <Users className="w-4.5 h-4.5 text-brand-pink" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-brand-pink/50 uppercase tracking-wider">Players Online</h4>
                <p className="text-sm font-bold text-brand-cream">SMP.Nyxore.Net</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs border-b border-brand-pink/5 pb-2">
                <span className="text-brand-cream/55">Active Players</span>
                <span className="font-bold text-brand-pink">247 / 500</span>
              </div>
              <div className="flex items-center justify-between text-xs border-b border-brand-pink/5 pb-2">
                <span className="text-brand-cream/55">Server Version</span>
                <span className="font-bold text-brand-pink">Paper 1.20.4</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-brand-cream/55">TPS (Ticks/Sec)</span>
                <span className="font-bold text-emerald-400">20.00 TPS</span>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Network Ping overlay (Center-right mini-stat) */}
          <motion.div
            animate={{
              y: [0, -10, 0],
              x: [0, 5, 0],
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
            className="absolute bottom-4 right-8 w-[200px] glass-panel p-4 rounded-2xl shadow-2xl border border-brand-pink/10 flex items-center space-x-3.5"
          >
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Globe className="w-4 h-4" />
            </div>
            <div className="flex-1">
              <span className="block text-[10px] text-brand-cream/50 font-bold uppercase tracking-wider">Avg Latency</span>
              <span className="block text-sm font-extrabold text-brand-cream">12 ms</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          </motion.div>

          {/* Background Ring effect */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
            <div className="w-96 h-96 rounded-full border border-brand-pink/10 animate-[spin_40s_linear_infinite]" />
            <div className="absolute w-[450px] h-[450px] rounded-full border border-brand-vibrant/10 border-dashed animate-[spin_60s_linear_infinite_reverse]" />
          </div>

        </div>
      </div>
    </section>
  );
}
