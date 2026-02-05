import React from 'react';

export const Narrative: React.FC = () => {
  return (
    <section id="the-story" className="py-24 md:py-32 bg-off-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* 12-Column Grid Wrapper */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-x-12 items-start">
          
          {/* Left: Historical Image (Spans 5 cols) */}
          <div className="md:col-span-5 relative group">
            <div className="relative overflow-hidden aspect-[3/4]">
              <img 
                src="https://images.unsplash.com/photo-1590422749845-866414749f76?q=80&w=1974&auto=format&fit=crop" 
                alt="Historical Barracks" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter grayscale sepia-[0.1]"
              />
              <div className="absolute inset-0 border border-black/5 pointer-events-none"></div>
            </div>
            <p className="mt-4 font-sans text-xs text-gray-400 tracking-widest uppercase text-right">
              Archive Photo: Circa 1918
            </p>
          </div>

          {/* Spacer (Spans 1 col) */}
          <div className="hidden md:block md:col-span-1"></div>

          {/* Right: Editorial Copy (Spans 6 cols) */}
          <div className="md:col-span-6 flex flex-col justify-center h-full">
            <h2 className="font-serif text-3xl md:text-5xl text-deep-charcoal mb-8 leading-tight">
              From Naval Precision <br />
              <span className="text-dusty-blue italic">to Modern Serenity.</span>
            </h2>
            
            <div className="font-sans text-deep-charcoal/80 text-lg leading-relaxed space-y-6 mb-12 max-w-prose">
              <p>
                Standing stoically against the backdrop of the Forth Bridges, the B-listed barracks have weathered a century of history. Once a hub of wartime naval strategy, these walls are being meticulously restored to house 49 exclusive residences.
              </p>
              <p>
                We have preserved the original brickwork, the soaring ceiling heights, and the disciplined architectural rhythm, infusing them with contemporary minimalism. This is not just a renovation; it is a curation of heritage.
              </p>
            </div>

            {/* Technical Fact Sheet Box */}
            <div className="border border-dusty-blue p-8 bg-white relative">
              <span className="absolute -top-3 left-8 bg-white px-2 font-sans text-xs text-dusty-blue uppercase tracking-widest font-bold">
                Project Specs
              </span>
              <ul className="space-y-4 font-sans text-sm">
                <li className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-gray-500">Original Construction</span>
                  <span className="font-medium">1916</span>
                </li>
                <li className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-gray-500">Status</span>
                  <span className="font-medium">B-Listed Heritage Site</span>
                </li>
                <li className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-gray-500">Units</span>
                  <span className="font-medium">49 Bespoke Apartments</span>
                </li>
                <li className="flex justify-between pt-1">
                  <span className="text-gray-500">Completion</span>
                  <span className="font-medium">Q4 2024</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};