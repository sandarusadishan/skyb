import { motion } from 'framer-motion';
import { Plane, Ship, Package, Truck, Warehouse, FileCheck } from 'lucide-react';
import { ServiceCard } from '@/components/ServiceCard';
import { Footer } from '@/components/Footer';

const services = [
  {
    icon: Plane,
    title: 'Air Freight',
    description: 'Express air cargo solutions with guaranteed delivery times across all major global destinations.',
    features: ['Same-day dispatch available', 'Door-to-door service', 'Priority handling', 'Temperature-controlled options'],
  },
  {
    icon: Ship,
    title: 'Sea Freight',
    description: 'Cost-effective ocean shipping for large volumes with full container and LCL options worldwide.',
    features: ['FCL & LCL options', 'Port-to-port service', 'Break-bulk cargo', 'Project cargo handling'],
  },
  {
    icon: Package,
    title: 'Courier Services',
    description: 'Fast, reliable courier services for documents and parcels to destinations worldwide.',
    features: ['Express delivery', 'Real-time tracking', 'Signature confirmation', 'Same-day local delivery'],
  },
  {
    icon: Truck,
    title: 'Ground Transport',
    description: 'Comprehensive road freight solutions connecting major hubs across the region.',
    features: ['Full truckload (FTL)', 'Less than truckload (LTL)', 'Cross-docking', 'Last-mile delivery'],
  },
  {
    icon: Warehouse,
    title: 'Warehousing',
    description: 'State-of-the-art storage facilities with inventory management and fulfillment services.',
    features: ['Climate-controlled storage', 'Pick & pack services', 'Inventory management', 'Distribution support'],
  },
  {
    icon: FileCheck,
    title: 'Customs Brokerage',
    description: 'Expert customs clearance services ensuring smooth and compliant import/export operations.',
    features: ['Import/export clearance', 'Documentation handling', 'Duty optimization', 'Compliance consulting'],
  },
];

const Services = () => {
  return (
    <main className="pt-32 min-h-screen">
      {/* Header */}
      <section className="pb-20 relative">
        <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <p className="text-primary font-medium tracking-[0.3em] uppercase mb-4 text-sm">
              Our Capabilities
            </p>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6">
              Services
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              End-to-end logistics solutions designed to move your cargo efficiently, 
              safely, and cost-effectively across the globe.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-void border-y border-border/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-primary font-medium tracking-[0.3em] uppercase mb-4 text-sm">
              How It Works
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Simple Process
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Request Quote', desc: 'Share your shipment details' },
              { step: '02', title: 'Get Pricing', desc: 'Receive competitive rates' },
              { step: '03', title: 'Book & Ship', desc: 'Confirm and hand over cargo' },
              { step: '04', title: 'Track Delivery', desc: 'Monitor until destination' },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative text-center"
              >
                <div className="font-display text-6xl font-bold text-primary/10 mb-4">
                  {item.step}
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
                
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/30 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Services;
