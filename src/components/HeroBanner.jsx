import React from 'react';

const HeroBanner = () => {
  return (
    <div className="hero min-h-[70vh] bg-base-100 rounded-3xl mt-4 max-w-7xl mx-auto px-4">
      <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between gap-10">
        <div className="flex-1 flex justify-center">
          <img 
            src="/banner-stack.png" 
            alt="Dev Stack Banner" 
            className="w-full max-w-lg rounded-2xl shadow-2xl" 
          />
        </div>
        <div className="flex-1">
          <h1 className="text-5xl font-bold leading-tight">
            Build Your Dream <br/>
            <span className="text-brand-gradient">Dev Stack</span> Today
          </h1>
          <p className="py-6 text-lg text-base-content/80">
            Discover, evaluate, and assemble the perfect combination of technologies for your next big project. 
            From frontend frameworks to robust databases, craft the ultimate development stack tailored to your needs.
          </p>
          <div className="flex flex-wrap gap-4 mt-2">
            <button className="btn bg-brand-gradient border-none rounded-full px-8 hover:opacity-90">Explore Technologies</button>
            <button className="btn btn-outline rounded-full px-8">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
