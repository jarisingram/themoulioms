import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Hash } from 'lucide-react';

export default function SocialMedia() {
  return (
    <section className="py-28 px-6 bg-primary text-primary-foreground text-center">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Camera className="w-8 h-8 text-accent mx-auto mb-6" />
          <p className="tracking-[0.4em] text-xs uppercase text-primary-foreground/60 mb-4">
            Share the Love
          </p>
          <h2 className="font-serif text-5xl md:text-6xl font-light italic mb-8">
            Capture the Moment
          </h2>
          <div className="w-16 h-px bg-accent mx-auto mb-10" />
          <p className="font-serif text-lg text-primary-foreground/80 leading-relaxed mb-10">
            We'd love to see the day through your eyes! Share your photos and videos on
            social media and tag us with our wedding hashtag.
          </p>

          <div className="inline-flex items-center gap-3 border border-accent px-8 py-5 rounded-sm">
            <Hash className="w-5 h-5 text-accent" />
            <span className="font-serif text-3xl italic tracking-wide">themoulioms</span>
          </div>

          <p className="mt-8 text-xs tracking-[0.2em] uppercase text-primary-foreground/50">
            Instagram · TikTok · Facebook
          </p>
        </motion.div>
      </div>
    </section>
  );
}