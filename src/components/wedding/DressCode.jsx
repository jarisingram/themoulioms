import React from 'react';
import { motion } from 'framer-motion';

const palette = [
  { color: '#F5F0E8', label: 'Ivory' },
  { color: '#D4C5A9', label: 'Sand' },
  { color: '#8FAF8F', label: 'Sage' },
  { color: '#C4A882', label: 'Champagne' },
  { color: '#B8D4C8', label: 'Sea Mist' },
];

export default function DressCode() {
  return (
    <section className="py-32 px-6 bg-secondary/40">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent-foreground/60 tracking-[0.4em] text-xs uppercase mb-3">
            Attire
          </p>
          <h2 className="font-serif text-5xl md:text-6xl text-primary font-light italic">
            Dress Code
          </h2>
          <div className="w-16 h-px bg-accent mx-auto mt-8" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://media.base44.com/images/public/69e338bc82fcf176703f0378/8e4896f2e_generated_image.png"
              alt="Dress code inspiration"
              className="w-full aspect-[4/3] object-cover rounded-sm shadow-md"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-serif text-3xl italic text-primary mb-2">Tropical Formal</h3>
              <div className="w-10 h-px bg-accent mb-5" />
              <p className="font-serif text-foreground/75 leading-relaxed mb-4">
                We're celebrating on the beach — think elegant and breezy. Light fabrics,
                soft neutrals, and tropical tones are warmly welcomed.
              </p>
              <p className="font-serif text-foreground/75 leading-relaxed">
                Please avoid white, as it is reserved for the bride.
                High heels are not recommended on the sand — wedges or flat sandals are ideal.
              </p>
            </div>

            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
                Suggested Palette
              </p>
              <div className="flex gap-3">
                {palette.map((p) => (
                  <div key={p.label} className="flex flex-col items-center gap-2">
                    <div
                      className="w-10 h-10 rounded-full border border-border shadow-sm"
                      style={{ backgroundColor: p.color }}
                    />
                    <span className="text-[10px] text-muted-foreground">{p.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-2">
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">
                  Gentlemen
                </p>
                <ul className="font-serif text-sm text-foreground/75 space-y-1 list-disc list-inside">
                  <li>Linen or cotton suit</li>
                  <li>Barong Tagalog welcome</li>
                  <li>Light-coloured slacks</li>
                  <li>Loafers or dress sandals</li>
                </ul>
              </div>
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">
                  Ladies
                </p>
                <ul className="font-serif text-sm text-foreground/75 space-y-1 list-disc list-inside">
                  <li>Flowy maxi or midi dress</li>
                  <li>Tropical floral prints</li>
                  <li>Soft neutral tones</li>
                  <li>Wedges or flat sandals</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}