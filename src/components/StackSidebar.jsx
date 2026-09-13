import React from 'react';

const StackSidebar = ({ stack, onRemove, onRemoveAll }) => {
  return (
    <div className="bg-base-100 rounded-3xl p-6 shadow-xl border border-base-200 h-fit lg:sticky lg:top-24">
      <h3 className="text-2xl font-bold mb-2">Your Stack</h3>
      <p className="text-base-content/60 mb-6">{stack.length} Technology Selected</p>
      
      {stack.length === 0 ? (
        <div className="flex flex-col items-center text-center py-10 opacity-60">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4 text-base-content/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          <p>Your stack is empty.</p>
          <p className="text-sm">Click "Add to Stack" to select technologies.</p>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <div className="flex justify-end">
            <button className="btn btn-sm btn-outline btn-error rounded-full" onClick={onRemoveAll}>
              Remove All
            </button>
          </div>
          <div className="flex flex-col gap-3">
            {stack.map(item => (
              <div key={item.id} className="flex items-center justify-between p-3 bg-base-200 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-base-100 p-1 rounded flex items-center justify-center">
                    <img src={item.icon} alt={item.name} className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <p className="font-bold text-sm leading-tight">{item.name}</p>
                    <p className="text-xs text-base-content/60">{item.category}</p>
                  </div>
                </div>
                <button className="btn btn-sm btn-circle btn-ghost text-error" onClick={() => onRemove(item.id)}>
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default StackSidebar;
