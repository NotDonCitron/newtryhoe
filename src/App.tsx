import React from 'react';
import Header from './components/Header';
import ParallaxHero from './components/ParallaxHero';
import SubscriptionTiers from './components/SubscriptionTiers';
import EnhancedContentFeed from './components/EnhancedContentFeed';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <ParallaxHero />
        <SubscriptionTiers />
        <EnhancedContentFeed />
      </main>
      <Footer />
    </div>
  );
}

export default App;