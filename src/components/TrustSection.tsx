import { motion } from 'framer-motion';
import { Shield, Users, Award, Clock, CheckCircle } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Trusted Partner',
    description: 'Licensed and accredited by immigration authorities',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Certified consultants with years of experience',
  },
  {
    icon: Award,
    title: 'Success Rate',
    description: '95%+ visa approval rate across all destinations',
  },
  {
    icon: Clock,
    title: 'Fast Processing',
    description: 'Streamlined applications for quicker results',
  },
];

const achievements = [
  '1000+ Students Placed',
  '17+ Countries',
  '50+ University Partners',
  '10+ Years Experience',
];

export function TrustSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-primary font-medium tracking-[0.3em] uppercase mb-4 text-sm">
              Why Choose Us
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Your Success is <span className="gradient-text">Our Mission</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              SkyB Overseas Consultants delivers world-class educational opportunities and visa 
              solutions. We are committed to turning your international dreams into reality with 
              personalized guidance every step of the way.
            </p>

            {/* Achievement Pills */}
            <div className="flex flex-wrap gap-3 mb-8">
              {achievements.map((achievement, index) => (
                <motion.span
                  key={achievement}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full 
                           text-primary text-sm font-medium"
                >
                  {achievement}
                </motion.span>
              ))}
            </div>

            <motion.a
              href="/about"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="liquid-btn inline-block px-8 py-4 rounded-xl font-display 
                       text-sm uppercase tracking-wider"
            >
              <span>Learn More About Us</span>
            </motion.a>
          </motion.div>

          {/* Right - Feature Grid */}
          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass rounded-2xl p-6 text-center group hover:glow-border transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4
                              group-hover:bg-primary group-hover:text-background transition-colors">
                  <feature.icon className="w-6 h-6 text-primary group-hover:text-background transition-colors" />
                </div>
                <h3 className="font-display font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonial Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 glass rounded-3xl p-8 md:p-12 text-center glow-border"
        >
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <CheckCircle key={i} className="w-5 h-5 text-primary" />
            ))}
          </div>
          <blockquote className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4 max-w-3xl mx-auto">
            "SkyB made my dream of studying in the UK a reality. Their team guided me through 
            every step with professionalism and care."
          </blockquote>
          <p className="text-muted-foreground">
            — Kasun P., University of Manchester
          </p>
        </motion.div>
      </div>
    </section>
  );
}
