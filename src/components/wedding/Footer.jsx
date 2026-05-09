import React from 'react';

export default function Footer() {
  return (
    <footer className="py-16 px-6 bg-primary text-primary-foreground text-center">
      <p className="font-script text-5xl text-accent mb-4"><span>A</span><span className="ml-2 mr-8">&</span><span>J</span></p>
      <div className="w-12 h-px bg-accent/60 mx-auto mb-6" />
      <p className="tracking-[0.3em] uppercase text-xs text-primary-foreground/60 mb-2">
        13 · 03 · 2027
      </p>
      <p className="font-serif italic text-primary-foreground/70">
        El Nido, Palawan · Philippines
      </p>
    </footer>
  );
}