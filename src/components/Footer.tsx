import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Linkedin, Instagram, Facebook, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="relative bg-void border-t border-border/20 py-20">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl font-bold mb-4">
              Sky<span className="text-primary">B</span>
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-4">
              Your Best Choice for Overseas Education. Delivering world-class educational opportunities and visa solutions.
            </p>
            <p className="text-primary font-medium text-sm">
              SkyB Overseas Consultants (Pvt) Ltd
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-sm font-semibold tracking-wider uppercase text-muted-foreground mb-6">
              Navigation
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'Study Destinations', href: '/destinations' },
                { label: 'Work Visas', href: '/work-visas' },
                { label: 'About Us', href: '/about' },
                { label: 'Contact', href: '/contact' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-foreground hover:text-primary transition-colors flex items-center gap-1 group"
                  >
                    {item.label}
                    <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Destinations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-sm font-semibold tracking-wider uppercase text-muted-foreground mb-6">
              Popular Destinations
            </h3>
            <ul className="space-y-3 text-foreground">
              {['United Kingdom', 'Canada', 'Australia', 'Germany', 'Ireland'].map((country) => (
                <li key={country}>
                  <Link
                    to="/destinations"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    {country}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-sm font-semibold tracking-wider uppercase text-muted-foreground mb-6">
              Contact
            </h3>
            <ul className="space-y-3 text-foreground mb-6">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm">Colombo, Sri Lanka</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm">+94 11 123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm">info@skyb.lk</span>
              </li>
            </ul>
            
            {/* Social */}
            <div className="flex gap-4">
              {[
                { icon: Linkedin, href: '#' },
                { icon: Instagram, href: '#' },
                { icon: Facebook, href: '#' },
              ].map(({ icon: Icon, href }, idx) => (
                <motion.a
                  key={idx}
                  href={href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center 
                           text-muted-foreground hover:text-primary hover:glow-yellow-sm transition-all"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SkyB Overseas Consultants (Pvt) Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
