import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Play } from 'lucide-react';

const EnhancedContentFeed = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'photos', label: 'Photos' },
    { id: 'videos', label: 'Videos' },
    { id: 'premium', label: 'Premium' },
  ];

  const contentItems = [
    {
      id: 1,
      type: 'photo',
      image: '/by PKOFs (Telegram) (10) copy copy.jpg',
      title: 'Bathroom Mirror Selfie',
      isPremium: false,
      price: 'Free Preview'
    },
    {
      id: 2,
      type: 'photo',
      image: '/by PKOFs (Telegram) (14).jpg',
      title: 'Gym Selfie',
      isPremium: true,
      price: '$5.99'
    },
    {
      id: 3,
      type: 'photo',
      image: '/by PKOFs (Telegram) (19).jpg',
      title: 'Car Selfie',
      isPremium: true,
      price: '$7.99'
    },
    {
      id: 4,
      type: 'photo',
      image: '/by PKOFs (Telegram) (39) copy copy.jpg',
      title: 'Mirror Pic',
      isPremium: false,
      price: 'Free Preview'
    },
    {
      id: 5,
      type: 'video',
      image: '/🌈@LEAKSOFHEAVENHUB ON TELEGRAM🦄💦 - (72).jpg',
      title: 'Sexy Video Teaser',
      isPremium: true,
      price: '$12.99',
      duration: '2:30'
    },
    {
      id: 6,
      type: 'video',
      image: '/🌈@LEAKSOFHEAVENHUB ON TELEGRAM🦄💦 - (72).jpg',
      title: 'Private Show',
      isPremium: true,
      price: '$15.99',
      duration: '4:15'
    },
    {
      id: 7,
      type: 'photo',
      image: '/by PKOFs (Telegram) (10) copy copy.jpg',
      title: 'Bathroom Selfie 2',
      isPremium: true,
      price: '$6.99'
    },
    {
      id: 8,
      type: 'photo',
      image: '/by PKOFs (Telegram) (14).jpg',
      title: 'Workout Pic',
      isPremium: false,
      price: 'Free Preview'
    },
    {
      id: 9,
      type: 'video',
      image: '/🌈@LEAKSOFHEAVENHUB ON TELEGRAM🦄💦 - (72).jpg',
      title: 'Exclusive Content',
      isPremium: true,
      price: '$18.99',
      duration: '5:45'
    },
    {
      id: 10,
      type: 'photo',
      image: '/by PKOFs (Telegram) (19).jpg',
      title: 'Car Mirror Selfie',
      isPremium: true,
      price: '$8.99'
    },
    {
      id: 11,
      type: 'video',
      image: '/🌈@LEAKSOFHEAVENHUB ON TELEGRAM🦄💦 - (72).jpg',
      title: 'Behind the Scenes',
      isPremium: true,
      price: '$14.99',
      duration: '3:20'
    },
    {
      id: 12,
      type: 'photo',
      image: '/by PKOFs (Telegram) (39) copy copy.jpg',
      title: 'Mirror Shot',
      isPremium: false,
      price: 'Free Preview'
    }
  ];

  const filteredContent = contentItems.filter(item => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'photos') return item.type === 'photo';
    if (activeFilter === 'videos') return item.type === 'video';
    if (activeFilter === 'premium') return item.isPremium;
    return true;
  });

  return (
    <section className="py-16 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Big Sexy Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="relative mb-8">
            <img
              src="/🌈@LEAKSOFHEAVENHUB ON TELEGRAM🦄💦 - (72).jpg"
              alt="Exclusive Content"
              className="w-full max-w-2xl mx-auto h-96 object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-2xl"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h2 className="text-4xl lg:text-5xl font-bold mb-2">
                My Exclusive Content
              </h2>
              <p className="text-xl opacity-90">
                Unlock everything you've been waiting for 🔥
              </p>
            </div>
          </div>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center gap-4 mb-10"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Scrollable Content Grid */}
        <div className="relative">
          <div className="overflow-x-auto pb-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFilter}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="flex space-x-6 w-max"
                style={{ minWidth: '100%' }}
              >
                {filteredContent.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    whileHover={{ y: -3, scale: 1.02 }}
                    className="bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-all duration-300 cursor-pointer flex-shrink-0"
                    style={{ width: '280px' }}
                  >
                    <div className="relative group">
                      <img
                        src={item.image}
                        alt={item.title}
                        className={`w-full h-80 object-cover ${
                          item.isPremium && item.type === 'video' ? 'blur-md' : ''
                        }`}
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      
                      {/* Premium Lock */}
                      {item.isPremium && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/60">
                          <div className="text-center text-white">
                            <Lock className="h-8 w-8 mx-auto mb-2" />
                            <p className="font-bold text-lg">{item.price}</p>
                            <p className="text-sm">Unlock to view</p>
                          </div>
                        </div>
                      )}
                      
                      {/* Video Duration */}
                      {item.type === 'video' && (
                        <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                          {item.duration}
                        </div>
                      )}
                      
                      {/* Video Play Button */}
                      {item.type === 'video' && (
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center"
                          >
                            <Play className="h-6 w-6 text-white ml-1" />
                          </motion.div>
                        </div>
                      )}
                      
                      {/* Price Tag */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex justify-between items-end">
                          <h3 className="text-white font-bold text-lg truncate pr-2">{item.title}</h3>
                          <div className={`px-3 py-1 rounded-full text-sm font-bold whitespace-nowrap ${
                            item.isPremium 
                              ? 'bg-orange-500 text-white' 
                              : 'bg-green-500 text-white'
                          }`}>
                            {item.price}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gradient-to-l from-black via-black/50 to-transparent w-20 h-full pointer-events-none flex items-center justify-end pr-4">
            <div className="text-gray-400 text-sm">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-600 transition-all duration-300"
          >
            Subscribe for Full Access 🔥
          </motion.button>
          <p className="text-gray-400 mt-4 text-sm">
            Get instant access to all my exclusive content
          </p>
          <div className="mt-6 text-center">
            <p className="text-orange-400 font-bold text-lg mb-2">
              Follow me on Snapchat: @LaLiLuLaara
            </p>
            <p className="text-gray-400 text-sm">
              That's where all the real content is 💦
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedContentFeed;