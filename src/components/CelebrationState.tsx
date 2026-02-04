import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CelebrationState = () => {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4"
    >
      {/* Heart Burst Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {showConfetti && [...Array(50)].map((_, i) => {
          const isHeart = Math.random() > 0.3;
          const emoji = isHeart ? ["❤️", "💕", "💖", "💗", "💘"][Math.floor(Math.random() * 5)] : "✨";
          
          return (
            <motion.div
              key={i}
              className="absolute text-2xl"
              style={{
                left: "50%",
                top: "50%",
              }}
              initial={{ 
                x: 0, 
                y: 0, 
                scale: 0,
                opacity: 1,
              }}
              animate={{ 
                x: (Math.random() - 0.5) * window.innerWidth * 0.8,
                y: (Math.random() - 0.5) * window.innerHeight * 0.8,
                scale: [0, 1.5, 1],
                opacity: [1, 1, 0],
                rotate: Math.random() * 360,
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                delay: Math.random() * 0.5,
                ease: "easeOut",
              }}
            >
              {emoji}
            </motion.div>
          );
        })}
      </div>

      {/* Soft confetti rain */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={`confetti-${i}`}
              className="absolute w-2 h-3 rounded-sm"
              style={{
                left: `${Math.random() * 100}%`,
                backgroundColor: ["#ff6b6b", "#ff8787", "#ffa8a8", "#fff0f0", "#ffe3e3"][Math.floor(Math.random() * 5)],
              }}
              initial={{ y: -20, rotate: 0, opacity: 1 }}
              animate={{ 
                y: window.innerHeight + 20,
                rotate: Math.random() * 720,
                opacity: [1, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                delay: Math.random() * 2,
                ease: "linear",
              }}
            />
          ))}
        </div>
      )}

      {/* Glassmorphism Card */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
        className="relative max-w-lg w-full mx-4"
      >
        {/* Glow behind card */}
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/30 to-red-500/30 blur-3xl rounded-3xl" />
        
        <div className="relative bg-white/20 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-white/30 shadow-2xl">
          {/* Decorative hearts */}
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-5xl sm:text-6xl text-center mb-6"
          >
            💘
          </motion.div>
          
          {/* Main celebration message */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-6 leading-relaxed"
            style={{ textShadow: "0 2px 20px rgba(0,0,0,0.2)" }}
          >
            Yay! You Just Made Me the Happiest Person 💘
          </motion.h1>
          
          {/* Romantic message */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-white/90 text-center text-lg sm:text-xl leading-relaxed"
            style={{ textShadow: "0 1px 10px rgba(0,0,0,0.1)" }}
          >
            From the moment I met you, every day felt special. Thank you for choosing me ❤️
          </motion.p>

          {/* Decorative bottom hearts */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex justify-center gap-2 mt-8 text-2xl"
          >
            {["💕", "💖", "💗", "💖", "💕"].map((heart, i) => (
              <motion.span
                key={i}
                animate={{ 
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              >
                {heart}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom message */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 1.2 }}
        className="mt-8 text-white/70 text-sm text-center"
      >
        Forever and always 💝
      </motion.p>
    </motion.div>
  );
};

export default CelebrationState;
