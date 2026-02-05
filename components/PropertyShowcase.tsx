import React from 'react';
import { Property } from '../types';
import { ArrowRight } from 'lucide-react';

const properties: Property[] = [
  {
    id: 1,
    plotNumber: "01",
    name: "The Quartermaster",
    bedrooms: 2,
    sqFt: 980,
    price: "£325,000",
    status: "Available",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop"
  },
  {
    id: 2,
    plotNumber: "04",
    name: "The Signal",
    bedrooms: 1,
    sqFt: 750,
    price: "£285,000",
    status: "Reserved",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2653&auto=format&fit=crop"
  },
  {
    id: 3,
    plotNumber: "12",
    name: "The Bridge",
    bedrooms: 3,
    sqFt: 1450,
    price: "£550,000",
    status: "Available",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2574&auto=format&fit=crop"
  },
  {
    id: 4,
    plotNumber: "15",
    name: "The Vanguard",
    bedrooms: 2,
    sqFt: 1100,
    price: "£395,000",
    status: "Available",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2568&auto=format&fit=crop"
  },
  {
    id: 5,
    plotNumber: "22",
    name: "The Lookout",
    bedrooms: 2,
    sqFt: 1050,
    price: "£375,000",
    status: "Sold",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2574&auto=format&fit=crop"
  },
  {
    id: 6,
    plotNumber: "28",
    name: "The Admiral",
    bedrooms: 3,
    sqFt: 1600,
    price: "£625,000",
    status: "Available",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop"
  }
];

export const PropertyShowcase: React.FC = () => {
  return (
    <section id="the-homes" className="py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-gray-100 pb-8">
          <div>
            <span className="text-dusty-blue font-sans text-xs font-bold tracking-widest uppercase mb-2 block">The Collection</span>
            <h2 className="font-serif text-4xl text-deep-charcoal">Curated Living Spaces</h2>
          </div>
          <div className="mt-6 md:mt-0">
             <a href="#" className="font-sans text-sm text-deep-charcoal hover:text-dusty-blue flex items-center group">
               View Full Availability <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
             </a>
          </div>
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {properties.map((prop) => (
            <div key={prop.id} className="group cursor-pointer">
              <div className="relative overflow-hidden aspect-[4/3] mb-6 bg-gray-100">
                <img 
                  src={prop.image} 
                  alt={prop.name} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Plot Number Overlay */}
                <div className="absolute top-0 left-0 bg-white p-4">
                  <span className="font-serif text-3xl text-dusty-blue">{prop.plotNumber}</span>
                </div>
                {/* Status Badge */}
                {prop.status !== 'Available' && (
                  <div className="absolute top-4 right-4 bg-deep-charcoal text-white text-[10px] uppercase font-bold px-3 py-1 tracking-widest">
                    {prop.status}
                  </div>
                )}
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-dusty-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                   <span className="bg-white text-deep-charcoal px-6 py-2 text-xs uppercase tracking-widest font-bold">View Plot</span>
                </div>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-serif text-xl text-deep-charcoal mb-1">{prop.name}</h3>
                  <p className="font-sans text-sm text-gray-500">{prop.bedrooms} Bed | {prop.sqFt} sq ft</p>
                </div>
                <div className="text-right">
                  <p className="font-sans font-medium text-deep-charcoal">{prop.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};