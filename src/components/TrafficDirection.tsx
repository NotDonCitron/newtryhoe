import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Star, Users } from 'lucide-react';

const TrafficDirection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Zap className="h-6 w-6" />
            <span className="font-medium text-lg">Exclusive Access</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready for the Real Experience?
          </h2>
          
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            What you see here is just a preview. The real magic happens on my Snapchat @LaLiLuLaara 
            where I share my most intimate and exclusive content daily.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <motion.a
              href="https://snapchat.com/add/LaLiLuLaara"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
            >
              <span>Subscribe @LaLiLuLaara</span>
              <ArrowRight className="h-5 w-5" />
            </motion.a>
            
            <div className="flex items-center space-x-4 text-white/80">
              <div className="flex items-center space-x-1">
                <Users className="h-4 w-4" />
                <span className="text-sm">2.5K+ subscribers</span>
              </div>
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 fill-current" />
                <span className="text-sm">4.9/5 rating</span>
              </div>
            </div>
          </div>

          <p className="text-sm opacity-75">
            🔥 New subscribers get 24h free trial • No commitment • Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TrafficDirection;