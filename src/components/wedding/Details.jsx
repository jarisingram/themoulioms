import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Calendar } from 'lucide-react';

const events = [
  {
    title: 'The Ceremony',
    image: 'https://media.base44.com/images/public/69e338bc82fcf176703f0378/a21c45434_generated_image.png',
    date: 'Saturday, March 13, 2027',
    time: '3:30 PM',
    venue: 'Beachfront Chapel',
    location: 'El Nido, Palawan',
    note: 'A barefoot ceremony by the sea',
  },
  {
    title: 'The Reception',
    image: 'https://media.base44.com/images/public/69e338bc82fcf176703f0378/416587530_generated_image.png',
    date: 'Saturday, March 13, 2027',
    time: '6:00 PM',
    venue: 'Garden Pavilion',
    location: 'El Nido, Palawan',
    note: 'Dinner, dancing & celebration',
  },
];

export default function Details() {
  return (
    <section className="py-32 px-6 bg-secondary/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-accent-foreground/60 tracking-[0.4em] text-xs uppercase mb-3">
            The Celebration
          </p>
          <h2 className="font-serif text-5xl md:text-6xl text-primary font-light italic">
            When & Where
          </h2>
          <div className="w-16 h-px bg-accent mx-auto mt-8" />
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {events.map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="bg-background rounded-sm overflow-hidden shadow-sm group"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-10 text-center">
                <h3 className="font-serif text-3xl md:text-4xl text-primary italic mb-6">
                  {event.title}
                </h3>
                <div className="w-10 h-px bg-accent mx-auto mb-6" />
                <div className="space-y-4 text-foreground/80">
                  <div className="flex items-center justify-center gap-3">
                    <Calendar className="w-4 h-4 text-accent" />
                    <span className="font-serif">{event.date}</span>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <Clock className="w-4 h-4 text-accent" />
                    <span className="font-serif">{event.time}</span>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <MapPin className="w-4 h-4 text-accent" />
                    <span className="font-serif">{event.venue} · {event.location}</span>
                  </div>
                </div>
                <p className="mt-8 text-sm tracking-wider uppercase text-muted-foreground">
                  {event.note}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}