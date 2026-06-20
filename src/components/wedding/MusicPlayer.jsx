import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Music } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Self-hosted MP3 sits at: public/audio/palagi.mp3
const AUDIO_SRC = '/audio/palagi.mp3';
const SONG_TITLE = 'Palagi';
const SONG_ARTIST = 'TJ Monterde ft. KZ Tandingan';

export default function MusicPlayer() {
  const [playing, setPlaying] = useState(false);
  const [visible, setVisible] = useState(true);
  const [error, setError] = useState(null);
  const audioRef = useRef(null);

  // Keep play/pause icon in sync with the actual audio element.
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    const onEnded = () => setPlaying(false);
    const onError = () => {
      setPlaying(false);
      setError('Audio file not found. Drop the MP3 at public/audio/palagi.mp3.');
    };
    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);
    audio.addEventListener('ended', onEnded);
    audio.addEventListener('error', onError);
    return () => {
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
      audio.removeEventListener('ended', onEnded);
      audio.removeEventListener('error', onError);
    };
  }, []);

  // Try to autoplay on mount. Browsers usually block autoplay with sound until
  // the user interacts with the page, so if that fails we register a one-shot
  // listener that starts playback on the first click, tap, scroll, or keypress.
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    let cancelled = false;

    const startPlayback = async () => {
      if (cancelled) return;
      try {
        await audio.play();
      } catch (e) {
        // Still blocked — the listener stays attached until we succeed.
      }
    };

    const onFirstInteraction = () => {
      startPlayback();
    };

    startPlayback().then(() => {
      if (cancelled) return;
      // If we are already playing, we're done. Otherwise wait for a gesture.
      if (audio.paused) {
        document.addEventListener('click', onFirstInteraction, { once: true });
        document.addEventListener('touchstart', onFirstInteraction, { once: true });
        document.addEventListener('keydown', onFirstInteraction, { once: true });
        document.addEventListener('scroll', onFirstInteraction, { once: true, passive: true });
      }
    });

    return () => {
      cancelled = true;
      document.removeEventListener('click', onFirstInteraction);
      document.removeEventListener('touchstart', onFirstInteraction);
      document.removeEventListener('keydown', onFirstInteraction);
      document.removeEventListener('scroll', onFirstInteraction);
    };
  }, []);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    setError(null);
    if (playing) {
      audio.pause();
    } else {
      try {
        await audio.play();
      } catch (err) {
        console.error('Audio play failed:', err);
        setError(err?.message || 'Could not start audio.');
      }
    }
  };

  const close = () => {
    const audio = audioRef.current;
    if (audio) audio.pause();
    setPlaying(false);
    setVisible(false);
  };

  return (
    <>
      <audio ref={audioRef} src={AUDIO_SRC} loop preload="auto" />

      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 left-6 z-50 bg-primary text-primary-foreground rounded-full shadow-2xl flex items-center gap-3 px-5 py-3"
          >
            <button
              onClick={toggle}
              className="flex items-center gap-3 focus:outline-none"
              aria-label={playing ? 'Pause music' : 'Play music'}
            >
              <div className="relative">
                <Music className="w-4 h-4 text-accent" />
                {playing && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-accent animate-pulse" />
                )}
              </div>
              <div className="text-left hidden sm:block">
                <p className="text-xs font-serif italic leading-none">{SONG_TITLE}</p>
                <p className="text-[10px] text-primary-foreground/60 leading-none mt-0.5">
                  {SONG_ARTIST}
                </p>
              </div>
              {playing ? (
                <Pause className="w-4 h-4" />
              ) : (
                <Play className="w-4 h-4" />
              )}
            </button>

            <button
              onClick={close}
              className="text-primary-foreground/40 hover:text-primary-foreground text-xs ml-1"
              aria-label="Hide music player"
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {error && (
        <div className="fixed bottom-24 left-6 z-50 max-w-xs bg-red-50 border border-red-200 text-red-800 text-xs rounded-md px-3 py-2 shadow">
          {error}
        </div>
      )}
    </>
  );
}
