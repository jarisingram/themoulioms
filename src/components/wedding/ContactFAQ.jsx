import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, ChevronDown, MessageCircle } from 'lucide-react';

const faqs = [
  {
    q: 'Is the wedding indoors or outdoors?',
    a: 'The ceremony and reception are both held outdoors on the beach. Please dress accordingly and be prepared for a beautiful tropical evening.',
  },
  {
    q: 'Can I bring a plus-one?',
    a: 'Please indicate the number of guests in your RSVP. Due to limited capacity, we kindly ask that only invited guests attend.',
  },
  {
    q: 'Is there parking available?',
    a: 'Yes, parking is available at the venue. Shuttle service from select hotels will also be provided — details in your formal invitation.',
  },
  {
    q: 'When is the RSVP deadline?',
    a: 'We kindly ask that you RSVP by January 13, 2027 so we can finalize arrangements.',
  },
  {
    q: 'Are children welcome?',
    a: 'We love your little ones! Children are welcome at the celebration.',
  },
  {
    q: 'What should I do if I have dietary restrictions?',
    a: 'Please note any dietary restrictions in your RSVP form. We will do our best to accommodate all needs.',
  },
  {
    q: 'Will there be a photographer?',
    a: 'Yes, we have a professional photographer. We also encourage guests to capture their own moments and share them with our hashtag #themoulioms.',
  },
];

function FAQItem({ item }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
      >
        <span className="font-serif text-lg text-primary">{item.q}</span>
        <ChevronDown
          className={`w-4 h-4 text-muted-foreground flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="font-serif text-foreground/70 leading-relaxed pb-5">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ContactFAQ() {
  return (
    <section className="py-32 px-6 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20">
          {/* Contact */}
          <div>
            <p className="text-accent-foreground/60 tracking-[0.4em] text-xs uppercase mb-3">
              Need Help?
            </p>
            <h2 className="font-serif text-5xl text-primary font-light italic mb-8">
              Contact Us
            </h2>
            <div className="w-12 h-px bg-accent mb-10" />
            <p className="font-serif text-foreground/70 leading-relaxed mb-10">
              If you have any questions about the wedding, travel, accommodations, or anything at all —
              please don't hesitate to reach out. We're happy to help!
            </p>

            <div className="space-y-6">
              <a
                href="mailto:hello@themoulioms.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 border border-accent/50 rounded-full flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Email</p>
                  <p className="font-serif text-primary">hello@themoulioms.com</p>
                </div>
              </a>

              <a
                href="https://instagram.com/themoulioms"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 border border-accent/50 rounded-full flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                  <MessageCircle className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Instagram DM</p>
                  <p className="font-serif text-primary">@themoulioms</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 border border-accent/50 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">WhatsApp</p>
                  <p className="font-serif text-primary">Details in your formal invite</p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div>
            <p className="text-accent-foreground/60 tracking-[0.4em] text-xs uppercase mb-3">
              Questions
            </p>
            <h2 className="font-serif text-5xl text-primary font-light italic mb-8">
              FAQ
            </h2>
            <div className="w-12 h-px bg-accent mb-10" />
            <div>
              {faqs.map((item) => (
                <FAQItem key={item.q} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}