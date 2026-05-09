import React from 'react';
import { motion } from 'framer-motion';
import { Plane, Hotel, Sun } from 'lucide-react';

const tips = [
  {
    icon: Plane,
    title: 'Getting There',
    text: 'Fly into Ninoy Aquino International (MNL), then connect to Puerto Princesa or El Nido (ENI) via local flights.',
  },
  {
    icon: Hotel,
    title: 'Where to Stay',
    text: 'A curated list of resorts and boutique hotels near the venue will be shared with your invitation.',
  },
  {
    icon: Sun,
    title: 'Weather & Attire',
    text: 'March is warm and dry — expect sunshine and 28°C. Tropical formal attire recommended.',
  },
];

export default function Travel() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://media.base44.com/images/public/69e338bc82fcf176703f0378/9e99668bf_generated_image.png"
          alt="El Nido Palawan limestone cliffs"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      <div className="relative max-w-6xl mx-auto text-primary-foreground">
        <div className="text-center mb-20">
          <p className="text-accent tracking-[0.4em] text-xs uppercase mb-3">
            Mabuhay
          </p>
          <h2 className="font-serif text-5xl md:text-6xl font-light italic">
            Welcome to the Philippines
          </h2>
          <div className="w-16 h-px bg-accent mx-auto mt-8" />
          <p className="font-serif text-lg max-w-2xl mx-auto mt-8 text-primary-foreground/80 leading-relaxed">
            We're inviting you to one of the most beautiful corners of the world.
            Here are a few notes to help you plan your journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {tips.map((tip, i) => (
            <motion.div
              key={tip.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-accent/60 mb-6">
                <tip.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-serif text-2xl italic mb-4">{tip.title}</h3>
              <p className="text-primary-foreground/75 font-serif leading-relaxed">
                {tip.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}