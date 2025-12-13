import { motion } from "framer-motion"
import { Heart, MoveRight } from "lucide-react"

const compliments = [
  "You look adorable",
  "You have the sweetest vibe",
  "You're naturally charming and effortlessly gorgeous.",
  "You make things feel lighter",
  "You are naturally charming",
  "You make everything feel more special",
]

function Card({ text }) {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, }}
      transition={{ delay: .5 }}
      className="relative px-4 py-3 rounded-2xl bg-white/5 border border-pink-500/15 text-foreground text-sm md:text-base shadow-[0_0_20px_rgba(0,0,0,0.25)] backdrop-blur-md overflow-hidden"
    >

      {/* text */}
      <motion.p
        transition={{ duration: 0.35 }}
        className="h-5 md:h-6 text-nowrap overflow-x-scroll"
      >
        {text}
      </motion.p>
    </motion.div>
  )
}


export default function ComplimentsScreen({ onNext }) {

  return (
    <motion.div
      className="flex flex-col items-center justify-center h-full w-full text-center"
    >
      <div className="w-full max-w-xl mx-auto flex flex-col items-center gap-8">
        {/* Center heart */}
        <motion.div
          className="w-28 h-28 rounded-full bg-linear-to-br from-pink-500/15 to-rose-500/15 border border-pink-400/30 flex items-center justify-center backdrop-blur-md"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Heart className="w-14 h-14 text-pink-400 fill-pink-400" />
        </motion.div>

        {/* Heading & Subtext */}
        <div>
          <motion.h2
            className="text-4xl md:text-5xl font-dancing-script text-zinc-50 font-semibold leading-tight"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            Just for you
          </motion.h2>

        </div>

        {/* Compliments */}
        <motion.div
          className="grid grid-cols-1 gap-4 w-full px-4"
        >
          {compliments.map((line, index) => (
            <Card
              key={index}
              text={line}
              index={index}
            />
          ))}
        </motion.div>

        {/* Next button */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          <motion.button
            className="bg-linear-to-r from-pink-500 via-rose-500 to-pink-500 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-2xl hover:shadow-pink-500/25 transition-all flex items-center gap-2 will-change-transform"
            onClick={onNext}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>See more</span>
            <MoveRight size={20} className="fill-current" />
          </motion.button>
        </motion.div>

      </div>
    </motion.div>
  )
}


