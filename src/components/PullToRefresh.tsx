import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { RefreshCw } from 'lucide-react';

interface PullToRefreshProps {
  onRefresh: () => Promise<void>;
  children: React.ReactNode;
}

const PullToRefresh: React.FC<PullToRefreshProps> = ({ onRefresh, children }) => {
  const [pullDistance, setPullDistance] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [startY, setStartY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const threshold = 80;

  const handleTouchStart = (e: React.TouchEvent) => {
    if (window.scrollY === 0) {
      setStartY(e.touches[0].clientY);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (startY === 0 || isRefreshing) return;

    const currentY = e.touches[0].clientY;
    const distance = Math.max(0, currentY - startY);
    
    if (distance > 0 && window.scrollY === 0) {
      e.preventDefault();
      setPullDistance(Math.min(distance * 0.5, threshold * 1.5));
    }
  };

  const handleTouchEnd = async () => {
    if (pullDistance >= threshold && !isRefreshing) {
      setIsRefreshing(true);
      try {
        await onRefresh();
      } finally {
        setIsRefreshing(false);
      }
    }
    
    setPullDistance(0);
    setStartY(0);
  };

  const refreshProgress = Math.min(pullDistance / threshold, 1);

  return (
    <div
      ref={containerRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative"
    >
      {/* Pull to refresh indicator */}
      <motion.div
        animate={{ 
          height: pullDistance > 0 || isRefreshing ? 60 : 0,
          opacity: pullDistance > 0 || isRefreshing ? 1 : 0
        }}
        className="relative flex items-center justify-center bg-orange-50/80 backdrop-blur-sm overflow-hidden border-b border-orange-200/50"
        style={{
          backgroundImage: `
            radial-gradient(circle at 30% 30%, rgba(255,255,255,0.6) 0%, transparent 70%),
            radial-gradient(circle at 70% 70%, rgba(0,0,0,0.02) 0%, transparent 70%)
          `
        }}
      >
        {/* Weathered refresh area */}
        <div className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            background: `
              repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)
            `
          }}
        />
        
        <motion.div
          animate={{ 
            rotate: isRefreshing ? 360 : refreshProgress * 180,
            scale: refreshProgress
          }}
          transition={{ 
            rotate: isRefreshing ? { duration: 1, repeat: Infinity, ease: "linear" } : { duration: 0.2 }
          }}
          className="relative z-10 flex items-center space-x-2 text-orange-500"
        >
          <RefreshCw className="h-5 w-5" />
          <span className="text-sm font-medium">
            {isRefreshing ? 'Refreshing...' : pullDistance >= threshold ? 'Release to refresh' : 'Pull to refresh'}
          </span>
        </motion.div>
      </motion.div>

      {/* Content */}
      <motion.div
        animate={{ y: pullDistance }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default PullToRefresh;