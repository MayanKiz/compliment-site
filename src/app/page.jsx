"use client"

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import IntroScreen from "@/components/screens/IntroScreen";
import ComplimentsScreen from "@/components/screens/ComplimentsScreen";
import MessageScreen from "@/components/screens/MessageScreen";
import FinalScreen from "@/components/screens/FinalScreen";

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState(0)

  const screens = [
    <IntroScreen key="intro" onNext={() => setCurrentScreen(1)} />,
    <ComplimentsScreen key="compliments" onNext={() => setCurrentScreen(2)} />,
    <MessageScreen key="message" onNext={() => setCurrentScreen(3)} />,
    <FinalScreen key="final" />,
  ]

  return (
    <div className="min-h-screen overflow-hidden"
      style={{
        background: "radial-gradient(125% 125% at 50% 10%, #050505 40%, #3f031cbb 100%)",
      }}>

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-6 md:p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScreen}
            initial={{ opacity: 0, }}
            animate={{ opacity: 1, }}
            exit={{ opacity: 0, }}
            transition={{ duration: 0.5 }}
          >
            {screens[currentScreen]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Watermark */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1,
        }}
        className="fixed bottom-4 right-4 text-sm text-white/40 pointer-events-none z-50 font-light">
        @rao_m4y4nk 
      </motion.div>
    </div>
  );
}
