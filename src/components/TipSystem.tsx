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
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => setShowTipModal(true)}
        className="relative bg-gradient-to-r from-yellow-500/90 to-orange-500/85 text-white px-4 py-2 rounded-full font-medium flex items-center space-x-2 shadow-lg border border-yellow-400/20"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(255,255,255,0.2) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(0,0,0,0.1) 0%, transparent 50%)
          `
        }}
      >
        <DollarSign className="h-4 w-4" />
        <span>Tip</span>
        
        {/* Weathered button texture */}
        <div className="absolute inset-0 rounded-full opacity-30 pointer-events-none"
          style={{
            background: `
              linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 30%, rgba(0,0,0,0.1) 70%, transparent 100%)
            `
          }}
        />
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
            <Coins className="h-5 w-5 text-yellow-400 drop-shadow-sm" />
            <span className="text-yellow-400 font-bold text-sm drop-shadow-sm">${coin.amount}</span>
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
            onClick={() => setShowTipModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-6 max-w-sm w-full mx-4 shadow-2xl border border-gray-200/50"
              onClick={(e) => e.stopPropagation()}
              style={{
                backgroundImage: `
                  radial-gradient(circle at 20% 20%, rgba(255,255,255,0.8) 0%, transparent 50%),
                  radial-gradient(circle at 80% 80%, rgba(0,0,0,0.02) 0%, transparent 50%)
                `
              }}
            >
              {/* Subtle texture overlay */}
              <div className="absolute inset-0 rounded-2xl opacity-10 pointer-events-none"
                style={{
                  background: `
                    repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)
                  `
                }}
              />
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-center mb-4 text-gray-800">Send a Tip 💰</h3>
                <p className="text-gray-600 text-center mb-6">Show your appreciation!</p>
                
                <div className="grid grid-cols-3 gap-3">
                  {tipAmounts.map((amount) => (
                    <motion.button
                      key={amount}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={(e) => handleTip(amount, e)}
                      className="relative bg-gradient-to-r from-yellow-500/90 to-orange-500/85 text-white py-3 rounded-lg font-bold hover:shadow-lg transition-all duration-300 border border-yellow-400/20"
                      style={{
                        backgroundImage: `
                          radial-gradient(circle at 30% 30%, rgba(255,255,255,0.2) 0%, transparent 60%),
                          radial-gradient(circle at 70% 70%, rgba(0,0,0,0.1) 0%, transparent 60%)
                        `
                      }}
                    >
                      ${amount}
                      
                      {/* Button wear pattern */}
                      <div className="absolute inset-0 rounded-lg opacity-20 pointer-events-none"
                        style={{
                          background: `
                            linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 50%, rgba(0,0,0,0.1) 100%)
                          `
                        }}
                      />
                    </motion.button>
                  ))}
                </div>
                
                <button
                  onClick={() => setShowTipModal(false)}
                  className="w-full mt-4 py-2 text-gray-500 hover:text-gray-700 transition-colors font-medium"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default TipSystem;