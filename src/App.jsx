import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-base-content bg-base-100">
      <Navbar />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
          <h1 className="text-3xl font-bold">A-5 Dev Stack (Student 1 - Navbar & Footer Ready)</h1>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
