import React from 'react';
import { motion } from 'framer-motion';
import { Gift, DollarSign } from 'lucide-react';

const methods = [
  {
    name: 'CashApp',
    handle: '$themoulioms',
    iconUrl: 'https://img.icons8.com/?size=100&id=mlOg8xC4khEI&format=png&color=000000',
    color: 'bg-green-50 border-green-200',
  },
  {
    name: 'Venmo',
    handle: '@themoulioms',
    iconUrl: 'https://img.icons8.com/?size=100&id=96905&format=png&color=000000',
    color: 'bg-blue-50 border-blue-200',
  },
  {
    name: 'Zelle',
    handle: 'themoulioms@email.com',
    iconUrl: 'https://img.icons8.com/?size=100&id=QL2w4xOmTqeY&format=png&color=000000',
    color: 'bg-purple-50 border-purple-200',
  },
];

export default function Gifts() {
  return (
    <section className="py-32 px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-accent-foreground/60 tracking-[0.4em] text-xs uppercase mb-3">
          Registry
        </p>
        <h2 className="font-serif text-5xl md:text-6xl text-primary font-light italic mb-8">
          Gifts
        </h2>
        <div className="w-16 h-px bg-accent mx-auto mb-10" />

        <div className="flex items-center justify-center gap-3 mb-10">
          <Gift className="w-5 h-5 text-accent" />
          <p className="font-serif text-lg text-foreground/80 italic">
            Your presence is the greatest gift of all.
          </p>
        </div>

        <p className="font-serif text-foreground/70 max-w-xl mx-auto mb-14 leading-relaxed">
          For those who wish to contribute to our new chapter together, a monetary gift is
          deeply appreciated. Below are our preferred ways to receive them.
        </p>

        <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
          {methods.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`border rounded-sm p-8 text-center ${m.color}`}
            >
              <div className="flex justify-center mb-4">
                <img
                  src={m.iconUrl}
                  alt={`${m.name} logo`}
                  className="w-10 h-10 object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className="font-serif text-xl text-primary mb-2">{m.name}</h3>
              <p className="text-sm text-foreground/60 font-mono">{m.handle}</p>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 text-xs tracking-[0.2em] uppercase text-muted-foreground">
          Please include your name in the note — thank you!
        </p>
      </div>
    </section>
  );
}