import React from 'react';
import { motion } from 'framer-motion';
import { Check, Crown, MessageCircle, Video, Image } from 'lucide-react';
import CountdownTimer from './CountdownTimer';
import ProgressivePricing from './ProgressivePricing';

const SubscriptionTiers = () => {
  // Create countdown end time (24 hours from now)
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

  // Free trial features
  const freeFeatures = [
    "3-day free trial",
    "Limited photo previews", 
    "Basic chat access",
    "Sample exclusive content"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-nude-100 to-nude-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="text-center mb-6">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-green-100 flex items-center justify-center">
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
              className="w-full py-3 rounded-xl font-medium text-lg transition-all duration-300 bg-green-500 text-white hover:bg-green-600"
            >
              Start Free Trial
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
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <MessageCircle className="h-12 w-12 text-orange-500 mb-4" />
              <h4 className="text-xl font-bold mb-2">Private Chat</h4>
              <p className="text-gray-600 mb-4">Direct messaging with priority responses</p>
              <div className="text-2xl font-bold text-orange-600 mb-4">$4.99/msg</div>
              <button className="w-full bg-orange-100 text-orange-600 py-2 rounded-lg hover:bg-orange-200 transition-colors">
                Purchase
              </button>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Video className="h-12 w-12 text-orange-500 mb-4" />
              <h4 className="text-xl font-bold mb-2">Video Call</h4>
              <p className="text-gray-600 mb-4">Personal 15-minute video session</p>
              <div className="text-2xl font-bold text-orange-600 mb-4">$49.99/call</div>
              <button className="w-full bg-orange-100 text-orange-600 py-2 rounded-lg hover:bg-orange-200 transition-colors">
                Book Now
              </button>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Image className="h-12 w-12 text-orange-500 mb-4" />
              <h4 className="text-xl font-bold mb-2">Custom Content</h4>
              <p className="text-gray-600 mb-4">Personalized photos and videos</p>
              <div className="text-2xl font-bold text-orange-600 mb-4">$24.99/item</div>
              <button className="w-full bg-orange-100 text-orange-600 py-2 rounded-lg hover:bg-orange-200 transition-colors">
                Request
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SubscriptionTiers;