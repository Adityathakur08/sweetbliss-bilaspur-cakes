import { motion } from "framer-motion";

const hearts = ["❤️", "💕", "💖", "💗", "💓", "💘", "💝"];

const FloatingHearts = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => {
        const heart = hearts[Math.floor(Math.random() * hearts.length)];
        const size = 16 + Math.random() * 24;
        const startX = Math.random() * 100;
        const duration = 8 + Math.random() * 8;
        const delay = Math.random() * 5;
        
        return (
          <motion.div
            key={i}
            className="absolute text-xl opacity-40"
            style={{
              left: `${startX}%`,
              fontSize: `${size}px`,
            }}
            initial={{ 
              y: "100vh",
              x: 0,
              rotate: 0,
              opacity: 0,
            }}
            animate={{ 
              y: "-100px",
              x: [0, 30, -30, 20, -20, 0],
              rotate: [0, 15, -15, 10, -10, 0],
              opacity: [0, 0.6, 0.6, 0.6, 0.3, 0],
            }}
            transition={{
              duration: duration,
              delay: delay,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {heart}
          </motion.div>
        );
      })}
    </div>
  );
};

export default FloatingHearts;
