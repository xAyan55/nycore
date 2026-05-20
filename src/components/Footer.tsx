import { Link } from 'react-router-dom';
import { Disc, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    hosting: [
      { name: 'VPS Hosting', href: '/vps-hosting' },
      { name: 'Minecraft Hosting', href: '/minecraft-hosting' },
      { name: 'Ryzen Dedicated', href: '/pricing' },
      { name: 'Enterprise Nodes', href: '/pricing' },
    ],
    platform: [
      { name: 'Infrastructure Features', href: '/features' },
      { name: 'Control Panel', href: '/' },
      { name: 'Billing Portal', href: '/' },
      { name: 'Looking Glass', href: '/' },
    ],
    community: [
      { name: 'Discord Support', href: 'https://discord.gg', isExternal: true },
      { name: 'Knowledgebase / FAQ', href: '/faq' },
      { name: 'Company Blog', href: '/' },
      { name: 'Affiliates', href: '/' },
    ],
    legal: [
      { name: 'Terms of Service', href: '/' },
      { name: 'Privacy Policy', href: '/' },
      { name: 'SLA & Why Us', href: '/why-us' },
      { name: 'Refund Policy', href: '/' },
    ],
  };

  return (
    <footer className="relative mt-24 border-t border-brand-pink/5 bg-[#05020c] pt-20 pb-10 overflow-hidden">
      {/* Footer Ambient Background Glows */}
      <div className="absolute top-0 left-1/4 -translate-y-1/2 w-96 h-96 bg-brand-vibrant/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 translate-y-1/2 w-96 h-96 bg-brand-deep/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand Info Column */}
          <div className="lg:col-span-2 flex flex-col space-y-6">
            <Link to="/" className="flex items-center space-x-2.5 group">
              <div className="w-9 h-9 rounded-xl overflow-hidden border border-brand-pink/15 flex items-center justify-center">
                <img src="/logo.png" alt="Nyxore Logo" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <span className="font-display font-bold text-lg tracking-tight text-brand-cream">
                Nyxore<span className="text-brand-pink font-light">.Cloud</span>
              </span>
            </Link>
            
            <p className="text-brand-cream/60 text-sm font-sans leading-relaxed max-w-sm">
              Powering Next-Gen Minecraft & VPS Infrastructure. Experience premium enterprise hosting designed for gamers, developers, and creators.
            </p>

            <div className="flex items-center space-x-4">
              <a
                href="https://discord.gg"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-brand-cream/5 border border-brand-pink/10 hover:border-brand-vibrant/60 hover:bg-brand-vibrant/10 flex items-center justify-center text-brand-cream/70 hover:text-brand-pink transition-all duration-300"
                aria-label="Discord"
              >
                <Disc className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-brand-cream/5 border border-brand-pink/10 hover:border-brand-vibrant/60 hover:bg-brand-vibrant/10 flex items-center justify-center text-brand-cream/70 hover:text-brand-pink transition-all duration-300"
                aria-label="X (formerly Twitter)"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-brand-cream/5 border border-brand-pink/10 hover:border-brand-vibrant/60 hover:bg-brand-vibrant/10 flex items-center justify-center text-brand-cream/70 hover:text-brand-pink transition-all duration-300"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-display font-semibold text-sm tracking-wider uppercase text-brand-cream mb-6">
              Hosting
            </h4>
            <ul className="space-y-4">
              {footerLinks.hosting.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-brand-cream/60 hover:text-brand-pink text-sm transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm tracking-wider uppercase text-brand-cream mb-6">
              Platform
            </h4>
            <ul className="space-y-4">
              {footerLinks.platform.map((link) => (
                <li key={link.name}>
                  {link.href === '/' ? (
                    <a href="#" className="text-brand-cream/60 hover:text-brand-pink text-sm transition-colors duration-200">
                      {link.name}
                    </a>
                  ) : (
                    <Link to={link.href} className="text-brand-cream/60 hover:text-brand-pink text-sm transition-colors duration-200">
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm tracking-wider uppercase text-brand-cream mb-6">
              Support
            </h4>
            <ul className="space-y-4">
              {footerLinks.community.map((link) => (
                <li key={link.name}>
                  {link.isExternal ? (
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-brand-cream/60 hover:text-brand-pink text-sm transition-colors duration-200">
                      {link.name}
                    </a>
                  ) : (
                    <Link to={link.href} className="text-brand-cream/60 hover:text-brand-pink text-sm transition-colors duration-200">
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm tracking-wider uppercase text-brand-cream mb-6">
              Company
            </h4>
            <ul className="space-y-4">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  {link.href === '/' ? (
                    <a href="#" className="text-brand-cream/60 hover:text-brand-pink text-sm transition-colors duration-200">
                      {link.name}
                    </a>
                  ) : (
                    <Link to={link.href} className="text-brand-cream/60 hover:text-brand-pink text-sm transition-colors duration-200">
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider with subtle gradient glow */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-brand-pink/15 to-transparent mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-brand-cream/40 text-xs font-sans text-center md:text-left">
            &copy; {currentYear} Nyxore.Cloud. All rights reserved. Minecraft is a registered trademark of Mojang Synergies AB. Nyxore is not affiliated with or endorsed by Mojang.
          </p>

          <p className="flex items-center gap-1.5 text-brand-cream/40 text-xs font-sans">
            Crafted with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> for elite gamers.
          </p>
        </div>
      </div>
    </footer>
  );
}
