import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

interface CountdownTimerProps {
  title: string;
  endTime: Date;
  onExpire?: () => void;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ title, endTime, onExpire }) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endTime.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        onExpire?.();
        return;
      }

      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime, onExpire]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="relative bg-gradient-to-br from-red-600/90 to-orange-600/85 text-white p-5 rounded-xl shadow-2xl border border-red-400/20"
      style={{
        backgroundImage: `
          radial-gradient(circle at 20% 30%, rgba(255,255,255,0.1) 1px, transparent 1px),
          radial-gradient(circle at 80% 70%, rgba(0,0,0,0.1) 1px, transparent 1px),
          linear-gradient(135deg, transparent 0%, rgba(0,0,0,0.05) 50%, transparent 100%)
        `,
        backdropFilter: 'blur(1px)'
      }}
    >
      {/* Weathered overlay */}
      <div className="absolute inset-0 rounded-xl opacity-20 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse at top left, rgba(255,255,255,0.3) 0%, transparent 50%),
            radial-gradient(ellipse at bottom right, rgba(0,0,0,0.2) 0%, transparent 50%),
            linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 31%, rgba(255,255,255,0.1) 32%, transparent 33%)
          `
        }}
      />
      
      <div className="relative z-10">
        <div className="flex items-center space-x-2 mb-3">
          <Clock className="h-5 w-5 opacity-90" />
          <span className="font-bold text-sm tracking-wide opacity-95">{title}</span>
        </div>
        <div className="flex space-x-4">
          {[
            { value: timeLeft.hours, label: 'Hours' },
            { value: timeLeft.minutes, label: 'Min' },
            { value: timeLeft.seconds, label: 'Sec' }
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="relative">
                <div className="text-2xl font-bold tracking-tight">
                  {item.value.toString().padStart(2, '0')}
                </div>
                {/* Subtle wear on numbers */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10 rounded opacity-30" />
              </div>
              <div className="text-xs opacity-75 font-medium">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default CountdownTimer;