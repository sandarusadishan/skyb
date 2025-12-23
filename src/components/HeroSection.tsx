import { motion } from 'framer-motion';
import { ArrowRight, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ParticleNetwork } from './ParticleNetwork';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleNetwork />
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
          <motion.div className="flex items-center justify-center gap-2 mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            <GraduationCap className="w-6 h-6 text-primary" />
            <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm">Your Best Choice for Overseas Education</p>
          </motion.div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-foreground">
            <motion.span className="block" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>CHANGE THE WAY YOU SEE THE WORLD</motion.span>
            <motion.span className="block gradient-text" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}></motion.span>
          </h1>
          <motion.p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
            Expert guidance for UK, Canada, Europe, Australia, and beyond. Transform your dreams into reality with SkyB Overseas Consultants.
          </motion.p>
          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }}>
            <Link to="/destinations">
              <motion.button className="liquid-btn px-8 py-4 rounded-xl text-sm font-display uppercase tracking-wider" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <span className="flex items-center gap-2">Start Your Journey <ArrowRight size={18} /></span>
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button className="px-8 py-4 rounded-xl text-sm font-display uppercase tracking-wider border border-glass-border text-foreground hover:border-primary/50 transition-colors" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                Free Consultation
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
