import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, ChevronDown, MessageCircle, Phone } from 'lucide-react';

const faqs = [
  {
    q: 'Do we really need to RSVP?',
    a: "Yes, please! Your reply helps us finalize seating, meals, and accommodations so we can make the day as smooth as possible. Please respond even if you are unable to attend.",
    q_tl: 'Kailangan ba talaga naming mag-RSVP?',
    a_tl: 'Oo, pakiusap! Malaki ang maitutulong ng inyong sagot upang matapos namin ang ayos ng upuan, pagkain, at tuluyan nang mapaganda ang araw na ito. Mangyaring tumugon kahit hindi kayo makakadalo.',
  },
  {
    q: 'If we confirmed our RSVP, but unforeseen circumstances arise, what should we do?',
    a: 'Things happen, and we completely understand. Please reach out to Jaris as soon as you can so we can adjust accordingly.',
    q_tl: 'Kung nakumpirma na namin ang aming RSVP ngunit may biglaang pangyayari, ano ang dapat naming gawin?',
    a_tl: 'Nauunawaan namin, may mga bagay na hindi inaasahan. Mangyaring makipag-ugnayan kay Jaris sa lalong madaling panahon upang makapag-ayos kami nang naaayon.',
  },
  {
    q: 'Can I have a plus-one?',
    a: 'Plus-ones are by invitation only. If your invitation includes one, it will be noted on your RSVP. Due to limited capacity, we kindly ask that only invited guests attend.',
    q_tl: 'Maaari ba akong magsama ng kasama (plus-one)?',
    a_tl: 'Ang plus-one ay para lamang sa mga inanyayahan. Kung kasama ito sa inyong imbitasyon, makikita ito sa inyong RSVP. Dahil sa limitadong puwang, hinihiling namin na ang mga inanyayahang panauhin lamang ang dumalo.',
  },
  {
    q: 'Where can I park?',
    a: 'Parking details will be shared closer to the date once the resort is confirmed.',
    q_tl: 'Saan ako maaaring magparada?',
    a_tl: 'Ibabahagi ang mga detalye ng paradahan kapag malapit na ang petsa at nakumpirma na ang resort.',
  },
  {
    q: 'Is the resort room free?',
    a: 'Room and accommodation details will be shared once the resort is confirmed. Please reach out to Jaris if you have specific questions about lodging.',
    q_tl: 'Libre ba ang kuwarto sa resort?',
    a_tl: 'Ibabahagi ang mga detalye ng kuwarto at tuluyan kapag nakumpirma na ang resort. Mangyaring makipag-ugnayan kay Jaris para sa anumang katanungan tungkol sa matutuluyan.',
  },
  {
    q: 'What time should we leave?',
    a: 'Once the ceremony time is confirmed, we will share travel guidance based on the resort location. We recommend arriving 30 minutes before the ceremony to settle in.',
    q_tl: 'Anong oras kami dapat umalis?',
    a_tl: 'Kapag nakumpirma na ang oras ng seremonya, magbibigay kami ng gabay sa biyahe batay sa lokasyon ng resort. Inirerekomenda naming dumating 30 minuto bago ang seremonya upang makaayos.',
  },
  {
    q: 'How late can we RSVP?',
    a: 'We kindly ask that you RSVP by January 13, 2027, so we can finalize all arrangements in time.',
    q_tl: 'Hanggang kailan kami maaaring mag-RSVP?',
    a_tl: 'Hinihiling namin na mag-RSVP kayo bago mag-Enero 13, 2027, upang matapos namin ang lahat ng paghahanda sa tamang oras.',
  },
  {
    q: 'Can we share the website?',
    a: 'Absolutely! Please feel free to share this site with anyone who has been invited so they have all the details in one place.',
    q_tl: 'Maaari ba naming ibahagi ang website?',
    a_tl: 'Siyempre! Malaya ninyong maibabahagi ang site na ito sa sinumang inanyayahan upang nasa iisang lugar ang lahat ng detalye.',
  },
  {
    q: 'Are children welcome?',
    a: 'We love your little ones! Children are welcome at the celebration.',
    q_tl: 'Malugod bang tinatanggap ang mga bata?',
    a_tl: 'Mahal namin ang inyong mga anak! Malugod na tinatanggap ang mga bata sa pagdiriwang.',
  },
  {
    q: 'What should I do if I have dietary restrictions?',
    a: 'Please note any dietary restrictions in your RSVP form. We will do our best to accommodate all needs.',
    q_tl: 'Ano ang dapat kong gawin kung may mga pagbabawal ako sa pagkain?',
    a_tl: 'Mangyaring isulat ang anumang pagbabawal sa pagkain sa inyong RSVP form. Gagawin namin ang aming makakaya upang matugunan ang lahat ng pangangailangan.',
  },
];

function FAQItem({ item, lang }) {
  const [open, setOpen] = useState(false);
  const question = lang === 'tl' ? item.q_tl : item.q;
  const answer = lang === 'tl' ? item.a_tl : item.a;
  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
      >
        <span className="font-serif text-lg text-primary">{question}</span>
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
            <p className="font-serif text-foreground/70 leading-relaxed pb-5">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ContactFAQ() {
  const [lang, setLang] = useState('en');

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
              If you have any questions about the wedding, travel, accommodations, or anything at all, please don't hesitate to reach out. We are happy to help!
            </p>

            <div className="space-y-6">
              <a href="tel:+17574071589" className="flex items-center gap-4 group">
                <div className="w-12 h-12 border border-accent/50 rounded-full flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Jaris Ingram</p>
                  <p className="font-serif text-primary">757-407-1589</p>
                </div>
              </a>

              <a href="tel:+14087479496" className="flex items-center gap-4 group">
                <div className="w-12 h-12 border border-accent/50 rounded-full flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Abdel Mouliom</p>
                  <p className="font-serif text-primary">408-747-9496</p>
                </div>
              </a>

              <a
                href="mailto:jarisingram@aol.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 border border-accent/50 rounded-full flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Email</p>
                  <p className="font-serif text-primary">jarisingram@aol.com</p>
                  <p className="font-serif text-primary">abdel.mouliom@gmail.com</p>
                </div>
              </a>

              <a
                href="https://instagram.com/jpatriciamouliom"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 border border-accent/50 rounded-full flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                  <MessageCircle className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Instagram DM</p>
                  <p className="font-serif text-primary">@jpatriciamouliom</p>
                </div>
              </a>
            </div>

            <p className="font-serif text-sm text-foreground/70 italic leading-relaxed mt-10 pt-6 border-t border-border">
              For further details, please contact <span className="text-primary">Jaris Ingram</span> on
              Facebook Messenger or WhatsApp.
            </p>
          </div>

          {/* FAQ */}
          <div>
            <p className="text-accent-foreground/60 tracking-[0.4em] text-xs uppercase mb-3">
              Questions
            </p>
            <h2 className="font-serif text-5xl text-primary font-light italic mb-8">
              FAQ
            </h2>
            <div className="w-12 h-px bg-accent mb-8" />

            {/* Language toggle: English / Tagalog */}
            <div className="inline-flex items-center border border-border rounded-full p-1 mb-6">
              <button
                onClick={() => setLang('en')}
                className={`px-4 py-1.5 rounded-full text-xs tracking-[0.15em] uppercase transition-colors ${
                  lang === 'en'
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLang('tl')}
                className={`px-4 py-1.5 rounded-full text-xs tracking-[0.15em] uppercase transition-colors ${
                  lang === 'tl'
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                Tagalog
              </button>
            </div>

            <div>
              {faqs.map((item) => (
                <FAQItem key={item.q} item={item} lang={lang} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
