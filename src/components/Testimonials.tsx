import { motion } from 'framer-motion';
import { Star, Quote, BadgeCheck } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Alex Rivera',
      role: 'Lead Developer, SMP Craft Network',
      quote: 'We migrated our 300+ player Minecraft server to Nyxore.Cloud and our tick rate (TPS) hasn’t dropped below 20.0 since. The Ryzen 9 cores are beasts. Support resolved our port peering queries in under 5 minutes.',
      rating: 5,
      gradient: 'from-brand-vibrant to-brand-deep',
    },
    {
      name: 'Sophia Chen',
      role: 'Founder, API Forge Labs',
      quote: 'Excellent KVM VPS hosting. We run our elastic search clusters and web services here. The NVMe speeds are phenomenal, peaking over 6,500 MB/s. Setup was literally instant, and billing is incredibly simple.',
      rating: 5,
      gradient: 'from-brand-pink to-brand-vibrant',
    },
    {
      name: 'Marcus K.',
      role: 'Community Manager, Nexa Esports',
      quote: 'Outstanding network performance. We host our competitive practice hubs here. Ping is consistently below 10ms for our regional players. The DDoS protection handles random booters without breaking a sweat.',
      rating: 5,
      gradient: 'from-brand-vibrant to-brand-pink',
    },
  ];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-[#070310]">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-brand-vibrant/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-brand-pink/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="text-xs font-semibold tracking-widest text-brand-pink uppercase">
            Client Success
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-cream">
            Trusted by Creators and Developers
          </h2>
          <p className="text-brand-cream/60 text-sm sm:text-base font-sans">
            Hear from community leaders, developers, and server admins who rely on our high-performance infrastructure daily.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((rev, idx) => {
            const initials = rev.name
              .split(' ')
              .map((n) => n[0])
              .join('');
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="glass-panel p-8 rounded-3xl border border-brand-pink/8 hover:border-brand-pink/20 hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between shadow-xl shadow-black/25 relative"
              >
                {/* Quote Icon Background */}
                <div className="absolute top-6 right-8 text-brand-pink/5 select-none pointer-events-none">
                  <Quote className="w-12 h-12 rotate-180" />
                </div>

                <div>
                  {/* Rating Stars */}
                  <div className="flex items-center space-x-1 mb-6 text-brand-pink">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-brand-pink text-brand-pink" />
                    ))}
                  </div>

                  {/* Quote text */}
                  <p className="text-brand-cream/75 text-sm sm:text-base font-sans italic leading-relaxed mb-8">
                    "{rev.quote}"
                  </p>
                </div>

                {/* Profile row */}
                <div className="flex items-center space-x-4 border-t border-brand-pink/5 pt-6">
                  {/* CSS Initial Avatar with Gradient Background */}
                  <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${rev.gradient} p-0.5 border border-brand-pink/15 shrink-0 flex items-center justify-center font-display font-extrabold text-sm text-brand-cream`}>
                    <div className="w-full h-full bg-dark-bg/60 rounded-full flex items-center justify-center">
                      {initials}
                    </div>
                  </div>
                  
                  <div className="overflow-hidden">
                    <h4 className="font-display font-semibold text-sm text-brand-cream flex items-center gap-1.5">
                      {rev.name}
                      <BadgeCheck className="w-4 h-4 text-brand-pink fill-brand-pink/10 shrink-0" />
                    </h4>
                    <p className="text-brand-cream/45 text-xs font-sans truncate">
                      {rev.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
