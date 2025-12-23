import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Users, Clock, ArrowRight } from 'lucide-react';
import { Footer } from '@/components/Footer';
import { Link } from 'react-router-dom';

const destinations = [
  {
    name: 'United Kingdom',
    flag: '🇬🇧',
    universities: '150+',
    students: '2000+',
    duration: '2-4 years',
    highlights: ['World-class education', 'Work visa opportunities', 'Rich cultural experience'],
  },
  {
    name: 'Canada',
    flag: '🇨🇦',
    universities: '100+',
    students: '1500+',
    duration: '2-4 years',
    highlights: ['Post-study work permit', 'Immigration pathways', 'Affordable tuition'],
  },
  {
    name: 'Australia',
    flag: '🇦🇺',
    universities: '40+',
    students: '1200+',
    duration: '2-4 years',
    highlights: ['High quality of life', 'Research opportunities', 'Part-time work allowed'],
  },
  {
    name: 'Germany',
    flag: '🇩🇪',
    universities: '300+',
    students: '800+',
    duration: '2-4 years',
    highlights: ['Free/low tuition', 'Engineering excellence', 'EU opportunities'],
  },
  {
    name: 'Ireland',
    flag: '🇮🇪',
    universities: '30+',
    students: '600+',
    duration: '1-4 years',
    highlights: ['English-speaking', 'Tech hub of Europe', 'Stay back option'],
  },
  {
    name: 'New Zealand',
    flag: '🇳🇿',
    universities: '20+',
    students: '400+',
    duration: '1-4 years',
    highlights: ['Safe environment', 'Work while studying', 'Beautiful landscapes'],
  },
  {
    name: 'France',
    flag: '🇫🇷',
    universities: '70+',
    students: '500+',
    duration: '2-4 years',
    highlights: ['Art & culture', 'Business schools', 'Affordable living'],
  },
  {
    name: 'Italy',
    flag: '🇮🇹',
    universities: '60+',
    students: '350+',
    duration: '2-4 years',
    highlights: ['Art & design', 'Historic universities', 'Mediterranean lifestyle'],
  },
];

const Destinations = () => {
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
              Study Abroad
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
              Choose Your <span className="gradient-text">Destination</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Explore world-class educational opportunities across 17+ countries. 
              We partner with top universities to help you achieve your academic dreams.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {destinations.map((dest, index) => (
              <motion.div
                key={dest.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass rounded-2xl p-6 cursor-pointer group hover:glow-border transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">{dest.flag}</span>
                  <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {dest.name}
                  </h3>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <GraduationCap className="w-4 h-4 text-primary" />
                    <span>{dest.universities} Universities</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="w-4 h-4 text-primary" />
                    <span>{dest.students} Students Placed</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>{dest.duration} Programs</span>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  {dest.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-center gap-2 text-sm text-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {highlight}
                    </div>
                  ))}
                </div>

                <Link 
                  to="/contact"
                  className="flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Apply Now <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass glow-border rounded-3xl p-12 md:p-16 text-center"
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Study <span className="gradient-text">Abroad?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Book a free consultation with our expert advisors and take the first step 
              towards your international education journey.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="liquid-btn px-10 py-4 rounded-xl font-display text-sm uppercase tracking-wider"
              >
                <span className="flex items-center gap-2">
                  Book Free Consultation
                  <ArrowRight size={18} />
                </span>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Destinations;
