import React from 'react';

const TechCard = ({ tech, onAdd, isAdded }) => {
  return (
    <div className="card bg-base-100 shadow-xl border border-base-200 hover:border-primary transition-colors">
      <div className="card-body p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="w-12 h-12 rounded-lg bg-base-200 p-2 flex items-center justify-center">
            <img src={tech.icon} alt={tech.name} className="max-w-full max-h-full" />
          </div>
          <span className="badge badge-primary badge-outline text-xs">{tech.badge}</span>
        </div>
        <h2 className="card-title text-xl mb-1">{tech.name}</h2>
        <p className="text-sm text-base-content/70 line-clamp-2 mb-4 h-10">{tech.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="badge bg-base-200 border-none text-xs">{tech.category}</span>
          <span className="badge bg-base-200 border-none text-xs font-semibold">{tech.difficulty}</span>
        </div>
        
        <div className="flex justify-between items-center mt-auto pt-4 border-t border-base-200">
          <div className="flex items-center gap-1 text-warning font-bold">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span>{tech.rating}</span>
          </div>
          <button 
            className={`btn btn-sm rounded-full ${isAdded ? 'btn-disabled bg-base-300 text-base-content/50' : 'bg-brand-gradient text-white border-none'}`}
            onClick={() => onAdd(tech)}
            disabled={isAdded}
          >
            {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TechCard;
