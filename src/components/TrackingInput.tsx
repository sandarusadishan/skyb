import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Terminal, ChevronRight } from 'lucide-react';

export function TrackingInput() {
  const [trackingId, setTrackingId] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle tracking logic
    console.log('Tracking:', trackingId);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-2xl mx-auto"
    >
      {/* Terminal Header */}
      <div className="glass-strong rounded-t-xl px-4 py-3 flex items-center gap-3 border-b border-border/30">
        <div className="flex gap-2">
          <span className="w-3 h-3 rounded-full bg-destructive/80" />
          <span className="w-3 h-3 rounded-full bg-primary/80" />
          <span className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="flex items-center gap-2 text-muted-foreground text-sm font-mono">
          <Terminal className="w-4 h-4" />
          <span>skyb://track-shipment</span>
        </div>
      </div>

      {/* Terminal Body */}
      <form onSubmit={handleSubmit} className="glass-strong rounded-b-xl p-6">
        <div className="flex items-center gap-2 text-muted-foreground text-sm font-mono mb-4">
          <ChevronRight className="w-4 h-4 text-primary" />
          <span>Enter your tracking ID to locate your shipment</span>
        </div>

        <div className={`relative rounded-lg overflow-hidden transition-all duration-300 ${
          isFocused ? 'glow-border' : ''
        }`}>
          <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 text-primary">
            <span className="font-mono text-sm">$</span>
            <Search className="w-4 h-4" />
          </div>
          
          <input
            type="text"
            value={trackingId}
            onChange={(e) => setTrackingId(e.target.value.toUpperCase())}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="SKB-XXXXXX-XX"
            className="terminal-input w-full pl-16 pr-32 py-4 rounded-lg text-lg 
                     tracking-wider font-mono uppercase bg-void/50"
          />

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 
                     bg-primary text-primary-foreground rounded-lg font-display 
                     text-sm font-semibold tracking-wider uppercase
                     hover:bg-primary/90 transition-colors"
          >
            Track
          </motion.button>
        </div>

        {/* Status Line */}
        <div className="mt-4 flex items-center gap-4 text-xs font-mono text-muted-foreground">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            System Online
          </span>
          <span>|</span>
          <span>Real-time tracking enabled</span>
        </div>
      </form>
    </motion.div>
  );
}
