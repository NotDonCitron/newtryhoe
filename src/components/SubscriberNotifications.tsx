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

      // Remove notification after 5 seconds
      setTimeout(() => {
        setNotifications(prev => prev.filter(n => n.id !== notification.id));
      }, 5000);
    };

    // Create first notification after 3 seconds
    const initialTimer = setTimeout(createNotification, 3000);
    
    // Then create notifications every 2-3 minutes
    const interval = setInterval(() => {
      createNotification();
    }, Math.random() * 60000 + 120000); // 2-3 minutes

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
            className="bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-orange-200 max-w-xs"
          >
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                {notification.action.includes('Premium') || notification.action.includes('VIP') ? (
                  <Crown className="h-4 w-4 text-orange-600" />
                ) : (
                  <User className="h-4 w-4 text-orange-600" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  <span className="font-bold">{notification.name}</span> {notification.action}
                </p>
                <p className="text-xs text-gray-500">Just now</p>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default SubscriberNotifications;