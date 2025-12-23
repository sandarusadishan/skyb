import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Plane, Package, Clock, Shield, HeartHandshake } from 'lucide-react';
import { Footer } from '@/components/Footer';

const features = [
  {
    icon: Package,
    title: 'Personal Belongings',
    description: 'Ship clothes, books, electronics, and personal items safely to your university destination.',
  },
  {
    icon: Clock,
    title: 'Flexible Timelines',
    description: 'Plan your shipment around your academic calendar with flexible pickup and delivery dates.',
  },
  {
    icon: Shield,
    title: 'Full Insurance',
    description: 'Complete coverage for your valuables during transit for total peace of mind.',
  },
  {
    icon: HeartHandshake,
    title: 'Student Discounts',
    description: 'Special pricing exclusively for students with valid university enrollment.',
  },
];

const destinations = [
  { country: 'United Kingdom', universities: 'Oxford, Cambridge, UCL, Imperial' },
  { country: 'United States', universities: 'MIT, Stanford, Harvard, Yale' },
  { country: 'Australia', universities: 'Melbourne, Sydney, ANU, UNSW' },
  { country: 'Canada', universities: 'Toronto, McGill, UBC, Waterloo' },
];

const Students = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <main className="pt-32 min-h-screen">
      {/* Hero */}
      <section className="pb-24 relative overflow-hidden" ref={containerRef}>
        <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
        
        {/* Parallax Elements */}
        <motion.div
          style={{ y: y1 }}
          className="absolute top-20 right-[10%] w-32 h-32 rounded-full bg-primary/5 blur-2xl"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute bottom-20 left-[10%] w-48 h-48 rounded-full bg-primary/10 blur-3xl"
        />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-8"
            >
              <GraduationCap className="w-10 h-10 text-primary" />
            </motion.div>

            <p className="text-primary font-medium tracking-[0.3em] uppercase mb-4 text-sm">
              Student Logistics
            </p>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6">
              Moving to <span className="gradient-text">University?</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
              We make it easy for Sri Lankan students to ship their belongings 
              to universities worldwide. Special rates, door-to-door service, 
              and dedicated support.
            </p>

            <motion.a
              href="/contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="liquid-btn inline-block px-10 py-4 rounded-xl font-display 
                       text-sm uppercase tracking-wider"
            >
              <span className="flex items-center gap-2">
                Get Student Quote
                <Plane className="w-4 h-4" />
              </span>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-void border-y border-border/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why Students Choose Us
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Tailored services designed specifically for international students
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-6 text-center hover:glow-border transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-hero-gradient pointer-events-none opacity-50" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-primary font-medium tracking-[0.3em] uppercase mb-4 text-sm">
              Destinations
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Popular University Routes
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {destinations.map((dest, index) => (
              <motion.div
                key={dest.country}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-6 flex items-center gap-4 hover:glow-border transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Plane className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground">
                    {dest.country}
                  </h3>
                  <p className="text-muted-foreground text-sm">{dest.universities}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-void">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass glow-border rounded-3xl p-12 text-center max-w-3xl mx-auto"
          >
            <GraduationCap className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Start Your Journey Today
            </h2>
            <p className="text-muted-foreground mb-8">
              Get a personalized quote for your university move. We'll handle the logistics 
              so you can focus on your studies.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="liquid-btn inline-block px-10 py-4 rounded-xl font-display 
                       text-sm uppercase tracking-wider"
            >
              <span>Request Quote</span>
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Students;
