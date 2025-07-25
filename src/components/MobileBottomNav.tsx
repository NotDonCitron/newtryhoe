import React from 'react';
import { motion } from 'framer-motion';
import { Home, Search, Heart, User, Crown } from 'lucide-react';

interface MobileBottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'search', icon: Search, label: 'Search' },
    { id: 'premium', icon: Crown, label: 'Premium' },
    { id: 'likes', icon: Heart, label: 'Likes' },
    { id: 'profile', icon: User, label: 'Profile' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="relative bg-white/90 backdrop-blur-md border-t border-gray-200/60 px-4 py-2"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 20%, rgba(255,255,255,0.8) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(0,0,0,0.02) 0%, transparent 50%)
          `
        }}
      >
        {/* Weathered nav texture */}
        <div className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            background: `
              repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)
            `
          }}
        />
        
        <div className="relative z-10 flex justify-around items-center">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            
            return (
              <motion.button
                key={tab.id}
                whileTap={{ scale: 0.9 }}
                onClick={() => onTabChange(tab.id)}
                className={`relative flex flex-col items-center space-y-1 py-2 px-3 rounded-lg transition-colors ${
                  isActive 
                    ? 'text-orange-500' 
                    : 'text-gray-500'
                }`}
                style={isActive ? {
                  background: 'radial-gradient(circle, rgba(255,107,71,0.1) 0%, transparent 70%)'
                } : {}}
              >
                <div className="relative">
                  <Icon className={`h-6 w-6 ${isActive ? 'text-orange-500' : 'text-gray-500'}`} />
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-orange-500 rounded-full"
                    />
                  )}
                  {tab.id === 'premium' && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500/90 rounded-full flex items-center justify-center border border-red-400/30">
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                    </div>
                  )}
                  
                  {/* Icon wear effect */}
                  {isActive && (
                    <div className="absolute inset-0 rounded opacity-20 pointer-events-none"
                      style={{
                        background: `
                          radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4) 0%, transparent 70%)
                        `
                      }}
                    />
                  )}
                </div>
                <span className={`text-xs font-medium ${
                  isActive ? 'text-orange-500' : 'text-gray-500'
                }`}>
                  {tab.label}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MobileBottomNav;