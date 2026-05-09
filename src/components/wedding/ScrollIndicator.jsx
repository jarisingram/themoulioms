import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

/**
 * Persistent floating scroll button.
 * - Default: bouncing chevron-down. Click → smooth-scroll one viewport down.
 * - At end of page: chevron-up. Click → smooth-scroll all the way to the top.
 * - Hidden until the user has scrolled past the very top (so it doesn't
 *   compete with the hero composition on initial load).
 */
export default function ScrollIndicator() {
  const [atBottom, setAtBottom] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const viewportH = window.innerHeight;
      const docH = document.documentElement.scrollHeight;

      // Show as soon as the user starts scrolling (any movement past 50px).
      setVisible(y > 50);

      // Treat "within 80px of the bottom" as bottom — gives a buffer for
      // tall footers and any rendering jitter.
      setAtBottom(y + viewportH >= docH - 80);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const handleClick = () => {
    if (atBottom) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({
        top: window.scrollY + window.innerHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="scroll-indicator"
          type="button"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.4 }}
          onClick={handleClick}
          aria-label={atBottom ? 'Scroll to top' : 'Scroll to next section'}
          className="fixed bottom-6 right-6 z-40 bg-primary/85 hover:bg-primary text-primary-foreground backdrop-blur-sm rounded-full p-3.5 shadow-xl cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-colors"
        >
          {atBottom ? (
            <ChevronUp className="w-5 h-5" />
          ) : (
            <ChevronDown className="w-5 h-5 animate-bounce" />
          )}
        </motion.button>
      )}
    </AnimatePresence>
  );
}
