import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ScoreCounter from './components/ScoreCounter';
import Rules from './components/Rules';
import HallOfFame from './components/HallOfFame';
import Footer from './components/Footer';
import { Participant } from './types/types';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  
  const participants: Participant[] = [
    { name: 'Zuhns', score: 3 },
    { name: 'John', score: 2 }
  ];

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'home':
        return (
          <>
            <Hero />
            <ScoreCounter participants={participants} />
          </>
        );
      case 'rules':
        return <Rules />;
      case 'hall-of-fame':
        return <HallOfFame />;
      default:
        return (
          <>
            <Hero />
            <ScoreCounter participants={participants} />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
      />
      <main>
        {renderActiveSection()}
      </main>
      <Footer />
    </div>
  );
}

export default App;