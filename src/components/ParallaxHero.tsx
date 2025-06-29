import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Star } from 'lucide-react';

const ParallaxHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Large Header Image with Text */}
      <div className="absolute inset-0">
        <img
          src="/🌈@LEAKSOFHEAVENHUB ON TELEGRAM🦄💦 - (72).jpg"
          alt="La Li Lu Laara"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
      </div>

      {/* Centered Text Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center space-x-2 text-orange-400"
          >
            <Crown className="h-6 w-6" />
            <span className="font-medium text-lg">Premium Experience</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-6xl lg:text-8xl font-bold leading-tight"
          >
            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
              La Li Lu
            </span>
            <br />
            <span className="text-white">Laara</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl lg:text-3xl text-gray-200 leading-relaxed font-light"
          >
            Exclusive premium content, personalized experiences,<br />
            and intimate connections. Join my world of elegance<br />
            and sophistication.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center space-x-12 py-8"
          >
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-orange-400">2.5K+</div>
              <div className="text-gray-300 text-lg">Subscribers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-orange-400">150+</div>
              <div className="text-gray-300 text-lg">Premium Content</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2">
                <Star className="h-6 w-6 text-orange-400 fill-current" />
                <span className="text-3xl lg:text-4xl font-bold text-orange-400">4.9</span>
              </div>
              <div className="text-gray-300 text-lg">Rating</div>
            </div>
          </motion.div>

          {/* Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="pt-4"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 25px 50px rgba(255, 87, 51, 0.4)" 
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-12 py-5 rounded-full font-bold text-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-3 mx-auto"
            >
              <Crown className="h-6 w-6" />
              <span>Get Premium Access</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default ParallaxHero;