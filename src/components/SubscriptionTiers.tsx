import React from 'react';
import { motion } from 'framer-motion';
import { Check, Crown, MessageCircle, Video, Image } from 'lucide-react';

const SubscriptionTiers = () => {
  const tier = {
    name: "Snapchat Premium",
    price: "$19.99",
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

  const Icon = tier.icon;

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-nude-50">
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

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 ring-2 ring-orange-400 ring-opacity-50 max-w-md w-full"
          >
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-orange-glow text-white px-4 py-2 rounded-full text-sm font-medium">
                Most Popular
              </span>
            </div>

            <div className="text-center mb-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-orange-glow flex items-center justify-center">
                <Icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-orange-600">{tier.price}</span>
                <span className="text-gray-600">{tier.period}</span>
              </div>
              <p className="text-gray-600">{tier.description}</p>
            </div>

            <ul className="space-y-4 mb-8">
              {tier.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-4 rounded-xl font-medium text-lg transition-all duration-300 bg-orange-glow text-white hover:shadow-lg"
            >
              {tier.buttonText}
            </motion.button>
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
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <MessageCircle className="h-12 w-12 text-orange-500 mb-4" />
              <h4 className="text-xl font-bold mb-2">Private Chat</h4>
              <p className="text-gray-600 mb-4">Direct messaging with priority responses</p>
              <div className="text-2xl font-bold text-orange-600 mb-4">$4.99/msg</div>
              <button className="w-full bg-orange-100 text-orange-600 py-2 rounded-lg hover:bg-orange-200 transition-colors">
                Purchase
              </button>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <Video className="h-12 w-12 text-orange-500 mb-4" />
              <h4 className="text-xl font-bold mb-2">Video Call</h4>
              <p className="text-gray-600 mb-4">Personal 15-minute video session</p>
              <div className="text-2xl font-bold text-orange-600 mb-4">$49.99/call</div>
              <button className="w-full bg-orange-100 text-orange-600 py-2 rounded-lg hover:bg-orange-200 transition-colors">
                Book Now
              </button>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <Image className="h-12 w-12 text-orange-500 mb-4" />
              <h4 className="text-xl font-bold mb-2">Custom Content</h4>
              <p className="text-gray-600 mb-4">Personalized photos and videos</p>
              <div className="text-2xl font-bold text-orange-600 mb-4">$24.99/item</div>
              <button className="w-full bg-orange-100 text-orange-600 py-2 rounded-lg hover:bg-orange-200 transition-colors">
                Request
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SubscriptionTiers;