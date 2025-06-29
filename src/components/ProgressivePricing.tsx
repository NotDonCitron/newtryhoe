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
      className="relative bg-gradient-to-br from-orange-500/90 to-red-500/85 text-white p-6 rounded-2xl shadow-2xl border border-orange-400/20 overflow-hidden"
      style={{
        backgroundImage: `
          radial-gradient(circle at 20% 20%, rgba(255,255,255,0.15) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(0,0,0,0.1) 0%, transparent 50%),
          linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.05) 50%, transparent 100%)
        `
      }}
    >
      {/* Weathered background texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          background: `
            repeating-linear-gradient(45deg, transparent, transparent 3px, rgba(0,0,0,0.1) 3px, rgba(0,0,0,0.1) 6px),
            repeating-linear-gradient(-45deg, transparent, transparent 3px, rgba(255,255,255,0.1) 3px, rgba(255,255,255,0.1) 6px)
          `
        }}
      />

      {/* Background animation with weathered effect */}
      <motion.div
        animate={{ 
          background: [
            "linear-gradient(45deg, rgba(255,107,71,0.3), rgba(255,140,0,0.3))",
            "linear-gradient(45deg, rgba(255,71,87,0.3), rgba(255,107,71,0.3))",
            "linear-gradient(45deg, rgba(255,55,66,0.3), rgba(255,71,87,0.3))"
          ]
        }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 opacity-30"
      />

      <div className="relative z-10">
        <div className="flex items-center space-x-2 mb-4">
          <Crown className="h-6 w-6" />
          <h3 className="text-xl font-bold">{title}</h3>
          {showDiscount && (
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              className="relative bg-red-600/90 px-2 py-1 rounded-full text-xs font-bold flex items-center space-x-1 border border-red-500/30"
              style={{
                backgroundImage: `
                  radial-gradient(circle at 30% 30%, rgba(255,255,255,0.2) 0%, transparent 70%)
                `
              }}
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
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          animate={{ 
            boxShadow: showDiscount ? [
              "0 0 20px rgba(255, 255, 255, 0.3)",
              "0 0 40px rgba(255, 255, 255, 0.6)",
              "0 0 20px rgba(255, 255, 255, 0.3)"
            ] : "none"
          }}
          transition={{ duration: 1, repeat: Infinity }}
          className="relative w-full bg-white/95 text-orange-600 py-3 rounded-xl font-bold text-lg hover:bg-yellow-50 transition-colors border border-white/20"
          style={{
            backgroundImage: `
              radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8) 0%, transparent 70%),
              radial-gradient(circle at 70% 70%, rgba(0,0,0,0.02) 0%, transparent 70%)
            `
          }}
        >
          {step === 0 ? 'Get Access Now' : 
           step < 3 ? 'Price Dropping...' : 
           'Claim This Deal! 🔥'}
           
          {/* Button texture */}
          <div className="absolute inset-0 rounded-xl opacity-20 pointer-events-none"
            style={{
              background: `
                linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 50%, rgba(0,0,0,0.05) 100%)
              `
            }}
          />
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