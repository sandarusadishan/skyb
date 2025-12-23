import { motion } from 'framer-motion';
import { GraduationCap, FileCheck, Briefcase, Plane, Building2, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: GraduationCap,
    title: 'University Placement',
    description: 'Get admitted to top universities worldwide with our expert guidance and application support.',
    href: '/destinations',
    size: 'large',
  },
  {
    icon: FileCheck,
    title: 'Student Visa Processing',
    description: 'Complete visa assistance from documentation to interview preparation.',
    href: '/destinations',
    size: 'medium',
  },
  {
    icon: Globe,
    title: 'IELTS & Test Prep',
    description: 'Achieve your target scores with our proven preparation methods.',
    href: '/contact',
    size: 'medium',
  },
  {
    icon: Briefcase,
    title: 'UAE Work Visa',
    description: 'Premium work opportunities in Dubai, Abu Dhabi, and across the UAE.',
    href: '/work-visas',
    size: 'medium',
    highlight: true,
  },
  {
    icon: Building2,
    title: 'Maldives Work Visa',
    description: 'Exclusive resort and hospitality career placements in paradise.',
    href: '/work-visas',
    size: 'medium',
    highlight: true,
  },
  {
    icon: Plane,
    title: 'Pre-Departure Support',
    description: 'Travel arrangements, accommodation, and settling-in guidance.',
    href: '/contact',
    size: 'small',
  },
];

export function ServicesGrid() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-[0.3em] uppercase mb-4 text-sm">
            What We Offer
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Comprehensive education and visa solutions tailored to your aspirations
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${service.size === 'large' ? 'lg:col-span-2 lg:row-span-2' : ''}`}
            >
              <Link to={service.href}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`glass rounded-2xl p-8 h-full transition-all duration-300 cursor-pointer group
                             ${service.highlight ? 'glow-border' : 'hover:glow-border'}
                             ${service.size === 'large' ? 'min-h-[300px]' : 'min-h-[200px]'}`}
                >
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6
                                  ${service.highlight ? 'bg-primary text-background' : 'bg-primary/10 text-primary'}`}>
                    <service.icon className="w-7 h-7" />
                  </div>
                  
                  <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground font-body leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mt-6 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn More →
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
