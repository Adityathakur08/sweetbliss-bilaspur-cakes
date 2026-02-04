import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FloatingHearts from "./FloatingHearts";
import CelebrationState from "./CelebrationState";

const teasingPhrases = [
  "Oops 😅",
  "Try again 😉",
  "Not that easy 💭",
  "Nope! 🙈",
  "Can't catch me 💨",
  "Almost! 😜",
  "Keep trying 💕",
  "So close! 🫣",
];

const ValentinePage = () => {
  const [noButtonText, setNoButtonText] = useState("NO 🙈");
  const [noButtonScale, setNoButtonScale] = useState(1);
  const [yesButtonScale, setYesButtonScale] = useState(1);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [attempts, setAttempts] = useState(0);
  const [accepted, setAccepted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const moveNoButton = useCallback(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current.getBoundingClientRect();
    const maxX = Math.min(150, container.width / 4);
    const maxY = Math.min(100, container.height / 4);
    
    const newX = (Math.random() - 0.5) * maxX * 2;
    const newY = (Math.random() - 0.5) * maxY * 2;
    
    setNoButtonPosition({ x: newX, y: newY });
    setNoButtonScale(prev => Math.max(0.5, prev - 0.05));
    setYesButtonScale(prev => Math.min(1.4, prev + 0.05));
    setAttempts(prev => prev + 1);
    
    const randomPhrase = teasingPhrases[Math.floor(Math.random() * teasingPhrases.length)];
    setNoButtonText(randomPhrase);
  }, []);

  const handleYesClick = () => {
    setAccepted(true);
  };

  return (
    <div 
      ref={containerRef}
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-rose-200 via-pink-300 to-red-400"
    >
      {/* Ambient gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-white/20 pointer-events-none" />
      
      {/* Floating hearts background */}
      <FloatingHearts />
      
      {/* Sparkle effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {!accepted ? (
          <motion.div
            key="question"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4"
          >
            {/* Main Question */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center mb-12 drop-shadow-lg"
              style={{ textShadow: "0 4px 30px rgba(0,0,0,0.15)" }}
            >
              Will You Be My Valentine?
            </motion.h1>

            {/* Hearts decoration around question */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute top-1/4 left-1/4 text-4xl"
            >
              💕
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="absolute top-1/3 right-1/4 text-3xl"
            >
              💖
            </motion.div>

            {/* Buttons Container */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-center"
            >
              {/* YES Button */}
              <motion.button
                onClick={handleYesClick}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                animate={{ scale: yesButtonScale }}
                className="relative px-12 py-5 bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold text-xl sm:text-2xl rounded-full shadow-2xl overflow-hidden group"
                style={{
                  boxShadow: `0 0 ${20 + attempts * 5}px rgba(255,100,150,${0.4 + attempts * 0.05})`,
                }}
              >
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pink-400 to-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <span className="relative z-10">YES 💖</span>
                
                {/* Pulse ring on hover */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-white/50"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.button>

              {/* NO Button - Escapes on hover/click */}
              <motion.button
                animate={{
                  x: noButtonPosition.x,
                  y: noButtonPosition.y,
                  scale: noButtonScale,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                onMouseEnter={moveNoButton}
                onTouchStart={moveNoButton}
                onClick={moveNoButton}
                className="px-12 py-5 bg-white/20 backdrop-blur-sm text-white font-semibold text-xl sm:text-2xl rounded-full border-2 border-white/30 shadow-lg hover:cursor-not-allowed"
              >
                {noButtonText}
              </motion.button>
            </motion.div>

            {/* Attempts counter - subtle hint */}
            {attempts > 2 && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                className="mt-8 text-white/80 text-sm"
              >
                {attempts > 5 ? "Just say yes already! 💕" : "Having trouble? 😊"}
              </motion.p>
            )}
          </motion.div>
        ) : (
          <CelebrationState key="celebration" />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ValentinePage;
