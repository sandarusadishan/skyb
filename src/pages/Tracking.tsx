import { motion } from 'framer-motion';
import { MapPin, Package, Truck, CheckCircle2, Clock, Info } from 'lucide-react';
import { TrackingInput } from '@/components/TrackingInput';
import { Footer } from '@/components/Footer';

const trackingSteps = [
  { icon: Package, label: 'Order Placed', status: 'complete' },
  { icon: Truck, label: 'In Transit', status: 'current' },
  { icon: MapPin, label: 'Out for Delivery', status: 'pending' },
  { icon: CheckCircle2, label: 'Delivered', status: 'pending' },
];

const Tracking = () => {
  return (
    <main className="pt-32 min-h-screen">
      {/* Header */}
      <section className="pb-16 relative">
        <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <p className="text-primary font-medium tracking-[0.3em] uppercase mb-4 text-sm">
              Shipment Tracker
            </p>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6">
              Track Your <span className="gradient-text">Cargo</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Real-time visibility into your shipment's journey from origin to destination.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tracking Input */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <TrackingInput />
        </div>
      </section>

      {/* Demo Tracking Result */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8 max-w-4xl mx-auto"
          >
            {/* Shipment Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-6 border-b border-border/30">
              <div>
                <p className="text-muted-foreground text-sm mb-1">Tracking Number</p>
                <p className="font-mono text-primary text-lg font-bold">SKB-123456-UK</p>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Clock className="w-4 h-4" />
                Estimated: Dec 8, 2025
              </div>
            </div>

            {/* Progress Steps */}
            <div className="py-8">
              <div className="flex justify-between relative">
                {/* Progress Line */}
                <div className="absolute top-6 left-0 right-0 h-0.5 bg-border/30">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '40%' }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="h-full bg-primary"
                  />
                </div>

                {trackingSteps.map((step, index) => (
                  <div key={step.label} className="relative flex flex-col items-center z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className={`w-12 h-12 rounded-full flex items-center justify-center
                        ${step.status === 'complete' ? 'bg-primary text-primary-foreground' : 
                          step.status === 'current' ? 'bg-primary/20 text-primary glow-yellow-sm' : 
                          'bg-muted text-muted-foreground'}`}
                    >
                      <step.icon className="w-5 h-5" />
                    </motion.div>
                    <span className={`mt-3 text-xs text-center ${
                      step.status === 'pending' ? 'text-muted-foreground' : 'text-foreground'
                    }`}>
                      {step.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Shipment Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-border/30">
              <div>
                <p className="text-muted-foreground text-xs uppercase tracking-wider mb-1">Origin</p>
                <p className="text-foreground font-medium">Colombo, Sri Lanka</p>
              </div>
              <div>
                <p className="text-muted-foreground text-xs uppercase tracking-wider mb-1">Destination</p>
                <p className="text-foreground font-medium">London, United Kingdom</p>
              </div>
              <div>
                <p className="text-muted-foreground text-xs uppercase tracking-wider mb-1">Service</p>
                <p className="text-foreground font-medium">Air Freight Express</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-void border-y border-border/20">
        <div className="container mx-auto px-6">
          <div className="flex items-start gap-4 max-w-2xl mx-auto glass rounded-xl p-6">
            <Info className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-display font-bold text-foreground mb-2">Need Help?</h3>
              <p className="text-muted-foreground text-sm">
                If you're experiencing issues with tracking or have questions about your shipment, 
                our support team is available 24/7. Contact us at{' '}
                <a href="mailto:support@skyb.lk" className="text-primary hover:underline">
                  support@skyb.lk
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Tracking;
