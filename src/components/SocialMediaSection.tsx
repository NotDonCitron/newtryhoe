import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, MessageCircle, Crown, ArrowRight, Users, Heart } from 'lucide-react';

const SocialMediaSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Follow My Journey
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Connect with me across all platforms for exclusive content, behind-the-scenes moments, and intimate experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Snapchat Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl p-8 text-black relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="relative z-10">
              <div className="flex items-center space-x-3 mb-6">
                <MessageCircle className="h-8 w-8" />
                <h3 className="text-2xl font-bold">Snapchat Premium</h3>
              </div>
              <p className="text-lg mb-6 opacity-90">
                Where it all started! Get exclusive daily content, private messages, and intimate moments.
              </p>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-3xl font-bold">@LaLiLuLaara</div>
                  <div className="text-sm opacity-75">Premium Snapchat</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold">$19.99/mo</div>
                  <div className="text-sm opacity-75">Most Popular</div>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-black text-yellow-400 py-4 rounded-xl font-bold text-lg hover:bg-gray-900 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Subscribe on Snapchat</span>
                <ArrowRight className="h-5 w-5" />
              </motion.button>
            </div>
          </motion.div>

          {/* Instagram Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 rounded-2xl p-8 text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="relative z-10">
              <div className="flex items-center space-x-3 mb-6">
                <Instagram className="h-8 w-8" />
                <h3 className="text-2xl font-bold">Instagram</h3>
                <span className="bg-white/20 px-2 py-1 rounded-full text-xs">Coming Soon</span>
              </div>
              <p className="text-lg mb-6 opacity-90">
                Follow for daily updates, stories, and teasers. Get a glimpse into my world before anyone else.
              </p>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-3xl font-bold">@LaLiLuLaara</div>
                  <div className="text-sm opacity-75">Instagram Profile</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold">Free</div>
                  <div className="text-sm opacity-75">Public Content</div>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-white/20 backdrop-blur-sm text-white py-4 rounded-xl font-bold text-lg hover:bg-white/30 transition-all duration-300 flex items-center justify-center space-x-2 border border-white/30"
              >
                <span>Follow on Instagram</span>
                <ArrowRight className="h-5 w-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Traffic Flow Explanation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gray-800 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-6">How It Works</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Instagram className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">1. Discover</h4>
              <p className="text-gray-300 text-sm">Find me on Instagram for daily updates and teasers</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-black" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">2. Subscribe</h4>
              <p className="text-gray-300 text-sm">Join my Snapchat @LaLiLuLaara for premium content</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Crown className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">3. Enjoy</h4>
              <p className="text-gray-300 text-sm">Access exclusive content and intimate experiences</p>
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid md:grid-cols-4 gap-6 mt-16"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-400 mb-2">2.5K+</div>
            <div className="text-gray-300">Snapchat Subscribers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-400 mb-2">Coming Soon</div>
            <div className="text-gray-300">Instagram Followers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-400 mb-2">150+</div>
            <div className="text-gray-300">Premium Posts</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-400 mb-2">Daily</div>
            <div className="text-gray-300">New Content</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialMediaSection;