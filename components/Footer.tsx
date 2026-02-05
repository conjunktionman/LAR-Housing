import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-deep-charcoal text-white pt-24 pb-12">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20 border-b border-gray-700 pb-12">
          
          <div className="col-span-1 md:col-span-1">
            <span className="font-serif text-2xl font-bold tracking-tight block mb-2">THE BARRACKS</span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-dusty-blue font-sans font-semibold">
              Port Edgar
            </span>
          </div>

          <div className="col-span-1">
            <h4 className="font-sans text-xs uppercase tracking-widest text-gray-400 mb-6">Address</h4>
            <p className="font-sans text-sm text-gray-300 leading-relaxed">
              Shore Road<br/>
              South Queensferry<br/>
              EH30 9SQ<br/>
              Scotland
            </p>
          </div>

          <div className="col-span-1">
            <h4 className="font-sans text-xs uppercase tracking-widest text-gray-400 mb-6">Enquiries</h4>
            <p className="font-sans text-sm text-gray-300 leading-relaxed">
              +44 (0) 131 555 1234<br/>
              sales@thebarracks.co.uk
            </p>
          </div>

          <div className="col-span-1">
            <h4 className="font-sans text-xs uppercase tracking-widest text-gray-400 mb-6">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="font-sans text-sm text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="font-sans text-sm text-gray-300 hover:text-white transition-colors">Terms of Use</a></li>
              <li><a href="#" className="font-sans text-sm text-gray-300 hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-sans">
          <p>&copy; {new Date().getFullYear()} The Barracks Port Edgar. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed with Swiss Precision.</p>
        </div>

      </div>
    </footer>
  );
};