import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroBanner from './components/HeroBanner';
import TechCard from './components/TechCard';
import StackSidebar from './components/StackSidebar';

function App() {
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a slight delay to show loading state as per requirements
    setTimeout(() => {
      fetch('/data.json')
        .then(res => res.json())
        .then(data => {
          setTechnologies(data);
          setLoading(false);
        })
        .catch(err => {
          console.error("Error fetching data:", err);
          setLoading(false);
        });
    }, 500);
  }, []);

  const [stack, setStack] = useState([]);

  const handleAddTech = (tech) => {
    if (stack.find(item => item.id === tech.id)) return;
    setStack([...stack, tech]);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-base-content bg-base-100">
      <Navbar />
      <main className="flex-grow pb-20">
        <HeroBanner />
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Available Technologies</h2>
          
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <span className="loading loading-spinner loading-lg text-primary"></span>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex-grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {technologies.map(tech => (
                  <TechCard 
                    key={tech.id} 
                    tech={tech} 
                    onAdd={handleAddTech}
                    isAdded={stack.some(t => t.id === tech.id)}
                  />
                ))}
              </div>
              
              <div className="w-full lg:w-80 shrink-0">
                <StackSidebar 
                  stack={stack} 
                  onRemove={() => {}} 
                  onRemoveAll={() => {}} 
                />
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
