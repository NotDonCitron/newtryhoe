import React from 'react';
import { motion } from 'framer-motion';
import { Check, Crown, MessageCircle, Video, Image } from 'lucide-react';
import CountdownTimer from './CountdownTimer';
import ProgressivePricing from './ProgressivePricing';

const SubscriptionTiers = () => {
  const countdownEnd = new Date();
  countdownEnd.setHours(countdownEnd.getHours() + 24);

  const tier = {
    name: "Snapchat Premium",
    finalPrice: 19.99,
    originalPrice: 34.99,
    period: "/month",
    description: "Exclusive premium content and intimate experiences",
    features: [
      "Exclusive premium photos & videos",
      "4K high-quality content", 
      "Daily exclusive updates",
      "Private messaging access",
      "Custom content requests",
      "Behind-the-scenes content",
      "Priority chat responses",
      "Video calls (2/month)"
    ],
    buttonText: "Get Snapchat Premium",
    popular: true,
    color: "orange",
    icon: Crown
  };

  const freeFeatures = [
    "Sample exclusive content"
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-nude-100 to-nude-200 overflow-hidden"
      style={{
        backgroundImage: `
          radial-gradient(circle at 20% 20%, rgba(255,255,255,0.4) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(0,0,0,0.02) 0%, transparent 50%)
        `
      }}
    >
      {/* Weathered background texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          background: `
            repeating-linear-gradient(0deg, transparent, transparent 4px, rgba(0,0,0,0.1) 4px, rgba(0,0,0,0.1) 8px),
            repeating-linear-gradient(90deg, transparent, transparent 4px, rgba(0,0,0,0.1) 4px, rgba(0,0,0,0.1) 8px)
          `
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">
              Premium Access
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Unlock exclusive content and intimate experiences with premium access. 
            Join thousands who enjoy the ultimate premium experience.
          </p>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <CountdownTimer 
            title="🔥 Special Offer Ends Soon!" 
            endTime={countdownEnd}
            onExpire={() => console.log('Offer expired!')}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Trial */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50"
            style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, rgba(255,255,255,0.8) 0%, transparent 60%),
                radial-gradient(circle at 75% 75%, rgba(0,0,0,0.02) 0%, transparent 60%)
              `
            }}
          >
            {/* Weathered card texture */}
            <div className="absolute inset-0 rounded-2xl opacity-5 pointer-events-none"
              style={{
                background: `
                  repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)
                `
              }}
            />
            
            <div className="relative z-10 text-center mb-6">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-green-100/80 flex items-center justify-center"
                style={{
                  backgroundImage: `
                    radial-gradient(circle at 30% 30%, rgba(255,255,255,0.6) 0%, transparent 70%)
                  `
                }}
              >
                <span className="text-2xl">🆓</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Free Trial</h3>
              <div className="mb-3">
                <span className="text-3xl font-bold text-green-600">FREE</span>
                <span className="text-gray-600"> for 3 days</span>
              </div>
              <p className="text-gray-600 text-sm">Try before you buy</p>
            </div>

            <ul className="space-y-3 mb-6">
              {freeFeatures.map((feature, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative w-full py-3 rounded-xl font-medium text-lg transition-all duration-300 bg-green-500/90 text-white hover:bg-green-600 border border-green-400/20"
              style={{
                backgroundImage: `
                  radial-gradient(circle at 30% 30%, rgba(255,255,255,0.2) 0%, transparent 70%)
                `
              }}
            >
              Start Free Trial
              
              {/* Button texture */}
              <div className="absolute inset-0 rounded-xl opacity-20 pointer-events-none"
                style={{
                  background: `
                    linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 50%, rgba(0,0,0,0.1) 100%)
                  `
                }}
              />
            </motion.button>
            <p className="text-xs text-gray-500 text-center mt-2">
              Auto-converts to premium after trial
            </p>
          </motion.div>

          {/* Premium with Progressive Pricing */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ProgressivePricing
              finalPrice={tier.finalPrice}
              originalPrice={tier.originalPrice}
              title={tier.name}
              features={tier.features}
            />
          </motion.div>
        </div>

        {/* Add-on Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">
              Premium Add-ons
            </span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: MessageCircle, title: "Private Chat", desc: "Direct messaging with priority responses", price: "$4.99/msg" },
              { icon: Video, title: "Video Call", desc: "Personal 15-minute video session", price: "$49.99/call" },
              { icon: Image, title: "Custom Content", desc: "Personalized photos and videos", price: "$24.99/item" }
            ].map((addon, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -3 }}
                className="relative bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50"
                style={{
                  backgroundImage: `
                    radial-gradient(circle at 25% 25%, rgba(255,255,255,0.8) 0%, transparent 60%),
                    radial-gradient(circle at 75% 75%, rgba(0,0,0,0.02) 0%, transparent 60%)
                  `
                }}
              >
                {/* Card texture */}
                <div className="absolute inset-0 rounded-xl opacity-5 pointer-events-none"
                  style={{
                    background: `
                      repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)
                    `
                  }}
                />
                
                <div className="relative z-10">
                  <addon.icon className="h-12 w-12 text-orange-500 mb-4" />
                  <h4 className="text-xl font-bold mb-2">{addon.title}</h4>
                  <p className="text-gray-600 mb-4">{addon.desc}</p>
                  <div className="text-2xl font-bold text-orange-600 mb-4">{addon.price}</div>
                  <button className="w-full bg-orange-100/80 text-orange-600 py-2 rounded-lg hover:bg-orange-200 transition-colors font-medium">
                    {index === 0 ? 'Purchase' : index === 1 ? 'Book Now' : 'Request'}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SubscriptionTiers;