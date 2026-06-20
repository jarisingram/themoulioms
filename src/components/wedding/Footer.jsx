import React from 'react';

export default function Footer() {
  return (
    <footer
      className="py-16 px-6 text-white text-center"
      style={{ backgroundColor: '#8AA0B8' }}
    >
      <img src="/images/monogram.png" alt="A & J" className="h-28 w-auto mb-4 mx-auto block" />
      <div className="w-12 h-px bg-white/60 mx-auto mb-6" />
      <p className="tracking-[0.3em] uppercase text-xs text-white/70 mb-2">
        03.13.2027
      </p>
      <p className="font-serif italic text-white/80">
        Bolinao, Pangasinan · Philippines
      </p>
    </footer>
  );
}