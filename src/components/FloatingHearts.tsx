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

    setTimeout(() => {
      setHearts(prev => prev.filter(heart => heart.id !== newHeart.id));
    }, 2000);
  };

  return (
    <div className="relative">
      <motion.button
        whileTap={{ scale: 0.85 }}
        onClick={createHeart}
        className={`relative p-2 rounded-full transition-all duration-300 ${
          isLiked ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
        }`}
        style={{
          background: isLiked 
            ? 'radial-gradient(circle, rgba(239,68,68,0.1) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(156,163,175,0.05) 0%, transparent 70%)',
          boxShadow: isLiked 
            ? 'inset 0 1px 2px rgba(0,0,0,0.1), 0 1px 3px rgba(239,68,68,0.2)'
            : 'inset 0 1px 2px rgba(0,0,0,0.05)'
        }}
      >
        <Heart className={`h-6 w-6 ${isLiked ? 'fill-current' : ''}`} />
        
        {/* Weathered button surface */}
        <div className="absolute inset-0 rounded-full opacity-20 pointer-events-none"
          style={{
            background: `
              radial-gradient(circle at 30% 20%, rgba(255,255,255,0.4) 0%, transparent 50%),
              radial-gradient(circle at 70% 80%, rgba(0,0,0,0.1) 0%, transparent 50%)
            `
          }}
        />
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
              scale: [0, 1.3, 1],
              opacity: [1, 1, 0],
              rotate: [0, 15, -15, 0]
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute pointer-events-none z-10"
          >
            <Heart className="h-6 w-6 text-red-500 fill-current drop-shadow-sm" />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default FloatingHearts;