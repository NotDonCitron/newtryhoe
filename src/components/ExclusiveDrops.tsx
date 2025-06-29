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
  timeLeft: number; // in minutes
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
    }, 60000); // Update every minute

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
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-r from-red-900/50 to-orange-900/50 rounded-lg p-4 border border-red-500/30"
          >
            <div className="flex items-center space-x-4">
              <img
                src={drop.image}
                alt={drop.title}
                className="w-16 h-16 object-cover rounded-lg"
              />
              
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
                  <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                    {Math.round((1 - drop.price / drop.originalPrice) * 100)}% OFF
                  </span>
                </div>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-2 rounded-full font-bold hover:shadow-lg transition-all duration-300"
              >
                Grab Now
              </motion.button>
            </div>
            
            {/* Progress Bar */}
            <div className="mt-3">
              <div className="bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-red-500 to-orange-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((drop.total - drop.available) / drop.total) * 100}%` }}
                />
              </div>
              <p className="text-xs text-gray-400 mt-1">
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