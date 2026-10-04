import React from 'react';
import { motion } from 'framer-motion';
import { Plane, Hotel, Sun } from 'lucide-react';

const tips = [
  {
    icon: Plane,
    title: 'Getting There',
    text: 'Fly into Manila (MNL) or Clark (CRK), and we will drive together to Bani, Pangasinan. If you are arriving close to the wedding date, we recommend CRK. If you plan to come early to tour and experience the Philippines, fly into MNL — Manila has lots of restaurants, shopping centers, and activities to enjoy.',
  },
  {
    icon: Hotel,
    title: 'Where to Stay',
    text: 'Guests will stay at Bani Hidden Paradise Resort, where the wedding and reception will be held. Specific details will be shared closer to the date.',
  },
  {
    icon: Sun,
    title: 'Weather & Attire',
    text: 'March is warm and dry, with sunshine and around 28°C. Tropical formal attire is recommended.',
  },
];

export default function Travel() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgSZ6xrTc94clQs4P4qt_nh7v3NQhezBqL0qmiQxJRcYv-I3UoKTJvwPMi2ldZQRanFVzqA85OS_Y6JQKHvgiy0ngXmz5egYPDCJoIBG575s3YYZ-nePJG9o3cLjISUymvrTqQRgdf7UI7fjZIwhmDNpXSaE-bKTgHlafrHw0AQnqwo9Je1C7O2u1eAsg4-/s16000-rw/Patar%20Beach%20Bolinao%20-%20Drone%20Shot.jpg"
          alt="Patar Beach in Bolinao"
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