import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content border-t border-base-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <p className="text-2xl font-bold"><span className="text-brand-gradient">Dev</span> Stack</p>
            <p className="mt-4 text-sm opacity-80">Empowering developers to build modern web applications with the best technology stack.</p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="opacity-70 hover:opacity-100 transition-opacity">GitHub</a>
              <a href="#" className="opacity-70 hover:opacity-100 transition-opacity">Twitter</a>
              <a href="#" className="opacity-70 hover:opacity-100 transition-opacity">LinkedIn</a>
            </div>
          </div>
          
          <div>
            <h6 className="font-bold uppercase tracking-wider text-sm mb-4 opacity-70">Product</h6>
            <div className="flex flex-col gap-2">
              <a href="#" className="hover:underline opacity-80 hover:opacity-100">Features</a>
              <a href="#" className="hover:underline opacity-80 hover:opacity-100">Integrations</a>
              <a href="#" className="hover:underline opacity-80 hover:opacity-100">Pricing</a>
              <a href="#" className="hover:underline opacity-80 hover:opacity-100">Changelog</a>
            </div>
          </div>
          
          <div>
            <h6 className="font-bold uppercase tracking-wider text-sm mb-4 opacity-70">Company</h6>
            <div className="flex flex-col gap-2">
              <a href="#" className="hover:underline opacity-80 hover:opacity-100">About Us</a>
              <a href="#" className="hover:underline opacity-80 hover:opacity-100">Careers</a>
              <a href="#" className="hover:underline opacity-80 hover:opacity-100">Blog</a>
              <a href="#" className="hover:underline opacity-80 hover:opacity-100">Contact</a>
            </div>
          </div>
          
          <div>
            <h6 className="font-bold uppercase tracking-wider text-sm mb-4 opacity-70">Legal</h6>
            <div className="flex flex-col gap-2">
              <a href="#" className="hover:underline opacity-80 hover:opacity-100">Terms of Service</a>
              <a href="#" className="hover:underline opacity-80 hover:opacity-100">Privacy Policy</a>
              <a href="#" className="hover:underline opacity-80 hover:opacity-100">Cookie Policy</a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-base-300 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-80">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
