import React, { useEffect, useState } from 'react';

const links = [
  { id: 'story', label: 'Story' },
  { id: 'details', label: 'Details' },
  { id: 'travel', label: 'Travel' },
  { id: 'rsvp', label: 'RSVP' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-background/90 backdrop-blur-md py-4 shadow-sm' : 'py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <span
          className={`font-script text-3xl transition-colors ${
            scrolled ? 'text-primary' : 'text-white'
          }`}
        >
          <span>A</span><span className="ml-1 mr-4">&</span><span>J</span>
        </span>
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`text-xs tracking-[0.3em] uppercase transition-colors ${
                scrolled ? 'text-foreground/70 hover:text-primary' : 'text-white/80 hover:text-white'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
        <button
          onClick={() => scrollTo('rsvp')}
          className={`text-xs tracking-[0.3em] uppercase border px-5 py-2 transition-all ${
            scrolled
              ? 'border-primary text-primary hover:bg-primary hover:text-primary-foreground'
              : 'border-white/60 text-white hover:bg-white hover:text-primary'
          }`}
        >
          RSVP
        </button>
      </div>
    </nav>
  );
}