import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

/**
 * Plays the song located at public/gifs/... when the "Open My Heart" button is clicked,
 * then calls the original onNext callback.
 *
 * The audio file is served from the repo's raw URL at the commit provided in the request.
 */
export default function IntroScreen({ onNext }) {
  const audioRef = useRef(null);

  // Raw file URL (encoded) pointing to the file you specified in public/gifs
  const audioUrl =
    "https://raw.githubusercontent.com/MayanKiz/compliment-site/3f18cfa341d38865e857eb5b0d23838079a0f8ee/public/gifs/Lyrical-Bol-Na-Halke-Halke-Song-with-Lyrics-Jhoom-Barabar-Jh%20%281%29.m4a";

  useEffect(() => {
    // create audio element once
    audioRef.current = new Audio(audioUrl);
    audioRef.current.preload = "auto";
    audioRef.current.loop = false;
    audioRef.current.volume = 0.9;

    return () => {
      // cleanup
      if (audioRef.current) {
        try {
          audioRef.current.pause();
          audioRef.current.src = "";
        } catch (e) {
          // ignore
        }
        audioRef.current = null;
      }
    };
  }, [audioUrl]);

  const handleClick = async () => {
    if (audioRef.current) {
      try {
        audioRef.current.currentTime = 0;
        await audioRef.current.play();
      } catch (err) {
        // playback failed (invalid URL, browser block, etc.)
        // eslint-disable-next-line no-console
        console.warn("Audio playback failed:", err);
      }
    } else {
      // eslint-disable-next-line no-console
      console.warn("Audio element not initialized.");
    }

    if (typeof onNext === "function") onNext();
  };

  return (
    <div>
      <div className="place-items-center max-w-3xl text-center mx-auto">
        <motion.div
          className="mb-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="w-36 h-36 mx-auto rounded-full bg-gradient-to-br from-pink-700/15 to-rose-700/15 flex items-end justify-center border-2 border-pink-400/25 backdrop-blur-sm overflow-hidden">
            <motion.div>
              <img loading="lazy" src="/gifs/waving.gif" className="h-28 -mb-2" alt="waving" />
            </motion.div>
          </div>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl w-full font-bold mb-4 bg-gradient-to-r from-pink-400 via-rose-400 to-pink-400 bg-clip-text text-transparent font-dancing-script leading-tight"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Hey Beautiful
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-foreground/90 mb-8"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          There’s something I want you to know.
        </motion.p>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.button
            className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 via-rose-500 to-pink-500 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-2xl hover:shadow-pink-500/25 transition-all"
            onClick={handleClick}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            aria-label="Open My Heart and play song"
          >
            <span className="relative z-10">Open My Heart</span>
            <Heart size={20} className="fill-current" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
