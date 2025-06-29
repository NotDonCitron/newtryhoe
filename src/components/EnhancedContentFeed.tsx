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
      image: '/by PKOFs (Telegram) (10) copy copy.jpg',
      title: 'Private Video',
      isPremium: true,
      price: '$12.99',
      duration: '2:30'
    },
    {
      id: 6,
      type: 'video',
      image: '/by PKOFs (Telegram) (14).jpg',
      title: 'Exclusive Content',
      isPremium: true,
      price: '$15.99',
      duration: '4:15'
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
            My Content
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Exclusive pics and videos just for you baby 💋
          </p>
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

        {/* Content Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredContent.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -3 }}
                className="bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-all duration-300 cursor-pointer"
              >
                <div className="relative group">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-80 object-cover"
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
                  
                  {/* Video Play Button */}
                  {item.type === 'video' && (
                    <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                      {item.duration}
                    </div>
                  )}
                  
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
                      <h3 className="text-white font-bold text-lg">{item.title}</h3>
                      <div className={`px-3 py-1 rounded-full text-sm font-bold ${
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
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedContentFeed;