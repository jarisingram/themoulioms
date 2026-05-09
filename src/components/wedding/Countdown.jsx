import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const WEDDING_DATE = new Date('2027-03-13T15:00:00');

const calc = () => {
  const diff = WEDDING_DATE.getTime() - new Date().getTime();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

export default function Countdown() {
  const [time, setTime] = useState(calc());

  useEffect(() => {
    const t = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(t);
  }, []);

  const items = [
    { label: 'Days', value: time.days },
    { label: 'Hours', value: time.hours },
    { label: 'Minutes', value: time.minutes },
    { label: 'Seconds', value: time.seconds },
  ];

  return (
    <section className="py-24 px-6 bg-secondary">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-accent-foreground/60 tracking-[0.4em] text-xs uppercase mb-3">
          Counting the days
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-primary mb-12 italic font-light">
          Until we say "I do"
        </h2>

        <div className="grid grid-cols-4 gap-2 md:gap-8 max-w-2xl mx-auto">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col"
            >
              <div className="font-serif text-4xl md:text-7xl text-primary font-light tabular-nums">
                {String(item.value).padStart(2, '0')}
              </div>
              <div className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-muted-foreground mt-2">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}