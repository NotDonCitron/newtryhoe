import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DollarSign, Coins } from 'lucide-react';

interface TipSystemProps {
  onTip: (amount: number) => void;
}

interface FloatingCoin {
  id: number;
  x: number;
  y: number;
  amount: number;
}

const TipSystem: React.FC<TipSystemProps> = ({ onTip }) => {
  const [showTipModal, setShowTipModal] = useState(false);
  const [coins, setCoins] = useState<FloatingCoin[]>([]);
  
  const tipAmounts = [5, 10, 25, 50, 100];

  const handleTip = (amount: number, event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Create floating coins
    for (let i = 0; i < 3; i++) {
      const coin: FloatingCoin = {
        id: Date.now() + Math.random() + i,
        x: x + (Math.random() - 0.5) * 40,
        y: y + (Math.random() - 0.5) * 20,
        amount
      };
      
      setCoins(prev => [...prev, coin]);
      
      setTimeout(() => {
        setCoins(prev => prev.filter(c => c.id !== coin.id));
      }, 2000);
    }

    onTip(amount);
    setShowTipModal(false);
  };

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowTipModal(true)}
        className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full font-medium flex items-center space-x-2 shadow-lg"
      >
        <DollarSign className="h-4 w-4" />
        <span>Tip</span>
      </motion.button>

      {/* Floating Coins */}
      <AnimatePresence>
        {coins.map((coin) => (
          <motion.div
            key={coin.id}
            initial={{ 
              x: coin.x, 
              y: coin.y, 
              scale: 0,
              opacity: 1 
            }}
            animate={{ 
              y: coin.y - 80, 
              scale: [0, 1.2, 1],
              opacity: [1, 1, 0],
              rotate: [0, 360]
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute pointer-events-none z-20 flex items-center space-x-1"
          >
            <Coins className="h-5 w-5 text-yellow-400" />
            <span className="text-yellow-400 font-bold text-sm">${coin.amount}</span>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Tip Modal */}
      <AnimatePresence>
        {showTipModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            onClick={() => setShowTipModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-6 max-w-sm w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-xl font-bold text-center mb-4">Send a Tip 💰</h3>
              <p className="text-gray-600 text-center mb-6">Show your appreciation!</p>
              
              <div className="grid grid-cols-3 gap-3">
                {tipAmounts.map((amount) => (
                  <motion.button
                    key={amount}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => handleTip(amount, e)}
                    className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-3 rounded-lg font-bold hover:shadow-lg transition-all duration-300"
                  >
                    ${amount}
                  </motion.button>
                ))}
              </div>
              
              <button
                onClick={() => setShowTipModal(false)}
                className="w-full mt-4 py-2 text-gray-500 hover:text-gray-700 transition-colors"
              >
                Cancel
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default TipSystem;