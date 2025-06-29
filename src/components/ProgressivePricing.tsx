import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Crown, Zap } from 'lucide-react';

interface ProgressivePricingProps {
  finalPrice: number;
  originalPrice: number;
  title: string;
  features: string[];
}

const ProgressivePricing: React.FC<ProgressivePricingProps> = ({ 
  finalPrice, 
  originalPrice, 
  title, 
  features 
}) => {
  const [currentPrice, setCurrentPrice] = useState(originalPrice);
  const [showDiscount, setShowDiscount] = useState(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const steps = [
      { price: originalPrice, delay: 0 },
      { price: originalPrice * 0.8, delay: 2000 },
      { price: originalPrice * 0.6, delay: 4000 },
      { price: finalPrice, delay: 6000 }
    ];

    steps.forEach((stepData, index) => {
      setTimeout(() => {
        setCurrentPrice(stepData.price);
        setStep(index);
        if (index > 0) setShowDiscount(true);
      }, stepData.delay);
    });
  }, [originalPrice, finalPrice]);

  const discountPercentage = Math.round((1 - currentPrice / originalPrice) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-gradient-to-br from-orange-500 to-red-500 text-white p-6 rounded-2xl shadow-2xl relative overflow-hidden"
    >
      {/* Background animation */}
      <motion.div
        animate={{ 
          background: [
            "linear-gradient(45deg, #ff6b47, #ff8c00)",
            "linear-gradient(45deg, #ff4757, #ff6b47)",
            "linear-gradient(45deg, #ff3742, #ff4757)"
          ]
        }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 opacity-20"
      />

      <div className="relative z-10">
        <div className="flex items-center space-x-2 mb-4">
          <Crown className="h-6 w-6" />
          <h3 className="text-xl font-bold">{title}</h3>
          {showDiscount && (
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              className="bg-red-600 px-2 py-1 rounded-full text-xs font-bold flex items-center space-x-1"
            >
              <Zap className="h-3 w-3" />
              <span>LIMITED TIME</span>
            </motion.div>
          )}
        </div>

        <div className="mb-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPrice}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-baseline space-x-2"
            >
              <span className="text-4xl font-bold">${currentPrice.toFixed(2)}</span>
              {showDiscount && (
                <motion.span
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-lg line-through opacity-60"
                >
                  ${originalPrice.toFixed(2)}
                </motion.span>
              )}
            </motion.div>
          </AnimatePresence>
          
          {showDiscount && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-yellow-300 font-bold text-lg"
            >
              Save {discountPercentage}% NOW!
            </motion.div>
          )}
        </div>

        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center space-x-2 text-sm"
            >
              <div className="w-2 h-2 bg-yellow-300 rounded-full" />
              <span>{feature}</span>
            </motion.li>
          ))}
        </ul>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={{ 
            boxShadow: showDiscount ? [
              "0 0 20px rgba(255, 255, 255, 0.5)",
              "0 0 40px rgba(255, 255, 255, 0.8)",
              "0 0 20px rgba(255, 255, 255, 0.5)"
            ] : "none"
          }}
          transition={{ duration: 1, repeat: Infinity }}
          className="w-full bg-white text-orange-600 py-3 rounded-xl font-bold text-lg hover:bg-yellow-50 transition-colors"
        >
          {step === 0 ? 'Get Access Now' : 
           step < 3 ? 'Price Dropping...' : 
           'Claim This Deal! 🔥'}
        </motion.button>

        {showDiscount && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-xs mt-2 opacity-80"
          >
            ⏰ This price won't last long!
          </motion.p>
        )}
      </div>
    </motion.div>
  );
};

export default ProgressivePricing;