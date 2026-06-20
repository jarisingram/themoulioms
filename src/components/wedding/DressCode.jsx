import React from 'react';
import { motion } from 'framer-motion';

// Each role group has its own color story and instructions.
// The "swatches" array allows multiple colors (used for Guests' palette).
const groups = [
  {
    role: 'Maid of Honor',
    tagline: 'Darker dusty blue',
    swatches: [{ color: '#3D5573', label: 'Dusty Indigo' }],
    note:
      'Please pick out a formal dress in this darker dusty blue. Whatever silhouette feels best on you is great. The color is what ties the bridal party together.',
  },
  {
    role: 'Bridesmaids',
    tagline: 'Soft dusty blue',
    swatches: [{ color: '#8AA0B8', label: 'Dusty Blue' }],
    note:
      'Please pick out a dress in this softer dusty blue. The style is up to you. Long, short, flowy, fitted, all good as long as the color matches.',
  },
  {
    role: 'Ninang & Ninong',
    tagline: 'Sea mist green',
    swatches: [{ color: '#A8C5B8', label: 'Sea Mist' }],
    note: (
      <>
        Our Ninang and Ninong (also called our Principal Sponsors, or Godmothers and
        Godfathers in English) are the family who guide us into married life.{' '}
        <strong className="font-semibold text-primary">Ninong</strong>: a long ivory
        shirt with tan slacks and a brown belt.{' '}
        <strong className="font-semibold text-primary">Ninang</strong>: a flowy
        floor-length gown in the sea mist green shown.
      </>
    ),
  },
  {
    role: 'Groomsmen & Best Man',
    tagline: 'Ivory and tan',
    swatches: [
      { color: '#F5F0E8', label: 'Ivory' },
      { color: '#C4A882', label: 'Tan' },
    ],
    note:
      'An off-white long sleeve shirt with a chest pocket, tan slacks, and a brown belt. Simple, breezy, and built for the beach.',
  },
  {
    role: 'Guests',
    tagline: 'Soft coastal palette',
    swatches: [
      { color: '#5C9EA4', label: 'Teal' },
      { color: '#F3B6C8', label: 'Pink' },
      { color: '#CB8E96', label: 'Dusty Pink' },
      { color: '#D49B95', label: 'Rose' },
      { color: '#E8B4B0', label: 'Blush' },
    ],
    note: (
      <>
        <strong className="font-semibold text-primary">Gentlemen</strong>: a white or
        neutral top with tan, black, or grey slacks.{' '}
        <strong className="font-semibold text-primary">Ladies</strong>: a dress in any
        of the swatch colors. Out of respect for tradition, please do not wear red, black,
        or white.
      </>
    ),
  },
];

function Swatch({ color, label }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className="w-10 h-10 rounded-full border border-border shadow-sm"
        style={{ backgroundColor: color }}
        aria-label={label}
      />
      <span className="text-[10px] text-muted-foreground tracking-wide">{label}</span>
    </div>
  );
}

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
          <p className="font-serif text-foreground/70 mt-8 max-w-2xl mx-auto leading-relaxed">
            We're keeping things relaxed and coastal. Pick something you love that fits the
            soft colors of the ocean, sand, and sky. Since the ceremony is on sand, we
            suggest skipping the high heels and going with wedges or flat sandals.
          </p>
          <p className="font-serif text-foreground/80 mt-6 max-w-2xl mx-auto leading-relaxed italic">
            One small ask: please skip white, black, and red so our color palette stays
            consistent. We can't wait to celebrate with you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {groups.map((g, i) => (
            <motion.div
              key={g.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="bg-background rounded-sm p-8 border border-border shadow-sm"
            >
              <h3 className="font-serif text-2xl italic text-primary mb-1">
                {g.role}
              </h3>
              <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-5">
                {g.tagline}
              </p>

              <div className="flex flex-wrap gap-4 mb-6">
                {g.swatches.map((s) => (
                  <Swatch key={s.label} color={s.color} label={s.label} />
                ))}
              </div>

              <p className="font-serif text-sm text-foreground/75 leading-relaxed">
                {g.note}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
