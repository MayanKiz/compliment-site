import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Heart, MoveRight } from "lucide-react"

const message = `
Main bas dil se ek baat kehna chahta hoon......
Ankita, aap meri life ke un logon mein se ho jinke saath rehkar kabhi bhi ye feel nahi hua ki maine galat insaan ko apna maana ho.

Aapne kabhi bhi mujhe ye ehsaas nahi hone diya ki mere efforts bekaar gaye. Hamesha itni achhi tarah se treat kiya, itni respect aur care di, ki naturally sab kuch comfortable lagta hai.

Aap bina kisi extra dikhave ke hi bohot special ho. Aapki baaton mein softness hai, nature mein ek alag si warmth hai, aur aapki presence hi kaafi hoti hai saamne wale ko achha feel karane ke liye.
Aur honestly, aap bohot beautiful ho, sirf looks ki wajah se nahi, balki aapke dil, aapki soch, aur aapke behaviour ki wajah se.
baki toh cute aur looks se pucho hi na jitne sundar wo toh mai hi janata hum cutieee ☺️

Kabhi ek pal ke liye bhi aisa nahi laga ki cousin ke saath saath aap ek bohot achhi dost bhi nahi ho. Aapke saath rehkar hamesha ye feeling aati hai ki cheezein sahi hain.

Sach mein grateful hoon aap jaisi cousin aur dost ke liye...

`

export default function MessageScreen({ onNext }) {
    const [isOpen, setIsOpen] = useState(false)
    const [showText, setShowText] = useState(false)
    const [currentText, setCurrentText] = useState("")
    const [showCursor, setShowCursor] = useState(true)
    const scrollRef = useRef(null)

    useEffect(() => {
        if (showText) {
            let index = 0
            const timer = setInterval(() => {
                if (index < message.length) {
                    setCurrentText(message.slice(0, index + 1))
                    index++

                    if (scrollRef.current) {
                        scrollRef.current.scrollTop = scrollRef.current.scrollHeight
                    }
                } else {
                    clearInterval(timer)
                    setShowCursor(false)
                }
            }, 5)

            return () => clearInterval(timer)
        }
    }, [showText, message])

    const handleOpenLetter = () => {
        setIsOpen(true)
        setTimeout(() => {
            setShowText(true)
        }, 800)
    }

    const handleReset = () => {
        setIsOpen(false)
        setShowText(false)
        setCurrentText("")
        setShowCursor(true)
    }

    return (
        <motion.div
            className="flex flex-col items-center justify-center p-2 relative"
        >
            {/* Heading */}
            <motion.h2
                className="text-4xl md:text-5xl font-dancing-script text-zinc-50 font-semibold leading-tight mb-8"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                A little note for you
            </motion.h2>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, }}
                transition={{ delay: .5 }}
                className="max-w-md text-center relative p-5 rounded-2xl bg-white/5 border border-pink-500/15 text-foreground shadow-[0_0_20px_rgba(0,0,0,0.25)] backdrop-blur-md overflow-hidden mb-8"
            >

                {/* message */}
                <motion.p
                    transition={{ duration: 0.35 }}

                >
                    {message}
                </motion.p>
            </motion.div>

            <motion.div
                className="text-center relative z-10 place-items-center"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
            >
                <motion.button
                    className="bg-linear-to-r from-pink-500 via-rose-500 to-pink-500 text-white px-10 py-4 text-lg rounded-full font-medium shadow-2xl hover:shadow-pink-500/25 transition-all flex items-center gap-2 will-change-transform"
                    onClick={onNext}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <span>One more thing</span>
                    <MoveRight size={18} className="fill-current" />
                </motion.button>
            </motion.div>
        </motion.div>
    )
}
