import { motion } from 'framer-motion';
import { Briefcase, Building2, Sun, Palmtree, DollarSign, Shield, ArrowRight } from 'lucide-react';
import { Footer } from '@/components/Footer';
import { Link } from 'react-router-dom';

const workDestinations = [
  {
    country: 'United Arab Emirates',
    flag: '🇦🇪',
    icon: Building2,
    tagline: 'Gateway to Global Opportunities',
    description: 'Dubai, Abu Dhabi, and beyond - the UAE offers exceptional career growth in hospitality, construction, healthcare, retail, and more.',
    benefits: [
      'Tax-free income',
      'World-class infrastructure',
      'Multicultural environment',
      'High standard of living',
      'Career advancement opportunities',
    ],
    sectors: ['Hospitality', 'Healthcare', 'Construction', 'Retail', 'IT & Tech'],
    processingTime: '2-4 weeks',
    visaDuration: '1-2 years',
  },
  {
    country: 'Maldives',
    flag: '🇲🇻',
    icon: Palmtree,
    tagline: 'Paradise Work Experience',
    description: 'Work in world-renowned luxury resorts and experience life in one of the most beautiful destinations on Earth.',
    benefits: [
      'Luxury resort employment',
      'Accommodation provided',
      'Meals included',
      'Beautiful environment',
      'International experience',
    ],
    sectors: ['Resort Management', 'F&B Service', 'Spa & Wellness', 'Water Sports', 'Guest Relations'],
    processingTime: '2-3 weeks',
    visaDuration: '1-2 years',
  },
];

const features = [
  {
    icon: Shield,
    title: 'Verified Employers',
    description: 'We only work with legitimate, verified employers ensuring your safety.',
  },
  {
    icon: DollarSign,
    title: 'Competitive Salaries',
    description: 'Access to positions with attractive salary packages and benefits.',
  },
  {
    icon: Briefcase,
    title: 'Full Support',
    description: 'From documentation to departure, we handle everything.',
  },
];

const WorkVisas = () => {
  return (
    <main className="pt-32">
      {/* Hero */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-primary font-medium tracking-[0.3em] uppercase mb-4 text-sm">
              Work Abroad
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
              Build Your Career <span className="gradient-text">Internationally</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Premium work visa solutions for Maldives and UAE. 
              Start your international career journey with SkyB.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Work Destinations */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8">
            {workDestinations.map((dest, index) => (
              <motion.div
                key={dest.country}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-3xl p-8 glow-border"
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-5xl">{dest.flag}</span>
                  <div>
                    <h2 className="font-display text-2xl font-bold text-foreground">
                      {dest.country}
                    </h2>
                    <p className="text-primary text-sm font-medium">{dest.tagline}</p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {dest.description}
                </p>

                {/* Benefits */}
                <div className="mb-6">
                  <h3 className="font-display font-semibold text-foreground mb-3">Key Benefits</h3>
                  <div className="space-y-2">
                    {dest.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-center gap-2 text-sm text-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sectors */}
                <div className="mb-6">
                  <h3 className="font-display font-semibold text-foreground mb-3">Available Sectors</h3>
                  <div className="flex flex-wrap gap-2">
                    {dest.sectors.map((sector) => (
                      <span
                        key={sector}
                        className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-primary text-xs"
                      >
                        {sector}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="glass rounded-xl p-4 text-center">
                    <p className="text-2xl font-display font-bold text-primary">{dest.processingTime}</p>
                    <p className="text-xs text-muted-foreground">Processing Time</p>
                  </div>
                  <div className="glass rounded-xl p-4 text-center">
                    <p className="text-2xl font-display font-bold text-primary">{dest.visaDuration}</p>
                    <p className="text-xs text-muted-foreground">Visa Duration</p>
                  </div>
                </div>

                {/* CTA */}
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full liquid-btn px-6 py-4 rounded-xl font-display text-sm uppercase tracking-wider"
                  >
                    <span className="flex items-center justify-center gap-2">
                      Apply for {dest.country.split(' ')[0]}
                      <ArrowRight size={18} />
                    </span>
                  </motion.button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose SkyB for <span className="gradient-text">Work Visas?</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-2xl p-6 text-center hover:glow-border transition-all"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default WorkVisas;
