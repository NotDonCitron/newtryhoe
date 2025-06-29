import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Flame, Users, Clock } from 'lucide-react';

interface Drop {
  id: number;
  title: string;
  image: string;
  price: number;
  originalPrice: number;
  available: number;
  total: number;
  timeLeft: number;
}

const ExclusiveDrops: React.FC = () => {
  const [drops, setDrops] = useState<Drop[]>([
    {
      id: 1,
      title: "Exclusive Bathroom Set",
      image: "/by PKOFs (Telegram) (10) copy copy.jpg",
      price: 15.99,
      originalPrice: 24.99,
      available: 3,
      total: 10,
      timeLeft: 45
    },
    {
      id: 2,
      title: "Private Video Collection",
      image: "/🌈@LEAKSOFHEAVENHUB ON TELEGRAM🦄💦 - (52) copy.jpg",
      price: 29.99,
      originalPrice: 49.99,
      available: 1,
      total: 5,
      timeLeft: 23
    }
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setDrops(prev => prev.map(drop => ({
        ...drop,
        timeLeft: Math.max(0, drop.timeLeft - 1)
      })).filter(drop => drop.timeLeft > 0));
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const formatTimeLeft = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
  };

  if (drops.length === 0) return null;

  return (
    <div className="py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mb-6"
      >
        <div className="flex items-center space-x-2 mb-2">
          <Flame className="h-6 w-6 text-orange-500" />
          <h3 className="text-2xl font-bold text-white">🔥 Limited Drops</h3>
        </div>
        <p className="text-gray-400">Exclusive content with limited availability</p>
      </motion.div>

      <div className="space-y-4">
        {drops.map((drop, index) => (
          <motion.div
            key={drop.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.01 }}
            className="relative bg-gradient-to-r from-red-900/60 to-orange-900/50 rounded-lg p-4 border border-red-500/30 backdrop-blur-sm"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 20%, rgba(255,255,255,0.05) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(0,0,0,0.1) 0%, transparent 50%),
                linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.02) 50%, transparent 100%)
              `
            }}
          >
            {/* Weathered overlay */}
            <div className="absolute inset-0 rounded-lg opacity-10 pointer-events-none"
              style={{
                background: `
                  repeating-linear-gradient(45deg, transparent, transparent 3px, rgba(0,0,0,0.1) 3px, rgba(0,0,0,0.1) 6px)
                `
              }}
            />
            
            <div className="relative z-10 flex items-center space-x-4">
              <div className="relative">
                <img
                  src={drop.image}
                  alt={drop.title}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                {/* Image aging effect */}
                <div className="absolute inset-0 rounded-lg opacity-20 pointer-events-none"
                  style={{
                    background: `
                      radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3) 0%, transparent 70%),
                      radial-gradient(circle at 70% 70%, rgba(0,0,0,0.2) 0%, transparent 70%)
                    `
                  }}
                />
              </div>
              
              <div className="flex-1">
                <h4 className="font-bold text-white mb-1">{drop.title}</h4>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-1 text-red-400">
                    <Clock className="h-4 w-4" />
                    <span>{formatTimeLeft(drop.timeLeft)} left</span>
                  </div>
                  <div className="flex items-center space-x-1 text-orange-400">
                    <Users className="h-4 w-4" />
                    <span>{drop.available}/{drop.total} left</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 mt-2">
                  <span className="text-xl font-bold text-white">${drop.price}</span>
                  <span className="text-sm text-gray-400 line-through">${drop.originalPrice}</span>
                  <span className="bg-red-500/90 text-white px-2 py-1 rounded text-xs font-bold border border-red-400/30">
                    {Math.round((1 - drop.price / drop.originalPrice) * 100)}% OFF
                  </span>
                </div>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="relative bg-gradient-to-r from-red-500/90 to-orange-500/85 text-white px-6 py-2 rounded-full font-bold hover:shadow-lg transition-all duration-300 border border-red-400/20"
                style={{
                  backgroundImage: `
                    radial-gradient(circle at 25% 25%, rgba(255,255,255,0.2) 0%, transparent 60%),
                    radial-gradient(circle at 75% 75%, rgba(0,0,0,0.1) 0%, transparent 60%)
                  `
                }}
              >
                Grab Now
                
                {/* Button texture */}
                <div className="absolute inset-0 rounded-full opacity-30 pointer-events-none"
                  style={{
                    background: `
                      linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 50%, rgba(0,0,0,0.1) 100%)
                    `
                  }}
                />
              </motion.button>
            </div>
            
            {/* Progress Bar */}
            <div className="mt-3 relative">
              <div className="bg-gray-700/60 rounded-full h-2 backdrop-blur-sm border border-gray-600/30">
                <div 
                  className="bg-gradient-to-r from-red-500/90 to-orange-500/85 h-2 rounded-full transition-all duration-300 relative overflow-hidden"
                  style={{ width: `${((drop.total - drop.available) / drop.total) * 100}%` }}
                >
                  {/* Progress bar texture */}
                  <div className="absolute inset-0 opacity-30"
                    style={{
                      background: `
                        repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.2) 2px, rgba(255,255,255,0.2) 4px)
                      `
                    }}
                  />
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-1 opacity-80">
                {drop.total - drop.available} sold • {drop.available} remaining
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExclusiveDrops;