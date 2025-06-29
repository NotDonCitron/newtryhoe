import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Crown } from 'lucide-react';

interface Notification {
  id: number;
  name: string;
  action: string;
  timestamp: Date;
}

const SubscriberNotifications: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const maleNames = [
    'Alex', 'Jake', 'Ryan', 'Mike', 'Chris', 'David', 'James', 'Tyler', 'Brandon', 'Josh',
    'Kevin', 'Matt', 'Nick', 'Sam', 'Ben', 'Luke', 'Adam', 'Dan', 'Mark', 'Steve',
    'Tom', 'Will', 'Jason', 'Kyle', 'Sean', 'Eric', 'Brian', 'Aaron', 'Justin', 'Derek'
  ];

  const actions = [
    'just subscribed!',
    'upgraded to Premium!',
    'sent a tip!',
    'liked your content!',
    'joined the VIP tier!'
  ];

  useEffect(() => {
    const createNotification = () => {
      const randomName = maleNames[Math.floor(Math.random() * maleNames.length)];
      const randomAction = actions[Math.floor(Math.random() * actions.length)];
      
      const notification: Notification = {
        id: Date.now(),
        name: randomName,
        action: randomAction,
        timestamp: new Date()
      };

      setNotifications(prev => [notification, ...prev.slice(0, 2)]);

      setTimeout(() => {
        setNotifications(prev => prev.filter(n => n.id !== notification.id));
      }, 5000);
    };

    const initialTimer = setTimeout(createNotification, 3000);
    
    const interval = setInterval(() => {
      createNotification();
    }, Math.random() * 60000 + 120000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="fixed top-20 right-4 z-40 space-y-2">
      <AnimatePresence>
        {notifications.map((notification) => (
          <motion.div
            key={notification.id}
            initial={{ opacity: 0, x: 300, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 300, scale: 0.8 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative bg-white/90 backdrop-blur-md rounded-lg p-3 shadow-xl border border-orange-200/50 max-w-xs"
            style={{
              backgroundImage: `
                radial-gradient(circle at 15% 15%, rgba(255,255,255,0.6) 0%, transparent 50%),
                radial-gradient(circle at 85% 85%, rgba(0,0,0,0.02) 0%, transparent 50%)
              `
            }}
          >
            {/* Weathered paper texture */}
            <div className="absolute inset-0 rounded-lg opacity-5 pointer-events-none"
              style={{
                background: `
                  repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0,0,0,0.1) 1px, rgba(0,0,0,0.1) 2px),
                  repeating-linear-gradient(90deg, transparent, transparent 1px, rgba(0,0,0,0.1) 1px, rgba(0,0,0,0.1) 2px)
                `
              }}
            />
            
            <div className="relative z-10 flex items-center space-x-3">
              <div className="relative w-8 h-8 bg-orange-100/80 rounded-full flex items-center justify-center"
                style={{
                  backgroundImage: `
                    radial-gradient(circle at 30% 30%, rgba(255,255,255,0.5) 0%, transparent 70%),
                    radial-gradient(circle at 70% 70%, rgba(0,0,0,0.05) 0%, transparent 70%)
                  `
                }}
              >
                {notification.action.includes('Premium') || notification.action.includes('VIP') ? (
                  <Crown className="h-4 w-4 text-orange-600" />
                ) : (
                  <User className="h-4 w-4 text-orange-600" />
                )}
                
                {/* Icon wear */}
                <div className="absolute inset-0 rounded-full opacity-20 pointer-events-none"
                  style={{
                    background: `
                      linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 50%, rgba(0,0,0,0.1) 100%)
                    `
                  }}
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  <span className="font-bold">{notification.name}</span> {notification.action}
                </p>
                <p className="text-xs text-gray-500 opacity-80">Just now</p>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default SubscriberNotifications;