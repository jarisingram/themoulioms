import React from 'react';
import { motion } from 'framer-motion';

const images = [
  '/images/gallery-1.jpg',
  '/images/gallery-2.jpg',
  '/images/gallery-3.jpg',
];

export default function Gallery() {
  return (
    <section className="py-32 px-6 bg-secondary/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent-foreground/60 tracking-[0.4em] text-xs uppercase mb-3">
            Moments
          </p>
          <h2 className="font-serif text-5xl md:text-6xl text-primary font-light italic">
            A Glimpse of Us
          </h2>
          <div className="w-16 h-px bg-accent mx-auto mt-8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className={`overflow-hidden rounded-sm ${i === 1 ? 'md:mt-12' : ''}`}
            >
              <img
                src={src}
                alt={`Moment ${i + 1}`}
                className="w-full aspect-[4/5] object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}