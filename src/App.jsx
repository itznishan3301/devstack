import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroBanner from './components/HeroBanner';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-base-content bg-base-100">
      <Navbar />
      <main className="flex-grow">
        <HeroBanner />
      </main>
      <Footer />
    </div>
  );
}

export default App;
