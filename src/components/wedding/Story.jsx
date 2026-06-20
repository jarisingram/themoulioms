import React from 'react';
import { motion } from 'framer-motion';

export default function Story() {
  return (
    <section className="py-32 px-6 bg-background">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <img
            src="/images/story.jpg"
            alt="Abdel and Jaris holding hands by the sea"
            className="w-full aspect-[3/4] object-cover rounded-sm shadow-xl"
          />
          <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-accent -z-0 hidden md:block" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p className="text-accent-foreground/60 tracking-[0.4em] text-xs uppercase mb-4">
            Our Journey
          </p>
          <h2 className="font-serif text-5xl md:text-6xl text-primary font-light italic mb-8 leading-tight">
            From a ride<br />to a lifetime
          </h2>
          <div className="w-16 h-px bg-accent mb-8" />
          <div className="space-y-5 font-serif text-base md:text-lg text-foreground/80 leading-relaxed">
            <p>
              From the moment I met Jaris in 2017 in Greensboro, I never imagined how much she would change my life. We met as students at North Carolina A&amp;T State University studying Information Technology, but before long, she became much more than a classmate or friend. She became my person.
            </p>
            <p>
              Our story began in the most unexpected way. Jaris needed a ride to a doctor's appointment, and I offered to help. I had no idea then that the girl sitting in my passenger seat would one day become my forever passenger princess.
            </p>
            <p>
              We spent nine months building a friendship that naturally grew into something deeper. When I finally asked her to be my girlfriend at Sweet Frog surrounded by our friends, everything just felt right from that moment on.
            </p>
            <p>
              Over the years, we have traveled across nearly 30 states and countries, tried new foods, explored different cultures, and built a life filled with laughter, partnership, and love. Through every season of life, one thing always stayed certain: life simply felt better with her by my side.
            </p>
            <p>
              In November 2023, I asked her to marry me, and in March 2024, we quietly exchanged vows in San Antonio. Even then, we knew we wanted to one day celebrate our love with the people who mean the most to us.
            </p>
            <p className="italic">
              Jaris was my first girlfriend, my first wife, and she will forever be my last.
            </p>
            <p>
              Our wedding celebration on March 13, 2027 marks ten years of our journey together, making this day even more meaningful. More than anything, this celebration is about honoring the life we have built and bringing to life the wedding Jaris has always dreamed of. Nothing makes me happier than seeing her smile.
            </p>
            <p className="font-script text-3xl text-primary pt-2">
              And now, we say yes to a lifetime.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}