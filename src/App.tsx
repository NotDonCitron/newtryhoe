import React, { useState } from 'react';
import ParallaxHero from './components/ParallaxHero';
import SubscriptionTiers from './components/SubscriptionTiers';
import EnhancedContentFeed from './components/EnhancedContentFeed';
import Footer from './components/Footer';
import SubscriberNotifications from './components/SubscriberNotifications';
import MobileBottomNav from './components/MobileBottomNav';
import PullToRefresh from './components/PullToRefresh';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const handleRefresh = async () => {
    // Simulate refresh delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    // You can add actual refresh logic here
    console.log('Content refreshed!');
  };

  return (
    <PullToRefresh onRefresh={handleRefresh}>
      <div className="min-h-screen bg-white pb-16 md:pb-0">
        <SubscriberNotifications />
        
        <main>
          <ParallaxHero />
          <SubscriptionTiers />
          <EnhancedContentFeed />
        </main>
        
        <Footer />
        
        <MobileBottomNav 
          activeTab={activeTab} 
          onTabChange={setActiveTab} 
        />
      </div>
    </PullToRefresh>
  );
}

export default App;