import React from 'react';
import { Coffee, Anchor, Library } from 'lucide-react';
import { Amenity } from '../types';

const amenities: Amenity[] = [
  {
    id: 1,
    title: "The Officer's Mess Café",
    description: "An artisanal coffee house and bakery situated in the restored main hall. A place for morning rituals and weekend gatherings.",
    icon: <Coffee className="w-8 h-8 text-dusty-blue" strokeWidth={1.5} />
  },
  {
    id: 2,
    title: "Heritage Room",
    description: "A dedicated gallery space curated with artifacts found during the restoration, honoring the naval history of Port Edgar.",
    icon: <Library className="w-8 h-8 text-dusty-blue" strokeWidth={1.5} />
  },
  {
    id: 3,
    title: "The Workshop",
    description: "A modern 'Men's Shed' and creative workshop space for residents to craft, repair, and collaborate on personal projects.",
    icon: <Anchor className="w-8 h-8 text-dusty-blue" strokeWidth={1.5} />
  }
];

export const Community: React.FC = () => {
  return (
    <section id="lifestyle" className="py-24 bg-off-white border-t border-gray-200">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-deep-charcoal mb-4">A Community Anchored in History</h2>
          <p className="font-sans text-gray-500 leading-relaxed">
            Life at The Barracks extends beyond your front door. We've dedicated spaces to foster connection, creativity, and appreciation for the past.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {amenities.map((item) => (
            <div key={item.id} className="flex flex-col items-center text-center p-6 border border-transparent hover:border-gray-200 hover:bg-white transition-all duration-300 rounded-sm">
              <div className="mb-6 p-4 bg-white rounded-full shadow-sm border border-gray-100">
                {item.icon}
              </div>
              <h3 className="font-serif text-xl text-deep-charcoal mb-4">{item.title}</h3>
              <div className="w-12 h-px bg-dusty-blue mb-4"></div>
              <p className="font-sans text-sm text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};