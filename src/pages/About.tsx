import { motion } from 'framer-motion';
import { Target, Eye, Award, Users, Globe, CheckCircle } from 'lucide-react';
import { Footer } from '@/components/Footer';

const milestones = [
  { year: '2014', event: 'SkyB Founded', description: 'Started operations in Colombo' },
  { year: '2016', event: 'UK Partnership', description: 'First university partnerships established' },
  { year: '2018', event: '500+ Students', description: 'Milestone of students placed abroad' },
  { year: '2020', event: 'Work Visa Launch', description: 'Expanded to work visa services' },
  { year: '2023', event: '1000+ Success Stories', description: 'Celebrating 1000+ happy clients' },
];

const team = [
  { name: 'Expert Counselors', count: '10+', description: 'Certified education consultants' },
  { name: 'Partner Universities', count: '50+', description: 'Across 17 countries' },
  { name: 'Success Rate', count: '95%', description: 'Visa approval rate' },
  { name: 'Years Experience', count: '10+', description: 'In the industry' },
];

const About = () => {
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
              About Us
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
              Your Trusted Partner in <span className="gradient-text">Global Education</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              SkyB Overseas Consultants (Pvt) Ltd has been transforming dreams into reality 
              since 2014, guiding students to prestigious universities worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass rounded-3xl p-8 glow-border"
            >
              <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-background" />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To deliver world-class educational opportunities and visa solutions, empowering 
                students and professionals to achieve their international aspirations. We are 
                committed to providing personalized guidance, ensuring every client receives 
                the support they need to succeed.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass rounded-3xl p-8 glow-border"
            >
              <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-background" />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To be Sri Lanka's most trusted overseas education consultancy, recognized for 
                our integrity, expertise, and commitment to student success. We envision a 
                world where every ambitious individual has access to global education and 
                career opportunities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((stat, index) => (
              <motion.div
                key={stat.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-2xl p-6 text-center hover:glow-border transition-all"
              >
                <p className="font-display text-4xl font-bold text-primary mb-2">{stat.count}</p>
                <p className="font-display font-semibold text-foreground mb-1">{stat.name}</p>
                <p className="text-muted-foreground text-sm">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="gradient-text">Journey</span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-primary/30 hidden md:block" />

            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center gap-8 mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="glass rounded-2xl p-6 inline-block hover:glow-border transition-all">
                    <span className="text-primary font-display font-bold text-xl">{milestone.year}</span>
                    <h3 className="font-display font-bold text-foreground mt-2">{milestone.event}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{milestone.description}</p>
                  </div>
                </div>
                <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-primary glow-yellow">
                  <CheckCircle className="w-6 h-6 text-background" />
                </div>
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core <span className="gradient-text">Values</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Award, title: 'Excellence', description: 'We strive for excellence in every consultation and service we provide.' },
              { icon: Users, title: 'Integrity', description: 'Honesty and transparency are the foundation of our client relationships.' },
              { icon: Globe, title: 'Global Mindset', description: 'We think globally to connect our clients with worldwide opportunities.' },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-2xl p-8 text-center hover:glow-border transition-all"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
