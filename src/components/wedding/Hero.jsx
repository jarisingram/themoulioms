import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://media.base44.com/images/public/69e338bc82fcf176703f0378/77fce63e9_generated_image.png"
          alt="Tropical Philippine beach at golden hour"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/40" />
      </div>

      <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-white/90 tracking-[0.4em] text-xs md:text-sm uppercase mb-8"
        >
          Together with their families · Beach Wedding
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.3 }}
          className="font-script text-white text-7xl md:text-9xl lg:text-[10rem] leading-none mb-2"
        >
          <span>Abdel</span>
          <span className="text-accent ml-6 mr-10 md:ml-10 md:mr-16 lg:ml-14 lg:mr-24">&</span>
          <span>Jaris</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="w-24 h-px bg-white/60 my-6"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="flex items-center gap-6 text-white font-serif"
        >
          <span className="text-lg md:text-xl tracking-[0.25em]">13 · 03 · 2027</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.3 }}
          className="text-white/80 mt-4 tracking-[0.3em] text-xs uppercase"
        >
          Philippines
        </motion.p>


      </div>
    </section>
  );
}