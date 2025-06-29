import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';

interface FloatingHeart {
  id: number;
  x: number;
  y: number;
}

interface FloatingHeartsProps {
  onLike: () => void;
  isLiked: boolean;
}

const FloatingHearts: React.FC<FloatingHeartsProps> = ({ onLike, isLiked }) => {
  const [hearts, setHearts] = useState<FloatingHeart[]>([]);

  const createHeart = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    const newHeart: FloatingHeart = {
      id: Date.now() + Math.random(),
      x,
      y
    };

    setHearts(prev => [...prev, newHeart]);
    onLike();

    // Remove heart after animation
    setTimeout(() => {
      setHearts(prev => prev.filter(heart => heart.id !== newHeart.id));
    }, 2000);
  };

  return (
    <div className="relative">
      <motion.button
        whileTap={{ scale: 0.8 }}
        onClick={createHeart}
        className={`p-2 rounded-full transition-colors ${
          isLiked ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
        }`}
      >
        <Heart className={`h-6 w-6 ${isLiked ? 'fill-current' : ''}`} />
      </motion.button>

      <AnimatePresence>
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            initial={{ 
              x: heart.x, 
              y: heart.y, 
              scale: 0,
              opacity: 1 
            }}
            animate={{ 
              y: heart.y - 100, 
              scale: [0, 1.2, 1],
              opacity: [1, 1, 0],
              rotate: [0, 15, -15, 0]
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute pointer-events-none z-10"
          >
            <Heart className="h-6 w-6 text-red-500 fill-current" />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default FloatingHearts;