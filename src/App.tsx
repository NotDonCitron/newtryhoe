import React from 'react';
import Header from './components/Header';
import ParallaxHero from './components/ParallaxHero';
import SubscriptionTiers from './components/SubscriptionTiers';
import EnhancedContentFeed from './components/EnhancedContentFeed';
import SocialMediaSection from './components/SocialMediaSection';
import TrafficDirection from './components/TrafficDirection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <ParallaxHero />
        <SubscriptionTiers />
        <EnhancedContentFeed />
        <SocialMediaSection />
        <TrafficDirection />
      </main>
      <Footer />
    </div>
  );
}

export default App;