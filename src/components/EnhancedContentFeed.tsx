import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, MessageCircle, Share2, Crown, Play, Lock, Eye, Calendar, Star } from 'lucide-react';

const EnhancedContentFeed = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [likedPosts, setLikedPosts] = useState(new Set());

  const filters = [
    { id: 'all', label: 'All Content', icon: Eye },
    { id: 'photos', label: 'Photos', icon: Eye },
    { id: 'videos', label: 'Videos', icon: Play },
    { id: 'premium', label: 'Premium', icon: Crown },
  ];

  const contentItems = [
    {
      id: 1,
      type: 'photo',
      image: '/by PKOFs (Telegram) (12).jpg',
      title: 'Golden Hour Beauty',
      description: 'Captured during the most beautiful light of the day...',
      isPremium: false,
      likes: 234,
      comments: 45,
      date: '2 hours ago',
      rating: 4.9,
      tags: ['Portrait', 'Natural Light', 'Elegance']
    },
    {
      id: 2,
      type: 'video',
      image: '/by PKOFs (Telegram) (14).jpg',
      title: 'Behind the Scenes',
      description: 'Exclusive look at my creative process...',
      isPremium: true,
      likes: 456,
      comments: 78,
      date: '5 hours ago',
      duration: '3:45',
      rating: 5.0,
      tags: ['BTS', 'Exclusive', 'Creative']
    },
    {
      id: 3,
      type: 'photo',
      image: '/by PKOFs (Telegram) (19).jpg',
      title: 'Artistic Expression',
      description: 'Exploring new dimensions of beauty and art...',
      isPremium: true,
      likes: 189,
      comments: 32,
      date: '1 day ago',
      rating: 4.8,
      tags: ['Art', 'Creative', 'Premium']
    },
    {
      id: 4,
      type: 'photo',
      image: '/by PKOFs (Telegram) (21).jpg',
      title: 'Natural Elegance',
      description: 'Embracing natural beauty in its purest form...',
      isPremium: false,
      likes: 312,
      comments: 67,
      date: '2 days ago',
      rating: 4.7,
      tags: ['Natural', 'Beauty', 'Elegant']
    },
    {
      id: 5,
      type: 'video',
      image: '/by PKOFs (Telegram) (22).jpg',
      title: 'Exclusive Performance',
      description: 'A special performance just for my premium subscribers...',
      isPremium: true,
      likes: 567,
      comments: 123,
      date: '3 days ago',
      duration: '7:20',
      rating: 5.0,
      tags: ['Performance', 'Exclusive', 'VIP']
    }
  ];

  const filteredContent = contentItems.filter(item => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'photos') return item.type === 'photo';
    if (activeFilter === 'videos') return item.type === 'video';
    if (activeFilter === 'premium') return item.isPremium;
    return true;
  });

  const handleLike = (id: number) => {
    const newLiked = new Set(likedPosts);
    if (newLiked.has(id)) {
      newLiked.delete(id);
    } else {
      newLiked.add(id);
    }
    setLikedPosts(newLiked);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-nude-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">
              Exclusive Content
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover my world through carefully curated content, from artistic photography to intimate moments.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => {
            const Icon = filter.icon;
            return (
              <motion.button
                key={filter.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-orange-glow text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-orange-50 hover:text-orange-600'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{filter.label}</span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Content Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredContent.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative group">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Premium Badge */}
                  {item.isPremium && (
                    <div className="absolute top-4 left-4 bg-orange-glow text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                      <Crown className="h-4 w-4" />
                      <span>Premium</span>
                    </div>
                  )}
                  
                  {/* Video Duration */}
                  {item.type === 'video' && (
                    <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                      {item.duration}
                    </div>
                  )}
                  
                  {/* Play Button for Videos */}
                  {item.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center shadow-lg"
                      >
                        <Play className="h-8 w-8 text-white ml-1" />
                      </motion.div>
                    </div>
                  )}
                  
                  {/* Lock Overlay for Premium Content */}
                  {item.isPremium && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-center text-white">
                        <Lock className="h-12 w-12 mx-auto mb-2" />
                        <p className="font-medium">Premium Content</p>
                        <p className="text-sm">Subscribe to unlock</p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-orange-500 fill-current" />
                      <span className="text-sm font-medium text-gray-600">{item.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">{item.description}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-orange-100 text-orange-600 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Bar */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-4">
                      <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleLike(item.id)}
                        className={`flex items-center space-x-1 ${
                          likedPosts.has(item.id) ? 'text-red-500' : 'text-gray-500'
                        } hover:text-red-500 transition-colors`}
                      >
                        <Heart className={`h-5 w-5 ${likedPosts.has(item.id) ? 'fill-current' : ''}`} />
                        <span className="text-sm">{item.likes}</span>
                      </motion.button>
                      
                      <button className="flex items-center space-x-1 text-gray-500 hover:text-orange-500 transition-colors">
                        <MessageCircle className="h-5 w-5" />
                        <span className="text-sm">{item.comments}</span>
                      </button>
                    </div>
                    
                    <div className="flex items-center space-x-2 text-gray-500 text-sm">
                      <Calendar className="h-4 w-4" />
                      <span>{item.date}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-orange-glow text-white px-8 py-4 rounded-full font-medium text-lg hover:shadow-lg transition-all duration-300"
          >
            Load More Content
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedContentFeed;