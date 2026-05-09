import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Music } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Self-hosted MP3 — drop your file at: public/audio/palagi.mp3
// (The /public folder is served at the site root, so the URL is /audio/palagi.mp3)
const AUDIO_SRC = '/audio/palagi.mp3';
const SONG_TITLE = 'Palagi';
const SONG_ARTIST = 'TJ Monterde ft. KZ Tandingan';

export default function MusicPlayer() {
  const [playing, setPlaying] = useState(false);
  const [visible, setVisible] = useState(true);
  const [error, setError] = useState(null);
  const audioRef = useRef(null);

  // Keep the play/pause icon in sync if audio ends or is paused some other way.
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
        // Most likely an autoplay restriction or missing file
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
      {/* Hidden audio element — loops and is controlled by our buttons */}
      <audio
        ref={audioRef}
        src={AUDIO_SRC}
        loop
        preload="auto"
      />

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
