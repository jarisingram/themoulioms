import React from 'react';
import { motion } from 'framer-motion';

export default function Story() {
  return (
    <section className="py-32 px-6 bg-background">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <img
            src="https://media.base44.com/images/public/69e338bc82fcf176703f0378/56a666234_generated_image.png"
            alt="Couple holding hands"
            className="w-full aspect-[3/4] object-cover rounded-sm shadow-xl"
          />
          <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-accent -z-0 hidden md:block" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p className="text-accent-foreground/60 tracking-[0.4em] text-xs uppercase mb-4">
            Our Journey
          </p>
          <h2 className="font-serif text-5xl md:text-6xl text-primary font-light italic mb-8 leading-tight">
            From a ride<br />to a lifetime
          </h2>
          <div className="w-16 h-px bg-accent mb-8" />
          <div className="space-y-5 font-serif text-lg text-foreground/80 leading-relaxed">
            <p>
              It started with a chance encounter — a shared laugh, a long conversation,
              and a feeling that something extraordinary had begun between Abdel and Jaris.
            </p>
            <p>
              Years of adventures, late-night talks, and small everyday moments have woven our
              story together. Through sunrises in Palawan and quiet evenings at home, we found
              our forever in each other.
            </p>
            <p className="font-script text-3xl text-primary pt-2">
              And now, we say yes — to a lifetime.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}